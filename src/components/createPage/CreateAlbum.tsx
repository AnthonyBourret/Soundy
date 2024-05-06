import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import CreateAlbumSongsSelection from './CreateAlbumSongsSelection';
import CreateAlbumSongsOrder from './CreateAlbumSongsOrder';
import { secondsToFormatedDuration } from '../../utils';
import { UploadIcon } from '../../svg';

function CreateAlbum() {
  const { t } = useTranslation('translation');
  // Array of songs, standby API
  const songs = [
    { title: 'Song title 1', duration: 135 },
    { title: 'Song title 2', duration: 445 },
    { title: 'Song title 3', duration: 45 },
    { title: 'Song title 4', duration: 89 },
    { title: 'Song title 5', duration: 78 },
    { title: 'Song title 6', duration: 94 },
    { title: 'Song title 7', duration: 256 },
    { title: 'Song title 8', duration: 485 },
    { title: 'Song title 9', duration: 457 },
    { title: 'Song title 10', duration: 94 },
  ];
  const [selectedSongs, setSelectedSongs] = useState<{ title: string; duration: number }[]>([]);

  const trackList = useMemo(() => {
    if (selectedSongs.length > 0) {
      return (
        <CreateAlbumSongsOrder selectedSongs={selectedSongs} setSelectedSongs={setSelectedSongs} />
      );
    }
    return (
      <p className="mt-4 font-semibold text-center">{t('CREATE_ALBUM_NO_TRACKS')}</p>
    );
  }, [selectedSongs, t]);

  const albumSumary = useMemo(() => {
    if (selectedSongs.length > 0) {
      return (
        <p className="label-text font-semibold mt-4 text-center">
          {selectedSongs.length}
          {' '}
          {t('CREATE_ALBUM_TRACKS_NUMBER')}
          {' - '}
          {secondsToFormatedDuration(selectedSongs.reduce((acc, song) => acc + song.duration, 0))}
        </p>
      );
    }
    return null;
  }, [selectedSongs, t]);

  return (
    <form
      className="flex flex-col gap-14 border border-stone-700 rounded-box bg-neutral mb-24 w-[90%] p-8 py-10 min-[450px]:px-14 min-[450px]:w-[75%] min-[850px]:px-20 min-[850px]:w-[55%] min-[1450px]:px-28 min-[1450px]:w-[40%]"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-center">{t('CREATE_ALBUM_HEADER')}</h1>
        <p className="text-xs text-center">{t('CREATE_PAGE_REQUIRED_FIELDS')}</p>
      </div>
      {/* Title input */}
      <label className="form-control" htmlFor="title">
        <div className="label">
          <span className="label-text text-lg font-semibold">{t('CREATE_ALBUM_TITLE_INPUT')}</span>
        </div>
        <div className="divider my-0 mb-4" />
        <input
          type="text"
          placeholder={t('CREATE_ALBUM_TITLE_PLACEHOLDER')}
          className="input input-bordered input-sm w-full"
        />
      </label>
      {/* Cover input */}
      <label className="form-control" htmlFor="cover">
        <div className="label">
          <span className="label-text text-lg font-semibold">{t('CREATE_SONG_COVER_INPUT')}</span>
        </div>
        <div className="divider my-0 mb-4" />
        <figure className="w-1/2 rounded-box overflow-hidden self-center min-[1300px]:w-1/3">
          <img src="/cover-placeholder.png" alt="default_cover" />
        </figure>
        <input
          type="url"
          placeholder={t('CREATE_SONG_COVER_PLACEHOLDER')}
          className="file-input file-input-bordered input-sm mt-4 w-full"
        />
      </label>
      {/* Songs selection input */}
      <label htmlFor="songs">
        <div className="label">
          <span className="label-text text-lg font-semibold">{t('CREATE_ALBUM_SONGS_INPUT')}</span>
        </div>
        <div className="divider my-0 mb-4" />
        <CreateAlbumSongsSelection songs={songs} setSelectedSongs={setSelectedSongs} />
      </label>
      {/* Songs order */}
      <label htmlFor="selected_songs">
        <div className="label">
          <span className="label-text text-lg font-semibold">{t('CREATE_ALBUM_ORDER_INPUT')}</span>
        </div>
        <div className="divider my-0 mb-4" />
        {trackList}
        {albumSumary}
      </label>
      <button
        type="submit"
        className="btn btn-primary  self-center py-3 text-lg"
      >
        {t('CREATE_SONG_BTN')}
        <UploadIcon />
      </button>
    </form>
  );
}

export default CreateAlbum;
