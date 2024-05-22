import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { ApolloError, useMutation } from '@apollo/client';
// import { useNavigate } from 'react-router-dom';

// import { useNewToast } from '../toastContext';
// import { DeleteArtistMutation } from '../../requests/mutations';
// import { setToken, useAppDispatch } from '../../redux';

type Props = {
  closeParentModal: () => void;
};

const ProfileDeleteSong = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(['common', 'translation']);
  // const newToast = useNewToast();
  const { closeParentModal } = props;
  const closeModal = () => {
    setIsOpen(false);
    closeParentModal();
  };
  const openModal = () => setIsOpen(true);
  const modalId = 'delete_song_modal';
  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  // const [deleteAccountAction, {
  //   loading: deleteAccountLoading,
  //   error: deleteAccountError,
  // }] = useMutation(DeleteArtistMutation);

  // useEffect(() => {
  //   if (deleteAccountError) {
  //     newToast('error', deleteAccountError.message);
  //   }
  // }, [newToast, deleteAccountLoading, deleteAccountError]);

  // const handleDelete = async () => {
  //   try {
  //     const response = await deleteAccountAction();

  //     if (response) {
  //       newToast('success', t('DELETE_ACCOUNT_SUCCESS', { ns: 'translation' }));
  //       navigate('/logout', { replace: true });
  //       dispatch(setToken(null));
  //       closeModal();
  //     }
  //   } catch (error) {
  //     if (error instanceof ApolloError) {
  //       if (error.graphQLErrors[0].extensions?.code === 'ARTIST_NAME_ALREADY_EXISTS') {
  //         newToast('error', error.message);
  //         return;
  //       }

  //       if (error.graphQLErrors[0].extensions?.code === 'ARTIST_EMAIL_ALREADY_EXISTS') {
  //         newToast('error', error.message);
  //         return;
  //       }
  //     }

  //     if (deleteAccountError) {
  //       newToast('error', deleteAccountError.message);
  //       return;
  //     }

  //     newToast('error', t('DELETE_ACCOUNT_ERROR', { ns: 'translation' }));
  //   }
  // };

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
              <button
                type="button"
                className="btn btn-error w-full sm:w-auto"
                // onClick={handleDelete}
              >
                {t('CONFIRM', { ns: 'common' })}
              </button>
            </div>
          </form>

          {/* Modal backdrop */}
          <form
            method="dialog"
            className="modal-backdrop backdrop-brightness-50 backdrop-blur-[1px]"
            // onSubmit={() => {
            //   closeModal();
            // }}
          >
            <button type="submit">{t('CLOSE')}</button>
          </form>
        </dialog>
      )}
    </>
  );
};

export default ProfileDeleteSong;
