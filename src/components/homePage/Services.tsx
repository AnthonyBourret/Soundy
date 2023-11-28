import {
  Card,
  Text,
  Flex,
  Button,
  Heading,
  Link,
} from '@radix-ui/themes';
import React from 'react';
import { SpeakerLoudIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { useTranslation } from 'react-i18next';
import { ServiceCard } from '../../types';

function Services() {
  const { t } = useTranslation(['common', 'translation']);

  const serviceCards: ServiceCard[] = [
    {
      icon: <SpeakerLoudIcon width={60} height={60} color="var(--accent-a9)" className="my-2" />,
      title: t('SERVICES_TITLE_LISTEN', { ns: 'translation' }),
      text: t('SERVICES_TXT_LISTEN', { ns: 'translation' }),
      buttonText: t('Listen', { ns: 'common' }),
      link: '/listen',
    },
    {
      icon: <PlusCircledIcon width={60} height={60} color="var(--accent-a9)" className="my-2" />,
      title: t('SERVICES_TITLE_CREATE', { ns: 'translation' }),
      text: t('SERVICES_TXT_LISTEN', { ns: 'translation' }),
      buttonText: t('Create', { ns: 'common' }),
      link: '/create',
    },
  ];

  return (
    <Flex className="my-[200px] gap-10 !items-stretch h-full">

      {serviceCards.map((serviceCard) => (
        <Card size="2" style={{ maxWidth: 240 }} className="p-3">
          <Flex className="flex-col gap-5 h-full !justify-between p-1">
            {serviceCard.icon}
            <Heading as="h3" size="3" className="self-center">
              {serviceCard.title}
            </Heading>
            <Text as="p" size="3">
              {serviceCard.text}
            </Text>
            <Link href={serviceCard.link} className="w-full">
              <Button variant="solid" className="w-full">
                {serviceCard.buttonText}
              </Button>
            </Link>
          </Flex>
        </Card>
      ))}

    </Flex>
  );
}

export default Services;
