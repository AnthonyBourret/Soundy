import React, { useMemo } from 'react';

import { useAppSelector } from '../../redux';

const PlayerInfos = (): JSX.Element => {
  const albumPicture = useAppSelector((state) => state.audioPlayer.album.albumPicture);
  const albumTitle = useAppSelector((state) => state.audioPlayer.album.albumTitle);
  const artistName = useAppSelector((state) => state.audioPlayer.artistName);
  const songPicture = useAppSelector((state) => state.audioPlayer.song.songPicture);
  const songTitle = useAppSelector((state) => state.audioPlayer.song.songTitle);

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
    <section className="flex items-center gap-3 min-[900px]:w-[15%] max-w-[50%] self-start">
      {cover}
      <div className="truncate">
        <h2 className="truncate">{topInfo}</h2>
        <h3 className="truncate">{bottomInfo}</h3>
      </div>
    </section>
  );
};

export default PlayerInfos;
