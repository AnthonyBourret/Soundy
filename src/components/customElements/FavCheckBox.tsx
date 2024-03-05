/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AddIconChecked, AddIconUnchecked } from '../../svg';

function FavCheckBox(): JSX.Element {
  const { t } = useTranslation('common');
  return (
    <div className="min-[540px]:tooltip" data-tip={t('ADD_TO_FAV_TOOLTIP')}>
      <label className="swap">
        <input type="checkbox" />
        <div className="swap-on">
          <AddIconChecked width="32px" height="32px" color={null} />
        </div>
        <div className="swap-off">
          <AddIconUnchecked width="32px" height="32px" color={null} />
        </div>
      </label>
    </div>
  );
}

export default FavCheckBox;
