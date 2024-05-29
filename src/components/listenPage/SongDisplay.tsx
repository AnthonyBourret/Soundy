/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useMemo, useState } from 'react';

import { SongCard } from '../customElements';
import { ListenPageSongsQueryQuery } from '../../types/__generated_schemas__/graphql';
import ProfileUpdateSong from '../profilePage/ProfileUpdateSong';

interface Props {
  fromProfilePage?: boolean;
  isLogin: boolean;
  likable?: boolean;
  songs: ListenPageSongsQueryQuery['songs'];
  sortBy: string | null;
}

function SongDisplay({
  fromProfilePage = false,
  isLogin,
  likable = true,
  songs,
  sortBy,
}: Props) {
  const [sortedSongs, setSortedSongs] = useState<Props['songs']>([]);

  // The useEffect is used to make a new array of songs based on the sortBy value.
  // This array is sorted based on the value of sortBy.

  useEffect(() => {
    if (!songs) {
      setSortedSongs(null);
      return;
    }

    const sorted = [...songs].filter((song) => song !== null);

    switch (sortBy) {
      case 'ascendingName':
        sorted.sort((a, b) => a!.title.localeCompare(b!.title));
        break;
      case 'descendingName':
        sorted.sort((a, b) => b!.title.localeCompare(a!.title));
        break;
      case 'durationAsc':
        sorted.sort((a, b) => (a!.duration) - (b!.duration));
        break;
      case 'durationDesc':
        sorted.sort((a, b) => (b!.duration) - (a!.duration));
        break;
      case 'latest':
        sorted.sort((a, b) => Number(b!.release_year) - Number(a!.release_year));
        break;
      case 'oldest':
        sorted.sort((a, b) => Number(a!.release_year) - Number(b!.release_year));
        break;
      default:
        break;
    }

    setSortedSongs(sorted);
  }, [songs, sortBy]);

  const songCardsJSX = useMemo(() => {
    if (!sortedSongs) {
      return null;
    }

    if (fromProfilePage) {
      return sortedSongs.map(
        (song) => {
          if (!song) {
            return null;
          }

          return (
            <div className="indicator w-full sm:w-auto">
              <ProfileUpdateSong songId={song.id} />
              <SongCard
                isLiked={song!.isLiked || false}
                artist={song!.artist || { name: '' }}
                cover={song!.cover || ''}
                duration={song!.duration}
                releaseYear={song!.release_year ?? 0}
                isLogin={isLogin}
                key={song?.id}
                songId={song!.id}
                title={song!.title}
                likable={likable}
              />
            </div>
          );
        },
      );
    }

    return sortedSongs.map(
      (song) => (
        <SongCard
          isLiked={song!.isLiked || false}
          artist={song!.artist || { name: '' }}
          cover={song!.cover || ''}
          duration={song!.duration}
          releaseYear={song!.release_year ?? 0}
          isLogin={isLogin}
          key={song?.id}
          songId={song!.id}
          title={song!.title}
          likable={likable}
        />
      ),
    );
  }, [fromProfilePage, isLogin, likable, sortedSongs]);

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-around pt-4 p-2 gap-4">
      {songCardsJSX}
    </div>
  );
}

export default SongDisplay;
