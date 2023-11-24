import React from 'react';
import { Box } from '@radix-ui/themes';
import BurgerConnected from './BurgerConnected';
import BurgerNotConnected from './BurgerNotConnected';

function HeaderMenuBurger({ isConnected } : { isConnected : boolean }) {
  return (
    <Box>
      {isConnected ? (
        <BurgerConnected />
      ) : (
        <BurgerNotConnected />
      )}
    </Box>
  );
}

export default HeaderMenuBurger;
