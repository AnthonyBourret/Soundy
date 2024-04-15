import React, { useMemo } from 'react';

import { useAppSelector } from '../../redux';

const PlayerInfos = (): JSX.Element => {
  const songTitle = useAppSelector((state) => state.audioPlayer.song.songTitle);
  const artistName = useAppSelector((state) => state.audioPlayer.artistName);
  const albumTitle = useAppSelector((state) => state.audioPlayer.album.albumTitle);
  const albumPicture = useAppSelector((state) => state.audioPlayer.album.albumPicture);
  const songPicture = useAppSelector((state) => state.audioPlayer.song.songPicture);

  const cover = useMemo((): JSX.Element | null => {
    if (albumPicture !== '' && albumPicture !== null) {
      return (
        <img
          alt="album cover"
          src={albumPicture}
          className="w-12 h-12 object-cover rounded-lg"
        />
      );
    }

    if (songPicture) {
      return (
        <img
          alt="song cover"
          src={songPicture}
          className="w-12 h-12 object-cover rounded-lg"
        />
      );
    }

    return null;
  }, [albumPicture, songPicture]);

  const topInfo = useMemo((): string | null => {
    if (albumTitle != null) {
      return albumTitle;
    }

    if (songTitle != null) {
      return songTitle;
    }

    return null;
  }, [albumTitle, songTitle]);

  const bottomInfo = useMemo((): string | null => {
    if (albumTitle != null) {
      return songTitle;
    }

    if (songTitle == null) {
      return null;
    }

    return artistName;
  }, [albumTitle, artistName, songTitle]);

  return (
    <section className="flex gap-3 items-center">
      {cover}
      <div>
        <h2>{topInfo}</h2>
        <h3>{bottomInfo}</h3>
      </div>
    </section>
  );
};

export default PlayerInfos;
