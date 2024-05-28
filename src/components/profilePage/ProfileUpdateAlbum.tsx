/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { ApolloError, useMutation } from '@apollo/client';

import { PencilIcon } from '../../svg';
import { AlbumUpdateInput, ListenPageAlbumsQueryQuery } from '../../types/__generated_schemas__/graphql';
import { ArrayElementType } from '../../types';
import UpdateSongMutation from '../../requests/mutations/UpdateSongMutation';
import { useNewToast } from '../toastContext';
import { Spinner } from '../customElements';

// WIP
// import ProfileDeleteAlbum from './ProfileDeleteAlbum';

type Props = {
  album: NonNullable<ArrayElementType<ListenPageAlbumsQueryQuery['albums']>>;
};

const ProfileUpdateAlbum = (props: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(['common', 'translation']);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const modalId = 'update_album_modal';
  const { album } = props;
  const [title, setTitle] = useState<AlbumUpdateInput['title']>(album.title);
  const [cover, setCover] = useState<AlbumUpdateInput['cover']>(album.cover);
  const [releaseYear, setReleaseYear] = useState<AlbumUpdateInput['release_year']>(
    album.release_year,
  );
  const [songIds, setSongIds] = useState<AlbumUpdateInput['songIds']>(album.songs?.map((song) => song!.id) ?? []);
  // const newToast = useNewToast();

  // const [updateSongAction, {
  //   loading: updateSongLoading,
  //   error: updateSongError,
  // }] = useMutation(
  //   UpdateSongMutation,
  //   {
  //     variables: {
  //       songId: song.id,
  //       input: {
  //         title,
  //         cover,
  //         release_year: releaseYear,
  //       },
  //     },
  //   },
  // );

  // const handleSave = useCallback(async () => {
  //   try {
  //     const response = await updateSongAction();

  //     if (response) {
  //       newToast('success', t('UPDATE_SONG_SUCCESS', { ns: 'translation' }));
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

  //     if (updateSongError) {
  //       newToast('error', updateSongError.message);
  //       return;
  //     }

  //     newToast('error', t('DELETE_ACCOUNT_ERROR', { ns: 'translation' }));
  //   }
  // }, [updateSongAction, newToast, t, updateSongError]);

  const albumTitleInputJSX = useMemo(() => (
    <input
      className="input input-bordered"
      id="title"
      name="title"
      onChange={(e) => setTitle(e.target.value)}
      type="text"
      value={title ?? album.title}
    />
  ), [album.title, title]);

  const albumCoverInputJSX = useMemo(() => (
    <input
      className="input input-bordered"
      id="cover"
      name="cover"
      onChange={(e) => setCover(e.target.value)}
      type="text"
      value={cover ?? album.cover ?? ''}
    />
  ), [cover, album.cover]);

  const albumReleaseYearInputJSX = useMemo(() => (
    <input
      type="number"
      id="releaseYear"
      name="releaseYear"
      className="input input-bordered"
      value={releaseYear ?? album.release_year ?? ''}
      onChange={(e) => setReleaseYear(Number(e.target.value))}
    />
  ), [releaseYear, album.release_year]);

  // const saveButtonJSX = useMemo(() => {
  //   if (updateSongLoading) {
  //     return <Spinner />;
  //   }

  //   return (
  //     <button
  //       type="button"
  //       className="btn btn-success"
  //       onClick={handleSave}
  //     >
  //       Save
  //     </button>
  //   );
  // }, [updateSongLoading, handleSave]);

  return (
    <>
      <div className="indicator-item indicator-top mr-[15%]">
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
          <form method="dialog" className="modal-box border-2 border-stone-700 py-16">

            <div className="form-control mb-4">
              <label className="label" htmlFor="title">
                <span className="label-text">Title</span>
              </label>
              {albumTitleInputJSX}
            </div>

            <div className="form-control mb-4">
              <label className="label" htmlFor="cover">
                <span className="label-text">Cover URL</span>
              </label>
              {albumCoverInputJSX}
            </div>

            <div className="form-control mb-4">
              <label className="label" htmlFor="releaseYear">
                <span className="label-text">Release Year</span>
              </label>
              {albumReleaseYearInputJSX}
            </div>

            <div className="absolute top-0 right-0 mt-4 mr-4 flex gap-2">
              <button
                className="btn btn-outline border-stone-700 border"
                onClick={closeModal}
                type="button"
              >
                Cancel
              </button>
              {/* {saveButtonJSX} */}
            </div>

            {/* WIP - Create that */}
            {/* <ProfileDeleteAlbum closeParentModal={closeModal} songId={song.id} /> */}
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

export default ProfileUpdateAlbum;
