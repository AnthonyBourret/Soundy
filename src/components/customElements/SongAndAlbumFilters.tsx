/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useTranslation } from 'react-i18next';
import years from '../../utils/Years';
import durations from '../../utils/Durations';

function SongAndAlbumFilters() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2 py-4 smin-[540px]:px-12 min-[540px]:flex-row min-[540px]:items-center">
      <p className="px-2 font-semibold">{t('FILTER_BAR_TEXT', { ns: 'common' })}</p>
      <div className="join">
        <select className="select select-bordered select-sm bg-base-200 join-item">
          <option disabled selected>{t('FILTER_BAR_YEAR', { ns: 'common' })}</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <select className="select select-bordered select-sm bg-base-200 join-item">
          <option disabled selected>{t('FILTER_BAR_DURATION', { ns: 'common' })}</option>
          {durations.map((duration) => (
            <option key={duration} value={duration}>{duration}</option>
          ))}
        </select>
        <select className="select select-bordered select-sm bg-base-200 join-item">
          <option disabled selected>{t('FILTER_BAR_ORDER', { ns: 'common' })}</option>
          <option>{t('FILTER_BAR_ORDER_ASC', { ns: 'common' })}</option>
          <option>{t('FILTER_BAR_ORDER_DESC', { ns: 'common' })}</option>
        </select>
        <div className="min-[540px]:tooltip" data-tip={t('FILTER_BAR_RELOAD', { ns: 'common' })}>
          <button type="button" className="btn btn-square btn-sm border border-stone-700 join-item">
            ↺
          </button>
        </div>
      </div>
    </div>
  );
}

export default SongAndAlbumFilters;
