import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  useAppDispatch, setToken,
} from '../../redux';
import VisitorMenu from './visitorMenu/VisitorMenu';
import { ConnectedMenu } from './connectedMenu';
import type { MenuButton } from '../../types';
import { useNewToast } from '../toastContext';

type HeaderProps = {
  isLogin: boolean;
};

function Header(props: HeaderProps) {
  const { t } = useTranslation('common');
  const { isLogin } = props;
  const newToast = useNewToast();
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
      text: t('MENU_LOGOUT'),
      onClick: () => {
        dispatch(setToken(null));
        newToast('success', t('LOGOUT_TOAST_MESSAGE'));
      },
      link: '/logout',
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
