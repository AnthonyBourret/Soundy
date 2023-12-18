import React from 'react';
import Header from '../header/Header';
import Hero from './Hero';
import Services from './Services';
import OverviewSongs from './SongsOverview';

function Home({
  isLogin,
  setIsLogin,
}: { isLogin: boolean, setIsLogin: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div className="mb-5 flex flex-col items-center w-full min-h-screen">
      <Header isLogin={isLogin} />

      {/* Toggle for testing visitor/connected-user menu => To delete */}
      <div className="form-control pt-28">
        <label htmlFor="login" className="label gap-4">
          <span className="label-text">{isLogin ? 'Connected' : 'Not-Connected'}</span>
          <input
            name="login"
            type="checkbox"
            className="toggle"
            onChange={() => setIsLogin(!isLogin)}
            checked={isLogin}
          />
        </label>
      </div>

      <Hero />
      <Services />
      <OverviewSongs />
    </div>
  );
}

export default Home;
