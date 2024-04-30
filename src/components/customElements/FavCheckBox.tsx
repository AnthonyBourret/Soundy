import React, { useMemo, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';

import { AddIconChecked, AddIconUnchecked } from '../../svg';
import { LikeSongMutation, UnlikeSongMutation } from '../../requests/mutations';

type Props = {
  isLiked: boolean;
  songId: number;
};

function FavCheckBox(props: Props): JSX.Element {
  const { songId, isLiked } = props;
  // Initial the state from all songs request, if we like or unlike after that
  // it will be only updated in local
  const [likeSongState, setLikeSongState] = useState(isLiked);

  const { t } = useTranslation('common');
  const [likeSong, { loading: likeSongLoading }] = useMutation(
    LikeSongMutation,
    {
      variables: { songId },
    },
  );

  const [unlikeSong, { loading: unlikeSongLoading }] = useMutation(
    UnlikeSongMutation,
    {
      variables: { songId },
    },
  );

  const handleClick = useCallback(async (action: 'like' | 'unlike') => {
    if (action === 'like') {
      const response = await likeSong();

      if (response) {
        setLikeSongState(true);
      }
    }

    if (action === 'unlike') {
      const response = await unlikeSong();

      if (response) {
        setLikeSongState(false);
      }
    }
  }, [likeSong, unlikeSong]);

  const likeButton = useMemo(() => {
    if (likeSongState) {
      return (
        <button
          type="submit"
          aria-label="unlike-song"
          onClick={() => handleClick('unlike')}
          disabled={unlikeSongLoading}
        >
          <AddIconChecked width="32px" height="32px" />
        </button>
      );
    }

    return (
      <button
        type="submit"
        aria-label="like-song"
        onClick={() => handleClick('like')}
        disabled={likeSongLoading}
      >
        <AddIconUnchecked width="32px" height="32px" />
      </button>
    );
  }, [handleClick, likeSongLoading, likeSongState, unlikeSongLoading]);

  return (
    <div className="min-[540px]:tooltip" data-tip={t('ADD_TO_FAV_TOOLTIP')}>
      {likeButton}
    </div>
  );
}

export default FavCheckBox;
