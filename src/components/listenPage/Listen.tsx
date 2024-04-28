import React, { useState, useEffect, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import Header from '../header/Header';
import SongDisplay from './SongDisplay';
import AlbumDisplay from './AlbumDisplay';
import { ScrollToTopButton, SongAndAlbumOrder, Spinner } from '../customElements';
import { ChosenDisplay } from '../../types';
import SearchBar from './SearchBar';
import { ListenPageSongsQuery } from '../../requests/queries';
import { ListenPageSongsQueryQuery, ListenPageAlbumsQueryQuery } from '../../types/__generated_schemas__/graphql';

function Listen({ isLogin }: { isLogin: boolean }) {
  const { data, loading, error } = useQuery(ListenPageSongsQuery, { variables: { limit: 30 } });
  const [songs, setSongs] = useState<ListenPageSongsQueryQuery['songs']>([]);
  const [albums, setAlbums] = useState<ListenPageAlbumsQueryQuery['albums']>([]);
  const [chosenDisplay, setChosenDisplay] = useState<ChosenDisplay>('songs');
  const [sortBy, setSortBy] = useState<string | null>(null);

  useEffect(() => {
    if (data !== undefined) {
      setSongs(data.songs);
    }
  }, [data]);

  // useMemo for the songs
  const songDisplayed = useMemo(() => {
    if (chosenDisplay === 'songs') {
      return (
        <SongDisplay songs={songs} isLogin={isLogin} sortBy={sortBy} />
      );
    }
    return null;
  }, [chosenDisplay, songs, isLogin, sortBy]);

  // useMemo for the albums
  const albumDisplayed = useMemo(() => {
    if (chosenDisplay === 'albums') {
      // if (albums == null) return null;
      // if (albums.length === 0) return null;
      return (
        <AlbumDisplay albums={albums} sortBy={sortBy} />
      );
    }
    return null;
  }, [albums, chosenDisplay, sortBy]);

  return (
    <div className="mb-5 flex flex-col items-center w-full min-h-screen">
      <Header isLogin={isLogin} />
      <SearchBar
        chosenDisplay={chosenDisplay}
        setChosenDisplay={setChosenDisplay}
        setAlbums={setAlbums}
      />
      <div className="divider py-4 px-8 min-[540px]:px-36" />
      <SongAndAlbumOrder setSortBy={setSortBy} chosenDisplay={chosenDisplay} />

      {/* If albums/songs is selected in the search bar, the display changes. */}
      {songDisplayed}
      {albumDisplayed}

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
