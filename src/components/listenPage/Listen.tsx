import React from 'react';
import Header from '../header/Header';

function Listen({ isLogin }: { isLogin: boolean }) {
  return (
    <div className="my-5 flex flex-col items-center w-full min-h-screen">
      <Header isLogin={isLogin} />
      <p>Listen</p>
    </div>
  );
}

export default Listen;
