import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Box } from '@radix-ui/themes';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import HeaderSelect from './HeaderSelect';

function HeaderMenu() {
  const { t } = useTranslation(['common', 'translation']);
  return (
    <Box>
      <NavigationMenu.Root className="relative z-[1] flex justify-center">
        <NavigationMenu.List className="center shadow-blackA4 m-0 flex list-none rounded-[6px] p-1">
          <NavigationMenu.Item>
            <Link
              to="/"
              className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            >
              {t('Home')}
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link
              to="/listen"
              className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            >
              {t('Listen')}
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link
              to="/create"
              className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            >
              {t('Create')}
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link
              to="/"
              className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            >
              {t('Login')}
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link
              to="/"
              className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            >
              {t('Register')}
            </Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>

            <HeaderSelect />

          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </Box>
  );
}

export default HeaderMenu;
