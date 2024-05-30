/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ApolloError, useMutation } from '@apollo/client';
import { DeleteAlbumMutation } from '../../requests/mutations';

import { useNewToast } from '../toastContext';
import { Spinner } from '../customElements';

type Props = {
  closeParentModal: () => void;
  albumId: number;
};

const ProfileDeleteSong = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(['common', 'translation']);
  const newToast = useNewToast();
  const { closeParentModal, albumId } = props;
  const openModal = () => setIsOpen(true);
  const modalId = 'delete_album_modal';

  const closeModal = useCallback(() => {
    setIsOpen(false);
    closeParentModal();
  }, [closeParentModal]);

  const [DeleteAlbumAction, {
    loading: deleteAlbumLoading,
    error: deleteAlbumError,
  }] = useMutation(DeleteAlbumMutation, {
    variables: {
      albumId,
    },
  });

  const handleDelete = useCallback(async () => {
    try {
      const response = await DeleteAlbumAction();

      if (response) {
        newToast('success', t('DELETE_ALBUM_SUCCESS', { ns: 'translation' }));
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

      if (deleteAlbumError) {
        newToast('error', deleteAlbumError.message);
        return;
      }

      newToast('error', t('DELETE_ALBUM_ERROR', { ns: 'translation' }));
    }
  }, [DeleteAlbumAction, closeModal, deleteAlbumError, newToast, t]);

  const deleteButtonJSX = useMemo(() => {
    if (deleteAlbumLoading) {
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
  }, [deleteAlbumLoading, handleDelete, t]);

  return (
    <>
      {/* Delete Account Button */}
      <div className="flex flex-col absolute right-0 bottom-0 mb-4 mr-4 sm:flex-row gap-2 sm:gap-0 sm:justify-end">
        <button
          type="button"
          className="btn border-stone-700 border hover:btn-error"
          onClick={openModal}
        >
          Delete the album
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
            <button type="submit" onClick={closeParentModal}>{t('CLOSE')}</button>
          </form>
        </dialog>
      )}
    </>
  );
};

export default ProfileDeleteSong;
