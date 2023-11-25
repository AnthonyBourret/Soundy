import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../../svg/logo';

function Hero() {
  const { t } = useTranslation(['common', 'translation']);

  return (
    <div className="flex flex-col">
      <h3>{t('HERO_TXT_1', { ns: 'translation' })}</h3>
      <div className="flex">
        <Logo />
        <h1>Soundy</h1>
      </div>

      <h3>{t('HERO_TXT_2', { ns: 'translation' })}</h3>
    </div>
  );
}

export default Hero;
