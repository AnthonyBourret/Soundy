import {
  AspectRatio,
  Card,
  Text,
  Flex,
  Heading,
  Separator,
  Button,
  Link,
} from '@radix-ui/themes';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { PlayIcon } from '@radix-ui/react-icons';
import fakeSongs from './fakeSongs';

function OverviewSongs() {
  const { t } = useTranslation(['common', 'translation']);

  return (
    <Flex className="flex-col w-[60%] !items-start mb-[200px]">
      <Heading className="pl-2">{t('OVERVIEW_TITLE', { ns: 'translation' })}</Heading>
      <Separator my="3" size="4" className="w-full" />

      <Flex className="gap-y-5 !justify-between w-full my-7">
        {fakeSongs.map((song) => (
          <Card size="2" className="w-[17%]">
            <Flex className="flex-col gap-2 h-full !justify-between p-2 relative">
              <AspectRatio ratio={3 / 4} className="relative">
                <img
                  src={song.picture}
                  alt={song.title}
                  className="object-cover w-full h-full rounded-md"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 duration-150">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                    <PlayIcon
                      width="75%"
                      height="75%"
                      color="#3b1219"
                      className="pl-1"
                    />
                  </div>
                </div>
              </AspectRatio>
              <Heading as="h3" size="3" className="self-center">
                {song.title}
              </Heading>
              <Text as="p" size="3">
                {song.artist}
              </Text>
            </Flex>
          </Card>

        ))}
      </Flex>

      <Flex className="self-center mt-10 flex-col gap-5">
        <Text className="text-center w-[60%]">{t('SERVICES_TXT_1', { ns: 'translation' })}</Text>
        <Link href="/listen" className="w-[40%]">
          <Button variant="solid" className="w-full">
            {t('listen', { ns: 'common' })}
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default OverviewSongs;
