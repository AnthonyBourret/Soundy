import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import LoginModal from '../../modals/LoginModal';
import SignupModal from '../../modals/SignupModal';
import Logo from '../../../svg/logo';

function VisitorMenu() {
  const { t, i18n } = useTranslation();

  function handleClick(lng: string) {
    i18n.changeLanguage(lng);
  }

  return (
    <>
      <div className="navbar bg-base-100 px-8">

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
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? 'font-semibold text-secondary' : 'font-semibold')}
                >
                  {t('MENU_HOME', { ns: 'common' })}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/listen"
                  className={({ isActive }) => (isActive ? 'font-semibold text-secondary' : 'font-semibold')}
                >
                  {t('MENU_LISTEN', { ns: 'common' })}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/create"
                  className={({ isActive }) => (isActive ? 'font-semibold text-secondary' : 'font-semibold')}
                >
                  {t('MENU_CREATE', { ns: 'common' })}
                </NavLink>
              </li>
              <li>
                <button
                  type="button"
                  className="font-semibold"
                  onClick={() => document.getElementById('login_modal')?.showModal()}
                >
                  {t('MENU_LOGIN', { ns: 'common' })}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="font-semibold"
                  onClick={() => document.getElementById('signup_modal')?.showModal()}
                >
                  {t('MENU_SIGNUP', { ns: 'common' })}
                </button>
              </li>
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
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'btn btn-ghost text-secondary' : 'btn btn-ghost')}
              >
                {t('MENU_HOME', { ns: 'common' })}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listen"
                className={({ isActive }) => (isActive ? 'btn btn-ghost text-secondary' : 'btn btn-ghost')}
              >
                {t('MENU_LISTEN', { ns: 'common' })}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/create"
                className={({ isActive }) => (isActive ? 'btn btn-ghost text-secondary' : 'btn btn-ghost')}
              >
                {t('MENU_CREATE', { ns: 'common' })}
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => document.getElementById('login_modal')?.showModal()}
              >
                {t('MENU_LOGIN', { ns: 'common' })}
              </button>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => document.getElementById('signup_modal')?.showModal()}
              >
                {t('MENU_SIGNUP', { ns: 'common' })}
              </button>
            </li>
            <li>
              <details>
                <summary className="btn btn-ghost font-semibold">{t('MENU_LANGUAGE', { ns: 'common' })}</summary>
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
      <LoginModal />
      <SignupModal />
    </>
  );
}

export default VisitorMenu;
