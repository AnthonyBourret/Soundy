import React, { useMemo } from 'react';

import { AlbumDisplay, SongDisplay } from '../listenPage';
import { ProfileAlbumsQuery, ProfileSongsQuery } from '../../types/__generated_schemas__/graphql';
import { Spinner } from '../customElements';

type Props = {
  chosenDisplay: 'songs' | 'albums';
  songs?: ProfileSongsQuery['songs'];
  albums?: ProfileAlbumsQuery['albums'];
  loading: boolean;
};

const ProfileSongOrAlbum = (props: Props): JSX.Element => {
  const {
    albums,
    chosenDisplay,
    loading,
    songs,
  } = props;

  const songOrAlbum = useMemo(() => {
    if (chosenDisplay === 'albums') {
      return (
        <AlbumDisplay
          albums={albums}
          fromProfilePage
          sortBy={null}
        />
      );
    }

    if (loading) {
      return (
        <Spinner />
      );
    }

    return (
      <SongDisplay
        fromProfilePage
        isLogin
        likable={false}
        songs={songs}
        sortBy={null}
      />
    );
  }, [albums, chosenDisplay, loading, songs]);

  return (
    songOrAlbum
  );
};

export default ProfileSongOrAlbum;
