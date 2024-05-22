/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PencilIcon from '../../svg/PencilIcon';
import ProfileDeleteSong from './ProfileDeleteSong';
// import { ApolloError, useMutation } from '@apollo/client';
// import { useNavigate } from 'react-router-dom';

// import { useNewToast } from '../toastContext';
// import { DeleteArtistMutation } from '../../requests/mutations';
// import { setToken, useAppDispatch } from '../../redux';

const ProfileUpdateSong = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(['common', 'translation']);
  // const newToast = useNewToast();
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const modalId = 'update_song_modal';
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
      <div className="indicator-item indicator-top">
        <button
          type="button"
          onClick={openModal}
          className="absolute right-[-7px] top-[-7px] btn btn-outline
                aspect-square px-0 rounded-full bg-base-200 border border-1
                border-stone-700"
        >
          <PencilIcon />
        </button>
      </div>

      {isOpen && (
      <dialog id={modalId} className="modal" open>
        <form method="dialog" className="modal-box border-2 border-stone-700 pb-16">
          <p>En cours de modif song</p>
          <p>Champ 1</p>
          <p>Champ 2</p>
          <p>Champ 3</p>
          <p>Champ 4</p>

          <div className="absolute top-0 right-0 mt-4 mr-4 flex gap-2">
            <button
              className="btn btn-outline border-stone-700 border"
              onClick={closeModal}
              type="button"
            >
              Cancel
            </button>
            <button
              className="btn btn-success"
              type="button"
            >
              Save
            </button>
          </div>

          {/* <div className="flex flex-col absolute right-0 bottom-0
          mb-4 mr-4 sm:flex-row gap-2 sm:gap-0 sm:justify-end">
            <button
              type="button"
              className="btn border-stone-700 border hover:btn-error"
              onClick={openModal}
            >
              Delete the song
            </button>
          </div> */}
          <ProfileDeleteSong closeParentModal={closeModal} />
        </form>

        {/* Modal backdrop */}
        <form method="dialog" className="modal-backdrop backdrop-brightness-50 backdrop-blur-[1px]">
          <button
            onClick={closeModal}
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
export default ProfileUpdateSong;
