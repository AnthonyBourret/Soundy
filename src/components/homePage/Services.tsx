import {
  Card,
  Text,
  Flex,
  Button,
  Heading,
} from '@radix-ui/themes';
import React from 'react';
import { SpeakerLoudIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { ServiceCard } from '../../types';

function Services() {
  const serviceCards: ServiceCard[] = [
    {
      icon: <SpeakerLoudIcon width={60} height={60} color="var(--accent-a9)" className="my-2" />,
      title: 'Écoutez une grande variété de sons !',
      text: 'Typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed.',
      buttonText: 'Écouter',
    },
    {
      icon: <PlusCircledIcon width={60} height={60} color="var(--accent-a9)" className="my-2" />,
      title: 'Créez vos propres sons !',
      text: 'Typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed.',
      buttonText: 'Créer',
    },
  ];

  return (
    <Flex className="flex my-[200px] gap-10 flex-wrap !justify-center">

      {serviceCards.map((serviceCard) => (
        <Card size="2" style={{ maxWidth: 240 }}>
          <Flex className="flex-col gap-5 items-center h-full !justify-evenly p-1">
            {serviceCard.icon}
            <Heading as="h3" size="3" className="self-center">
              {serviceCard.title}
            </Heading>
            <Text as="p" size="3">
              {serviceCard.text}
            </Text>
            <Button variant="solid" className="w-full !cursor-pointer">
              {serviceCard.buttonText}
            </Button>
          </Flex>
        </Card>
      ))}

    </Flex>
  );
}

export default Services;
