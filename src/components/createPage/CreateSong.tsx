// File inputs are disabled because they are not supported by the current version of the library
// Some random data (same .mp3 link, and a random cover from picsum) will be sent to the server

import React from 'react';
import { useTranslation } from 'react-i18next';
import { UploadIcon } from '../../svg';

function CreateSong() {
  const { t } = useTranslation('translation');
  return (
    <div className="flex flex-col gap-14 border border-stone-700 rounded-box bg-neutral mb-24 w-[90%] p-8 py-10 min-[450px]:px-14 min-[450px]:w-[75%] min-[850px]:px-20 min-[850px]:w-[50%] min-[1450px]:px-28 min-[1450px]:w-[35%]">
      <h1 className="text-2xl font-bold text-center">{t('CREATE_SONG_HEADER')}</h1>
      {/* Title input */}
      <label className="form-control" htmlFor="title">
        <div className="label">
          <span className="label-text text-lg  font-semibold">{t('CREATE_SONG_TITLE_INPUT')}</span>
        </div>
        <div className="divider my-0 mb-4" />
        <input
          type="text"
          placeholder={t('CREATE_SONG_TITLE_PLACEHOLDER')}
          className="input input-bordered input-sm w-full"
        />
      </label>
      {/* File input */}
      <label className="form-control" htmlFor="file">
        <div className="label">
          <span className="label-text text-lg font-semibold">{t('CREATE_SONG_FILE_INPUT')}</span>
        </div>
        <div className="divider my-0 mb-4" />
        <input
          type="file"
          accept=".mp3, .wav"
          className="file-input file-input-bordered input-sm w-full"
          disabled
        />
        <div className="label self-center">
          <span className="label-text-alt">{t('CREATE_SONG_FILE_LABEL')}</span>
        </div>
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
        <div className="flex flex-col">
          <input
            type="file"
            accept=".jpeg, .jpg, .png"
            className="file-input file-input-bordered input-sm mt-4 w-full"
            disabled
          />
          <div className="label self-center">
            <span className="label-text-alt">{t('CREATE_SONG_COVER_LABEL')}</span>
          </div>
        </div>
      </label>
      {/* Lyrics input */}
      <label htmlFor="lyrics">
        <div className="label">
          <span className="label-text text-lg font-semibold">{t('CREATE_SONG_LYRICS_INPUT')}</span>
        </div>
        <div className="divider my-0 mb-4" />
        <textarea className="textarea textarea-bordered w-full" placeholder={t('CREATE_SONG_LYRICS_PLACEHOLDER')} />
      </label>
      {/* Submit button */}
      <button
        type="button"
        className="btn btn-primary  self-center py-3 text-lg"
      >
        {t('CREATE_SONG_BTN')}
        <UploadIcon />
      </button>
    </div>
  );
}

export default CreateSong;
