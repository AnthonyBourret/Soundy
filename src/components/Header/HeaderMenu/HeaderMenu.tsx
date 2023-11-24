import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Flex } from '@radix-ui/themes';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import HeaderNotConnected from './HeaderNotConnected';
import HeaderConnected from './HeaderConnected';

function HeaderMenu({ isConnected } : { isConnected : boolean }) {
  const { t } = useTranslation(['common']);
  return (
    <Flex align="center" gap="8">
      <NavigationMenu.Root className="relative z-[1]">
        <NavigationMenu.List className="shadow-blackA4 m-0 flex list-none rounded-[6px] p-1">
          <NavigationMenu.Item className="flex items-center">
            <Link
              to="/"
              className="text-violet11 hover:bg-violet3 focus:shadow-violet7 select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            >
              {t('Home')}
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="flex items-center">
            <Link
              to="/listen"
              className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            >
              {t('Listen')}
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="flex items-center">
            <Link
              to="/create"
              className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            >
              {t('Create')}
            </Link>
          </NavigationMenu.Item>
          {/* Si l'utilisateur n'est pas connecté, afficher le composant HeaderNotConnected */}
          {/* Si l'utilisateur est connecté, afficher le composant HeaderConnected */}
          {isConnected ? (
            <HeaderConnected />
          ) : (
            <HeaderNotConnected />
          )}

        </NavigationMenu.List>
      </NavigationMenu.Root>
    </Flex>
  );
}

export default HeaderMenu;
