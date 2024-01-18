import React from 'react';
import Header from '../header/Header';
import ScrollToTopButton from '../customElements/ScrollToTopButton';
import SongCard from '../customElements/SongCard';
import AlbumCard from '../customElements/AlbumCard';

function Listen({ isLogin }: { isLogin: boolean }) {
  return (
    <div className="mb-5 flex flex-col items-center w-full min-h-screen">
      <Header isLogin={isLogin} />
      <SongCard />
      <SongCard />
      <AlbumCard />
      <AlbumCard />
      <ScrollToTopButton />
    </div>
  );
}

export default Listen;
