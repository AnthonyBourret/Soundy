import React from 'react';
import { useTranslation } from 'react-i18next';
import VisitorMenu from './visitorMenu/VisitorMenu';
import ConnectedMenu from './connectedMenu/ConnectedMenu';
import { MenuButton } from '../../types';

function Header({ isLogin }: { isLogin: boolean }) {
  const { t } = useTranslation();
  const menuButton: MenuButton[] = [
    {
      text: t('MENU_HOME', { ns: 'common' }),
      link: '/',
    },
    {
      text: t('MENU_LISTEN', { ns: 'common' }),
      link: '/listen',
    },
    {
      text: t('MENU_CREATE', { ns: 'common' }),
      link: '/create',
    },
    {
      text: t('MENU_FAVORITES', { ns: 'common' }),
      link: '/favorites',
    },
    {
      text: t('MENU_PROFILE', { ns: 'common' }),
      link: '/profile',
    },
    {
      text: t('MENU_LOGOUT', { ns: 'common' }),
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
