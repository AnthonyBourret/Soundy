/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';

import { AddIconChecked, AddIconUnchecked } from '../../svg';
import LikeSongMutation from '../../queries/LikeSongMutation';
import Spinner from './Spinner';
import getUserIdFromToken from '../../utils/getUserIdFromToken';

type Props = {
  songId: number;
};

function FavCheckBox(props: Props): JSX.Element {
  const token = localStorage.getItem('AUTH_TOKEN');
  const { songId } = props;
  const { t } = useTranslation('common');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [likeSong, { data, loading }] = useMutation(
    LikeSongMutation,
    {
      variables: { songId },
    },
  );

  const icon = useMemo(() => {
    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="swap-on">
        <button type="button" onClick={() => getUserIdFromToken(token ?? '')}>azpaozpaozap</button>
        <AddIconChecked width="32px" height="32px" />
      </div>
    );
  }, [loading, token]);

  return (
    <div className="min-[540px]:tooltip" data-tip={t('ADD_TO_FAV_TOOLTIP')}>
      <label className="swap">
        <input type="checkbox" />
        <div className="swap-on">
          <AddIconChecked width="32px" height="32px" />
        </div>
        <div className="swap-off">
          <AddIconUnchecked width="32px" height="32px" />
        </div>
        {icon}
      </label>
    </div>
  );
}

export default FavCheckBox;
