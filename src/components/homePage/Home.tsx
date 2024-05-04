import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ScrollToTopButton } from '../customElements';
import Header from '../header/Header';
import { useNewToast } from '../toastContext';

import Hero from './Hero';
import Services from './Services';
import SongOverview from './SongOverview';

type HomeProps = {
  isLogin: boolean;
  isRedirected?: boolean;
};

const Home = (props: HomeProps): JSX.Element => {
  const { isLogin, isRedirected = false } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const newToast = useNewToast();

  useEffect(() => {
    if (isRedirected) {
      navigate('/', { replace: true });
      newToast('info', t('CONNECT_TOAST_MESSAGE', { ns: 'common' }));
    }
  }, [isRedirected, navigate, newToast, t]);

  return (
    <div className="mb-5 flex flex-col items-center w-full min-h-screen">
      <Header isLogin={isLogin} />
      <Hero />
      <Services />
      <SongOverview />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
