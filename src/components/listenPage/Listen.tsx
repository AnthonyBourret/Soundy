import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { SongListenPageQuery } from '../../queries';
import Header from '../header/Header';
import ScrollToTopButton from '../customElements/ScrollToTopButton';
import SongDisplay from './SongDisplay';
import AlbumDisplay from './AlbumDisplay';
import { CardSong, CardAlbum } from '../../types';
import SearchBar from './SearchBar';
import SongAndAlbumOrder from '../customElements/SongAndAlbumOrder';
import Spinner from '../customElements/Spinner';

function Listen({ isLogin }: { isLogin: boolean }) {
  const { data, loading, error } = useQuery(SongListenPageQuery, { variables: { limit: 30 } });
  const [songs, setSongs] = useState<CardSong[]>([]);
  const [albums, setAlbums] = useState<CardAlbum[]>([]);
  const [isAlbum, setIsAlbum] = useState(false);
  const [sortBy, setSortBy] = useState('none');

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
      <div className="divider py-4 px-8 min-[540px]:px-36" />
      <SongAndAlbumOrder setSortBy={setSortBy} />
      {/* If albums/songs is selected in the search bar, the display changes. */}
      {data && !isAlbum
        && <SongDisplay songs={songs} isLogin={isLogin} sortBy={sortBy} />}
      {data && isAlbum
        && <AlbumDisplay albums={albums} isLogin={isLogin} sortBy={sortBy} />}
      {loading && (
        <Spinner />
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
