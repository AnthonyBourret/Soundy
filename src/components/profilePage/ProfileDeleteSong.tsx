/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ApolloError, useApolloClient, useMutation } from '@apollo/client';
import { DeleteSongsMutation } from '../../requests/mutations';

import { useNewToast } from '../toastContext';
import { Spinner } from '../customElements';
import { resetQueryCache } from '../../utils';

type Props = {
  closeParentModal: () => void;
  songId: number;
};

const ProfileDeleteSong = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(['common', 'translation']);
  const newToast = useNewToast();
  const { closeParentModal, songId } = props;
  const openModal = () => setIsOpen(true);
  const modalId = 'delete_song_modal';
  const client = useApolloClient();

  const closeModal = useCallback(() => {
    setIsOpen(false);
    closeParentModal();
  }, [closeParentModal]);

  const [DeleteSongsAction, {
    loading: deleteSongsLoading,
    error: deleteSongsError,
  }] = useMutation(DeleteSongsMutation, {
    variables: {
      songIds: [songId],
    },
  });

  const handleDelete = useCallback(async () => {
    try {
      const response = await DeleteSongsAction();

      if (response) {
        resetQueryCache({
          client,
          queryNames: ['songs'],
        });
        newToast('success', t('DELETE_SONG_SUCCESS', { ns: 'translation' }));
        closeModal();
      }
    } catch (error) {
      if (error instanceof ApolloError) {
        if (error.graphQLErrors[0]?.extensions?.code === 'ARTIST_NAME_ALREADY_EXISTS') {
          newToast('error', error.message);
          return;
        }

        if (error.graphQLErrors[0]?.extensions?.code === 'ARTIST_EMAIL_ALREADY_EXISTS') {
          newToast('error', error.message);
          return;
        }
      }

      if (deleteSongsError) {
        newToast('error', deleteSongsError.message);
        return;
      }

      newToast('error', t('DELETE_SONG_ERROR', { ns: 'translation' }));
    }
  }, [DeleteSongsAction, client, closeModal, deleteSongsError, newToast, t]);

  const deleteButtonJSX = useMemo(() => {
    if (deleteSongsLoading) {
      return (
        <button type="button" className="btn btn-error w-full sm:w-auto" disabled>
          <Spinner />
        </button>
      );
    }

    return (
      <button
        type="button"
        className="btn btn-error w-full sm:w-auto"
        onClick={handleDelete}
      >
        {t('CONFIRM', { ns: 'common' })}
      </button>
    );
  }, [deleteSongsLoading, handleDelete, t]);

  return (
    <>
      {/* Delete Account Button */}
      <div className="flex flex-col absolute right-0 bottom-0 mb-4 mr-4 sm:flex-row gap-2 sm:gap-0 sm:justify-end">
        <button
          type="button"
          className="btn border-stone-700 border hover:btn-error"
          onClick={openModal}
        >
          Delete the song
        </button>
      </div>

      {isOpen && (
        <dialog id={modalId} className="modal" open>
          <form method="dialog" className="modal-box border-2 border-stone-700">
            <p>{t('DELETE_ACCOUNT_CONFIRM', { ns: 'translation' })}</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-end mt-4">
              <button
                type="button"
                className="btn btn-outline border-stone-700 border mr-2 w-full sm:w-auto"
                onClick={closeModal}
              >
                {t('CANCEL', { ns: 'common' })}
              </button>
              {deleteButtonJSX}
            </div>
          </form>

          {/* Modal backdrop */}
          <form
            method="dialog"
            className="modal-backdrop backdrop-brightness-50 backdrop-blur-[1px]"
          >
            <button
              onClick={closeParentModal}
              type="submit"
            >
              {t('CLOSE')}
            </button>
          </form>
        </dialog>
      )}
    </>
  );
};

export default ProfileDeleteSong;
