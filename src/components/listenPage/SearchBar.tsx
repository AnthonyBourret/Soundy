import React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../../svg';

interface Props {
  isAlbum: boolean;
  setIsAlbum: (isAlbum: boolean) => void;
}

function SearchBar({ isAlbum, setIsAlbum }: Props) {
  const { t } = useTranslation('common');
  return (
    <div className="min-[540px]:w-1/2 pt-32 text-center">
      <div className="flex flex-col items-center gap-4 pb-8">
        <div className="w-16 h-16 min-[540px]:w-20 min-[540px]:h-20 rounded-full flex items-center justify-center">
          <Logo />
        </div>
        <h1 className="text-2xl min-[540px]:text-4xl font-bold">{t('MENU_APP_NAME')}</h1>
        <p className="text-md font-semibold min-[540px]:text-lg">{t('SEARCH_BAR_TEXT')}</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="join w-full">
          <input className="w-full input input-md input-bordered join-item bg-base-200" placeholder={t('SEARCH_BAR_PLACEHOLDER')} />
          <button type="button" className="btn btn-md join-item border border-stone-700">{t('SEARCH_BAR_BTN')}</button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => setIsAlbum(false)}
            className={`btn btn-sm mx-4 py-3 min-[540px]:btn-md ${!isAlbum ? 'border-primary my-5 border-2' : 'border-stone-700 my-6 border'}`}
          >
            {t('SEARCH_BAR_FILTER_SONG')}
          </button>
          <button
            type="button"
            onClick={() => setIsAlbum(true)}
            className={`btn btn-sm mx-4 py-3 min-[540px]:btn-md ${isAlbum ? 'border-primary my-5 border-2' : 'border-stone-700 my-6 border'}`}
          >
            {t('SEARCH_BAR_FILTER_ALBUM')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
