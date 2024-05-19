import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ApolloError, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { useNewToast } from '../toastContext';
import { DeleteArtistMutation } from '../../requests/mutations';
import { setToken, useAppDispatch } from '../../redux';

const ProfileDeleteAccount = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(['common', 'translation']);
  const newToast = useNewToast();
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const modalId = 'delete_artist_modal';
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [deleteAccountAction, {
    loading: deleteAccountLoading,
    error: deleteAccountError,
  }] = useMutation(DeleteArtistMutation);

  useEffect(() => {
    if (deleteAccountError) {
      newToast('error', deleteAccountError.message);
    }
  }, [newToast, deleteAccountLoading, deleteAccountError]);

  const handleDelete = async () => {
    try {
      const response = await deleteAccountAction();

      if (response) {
        newToast('success', t('DELETE_ACCOUNT_SUCCESS', { ns: 'translation' }));
        navigate('/logout', { replace: true });
        dispatch(setToken(null));
        closeModal();
      }
    } catch (error) {
      if (error instanceof ApolloError) {
        if (error.graphQLErrors[0].extensions?.code === 'ARTIST_NAME_ALREADY_EXISTS') {
          newToast('error', error.message);
          return;
        }

        if (error.graphQLErrors[0].extensions?.code === 'ARTIST_EMAIL_ALREADY_EXISTS') {
          newToast('error', error.message);
          return;
        }
      }

      if (deleteAccountError) {
        newToast('error', deleteAccountError.message);
        return;
      }

      newToast('error', t('DELETE_ACCOUNT_ERROR', { ns: 'translation' }));
    }
  };

  return (
    <>
      {/* Delete Account Button */}
      <div className="absolute bottom-0 right-0 mb-4 mr-4">
        <button
          type="button"
          className="btn border-stone-700 border hover:btn-error"
          onClick={openModal}
        >
          {t('DELETE_ACCOUNT_BUTTON_LABEL', { ns: 'translation' })}
        </button>
      </div>

      {isOpen && (
        <dialog id={modalId} className="modal" open>
          <form method="dialog" className="modal-box border-2 border-stone-700">
            <p>{t('DELETE_ACCOUNT_CONFIRM', { ns: 'translation' })}</p>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                className="btn btn-outline border-stone-700 border mr-2"
                onClick={closeModal}
              >
                {t('CANCEL', { ns: 'common' })}
              </button>
              <button
                type="button"
                className="btn btn-error"
                onClick={handleDelete}
              >
                {t('CONFIRM', { ns: 'common' })}
              </button>
            </div>
          </form>

          {/* Modal backdrop */}
          <form method="dialog" className="modal-backdrop">
            <button type="submit">{t('CLOSE')}</button>
          </form>
        </dialog>
      )}
    </>
  );
};

export default ProfileDeleteAccount;
