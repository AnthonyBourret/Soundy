import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLazyQuery, useQuery } from '@apollo/client';

import { Header } from '../header';
import { ScrollToTopButton, PageTitle, Spinner } from '../customElements';
import { ChosenDisplay } from '../../types';

import ProfileRecap from './ProfileRecap';
import ProfileSongOrAlbum from './ProfileSongOrAlbum';
import { ProfileSongs, ProfileAlbums } from '../../requests/queries';

type Props = {
  isLogin: boolean;
};

const Profile = (props: Props): JSX.Element => {
  const { isLogin } = props;
  const { t } = useTranslation('translation');
  const [chosenDisplay, setChosenDisplay] = useState<ChosenDisplay>('songs');
  const {
    data: songsData,
    error: songsError,
    loading: songsLoading,
  } = useQuery(ProfileSongs, {
    variables: {
      filter: {
        createdByUser: true,
      },
    },
  });

  const [getAlbums, {
    data: albumsData,
    error: albumsError,
    loading: albumsLoading,
  }] = useLazyQuery(ProfileAlbums, {
    variables: {
      filter: {
        createdByUser: true,
      },
    },
    onCompleted: (data) => {
      if (data.albums) {
        setChosenDisplay('albums');
      }
    },
  });

  const chosenDisplayButtonsJSX = useMemo(() => {
    if (songsLoading || albumsLoading) {
      return <Spinner />;
    }

    return (
      <div>
        <button
          type="button"
          onClick={() => setChosenDisplay('songs')}
          className={`btn btn-sm mx-4 py-3 min-[540px]:btn-md ${chosenDisplay === 'songs' ? 'border-primary my-5 border-2' : 'border-stone-700 my-6 border'}`}
        >
          {t('PROFILE_MY_SONGS')}
        </button>
        <button
          type="button"
          onClick={() => getAlbums()}
          className={`btn btn-sm mx-4 py-3 min-[540px]:btn-md ${chosenDisplay === 'albums' ? 'border-primary my-5 border-2' : 'border-stone-700 my-6 border'}`}
        >
          {t('PROFILE_MY_ALBUMS')}
        </button>
      </div>
    );
  }, [albumsLoading, chosenDisplay, getAlbums, songsLoading, t]);

  const songOrAlbumJSX = useMemo(() => {
    if (chosenDisplay === 'albums') {
      if (albumsError) {
        return <p>{albumsError.message}</p>;
      }

      return (
        <ProfileSongOrAlbum
          chosenDisplay={chosenDisplay}
          loading={albumsLoading}
          albums={albumsData?.albums}
        />
      );
    }

    if (songsError) {
      return <p>{songsError.message}</p>;
    }

    return (
      <ProfileSongOrAlbum
        chosenDisplay={chosenDisplay}
        loading={songsLoading}
        songs={songsData?.songs}
      />
    );
  }, [
    albumsData?.albums,
    albumsError,
    albumsLoading,
    chosenDisplay,
    songsData?.songs,
    songsError,
    songsLoading,
  ]);

  return (
    <div className="mb-36 flex flex-col items-center w-full min-h-screen">
      <Header isLogin={isLogin} />
      <PageTitle title="Profile" />
      <ProfileRecap />
      <div className="divider mb-10 py-10 px-8 w-[300px] mx-auto" />
      {chosenDisplayButtonsJSX}
      <ScrollToTopButton />
      {songOrAlbumJSX}
    </div>
  );
};

export default Profile;
