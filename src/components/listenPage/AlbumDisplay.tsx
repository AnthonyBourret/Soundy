import React, { useEffect, useState } from 'react';
import AlbumCard from '../customElements/AlbumCard';
import { CardAlbum } from '../../types';

interface Props {
  albums: Array<CardAlbum>;
  isLogin: boolean;
  sortBy: string;
}

function AlbumDisplay({ albums, isLogin, sortBy }: Props) {
  const [sortedAlbums, setSortedAlbums] = useState<CardAlbum[]>([]);

  // The useEffect is used to make a new array of songs based on the sortBy value.
  // This array is sorted based on the value of sortBy.

  useEffect(() => {
    if (sortBy === 'none') {
      setSortedAlbums(albums);
    }
    if (sortBy === 'ascendingName') {
      setSortedAlbums([...albums].sort((a, b) => a.title.localeCompare(b.title)));
    }
    if (sortBy === 'descendingName') {
      setSortedAlbums([...albums].sort((a, b) => b.title.localeCompare(a.title)));
    }
    // Standby API => More songs on albums
    // if (sortBy === 'durationAsc') {
    //   setSortedAlbums([...albums].sort((a, b) => Number(a.duration) - Number(b.duration)));
    // }
    // if (sortBy === 'durationDesc') {
    //   setSortedAlbums([...albums].sort((a, b) => Number(b.duration) - Number(a.duration)));
    // }
    if (sortBy === 'latest') {
      setSortedAlbums([...albums].sort((a, b) => Number(b.release_year) - Number(a.release_year)));
    }
    if (sortBy === 'oldest') {
      setSortedAlbums([...albums].sort((a, b) => Number(a.release_year) - Number(b.release_year)));
    }
  }, [sortBy, albums]);
  return (
    <div className="flex flex-col items-center w-full pt-4 gap-4 px-2">
      {sortedAlbums && sortedAlbums.map((album) => (
        <AlbumCard
          key={album.id}
          title={album.title}
          cover={album.cover}
          year={album.release_year}
          songs={album.songs}
          isLogin={isLogin}
        />
      ))}
    </div>
  );
}

export default AlbumDisplay;
