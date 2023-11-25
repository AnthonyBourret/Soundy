import React from 'react';
import {
  Flex, Text, Button, Card, Avatar, Box,
} from '@radix-ui/themes';
import { useTranslation } from 'react-i18next';
import Hero from './Hero';

function Home() {
  const { t, i18n } = useTranslation(['common', 'translation']);
  const lngs = {
    en: { nativeName: t('LANGUAGE_1', { ns: 'translation' }) },
    fr: { nativeName: t('LANGUAGE_2', { ns: 'translation' }) },
  };

  return (
    <div className="mt-5 flex flex-col items-center w-full h-[500px]">
      <Hero />

    </div>
  );
}

export default Home;
