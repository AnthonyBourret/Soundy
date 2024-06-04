/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { ApolloError, useMutation, useQuery } from '@apollo/client';

import { PencilIcon } from '../../svg';
import {
  AlbumUpdateInput,
  ListenPageAlbumsQueryQuery,
  Song,
  UserSongsQueryQuery,
  UserSongsQueryQueryVariables,
} from '../../types/__generated_schemas__/graphql';
import { ArrayElementType } from '../../types';
import { useNewToast } from '../toastContext';
import { Spinner } from '../customElements';
import { CreateAlbumSongsOrder, CreateAlbumSongsSelection } from '../createPage';
import { UserSongsQuery } from '../../requests/queries';
import { secondsToFormatedDuration } from '../../utils';
import { UpdateAlbumMutation } from '../../requests/mutations';

import ProfileDeleteAlbum from './ProfileDeleteAlbum';

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
  const [songsUserHas, setSongsUserHas] = useState<UserSongsQueryQuery['songs']>(album.songs ?? []);
  const songsAlbumHas = album.songs;
  const [selectedSongs, setSelectedSongs] = useState<Song[]>(songsAlbumHas as Song[]);
  const newToast = useNewToast();

  const { data, loading } = useQuery<UserSongsQueryQuery, UserSongsQueryQueryVariables>(
    UserSongsQuery,
    {
      variables: { createdByUser: true },
      fetchPolicy: 'no-cache',
    },
  );

  useEffect(() => {
    if (data?.songs != null) {
      setSongsUserHas(data.songs);
    }
  }, [data]);

  const [updateAlbumAction, {
    loading: updateAlbumLoading,
    error: updateAlbumError,
  }] = useMutation(
    UpdateAlbumMutation,
    {
      variables: {
        albumId: album.id,
        input: {
          songIds: selectedSongs.map((song) => song.id),
          title,
          cover,
          release_year: releaseYear,
        },
      },
    },
  );

  const handleSave = useCallback(async () => {
    try {
      const response = await updateAlbumAction();

      if (response) {
        newToast('success', t('UPDATE_ALBUM_SUCCESS', { ns: 'translation' }));
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

      if (updateAlbumError) {
        newToast('error', updateAlbumError.message);
        return;
      }

      newToast('error', t('UPDATE_ALBUM_ERROR', { ns: 'translation' }));
    }
  }, [updateAlbumAction, newToast, t, updateAlbumError]);

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

  const saveButtonJSX = useMemo(() => {
    if (updateAlbumLoading) {
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
  }, [updateAlbumLoading, handleSave, t]);

  const songSelectionJSX = useMemo(() => {
    if (loading) {
      return <Spinner />;
    }

    if (songsUserHas == null) {
      return null;
    }

    return (
      <label htmlFor="songs" className="mb-5">
        <div className="label">
          <span className="label-text text-lg font-semibold">{t('CREATE_ALBUM_SONGS_INPUT', { ns: 'translation' })}</span>
        </div>
        <div className="divider my-0 mb-4" />
        <CreateAlbumSongsSelection
          songs={songsUserHas as Song[]}
          selectedSongs={selectedSongs}
          setSelectedSongs={setSelectedSongs}
          handleInputChange={() => {}}
        />
      </label>
    );
  }, [loading, songsUserHas, t, selectedSongs]);

  const trackOrder = useMemo(() => {
    if (selectedSongs.length > 0 || (songsAlbumHas != null && songsAlbumHas.length > 0)) {
      return (
        <label htmlFor="selected_songs" className="">
          <div className="label">
            <span className="label-text text-lg font-semibold">{t('CREATE_ALBUM_ORDER_INPUT', { ns: 'translation' })}</span>
          </div>
          <div className="divider my-0 mb-4" />
          <CreateAlbumSongsOrder
            selectedSongs={selectedSongs}
            setSelectedSongs={setSelectedSongs}
          />
          <p className="label-text font-semibold mt-4 text-center">
            {selectedSongs.length}
            {' '}
            {t('CREATE_ALBUM_TRACKS_NUMBER', { ns: 'translation' })}
            {' - '}
            {secondsToFormatedDuration(selectedSongs.reduce((acc, song) => acc + song.duration, 0))}
          </p>
        </label>
      );
    }
    return (
      <div className="">
        <div className="label">
          <span className="label-text text-lg font-semibold">{t('CREATE_ALBUM_ORDER_INPUT', { ns: 'translation' })}</span>
        </div>
        <div className="divider my-0 mb-4" />
        <p className="mt-4 font-semibold text-center">{t('CREATE_ALBUM_NO_TRACKS', { ns: 'translation' })}</p>
      </div>
    );
  }, [selectedSongs, songsAlbumHas, t]);

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
          <form method="dialog" className="modal-box border-2 border-stone-700">
            <div className="flex flex-col w-full py-16 relative">

              <div className="form-control mb-4">
                <label className="label" htmlFor="title">
                  <span className="label-text">
                    {t('CARD_SONG_TITLE', { ns: 'common' })}
                  </span>
                </label>
                {albumTitleInputJSX}
              </div>

              <div className="form-control mb-4">
                <label className="label" htmlFor="cover">
                  <span className="label-text">
                    {t('COVER_URL', { ns: 'translation' })}
                  </span>
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
                  {t('CANCEL', { ns: 'common' })}
                </button>
                {saveButtonJSX}
              </div>

              {/* Songs selection */}
              {trackOrder}
              {songSelectionJSX}

              <ProfileDeleteAlbum closeParentModal={closeModal} albumId={album.id} />
            </div>
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
