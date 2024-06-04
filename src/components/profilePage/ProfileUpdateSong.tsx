/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ApolloError, useMutation } from '@apollo/client';

import { PencilIcon } from '../../svg';
import { ListenPageSongsQueryQuery, SongUpdateInput } from '../../types/__generated_schemas__/graphql';
import { ArrayElementType } from '../../types';
import UpdateSongMutation from '../../requests/mutations/UpdateSongMutation';
import { useNewToast } from '../toastContext';
import { Spinner } from '../customElements';

import ProfileDeleteSong from './ProfileDeleteSong';

type Props = {
  song: NonNullable<ArrayElementType<ListenPageSongsQueryQuery['songs']>>;
};

const ProfileUpdateSong = (props: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(['common', 'translation']);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const modalId = 'update_song_modal';
  const { song } = props;
  const [title, setTitle] = useState<SongUpdateInput['title']>(song.title);
  const [cover, setCover] = useState<SongUpdateInput['cover']>(song.cover);
  const [releaseYear, setReleaseYear] = useState<SongUpdateInput['release_year']>(
    song.release_year,
  );
  const newToast = useNewToast();

  const [updateSongAction, {
    loading: updateSongLoading,
    error: updateSongError,
  }] = useMutation(
    UpdateSongMutation,
    {
      variables: {
        songId: song.id,
        input: {
          title,
          cover,
          release_year: releaseYear,
        },
      },
    },
  );

  const handleSave = useCallback(async () => {
    try {
      const response = await updateSongAction();

      if (response) {
        newToast('success', t('UPDATE_SONG_SUCCESS', { ns: 'translation' }));
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

      if (updateSongError) {
        newToast('error', updateSongError.message);
        return;
      }

      newToast('error', t('DELETE_ACCOUNT_ERROR', { ns: 'translation' }));
    }
  }, [updateSongAction, newToast, t, updateSongError]);

  const songTitleInputJSX = useMemo(() => (
    <input
      className="input input-bordered"
      id="title"
      name="title"
      onChange={(e) => setTitle(e.target.value)}
      type="text"
      value={title ?? song.title}
    />
  ), [song.title, title]);

  const songCoverInputJSX = useMemo(() => (
    <input
      className="input input-bordered"
      id="cover"
      name="cover"
      onChange={(e) => setCover(e.target.value)}
      type="text"
      value={cover ?? song.cover ?? ''}
    />
  ), [cover, song.cover]);

  const songReleaseYearInputJSX = useMemo(() => (
    <input
      type="number"
      id="releaseYear"
      name="releaseYear"
      className="input input-bordered"
      value={releaseYear ?? song.release_year ?? ''}
      onChange={(e) => setReleaseYear(Number(e.target.value))}
    />
  ), [releaseYear, song.release_year]);

  const saveButtonJSX = useMemo(() => {
    if (updateSongLoading) {
      return <Spinner />;
    }

    return (
      <button
        type="button"
        className="btn btn-success"
        onClick={handleSave}
      >
        {t('SAVE', { ns: 'common' })}
      </button>
    );
  }, [updateSongLoading, handleSave, t]);

  return (
    <>
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
          <form method="dialog" className="modal-box border-2 border-stone-700 py-16">

            <div className="form-control mb-4">
              <label className="label" htmlFor="title">
                <span className="label-text">
                  {t('CARD_SONG_TITLE', { ns: 'common' })}
                </span>
              </label>
              {songTitleInputJSX}
            </div>

            <div className="form-control mb-4">
              <label className="label" htmlFor="cover">
                <span className="label-text">
                  {t('COVER_URL', { ns: 'translation' })}
                </span>
              </label>
              {songCoverInputJSX}
            </div>

            <div className="form-control mb-4">
              <label className="label" htmlFor="releaseYear">
                <span className="label-text">
                  {t('RELEASE_YEAR', { ns: 'translation' })}
                </span>
              </label>
              {songReleaseYearInputJSX}
            </div>

            <div className="absolute top-0 right-0 mt-4 mr-4 flex gap-2">
              <button
                className="btn btn-outline border-stone-700 border"
                onClick={closeModal}
                type="button"
              >
                {t('CANCEL', { ns: 'common' })}
              </button>
              {saveButtonJSX}
            </div>

            <ProfileDeleteSong closeParentModal={closeModal} songId={song.id} />
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
