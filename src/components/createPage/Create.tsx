import React from 'react';
import Header from '../header/Header';

function Create({ isLogin }: { isLogin: boolean }) {
  return (
    <div className="my-5 flex flex-col items-center w-full min-h-screen">
      <Header isLogin={isLogin} />
      <p>Create</p>
    </div>
  );
}

export default Create;
