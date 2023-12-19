import React from 'react';
import Header from '../header/Header';
import ScrollToTopButton from '../customElements/ScrollToTopButton';

function Favorites({ isLogin }: { isLogin: boolean }) {
  return (
    <div className="mb-5 flex flex-col items-center w-full min-h-screen">
      <Header isLogin={isLogin} />
      <p>Favorites</p>
      <ScrollToTopButton />
    </div>
  );
}

export default Favorites;
