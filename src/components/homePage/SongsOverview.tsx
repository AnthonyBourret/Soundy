import React from 'react';
import { useTranslation } from 'react-i18next';
import fakeSongs from './fakeSongs';
import PlayIcon from '../../svg/playIcon';

function OverviewSongs() {
  const { t } = useTranslation(['common', 'translation']);

  return (
    <div className="flex flex-col w-[60%] !items-start mb-[200px]">
      <h2 className="pl-2">{t('OVERVIEW_TITLE', { ns: 'translation' })}</h2>
      <div className="divider" />

      <div className="flex gap-y-5 !justify-between w-full my-7">
        {fakeSongs.map((song) => (
          <div className="card w-[17%] bg-base-200 shadow-xl border border-1 border-stone-700">
            <div className="card-body px-2 pt-2 pb-3 gap-1">
              <div className="relative mb-2">
                <figure className="aspect-[3/4]">
                  <img
                    src={song.picture}
                    alt={song.title}
                    className="object-cover w-full h-full rounded-md"
                  />
                </figure>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 duration-50">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center">
                    <PlayIcon />
                  </div>
                </div>
              </div>
              <h3 className="self-center">
                {song.title}
              </h3>
              <p className="self-center">
                {song.artist}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex self-center mt-10 flex-col gap-5 items-center">
        <p className="text-center w-[60%]">{t('SERVICES_TXT_1', { ns: 'translation' })}</p>
        <a href="/listen" className="w-[40%] flex">
          <button type="button" className="w-full btn btn-primary">
            {t('listen', { ns: 'common' })}
          </button>
        </a>
      </div>
    </div>
  );
}

export default OverviewSongs;
