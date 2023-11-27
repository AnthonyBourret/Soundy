import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Flex } from '@radix-ui/themes';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import HeaderNotConnected from './HeaderNotConnected';
import HeaderConnected from './HeaderConnected';

function HeaderMenu({ isConnected } : { isConnected : boolean }) {
  const { t } = useTranslation(['common']);

  return (
    <Flex align="center" gap="8">
      <NavigationMenu.Root className="relative">
        <NavigationMenu.List className="shadow-blackA4 m-0 flex list-none rounded-[6px] p-1">
          <NavigationMenu.Item className="flex items-center">
            <NavLink
              to="/"
              className={({ isActive }) => (
                isActive
                  ? 'text-red-500 border-b-2 border-red-500 select-none px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none'
                  : 'text-white border-b-2 border-black/[1] select-none px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none')}
            >
              {t('Home')}
            </NavLink>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="flex items-center">
            <NavLink
              to="/listen"
              className={({ isActive }) => (
                isActive
                  ? 'text-red-500 border-b-2 border-red-500 select-none px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none'
                  : 'text-white border-b-2 border-black/[1] select-none px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none')}
            >
              {t('Listen')}
            </NavLink>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="flex items-center">
            <NavLink
              to="/create"
              className={({ isActive }) => (
                isActive
                  ? 'text-red-500 border-b-2 border-red-500 select-none px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none'
                  : 'text-white border-b-2 border-black/[1] select-none px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none')}
            >
              {t('Create')}
            </NavLink>
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
