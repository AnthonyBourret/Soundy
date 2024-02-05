import React, { useEffect, useState } from 'react';
import SongCard from '../customElements/SongCard';
import { CardSong } from '../../types';

interface Props {
  songs: Array<CardSong>;
  isLogin: boolean;
  sortBy: string;
}

function SongDisplay({ songs, isLogin, sortBy }: Props) {
  const [sortedSongs, setSortedSongs] = useState<CardSong[]>([]);

  // The useEffect is used to make a new array of songs based on the sortBy value.
  // This array is sorted based on the value of sortBy.

  useEffect(() => {
    if (sortBy === 'none') {
      setSortedSongs(songs);
    }
    if (sortBy === 'ascendingName') {
      setSortedSongs([...songs].sort((a, b) => a.title.localeCompare(b.title)));
    }
    if (sortBy === 'descendingName') {
      setSortedSongs([...songs].sort((a, b) => b.title.localeCompare(a.title)));
    }
    if (sortBy === 'durationAsc') {
      setSortedSongs([...songs].sort((a, b) => Number(a.duration) - Number(b.duration)));
    }
    if (sortBy === 'durationDesc') {
      setSortedSongs([...songs].sort((a, b) => Number(b.duration) - Number(a.duration)));
    }
    // Standby API => Release years on song albums
    // if (sortBy === 'latest') {
    //   setSortedSongs([...songs].sort((a, b) => Number(b.releaseYear) - Number(a.releaseYear)));
    // }
    // if (sortBy === 'oldest') {
    //   setSortedSongs([...songs].sort((a, b) => Number(a.releaseYear) - Number(b.releaseYear)));
    // }
  }, [sortBy, songs]);

  return (
    <div className="flex flex-col min-[540px]:px-12 pt-4 p-2 gap-4 min-[540px]:flex-row min-[540px]:flex-wrap min-[540px]:justify-around">
      {sortedSongs && sortedSongs.map((song: CardSong) => (
        <SongCard
          key={song.id}
          title={song.title}
          artist={song.artist}
          duration={song.duration}
          cover={song.cover}
          isLogin={isLogin}
        />
      ))}
    </div>
  );
}

export default SongDisplay;
