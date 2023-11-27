import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, Heading, Text } from '@radix-ui/themes';
import Logo from '../../svg/logo';

function Hero() {
  const { t } = useTranslation(['common', 'translation']);

  return (
    <Flex className="flex-col mt-[200px] gap-10 text-center">
      <Text size="5">{t('HERO_TXT_1', { ns: 'translation' })}</Text>
      <Flex className="gap-10 mb-5">
        <Logo />
        <Heading as="h1" size="9" className="self-center">Soundy</Heading>
      </Flex>
      <Text size="5">{t('HERO_TXT_2', { ns: 'translation' })}</Text>
    </Flex>
  );
}

export default Hero;
