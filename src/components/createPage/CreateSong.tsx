import React from 'react';
import { useTranslation } from 'react-i18next';

function CreateSong() {
  const { t } = useTranslation('translation');
  return (
    <div className="flex flex-col gap-14 border border-stone-700 rounded-box bg-neutral mx-6 mb-20 p-8 min-[820px]:w-3/5 min-[820px]:px-24 min-[800px]:py-12 min-[1200px]:w-2/5">

      <label className="form-control" htmlFor="title">
        <div className="label my-2">
          <span className="label-text text-2xl  font-semibold">{t('CREATE_SONG_TITLE_INPUT')}</span>
        </div>
        <input type="text" placeholder="..." className="input input-bordered w-full" />
      </label>

      <label className="form-control" htmlFor="title">
        <div className="label my-2">
          <span className="label-text text-2xl font-semibold">{t('CREATE_SONG_FILE_INPUT')}</span>
        </div>
        <input
          type="file"
          accept=".mp3, .wav"
          className="file-input file-input-bordered w-full"
          // disabled
        />
        <div className="label self-center">
          <span className="label-text-alt">{t('CREATE_SONG_FILE_LABEL')}</span>
        </div>
      </label>

      <label className="form-control min-[800px]:gap-8" htmlFor="cover">
        <div className="label mb-4">
          <span className="label-text text-2xl font-semibold">{t('CREATE_SONG_COVER_INPUT')}</span>
        </div>

        <figure className="w-1/2 rounded-box overflow-hidden self-center min-[1300px]:w-1/3">
          <img src="/cover-placeholder.png" alt="default_cover" />
        </figure>
        <div className="flex flex-col">
          <input
            type="file"
            accept=".jpeg, .jpg, .png"
            className="file-input file-input-bordered mt-4 w-full"
          />
          <div className="label self-center">
            <span className="label-text-alt">{t('CREATE_SONG_COVER_LABEL')}</span>
          </div>
        </div>
      </label>

      <label htmlFor="lyrics">
        <div className="label my-2">
          <span className="label-text text-2xl font-semibold">{t('CREATE_SONG_LYRICS_INPUT')}</span>
        </div>
        <textarea className="textarea textarea-bordered w-full" placeholder={t('CREATE_SONG_LYRICS_PLACEHOLDER')} />
      </label>

      <button
        type="button"
        className="btn btn-primary w-fit self-center py-3 text-xl"
      >
        {t('CREATE_SONG_BTN')}
      </button>

    </div>
  );
}

export default CreateSong;
