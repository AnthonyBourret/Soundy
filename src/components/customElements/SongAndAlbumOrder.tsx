/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  setSortBy: React.Dispatch<React.SetStateAction<string | null>>;
  chosenDisplay: string;
}

function SongAndAlbumOrder({ setSortBy, chosenDisplay }: Props): JSX.Element {
  const { t } = useTranslation('common');
  return (
    <div className="flex flex-col items-center px-12 gap-2 py-4 min-[540px]:flex-row">
      <p className="px-2 font-semibold">{t('ORDER_SELECT_TEXT')}</p>
      <div className="join">
        <select
          className="select select-sm select-bordered bg-base-200 w-fit max-w-xs join-item"
          defaultValue=""
          onChange={(e) => { setSortBy(e.target.value); }}
        >
          <option value="" disabled>{t('ORDER_SELECT_PLACEHOLDER')}</option>
          <option value="ascendingName">{t('ORDER_SELECT_NAME_AZ')}</option>
          <option value="descendingName">{t('ORDER_SELECT_NAME_ZA')}</option>
          {
            chosenDisplay === 'songs' && (
              <>
                <option value="durationAsc">{t('ORDER_SELECT_DURATION_ASC')}</option>
                <option value="durationDesc">{t('ORDER_SELECT_DURATION_DESC')}</option>
              </>
            )
          }
          <option value="latest">{t('ORDER_SELECT_LATEST')}</option>
          <option value="oldest">{t('ORDER_SELECT_OLDEST')}</option>
        </select>
        <div className="tooltip" data-tip={t('ORDER_BAR_RELOAD')}>
          <button
            type="button"
            onClick={() => setSortBy(null)}
            className="btn btn-square btn-sm border border-stone-700 join-item"
          >
            ↺
          </button>
        </div>
      </div>
    </div>
  );
}

export default SongAndAlbumOrder;
