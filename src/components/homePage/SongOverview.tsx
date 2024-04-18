import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import React, { useMemo } from 'react';

import { PlayIcon } from '../../svg';
import SongOverviewQuery from '../../requests/queries/SongOverviewQuery';
import type { SongOverviewQuery as SongOverviewQueryType } from '../../types/__generated_schemas__/graphql';
import {
  setAlbumPicture,
  setArtistName,
  setIsPlaying,
  setSongDuration,
  setSongPicture,
  setSongTitle,
  setTime,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import { secondsToFormatedDuration } from '../../utils';

function SongOverview(): JSX.Element {
  const { t } = useTranslation(['common', 'translation']);
  const { data, loading, error } = useQuery<SongOverviewQueryType>(SongOverviewQuery);
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((state) => state.audioPlayer.isPlaying);

  const songs = useMemo(() => {
    if (loading) {
      return (
        <div className="flex items-center justify-center w-full">
          <span className="loading loading-spinner loading-lg" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex items-center justify-center w-full">
          <p>{error.message}</p>
        </div>
      );
    }

    if (data == null) {
      return null;
    }

    if (data.songs == null) {
      return null;
    }

    return data.songs.map((song) => (
      <div className="card w-[17%] min-w-[115px] bg-base-200 shadow-xl border border-1 border-stone-700" key={song?.id}>
        <div className="card-body px-2 pt-2 pb-3 gap-1 group relative">
          <div className="relative mb-2 group">
            <figure className="aspect-[3/4] overflow-hidden rounded-md">
              <img
                src={song?.cover || ''}
                alt={song?.title}
                className="object-cover w-full h-full group-hover:blur-[1px] group-hover:scale-105 transition-all duration-200 ease-out"
              />
            </figure>
            <button
              onClick={() => {
                dispatch(setArtistName(song?.artist?.name || null));
                dispatch(setIsPlaying(!isPlaying));
                dispatch(setSongPicture(song?.cover || ''));
                dispatch(setSongTitle(song?.title || ''));
                dispatch(setTime(0));
                dispatch(setAlbumPicture(null));
                dispatch(setSongDuration(secondsToFormatedDuration(song?.duration || 0)));
              }}
              aria-label="play"
              type="button"
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-50 hover:cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center pl-2 bg-base-200 bg-opacity-30 border border-1 border-primary">
                <PlayIcon />
              </div>
            </button>
          </div>
          <h3 className="self-center text-center">
            {song?.title}
          </h3>
          <p className="self-center text-center">
            {song?.artist?.name}
          </p>
        </div>
      </div>
    ));
  }, [data, dispatch, error, isPlaying, loading]);

  return (
    <div className="flex flex-col w-[60%] !items-start mb-[200px]">
      <h2 className="pl-2 text-xl font-semibold">{t('OVERVIEW_TITLE', { ns: 'translation' })}</h2>
      <div className="divider" />

      <div className="flex flex-wrap gap-5 justify-center xl:justify-between w-full my-7">
        {songs}
      </div>

      <div className="flex self-center mt-10 flex-col gap-5 items-center">
        <p className="text-center w-[60%] text-lg font-semibold">{t('SERVICES_TXT_1', { ns: 'translation' })}</p>
        <Link to="/listen" className="w-[40%] flex">
          <button
            type="button"
            className="w-full btn btn-primary"
          >
            {t('LISTEN', { ns: 'common' })}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SongOverview;
