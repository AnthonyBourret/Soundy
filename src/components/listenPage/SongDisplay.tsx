import React from 'react';
import SongCard from '../customElements/SongCard';
import { CardSong } from '../../types';

interface Props {
  songs: Array<CardSong>;
  isLogin: boolean;
}

function SongDisplay({ songs, isLogin }: Props) {
  return (
    <div className="flex flex-col min-[540px]:px-12 pt-4 p-2 gap-4 min-[540px]:flex-row min-[540px]:flex-wrap min-[540px]:justify-around">
      {songs && songs.map((song: CardSong) => (
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
