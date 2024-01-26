import React from 'react';
import AlbumCard from '../customElements/AlbumCard';
import { CardAlbum } from '../../types';

interface Props {
  albums: Array<CardAlbum>;
}

function AlbumDisplay({ albums }: Props) {
  return (
    <div className="flex flex-col items-center w-full pt-4 gap-4 px-2">
      {albums && albums.map((album) => (
        <AlbumCard
          key={album.id}
          title={album.title}
          cover={album.cover}
          year={album.release_year}
          songs={album.songs}
        />
      ))}
    </div>
  );
}

export default AlbumDisplay;
