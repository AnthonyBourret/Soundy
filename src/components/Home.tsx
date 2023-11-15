import React from 'react';
import {
  Flex, Text, Button, Card, Avatar, Box,
} from '@radix-ui/themes';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t, i18n } = useTranslation();
  const lngs = {
    en: { nativeName: t('LANGUAGE_1') },
    fr: { nativeName: t('LANGUAGE_2') },
  };

  return (
    <div className="mt-5 flex flex-col items-center w-full h-[500px]">
      {t('HOME')}
      <p>{t('WELCOME')}</p>

      <Flex direction="column" gap="2">
        <Text>{t('TEST')}</Text>
        <Button className="cursor-pointer">{t('BUTTON_TEXT')}</Button>
      </Flex>

      <Card style={{ maxWidth: 240 }}>
        <Flex gap="3" align="center">
          <Avatar
            size="3"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="full"
            fallback="T"
          />
          <Box>
            <Text as="div" size="2" weight="bold">
              Teodros Girmay
            </Text>
            <Text as="div" size="2" color="gray">
              {t('JOB')}
            </Text>
          </Box>
        </Flex>
      </Card>
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
