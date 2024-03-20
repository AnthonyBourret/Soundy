import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Hero from './Hero';
import Services from './Services';
import SongOverview from './SongOverview';
import { ScrollToTopButton } from '../customElements';

type HomeProps = {
  isLogin: boolean;
  isRedirected?: boolean;
};

function Home(props: HomeProps): JSX.Element {
  const { isLogin, isRedirected = false } = props;
  const [toastVisible, setToastVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(
    () => {
      if (isRedirected) {
        setToastVisible(true);
        navigate('/', { replace: true });
      }

      const timeoutId = setTimeout(() => {
        setToastVisible(false);
      }, 2000);

      return () => clearTimeout(timeoutId);
    },
    [isRedirected, navigate],
  );

  const connexionRequired = useMemo(
    () => {
      if (toastVisible) {
        return (
          <div className="toast z-30">
            <div className="alert alert-info">
              <span>Vous devez vous connecter pour accéder à cette section</span>
            </div>
          </div>
        );
      }
      return null;
    },
    [toastVisible],
  );

  return (
    <div className="mb-5 flex flex-col items-center w-full min-h-screen">
      {connexionRequired}
      <Header isLogin={isLogin} />
      <Hero />
      <Services />
      <SongOverview />
      <ScrollToTopButton />
    </div>
  );
}

export default Home;
