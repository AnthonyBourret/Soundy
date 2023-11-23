import React from 'react';
import {
  Flex, Text, Button, Card, Avatar, Box,
} from '@radix-ui/themes';
import { useTranslation } from 'react-i18next';
import Header from './Header/Header';

function Create() {
  const { t } = useTranslation(['common', 'translation']);

  return (
    <>
      <Header />
      <div className="mt-5 flex flex-col items-center w-full h-[500px]">
        <Text>Create Page</Text>
      </div>
    </>
  );
}

export default Create;
