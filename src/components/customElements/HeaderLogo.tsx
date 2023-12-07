import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from '../../svg/logo';

function HeaderLogo() {
  const { t } = useTranslation();
  return (
    <div className="navbar-start flex items-center gap-4">
      <div className="w-12 h-12 rounded-full flex items-center justify-center">
        <Logo />
      </div>
      <Link to="/">
        <button type="button" className="text-2xl font-bold">{t('MENU_APP_NAME', { ns: 'common' })}</button>
      </Link>
    </div>
  );
}

export default HeaderLogo;
