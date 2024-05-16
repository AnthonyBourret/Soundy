import React, { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SongCard } from '../customElements';
import { ListenPageSongsQueryQuery } from '../../types/__generated_schemas__/graphql';

interface Props {
  songs: ListenPageSongsQueryQuery['songs'];
  isLogin: boolean;
  sortBy: string | null;
}

function SongDisplay({ songs, isLogin, sortBy }: Props) {
  const [sortedSongs, setSortedSongs] = useState<Props['songs']>([]);
  const { t } = useTranslation('common');

  // The useEffect is used to make a new array of songs based on the sortBy value.
  // This array is sorted based on the value of sortBy.

  useEffect(() => {
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
  }, [songs, sortBy]);

  const songDisplayed = useMemo(
    () => {
      if (sortedSongs && sortedSongs.length > 0) {
        return (
          <div className="flex flex-col min-[540px]:px-12 pt-4 p-2 gap-4 min-[540px]:flex-row min-[540px]:flex-wrap min-[540px]:justify-around pb-24">
            {sortedSongs.map(
              (song) => (
                // TODO - Fix the types
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
        );
      }
      return (
        <p className="font-semibold p-24 mb-24 text-center text-xl">{t('SEARCH_RESULT_NULL')}</p>
      );
    },
    [sortedSongs, isLogin, t],
  );
  return (
    <div className="w-full">
      {songDisplayed}
    </div>
  );
}

export default SongDisplay;
