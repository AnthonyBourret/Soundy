import React from 'react';
import { useTranslation } from 'react-i18next';
import VisitorMenu from './visitorMenu/VisitorMenu';
import ConnectedMenu from './connectedMenu/ConnectedMenu';
import { MenuButton } from '../../types';

function Header({ isLogin }: { isLogin: boolean }) {
  const { t } = useTranslation('common');
  const menuButton: MenuButton[] = [
    {
      text: t('MENU_HOME'),
      link: '/',
    },
    {
      text: t('MENU_LISTEN'),
      link: '/listen',
    },
    {
      text: t('MENU_CREATE'),
      link: '/create',
    },
    {
      text: t('MENU_FAVORITES'),
      link: '/favorites',
    },
    {
      text: t('MENU_PROFILE'),
      link: '/profile',
    },
    {
      text: t('MENU_LOGOUT'),
      link: '/',
    },
  ];
  return (
    <div className="w-full fixed z-10">
      {isLogin
        ? <ConnectedMenu menuButton={menuButton} />
        : <VisitorMenu menuButton={menuButton} />}
    </div>
  );
}

export default Header;
