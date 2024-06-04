import React, { useState, useEffect, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import Header from '../header/Header';
import SongDisplay from './SongDisplay';
import AlbumDisplay from './AlbumDisplay';
import { ScrollToTopButton, SongAndAlbumOrder, Spinner } from '../customElements';
import { ChosenDisplay } from '../../types';
import SearchBar from './SearchBar';
import { ListenPageSongsQuery } from '../../requests/queries';
import type {
  ListenPageSongsQueryQuery,
  ListenPageAlbumsQueryQuery,
  DurationRange,
  ReleaseYear,
} from '../../types/__generated_schemas__/graphql';

function Listen({ isLogin }: { isLogin: boolean }) {
  const [songs, setSongs] = useState<ListenPageSongsQueryQuery['songs']>([]);
  const [albums, setAlbums] = useState<ListenPageAlbumsQueryQuery['albums']>([]);
  const [chosenDisplay, setChosenDisplay] = useState<ChosenDisplay>('songs');
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [durationFilter, setDurationFilter] = useState<DurationRange>();
  const [yearFilter, setYearFilter] = useState<ReleaseYear>();

  const { data, loading, error } = useQuery(
    ListenPageSongsQuery,
    {
      variables: { limit: 30 },
      fetchPolicy: 'network-only',
    },
  );

  const resetFilters = () => {
    setSortBy(null);
    setDurationFilter(undefined);
    setYearFilter(undefined);
  };

  useEffect(() => {
    if (data?.songs !== undefined) {
      setSongs(data.songs);
    }
  }, [data]);

  const songOrAlbumJSX = useMemo(() => {
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return (
        <div className="flex items-center justify-center w-full">
          <p>{error.message}</p>
        </div>
      );
    }

    if (chosenDisplay === 'albums') {
      return (
        <AlbumDisplay albums={albums} sortBy={sortBy} />
      );
    }
    return (
      <SongDisplay songs={songs} isLogin={isLogin} sortBy={sortBy} />
    );
  }, [albums, chosenDisplay, error, isLogin, loading, songs, sortBy]);

  return (
    <div className="mb-36 flex flex-col items-center w-full min-h-screen">
      <Header isLogin={isLogin} />
      <SearchBar
        chosenDisplay={chosenDisplay}
        setChosenDisplay={setChosenDisplay}
        setSongs={setSongs}
        setAlbums={setAlbums}
        setYearFilter={setYearFilter}
        setDurationFilter={setDurationFilter}
        yearFilter={yearFilter}
        durationFilter={durationFilter}
        resetFilters={resetFilters}
      />
      <SongAndAlbumOrder sortBy={sortBy} setSortBy={setSortBy} chosenDisplay={chosenDisplay} />

      {songOrAlbumJSX}

      <ScrollToTopButton />
    </div>
  );
}

export default Listen;
