import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  setSortBy: React.Dispatch<React.SetStateAction<string | null>>;
  chosenDisplay: 'songs' | 'albums';
  sortBy: string | null;
}

function SongAndAlbumOrder({ setSortBy, chosenDisplay, sortBy }: Props): JSX.Element {
  const { t } = useTranslation('common');
  const [selectedValue, setSelectedValue] = useState<string>(sortBy || '');

  useEffect(() => {
    setSelectedValue(sortBy || '');
  }, [sortBy]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedValue(value);
    setSortBy(value);
  };

  const handleReset = () => {
    setSelectedValue('');
    setSortBy(null);
  };

  return (
    <div className="flex flex-col items-center px-12 gap-2 py-4 min-[540px]:flex-row">
      <label htmlFor="order-select" className="px-2 font-semibold">
        {t('ORDER_SELECT_TEXT')}
      </label>
      <div className="join">
        <select
          id="order-select"
          className="select select-sm select-bordered bg-base-200 w-fit max-w-xs join-item"
          value={selectedValue}
          onChange={handleSelectChange}
          aria-label={t('ORDER_SELECT_ARIA_LABEL')}
        >
          <option value="" disabled>{t('ORDER_SELECT_PLACEHOLDER')}</option>
          <option value="ascendingName">{t('ORDER_SELECT_NAME_AZ')}</option>
          <option value="descendingName">{t('ORDER_SELECT_NAME_ZA')}</option>
          {chosenDisplay === 'songs' && (
            <>
              <option value="durationAsc">{t('ORDER_SELECT_DURATION_ASC')}</option>
              <option value="durationDesc">{t('ORDER_SELECT_DURATION_DESC')}</option>
            </>
          )}
          <option value="latest">{t('ORDER_SELECT_LATEST')}</option>
          <option value="oldest">{t('ORDER_SELECT_OLDEST')}</option>
        </select>
        <div className="tooltip" data-tip={t('ORDER_BAR_RELOAD')}>
          <button
            type="button"
            onClick={handleReset}
            className="btn btn-square btn-sm border border-stone-700 join-item"
            aria-label={t('ORDER_BAR_RELOAD_ARIA_LABEL')}
          >
            ↺
          </button>
        </div>
      </div>
    </div>
  );
}

export default SongAndAlbumOrder;
