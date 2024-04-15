import React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../../svg';

function Hero(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="hero mt-[250px] mb-[200px] text-center">
      <div className="max-w-md flex flex-col gap-10">
        <h2 className="text-2xl font-semibold">{t('HERO_TXT_1', { ns: 'translation' })}</h2>

        <div className="flex flex-wrap justify-center gap-10 mb-5">
          <Logo />
          <h1 className="text-5xl font-bold flex self-center pb-3">{t('MENU_APP_NAME', { ns: 'common' })}</h1>
        </div>

        <h3 className="text-xl font-semibold">{t('HERO_TXT_2', { ns: 'translation' })}</h3>
      </div>
    </div>
  );
}

export default Hero;
