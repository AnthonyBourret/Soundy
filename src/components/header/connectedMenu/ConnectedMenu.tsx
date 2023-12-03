import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { MenuButton } from '../../../types';
import Logo from '../../../svg/logo';

function ConnectedMenu() {
  const { t, i18n } = useTranslation();

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

  function handleClick(lng: string) {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="navbar bg-base-100 px-8 pt-0">

      {/* Logo */}
      <div className="navbar-start flex items-center gap-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center">
          <Logo />
        </div>
        <Link to="/">
          <button type="button" className="text-2xl font-bold">{t('MENU_APP_NAME', { ns: 'common' })}</button>
        </Link>
      </div>

      {/* Burger Menu */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost" aria-label="open menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>

          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li className="flex-row items-center">
              <div tabIndex={0} role="button" className="avatar m-1">
                {' '}
                <div className="w-10 rounded-full">
                  <img src="https://picsum.photos/id/1062/200" alt="user avatar" />
                </div>
              </div>
              <h2 className="text-lg font-bold">Username</h2>
            </li>
            <div className="divider divider-secondary m-1 px-1" />
            {/* Nav Button */}
            {menuButton.map((button) => (
              <li key={button.text}>
                <NavLink
                  to={button.link}
                  className={({ isActive }) => (isActive ? 'font-semibold text-secondary' : 'font-semibold')}
                >
                  {button.text}
                </NavLink>
              </li>
            ))}
            {/* Language Button */}
            <li>
              <details>
                <summary className="font-semibold">{t('MENU_LANGUAGE', { ns: 'common' })}</summary>
                <ul className="p-2">
                  <li>
                    <button
                      type="button"
                      onClick={() => handleClick('fr')}
                    >
                      {t('MENU_LANGUAGE_1', { ns: 'common' })}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => handleClick('en')}
                    >
                      {t('MENU_LANGUAGE_2', { ns: 'common' })}
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal items-center flex-nowrap">
          {/* Nav Button (array sliced) */}
          {menuButton.slice(0, 4).map((button) => (
            <li key={button.text}>
              <NavLink
                to={button.link}
                className={({ isActive }) => (isActive ? 'btn btn-ghost text-secondary' : 'btn btn-ghost')}
              >
                {button.text}
              </NavLink>
            </li>
          ))}
          {/* Avatar Clickable */}
          <div className="dropdown dropdown-hover dropdown-end">
            <div tabIndex={0} role="button" className="avatar m-1 px-4">
              {' '}
              <div className="w-12 rounded-full">
                <img src="https://picsum.photos/id/1062/200" alt="user avatar" />
              </div>
            </div>
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink
                  to="/profile"
                  className="font-semibold"
                >
                  {t('MENU_PROFILE', { ns: 'common' })}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="font-semibold"
                >
                  {t('MENU_LOGOUT', { ns: 'common' })}
                </NavLink>
              </li>
              {/* Language Button */}
              <li>
                <details>
                  <summary className="font-semibold">{t('MENU_LANGUAGE', { ns: 'common' })}</summary>
                  <ul className="p-2">
                    <li>
                      <button
                        type="button"
                        onClick={() => handleClick('fr')}
                      >
                        {t('MENU_LANGUAGE_1', { ns: 'common' })}
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => handleClick('en')}
                      >
                        {t('MENU_LANGUAGE_2', { ns: 'common' })}
                      </button>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default ConnectedMenu;
