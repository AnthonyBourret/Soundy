import React from 'react';
import AlbumCard from '../customElements/AlbumCard';
import { CardAlbum } from '../../types';

interface Props {
  albums: Array<CardAlbum>;
  isLogin: boolean;
}

function AlbumDisplay({ albums, isLogin }: Props) {
  return (
    <div className="flex flex-col items-center w-full pt-4 gap-4 px-2">
      {albums && albums.map((album) => (
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
