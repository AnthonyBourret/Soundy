import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  setAlbumPicture,
  setAlbumSongIds,
  setAlbumSongPlaying,
  setAlbumTitle,
  setArtistName,
  setIsPlaying,
  setSongDuration,
  setSongPicture,
  setSongTitle,
  setTime,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import { secondsToFormatedDuration, capitalizeFirstLetter, getAlbumDuration } from '../../utils';

interface Props {
  title: string;
  artist: string;
  cover: string;
  year: number;
  songs: SongProps[];
}

interface SongProps {
  duration: string;
  id: string;
  title: string;
}

function AlbumCard({
  title, cover, artist, year, songs,
} : Props): JSX.Element {
  const { t } = useTranslation('common');
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((state) => state.audioPlayer.isPlaying);

  const songDisplay = useMemo(() => songs && songs.map((song, i) => (
    <tr
      className="hover cursor-pointer"
      key={song.id}
      onClick={() => {
        dispatch(setArtistName(artist || null));
        dispatch(setIsPlaying(!isPlaying));
        dispatch(setSongTitle(song.title));
        dispatch(setTime(0));
        dispatch(setAlbumPicture(null));
        dispatch(setAlbumTitle(title));
        dispatch(setSongPicture(cover));
        dispatch(setAlbumSongIds(songs.map((s) => Number(s.id))));
        dispatch(setAlbumSongPlaying(Number(song.id)));
        dispatch(setSongDuration(secondsToFormatedDuration(Number(song.duration))));
      }}
    >
      <th>{i + 1}</th>
      <td>{song.title}</td>
      <td className="text-center">{secondsToFormatedDuration(Number(song.duration))}</td>
    </tr>
  )), [artist, cover, title, dispatch, isPlaying, songs]);

  return (
    <div className="card w-full p-2 sm:w-[70%] lg:pl-[240px] lg:p-4 gap-2 bg-base-200 shadow-xl border border-1 border-stone-700">
      <figure className="aspect-[1/1] max-w-[90px] max-h-[90px] lg:max-w-[200px] lg:max-h-[200px] absolute left-4 top-4">
        <img
          src={cover}
          alt={`cover of ${title}`}
          className="object-cover rounded-md w-full h-full group-hover:blur-[1px] group-hover:scale-105 transition-all duration-200 ease-out"
        />
      </figure>
      {/* The Checkbox is not displayed on the SongCard component if the user is not logged in */}
      {/* For the moment, albums cannot be liked */}
      {/* {isLogin && (
        <div className="absolute top-20 left-20 lg:top-48 lg:left-48">
        <FavCheckBox />
        </div>
      )} */}
      <div>
        <div className="pl-[120px] pt-2 lg:px-4 lg:py-2 lg:text-xl">
          <p className="font-bold">{capitalizeFirstLetter(title)}</p>
          <p className="font-semibold">{artist || '?'}</p>
          <div className="w-full flex flex-col min-[425px]:flex-row min-[425px]:items-center min-[425px]:justify-between min-[425px]:pr-4 lg:pr-0">
            <p className="font-semibold">{year}</p>
            <p className="text-xs font-semibold pt-0.5 min-[425px]:pt-0">
              {songs.length}
              {' '}
              {t('CARD_ALBUM_TRACK_NUMBER')}
              {' '}
              -
              {' '}
              {getAlbumDuration(songs)}
            </p>
          </div>
        </div>
        {/* Songs list */}
        <div className="w-full overflow-x-auto pt-8 lg:pt-2">
          <table className="table table-zebra text-xs lg:text-base">
            <thead>
              <tr>
                <th>#</th>
                <th>{t('CARD_SONG_TITLE')}</th>
                <th className="text-center">{t('CARD_SONG_DURATION')}</th>
              </tr>
            </thead>
            <tbody>
              {songDisplay}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;
