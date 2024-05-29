import React, { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AlbumCard } from '../customElements';
import { type ListenPageAlbumsQueryQuery } from '../../types/__generated_schemas__/graphql';

interface Props {
  albums: ListenPageAlbumsQueryQuery['albums'];
  sortBy: string | null;
}

function AlbumDisplay({ albums, sortBy }: Props) {
  const [sortedAlbums, setSortedAlbums] = useState<ListenPageAlbumsQueryQuery['albums']>([]);
  const { t } = useTranslation('common');

  // The useEffect is used to make a new array of songs based on the sortBy value.
  // This array is sorted based on the value of sortBy.

  useEffect(() => {
    if (!albums) {
      setSortedAlbums([]);
    }

    const sorted = Array.isArray(albums) ? albums.filter((album) => album !== null) : [];

    switch (sortBy) {
      case 'ascendingName':
        sorted.sort((a, b) => a!.title.localeCompare(b!.title));
        break;
      case 'descendingName':
        sorted.sort((a, b) => b!.title.localeCompare(a!.title));
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

    setSortedAlbums(sorted);
  }, [albums, sortBy]);

  const albumDisplayed = useMemo(
    () => {
      if (sortedAlbums && sortedAlbums.length > 0) {
        return (
          <div className="flex flex-col items-center w-full pt-4 gap-4 px-2 pb-24">
            {sortedAlbums.map((album) => (
              album && (
              <AlbumCard
                key={album.id}
                title={album.title}
                cover={album.cover ?? ''}
                artist={album.artist?.name || ''}
                year={album!.release_year ?? 0}
                songs={album.songs as []}
              />
              )
            ))}
          </div>
        );
      }
      return (
        <p className="font-semibold p-24 mb-24 text-center text-xl">{t('SEARCH_RESULT_NULL')}</p>
      );
    },
    [sortedAlbums, t],
  );
  return (
    <div className="w-full">
      {albumDisplayed}
    </div>
  );
}

export default AlbumDisplay;
