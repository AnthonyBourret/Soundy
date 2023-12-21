import React from 'react';
import Header from '../header/Header';
import ScrollToTopButton from '../customElements/ScrollToTopButton';

function Profile({ isLogin }: { isLogin: boolean }) {
  return (
    <div className="mb-5 flex flex-col items-center w-full min-h-screen">
      <Header isLogin={isLogin} />
      <p>Profile</p>
      <ScrollToTopButton />
    </div>
  );
}

export default Profile;
