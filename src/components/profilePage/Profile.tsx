import React from 'react';
import Header from '../header/Header';

function Profile({ isLogin }: { isLogin: boolean }) {
  return (
    <div className="mb-5 flex flex-col items-center w-full min-h-screen">
      <Header isLogin={isLogin} />
      <p>Profile</p>
    </div>
  );
}

export default Profile;
