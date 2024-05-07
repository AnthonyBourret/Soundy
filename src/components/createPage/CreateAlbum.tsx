import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import CreateAlbumSongsSelection from './CreateAlbumSongsSelection';
import CreateAlbumSongsOrder from './CreateAlbumSongsOrder';
import { DefaultCover } from '../customElements';
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
        <label htmlFor="selected_songs" className="w-[85%] min-[1000px]:w-[75%]">
          <div className="label">
            <span className="label-text text-lg font-semibold">{t('CREATE_ALBUM_ORDER_INPUT')}</span>
          </div>
          <div className="divider my-0 mb-4" />
          <CreateAlbumSongsOrder
            selectedSongs={selectedSongs}
            setSelectedSongs={setSelectedSongs}
          />
          <p className="label-text font-semibold mt-4 text-center">
            {selectedSongs.length}
            {' '}
            {t('CREATE_ALBUM_TRACKS_NUMBER')}
            {' - '}
            {secondsToFormatedDuration(selectedSongs.reduce((acc, song) => acc + song.duration, 0))}
          </p>
        </label>
      );
    }
    return (
      <div className="w-[85%] min-[1000px]:w-[75%]">
        <div className="label">
          <span className="label-text text-lg font-semibold">{t('CREATE_ALBUM_ORDER_INPUT')}</span>
        </div>
        <div className="divider my-0 mb-4" />
        <p className="mt-4 font-semibold text-center">{t('CREATE_ALBUM_NO_TRACKS')}</p>
      </div>
    );
  }, [selectedSongs, t]);

  return (
    <form
      className="flex flex-col items-center gap-14 w-[90%] min-[600px]:w-[80%] border border-stone-700 rounded-box bg-neutral mb-24 py-10 min-[1000px]:w-[70%]"
    >
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-center">{t('CREATE_ALBUM_HEADER')}</h1>
        <p className="text-xs text-center">{t('CREATE_PAGE_REQUIRED_FIELDS')}</p>
      </div>
      <div className="flex flex-col gap-14 items-center min-[1000px]:flex-row min-[1000px]:w-[75%] min-[1000px]:justify-between">
        <div className="flex flex-col gap-14 w-[85%] min-[1000px]:w-[45%]">
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
            <DefaultCover />
            <input
              type="url"
              placeholder={t('CREATE_SONG_COVER_PLACEHOLDER')}
              className="file-input file-input-bordered input-sm mt-4 w-full"
            />
          </label>
        </div>
        {/* Songs selection input */}
        <label htmlFor="songs" className="w-[85%] min-[1000px]:w-[45%]">
          <div className="label">
            <span className="label-text text-lg font-semibold">{t('CREATE_ALBUM_SONGS_INPUT')}</span>
          </div>
          <div className="divider my-0 mb-4" />
          <CreateAlbumSongsSelection songs={songs} setSelectedSongs={setSelectedSongs} />
        </label>
      </div>
      {/* Songs order selection */}
      {trackList}
      {/* Submit button */}
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
