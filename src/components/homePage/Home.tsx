import React from 'react';
import Header from '../header/Header';
import Hero from './Hero';
import Services from './Services';
import SongOverview from './SongOverview';
import ScrollToTopButton from '../customElements/ScrollToTopButton';

type HomeProps = {
  isLogin: boolean;
};

function Home(props: HomeProps): JSX.Element {
  const { isLogin } = props;

  return (
    <div className="mb-5 flex flex-col items-center w-full min-h-screen">
      <Header isLogin={isLogin} />
      <Hero />
      <Services />
      <SongOverview />
      <ScrollToTopButton />
    </div>
  );
}

export default Home;
