import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { Logo } from '../../svg';

interface Props {
  isAlbum: boolean;
  setIsAlbum: (isAlbum: boolean) => void;
}

function SearchBar({ isAlbum, setIsAlbum }: Props) {
  const { t } = useTranslation();
  return (
    <div className="w-full min-[540px]:w-1/2 px-4 pt-32 text-center">
      <div className="flex flex-col items-center gap-4 pb-8">
        <div className="w-16 h-16 min-[540px]:w-20 min-[540px]:h-20 rounded-full flex items-center justify-center">
          <Logo />
        </div>
        <h1 className="text-2xl min-[540px]:text-4xl font-bold">{t('MENU_APP_NAME', { ns: 'common' })}</h1>
        <p className="text-md min-[540px]:text-lg">{t('SEARCH_BAR_TEXT', { ns: 'common' })}</p>
      </div>
      <div className="flex flex-col">
        <div className="join">
          <input className="input w-full input-bordered join-item bg-base-200" placeholder={t('SEARCH_BAR_PLACEHOLDER', { ns: 'common' })} />
          <div className="min-[540px]:tooltip" data-tip={t('SEARCH_BAR_TOOLTIP', { ns: 'common' })}>
            <select
              onChange={() => setIsAlbum(!isAlbum)}
              className="select select-bordered join-item bg-base-200"
            >
              <option selected>{t('SEARCH_BAR_FILTER_SONG', { ns: 'common' })}</option>
              <option value="true">{t('SEARCH_BAR_FILTER_ALBUM', { ns: 'common' })}</option>
            </select>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-lg m-4 py-3 border border-stone-700">{t('SEARCH_BAR_BTN', { ns: 'common' })}</button>
    </div>
  );
}

export default SearchBar;
