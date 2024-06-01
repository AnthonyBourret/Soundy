import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import Header from '../header/Header';
import {
  SongCard, ScrollToTopButton, SongAndAlbumOrder, Spinner,
} from '../customElements';
import { ArrowDown } from '../../svg';
import { FavoriteSongsQuery } from '../../requests/queries';
import { ListenPageSongsQueryQuery } from '../../types/__generated_schemas__/graphql';
import PageTitle from '../customElements/PageTitle';
import { useNewToast } from '../toastContext';

interface Props {
  songs: ListenPageSongsQueryQuery['songs'];
  isLogin: boolean;
  sortBy: string | null;
}

function Favorites({ isLogin }: { isLogin: boolean }) {
  const { t } = useTranslation('translation');
  const { data, loading, error } = useQuery(FavoriteSongsQuery, {
    fetchPolicy: 'no-cache',
  });
  const [songs, setSongs] = useState<ListenPageSongsQueryQuery['songs']>([]);
  const [sortedSongs, setSortedSongs] = useState<Props['songs']>([]);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const newToast = useNewToast();

  useEffect(() => {
    if (error) {
      newToast('error', t('ERROR_TO_FETCH_FAVORITES'));
    }
  }, [error, newToast, t]);

  const favoriteSongs = useMemo(() => {
    if (sortedSongs !== null && sortedSongs !== undefined && sortedSongs.length !== 0) {
      return (
        <>
          <SongAndAlbumOrder chosenDisplay="songs" setSortBy={setSortBy} />
          <div className="flex flex-col min-[540px]:px-12 pt-4 p-2 gap-4 min-[540px]:flex-row min-[540px]:flex-wrap min-[540px]:justify-around">
            {sortedSongs && sortedSongs.map(
              (song) => (
                <SongCard
                  isLiked={song!.isLiked || false}
                  artist={song!.artist || { name: '' }}
                  cover={song!.cover || ''}
                  duration={song!.duration}
                  releaseYear={song!.release_year ?? 0}
                  isLogin={isLogin}
                  key={song?.id}
                  songId={song!.id}
                  title={song!.title}
                />
              ),
            )}
          </div>
        </>
      );
    }
    return (
      <div className="flex flex-col gap-8 items-center justify-center w-full">
        <p className="text-center text-lg font-semibold px-4">{t('FAVORITES_PAGE_EMPTY', { ns: 'translation' })}</p>
        <ArrowDown />
        <Link to="/listen">
          <button
            type="button"
            className="btn btn-lg py-3 btn-primary"
          >
            {t('LISTEN', { ns: 'common' })}
          </button>
        </Link>
      </div>
    );
  }, [isLogin, sortedSongs, t]);

  useEffect(() => {
    if (data?.songs !== undefined) {
      setSongs(data.songs);
    }
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
      case 'latest':
        sorted.sort((a, b) => Number(b!.release_year) - Number(a!.release_year));
        break;
      case 'oldest':
        sorted.sort((a, b) => Number(a!.release_year) - Number(b!.release_year));
        break;
      default:
        break;
    }
    setSortedSongs(sorted);
  }, [data, songs, sortBy]);

  return (
    <div className="mb-5 flex flex-col items-center w-full min-h-screen">
      <Header isLogin={isLogin} />
      <PageTitle title={t('FAVORITES_PAGE_TITLE')} />

      {favoriteSongs}
      {loading && <Spinner />}

      {error && (
      <div className="flex items-center justify-center w-full">
        <p>{error.message}</p>
      </div>
      )}

      <ScrollToTopButton />
    </div>
  );
}

export default Favorites;
