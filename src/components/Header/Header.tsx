import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, Text, Box } from '@radix-ui/themes';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderMenuBurger from './HeaderMenuBurger/HeaderMenuBurger';

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const { t } = useTranslation(['common', 'translation']);
  return (
    <Flex justify="between" p="4">
      <Box>
        Soundy
      </Box>
      {isMobile ? (
        <HeaderMenuBurger />
      ) : (
        <HeaderMenu />
      )}

    </Flex>
  );
}

export default Header;
