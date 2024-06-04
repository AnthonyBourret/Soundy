import React from 'react';
import { useTranslation } from 'react-i18next';

import { useApolloClient } from '@apollo/client';
import {
  useAppDispatch,
} from '../../redux';
import type { MenuButton } from '../../types';
import { useNewToast } from '../toastContext';

import VisitorMenu from './visitorMenu/VisitorMenu';
import { ConnectedMenu } from './connectedMenu';
import { resetProfile } from '../../utils';

type HeaderProps = {
  isLogin: boolean;
};

function Header(props: HeaderProps) {
  const { isLogin } = props;
  const { t } = useTranslation('common');
  const client = useApolloClient();
  const dispatch = useAppDispatch();
  const newToast = useNewToast();

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
      onClick: () => resetProfile({
        client,
        dispatch,
        newToast,
        successMessage: t('LOGOUT_TOAST_MESSAGE'),
      }),
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
