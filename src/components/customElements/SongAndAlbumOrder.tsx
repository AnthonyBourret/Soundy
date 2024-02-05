/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useTranslation } from 'react-i18next';
import reloadWindows from '../../utils/ReloadWindows';

function SongAndAlbumOrder() {
  const { t } = useTranslation('common');
  return (
    <div className="flex flex-col items-center px-12 gap-2 py-4 min-[540px]:flex-row">
      <p className="px-2 font-semibold">{t('ORDER_SELECT_TEXT')}</p>
      <div className="join">
        <select className="select select-sm select-bordered bg-base-200 w-fit max-w-xs join-item">
          <option disabled selected>{t('ORDER_SELECT_PLACEHOLDER')}</option>
          <option>{t('ORDER_SELECT_NAME_AZ')}</option>
          <option>{t('ORDER_SELECT_NAME_ZA')}</option>
          <option>{t('ORDER_SELECT_DURATION_ASC')}</option>
          <option>{t('ORDER_SELECT_DURATION_DESC')}</option>
          <option>{t('ORDER_SELECT_LATEST')}</option>
          <option>{t('ORDER_SELECT_OLDEST')}</option>
        </select>
        <button
          type="button"
          onClick={reloadWindows}
          className="btn btn-square btn-sm border border-stone-700 join-item"
        >
          ↺
        </button>

      </div>
    </div>
  );
}

export default SongAndAlbumOrder;
