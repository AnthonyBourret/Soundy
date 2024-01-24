import React from 'react';
import SongCard from '../customElements/SongCard';
import { CardSong } from '../../types';

interface Props {
  songs: Array<CardSong>;
}

function SongDisplay({ songs }: Props) {
  return (
    <div className="flex flex-col min-[540px]:mx-8 pt-24 p-2 gap-4 min-[540px]:flex-row min-[540px]:flex-wrap min-[540px]:justify-around">
      {songs && songs.map((song: CardSong) => (
        <SongCard
          key={song.id}
          title={song.title}
          artist={song.artist}
          duration={song.duration}
          cover={song.cover}
        />
      ))}
    </div>
  );
}

export default SongDisplay;
