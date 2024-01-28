import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Logo } from '../../svg';

function HeaderLogo() {
  const { t } = useTranslation('common');
  return (
    <div className="navbar-start flex items-center gap-4 pl-10">
      <div className="w-12 h-12 rounded-full flex items-center justify-center">
        <Logo />
      </div>
      <Link to="/">
        <div className="text-2xl font-bold">{t('MENU_APP_NAME')}</div>
      </Link>
    </div>
  );
}

export default HeaderLogo;
