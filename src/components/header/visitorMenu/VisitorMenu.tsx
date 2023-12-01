import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import LoginModal from '../../modals/LoginModal';
import SignupModal from '../../modals/SignupModal';

function VisitorMenu() {
  const { t, i18n } = useTranslation();

  function handleClick(lng: string) {
    i18n.changeLanguage(lng);
  }

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="open menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? 'text-red-500' : '')}
                >
                  {t('MENU_HOME', { ns: 'common' })}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/listen"
                  className={({ isActive }) => (isActive ? 'text-red-500' : '')}
                >
                  {t('MENU_LISTEN', { ns: 'common' })}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/create"
                  className={({ isActive }) => (isActive ? 'text-red-500' : '')}
                >
                  {t('MENU_CREATE', { ns: 'common' })}
                </NavLink>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => document.getElementById('login_modal').showModal()}
                >
                  {t('MENU_LOGIN', { ns: 'common' })}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => document.getElementById('signup_modal').showModal()}
                >
                  {t('MENU_SIGNUP', { ns: 'common' })}
                </button>
              </li>
              <li>
                <details>
                  <summary>{t('MENU_LANGUAGE', { ns: 'common' })}</summary>
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
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'text-red-500' : '')}
              >
                {t('MENU_HOME', { ns: 'common' })}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listen"
                className={({ isActive }) => (isActive ? 'text-red-500' : '')}
              >
                {t('MENU_LISTEN', { ns: 'common' })}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/create"
                className={({ isActive }) => (isActive ? 'text-red-500' : '')}
              >
                {t('MENU_CREATE', { ns: 'common' })}
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                onClick={() => document.getElementById('login_modal').showModal()}
              >
                {t('MENU_LOGIN', { ns: 'common' })}
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => document.getElementById('signup_modal').showModal()}
              >
                {t('MENU_SIGNUP', { ns: 'common' })}
              </button>
            </li>
            <li>
              <details>
                <summary>{t('MENU_LANGUAGE', { ns: 'common' })}</summary>
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
