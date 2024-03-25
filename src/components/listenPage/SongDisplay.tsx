import React, { useEffect, useState } from 'react';
import { SongCard } from '../customElements';
import { SongListenPageQueryQuery } from '../../types/__generated_schemas__/graphql';

interface Props {
  songs: SongListenPageQueryQuery['songs'];
  isLogin: boolean;
  sortBy: string | null;
}

function SongDisplay({ songs, isLogin, sortBy }: Props) {
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
      default:
        break;
    }

    // Standby API => Release years on song albums
    // if (sortBy === 'latest') {
    //   setSortedSongs([...songs].sort((a, b) => Number(b.releaseYear) - Number(a.releaseYear)));
    // }
    // if (sortBy === 'oldest') {
    //   setSortedSongs([...songs].sort((a, b) => Number(a.releaseYear) - Number(b.releaseYear)));
    // }

    setSortedSongs(sorted);
  }, [songs, sortBy]);

  return (
    <div className="flex flex-col min-[540px]:px-12 pt-4 p-2 gap-4 min-[540px]:flex-row min-[540px]:flex-wrap min-[540px]:justify-around">
      {sortedSongs && sortedSongs.map(
        (song) => (
          // WIP - Fix the types
          <SongCard
            isLiked={song!.isLiked || false}
            artist={song!.artist || { name: '' }}
            cover={song!.cover || ''}
            duration={song!.duration}
            isLogin={isLogin}
            key={song?.id}
            songId={song!.id}
            title={song!.title}
          />
        ),
      )}
    </div>
  );
}

export default SongDisplay;
