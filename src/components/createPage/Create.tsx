import React from 'react';
import Header from '../header/Header';
import ScrollToTopButton from '../customElements/ScrollToTopButton';

function Create({ isLogin }: { isLogin: boolean }) {
  return (
    <div className="mb-5 flex flex-col items-center w-full min-h-screen">
      <Header isLogin={isLogin} />
      <p>Create</p>
      <ScrollToTopButton />
    </div>
  );
}

export default Create;
