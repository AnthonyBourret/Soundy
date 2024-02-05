import React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../../svg';
import FilterRadio from '../customElements/FilterRadio';

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

        {/* Search input => Filter on the request */}
        <div className="join w-full px-2">
          <input className="w-full input input-md input-bordered join-item bg-base-200" placeholder={t('SEARCH_BAR_PLACEHOLDER')} />
          <button type="button" className="btn btn-md join-item border border-stone-700">{t('SEARCH_BAR_BTN')}</button>
        </div>

        {/* Duration input => Filter on the request */}
        <div className="flex flex-col gap-4 pt-6 items-start min-[860px]:flex-row min-[860px]:items-center">
          <div className="font-semibold text-sm pl-3 min-[540px]:text-base">{t('SEARCH_BAR_FILTER_DURATION_TEXT')}</div>

          {/* Radio Input Components changing on isAlbum value change */}
          {!isAlbum ? (
            <div className="flex gap-4">
              <FilterRadio inputId="duration-song-min" labelText={t('SEARCH_BAR_SONG_DURATION_MIN')} />
              <FilterRadio inputId="duration-song-mid" labelText={t('SEARCH_BAR_SONG_DURATION_MID')} />
              <FilterRadio inputId="duration-song-max" labelText={t('SEARCH_BAR_SONG_DURATION_MAX')} />
            </div>
          ) : (
            <div className="flex gap-4 min-[860px]:gap:0">
              <FilterRadio inputId="duration-album-min" labelText={t('SEARCH_BAR_ALBUM_DURATION_MIN')} />
              <FilterRadio inputId="duration-album-mid" labelText={t('SEARCH_BAR_ALBUM_DURATION_MID')} />
              <FilterRadio inputId="duration-album-max" labelText={t('SEARCH_BAR_ALBUM_DURATION_MAX')} />
            </div>
          )}
        </div>

        {/* Song or Album filter => Filter on the front */}
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
