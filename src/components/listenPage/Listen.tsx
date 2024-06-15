import React, {
  useState, useEffect, useMemo, useRef, useCallback,
} from 'react';
import { useQuery } from '@apollo/client';

import Header from '../header/Header';
import { ScrollToTopButton, SongAndAlbumOrder, Spinner } from '../customElements';
import { ChosenDisplay } from '../../types';
import { ListenPageSongsQuery } from '../../requests/queries';
import type {
  DurationRange,
  ListenPageAlbumsQueryQuery,
  ListenPageSongsQueryQuery,
  ReleaseYear,
} from '../../types/__generated_schemas__/graphql';

import SearchBar from './SearchBar';
import AlbumDisplay from './AlbumDisplay';
import SongDisplay from './SongDisplay';

function Listen({ isLogin }: { isLogin: boolean }) {
  const [songs, setSongs] = useState<ListenPageSongsQueryQuery['songs']>([]);
  const [albums, setAlbums] = useState<ListenPageAlbumsQueryQuery['albums']>([]);
  const [chosenDisplay, setChosenDisplay] = useState<ChosenDisplay>('songs');
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [durationFilter, setDurationFilter] = useState<DurationRange>();
  const [yearFilter, setYearFilter] = useState<ReleaseYear>();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const {
    data, loading, error, fetchMore,
  } = useQuery<ListenPageSongsQueryQuery>(
    ListenPageSongsQuery,
    {
      variables: { offset: 0, limit: 30 },
      fetchPolicy: 'network-only',
    },
  );

  useEffect(() => {
    if (data?.songs !== undefined) {
      setSongs(data.songs);
    }
  }, [data]);

  const loadMore = useCallback(() => {
    fetchMore({
      variables: {
        offset: songs?.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          songs: [...prev.songs as any, ...fetchMoreResult.songs as any],
        };
      },
    });
  }, [fetchMore, songs]);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [loadMore]);

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
      return <AlbumDisplay albums={albums} sortBy={sortBy} />;
    }

    return <SongDisplay songs={songs} isLogin={isLogin} sortBy={sortBy} />;
  }, [albums, chosenDisplay, error, isLogin, loading, songs, sortBy]);

  return (
    <div className="mb-36 flex flex-col items-center w-full min-h-screen">
      <Header isLogin={isLogin} />
      <SearchBar
        chosenDisplay={chosenDisplay}
        setChosenDisplay={setChosenDisplay}
        setSongs={() => {}}
        resetFilters={() => {}}
        setAlbums={setAlbums}
        setYearFilter={setYearFilter}
        setDurationFilter={setDurationFilter}
        yearFilter={yearFilter}
        durationFilter={durationFilter}
      />
      <SongAndAlbumOrder sortBy={sortBy} setSortBy={setSortBy} chosenDisplay={chosenDisplay} />

      {songOrAlbumJSX}

      <div ref={loadMoreRef} className="observer-element" />

      <ScrollToTopButton />
    </div>
  );
}

export default Listen;
