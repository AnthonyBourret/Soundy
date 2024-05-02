import React from 'react';
import { useTranslation } from 'react-i18next';

function CreateSong() {
  const { t } = useTranslation('translation');
  return (
    <div className="flex flex-col gap-8 w-full mb-20 px-8 min-[520px]:px-14 min-[620px]:w-3/4 min-[1000px]:w-1/2 min-[1500px]:w-1/3">
      {/* Title & Upload Files Inputs */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <label htmlFor="title" className="form-control">
            <div className="label pb-4">
              <span className="label-text text-lg font-semibold">{t('CREATE_SONG_TITLE_INPUT')}</span>
            </div>
            <input type="text" id="title" className="input border border-stone-700 bg-neutral" />
          </label>
          <label htmlFor="file" className="form-control">
            <div className="label pb-4">
              <span className="label-text text-lg font-semibold">{t('CREATE_SONG_FILE_INPUT')}</span>
            </div>
            <input type="file" id="file" placeholder="" className="file-input border border-stone-700 w-full bg-neutral" disabled />
            <span className="label-text-alt m-1">{t('CREATE_SONG_FILE_LABEL')}</span>
          </label>
        </div>

        <label htmlFor="artist" className="form-control">
          <div className="label self-start mb-8">
            <span className="label-text text-lg font-semibold">{t('CREATE_SONG_COVER_INPUT')}</span>
          </div>
          <div className="flex flex-col items-center gap-1 mb-4">
            <figure className="w-1/2 rounded-box overflow-hidden min-[520px]:w-1/3">
              <img src="/cover-placeholder.png" alt="cover" />
            </figure>
            <span className="label-text-alt">{t('CREATE_SONG_COVER_LABEL_1')}</span>
          </div>
          <input type="file" className="file-input border border-stone-700 w-full bg-neutral" disabled />
          <span className="label-text-alt m-1">{t('CREATE_SONG_COVER_LABEL_2')}</span>
        </label>
      </div>

      {/* Lyrics Input */}
      <label htmlFor="lyrics" className="form-control">
        <div className="label pb-4">
          <span className="label-text text-lg font-semibold">{t('CREATE_SONG_LYRICS_INPUT')}</span>
        </div>
        <textarea className="textarea border border-stone-700 bg-neutral w-full h-[150px]" placeholder={t('CREATE_SONG_LYRICS_PLACEHOLDER')} />
      </label>

      <button
        type="submit"
        className="btn btn-lg btn-neutral border border-stone-700 py-4 w-fit self-center"
      >
        {t('CREATE_SONG_BTN')}
      </button>
    </div>
  );
}

export default CreateSong;
