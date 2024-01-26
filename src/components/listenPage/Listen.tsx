import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { SongListenPageQuery } from '../../queries';
import Header from '../header/Header';
import ScrollToTopButton from '../customElements/ScrollToTopButton';
import SongDisplay from './SongDisplay';
import AlbumDisplay from './AlbumDisplay';
import { CardSong, CardAlbum } from '../../types';
import SearchBar from './SearchBar';
import SongAndAlbumFilters from '../customElements/SongAndAlbumFilters';

function Listen({ isLogin }: { isLogin: boolean }) {
  const { data, loading, error } = useQuery(SongListenPageQuery, { variables: { limit: 20 } });
  const [songs, setSongs] = useState<CardSong[]>([]);
  const [albums, setAlbums] = useState<CardAlbum[]>([]);
  const [isAlbum, setIsAlbum] = useState(false);

  useEffect(() => {
    if (data) {
      setSongs(data.songs);
      setAlbums(data.albums);
    }
  }, [data]);

  return (
    <div className="mb-5 flex flex-col items-center w-full min-h-screen">
      <Header isLogin={isLogin} />
      <SearchBar isAlbum={isAlbum} setIsAlbum={setIsAlbum} />
      <div className="divider py-4 px-48" />
      <SongAndAlbumFilters />
      {data && !isAlbum && <SongDisplay songs={songs} />}
      {data && isAlbum && <AlbumDisplay albums={albums} />}
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
      <ScrollToTopButton />
    </div>
  );
}

export default Listen;
