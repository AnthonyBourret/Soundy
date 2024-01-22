import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { SongListenPageQuery } from '../../queries';
import Header from '../header/Header';
import ScrollToTopButton from '../customElements/ScrollToTopButton';
import SongCard from '../customElements/SongCard';
import AlbumCard from '../customElements/AlbumCard';
import { CardSong } from '../../types';

function Listen({ isLogin }: { isLogin: boolean }) {
  const { data, loading, error } = useQuery(SongListenPageQuery);
  const [songs, setSongs] = useState<CardSong[]>([]);
  const [isAlbum, setIsAlbum] = useState(false);

  useEffect(() => {
    if (data) {
      setSongs(data.songs);
    }
  }, [data, songs]);

  return (
    <div className="mb-5 flex flex-col items-center w-full min-h-screen">
      <Header isLogin={isLogin} />
      <div className="form-control pt-28">
        <label htmlFor="login" className="label gap-4">
          <span className="label-text">{isAlbum ? 'Songs' : 'Albums'}</span>
          <input
            name="login"
            type="checkbox"
            className="toggle"
            onChange={() => setIsAlbum(!isAlbum)}
            checked={isAlbum}
          />
        </label>
      </div>
      <div className="flex flex-col min-[540px]:mx-8 pt-24 p-2 gap-4 min-[540px]:flex-row min-[540px]:flex-wrap min-[540px]:justify-around">
        {data && !isAlbum && songs.map((song) => (
          <SongCard
            key={song.id}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
            cover={song.cover}
          />
        ))}
        {loading && (
        <div className="flex items-center justify-center w-full">
          <span className="loading loading-spinner loading-lg" />
        </div>
        )}
        {error && (
        <div className="flex items-center justify-center w-full">
          <p>{error.message}</p>
        </div>
        )}
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default Listen;
