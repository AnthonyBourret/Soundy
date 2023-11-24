import React, { useState, useEffect } from 'react';
import { Flex } from '@radix-ui/themes';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderMenuBurger from './HeaderMenuBurger/HeaderMenuBurger';

function Header({ isConnected } : { isConnected : boolean }) {
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

  return (
    <Flex justify="between" align="center" m="5" height="5">
      <HeaderLogo />
      {isMobile ? (
        <HeaderMenuBurger isConnected={isConnected} />
      ) : (
        <HeaderMenu isConnected={isConnected} />
      )}

    </Flex>
  );
}

export default Header;
