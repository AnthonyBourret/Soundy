import React from 'react';
import Hero from './Hero';
import Services from './Services';
import OverviewSongs from './SongsOverview';

function Home() {
  return (
    <div className="my-5 flex flex-col items-center w-full min-h-screen">
      <Hero />
      <Services />
      <OverviewSongs />
    </div>
  );
}

export default Home;
