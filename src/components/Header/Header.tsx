import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, Text, Box } from '@radix-ui/themes';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderMenuBurger from './HeaderMenuBurger/HeaderMenuBurger';

function Header() {
  const { t } = useTranslation(['common', 'translation']);
  return (
    <Flex justify="between" p="4">
      <Box>
        Soundy
      </Box>
      <HeaderMenuBurger />
    </Flex>
  );
}

export default Header;
