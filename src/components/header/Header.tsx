import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  useAppDispatch, setToken,
} from '../../redux';
import VisitorMenu from './visitorMenu/VisitorMenu';
import { ConnectedMenu } from './connectedMenu';
import type { MenuButton } from '../../types';

type HeaderProps = {
  isLogin: boolean;
};

function Header(props: HeaderProps) {
  const { t } = useTranslation();
  const { isLogin } = props;

  const dispatch = useAppDispatch();

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
      text: t('MENU_LOGOUT', { ns: 'common' }),
      onClick: () => {
        dispatch(setToken(null));
      },
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
