import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import Header from '../header/Header';
import {
  SongCard, ScrollToTopButton, SongAndAlbumOrder, Spinner,
} from '../customElements';
import { Logo } from '../../svg';
import { FavoriteSongsQuery } from '../../requests/queries';
import { SongListenPageQueryQuery } from '../../types/__generated_schemas__/graphql';

interface Props {
  songs: SongListenPageQueryQuery['songs'];
  isLogin: boolean;
  sortBy: string | null;
}

function Favorites({ isLogin }: { isLogin: boolean }) {
  const { t } = useTranslation('common');
  const { data, loading, error } = useQuery(FavoriteSongsQuery, { variables: { liked: true } });
  const [songs, setSongs] = useState<SongListenPageQueryQuery['songs']>([]);
  const [sortedSongs, setSortedSongs] = useState<Props['songs']>([]);
  const [sortBy, setSortBy] = useState<string | null>(null);

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
      <div className="pt-32">
        <div className="flex flex-col items-center gap-4 pb-8">
          <div className="w-16 h-16 min-[540px]:w-20 min-[540px]:h-20 rounded-full flex items-center justify-center">
            <Logo />
          </div>
          <h1 className="text-2xl min-[540px]:text-4xl font-bold">{t('MENU_APP_NAME')}</h1>
        </div>
      </div>
      <div className="divider py-4 px-8 min-[540px]:px-36" />
      <SongAndAlbumOrder setSortBy={setSortBy} />
      <div className="flex flex-col min-[540px]:px-12 pt-4 p-2 gap-4 min-[540px]:flex-row min-[540px]:flex-wrap min-[540px]:justify-around">
        {sortedSongs && sortedSongs.map(
          (song) => (
            <SongCard
              isLiked={song!.isLiked || false}
              artist={song!.artist || { name: '' }}
              cover={song!.cover || ''}
              duration={song!.duration}
              releaseYear={song!.release_year}
              isLogin={isLogin}
              key={song?.id}
              songId={song!.id}
              title={song!.title}
            />
          ),
        )}
        {loading && <Spinner />}
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

export default Favorites;
