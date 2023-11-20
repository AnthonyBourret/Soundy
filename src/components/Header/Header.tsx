import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flex, Text, Box } from '@radix-ui/themes';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import HeaderSelect from './HeaderSelect';

function Header() {
  const { t } = useTranslation(['common', 'translation']);
  return (
    <Flex justify="between">
      <Box>
        Soundy
      </Box>
      <Box>
        <NavigationMenu.Root className="relative z-[1] flex justify-center">
          <NavigationMenu.List className="center shadow-blackA4 m-0 flex list-none rounded-[6px] p-1">
            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                href="#"
              >
                {t('Home')}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                href="#"
              >
                {t('Listen')}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                href="#"
              >
                {t('Create')}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                href="#"
              >
                {t('Login')}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                href="#"
              >
                {t('Register')}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <HeaderSelect />
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </Box>
    </Flex>
  );
}

export default Header;
