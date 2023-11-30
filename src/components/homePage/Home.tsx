import React from 'react';
import Header from '../header/Header';
import Hero from './Hero';
import Services from './Services';
import OverviewSongs from './SongsOverview';

function Home() {
  return (
    <div className="my-5 flex flex-col items-center w-full min-h-screen">
      <Header />
      <Hero />
      <Services />
      <OverviewSongs />
    </div>
  );
}

export default Home;
