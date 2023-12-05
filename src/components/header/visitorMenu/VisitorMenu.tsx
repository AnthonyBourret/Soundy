import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LoginModal from '../../modals/LoginModal';
import SignupModal from '../../modals/SignupModal';
import { LanguageSelectorDropdown, LanguageSelectorButton } from '../../customElements/LanguageSelector';
import { CustomNavButton, OpenModalButton } from '../../customElements/MenuButton';
import { MenuButton } from '../../../types';
import Logo from '../../../svg/logo';

// ({ isActive }) => (isActive ? 'btn btn-ghost text-secondary' : 'btn btn-ghost')

function VisitorMenu() {
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
  ];

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
              {/* Route Button */}
              {menuButton.map((button) => (
                <li key={button.text}>
                  <CustomNavButton
                    link={button.link}
                    title={button.text}
                    buttonStyle={({ isActive }) => (isActive ? 'font-semibold text-secondary' : 'font-semibold')}
                  />
                </li>
              ))}

              {/* Modals Button */}
              <li>
                <OpenModalButton
                  buttonStyle="font-semibold"
                  title={t('MENU_LOGIN', { ns: 'common' })}
                  modalId="login_modal"
                />
              </li>
              <li>
                <OpenModalButton
                  buttonStyle="font-semibold"
                  title={t('MENU_SIGNUP', { ns: 'common' })}
                  modalId="signup_modal"
                />
              </li>

              {/* Language Button */}
              <li>
                <LanguageSelectorDropdown
                  text={t('MENU_LANGUAGE', { ns: 'common' })}
                  firstLanguagge={t('MENU_LANGUAGE_1', { ns: 'common' })}
                  secondLanguage={t('MENU_LANGUAGE_2', { ns: 'common' })}
                  handleClickFr={() => handleClick('fr')}
                  handleClickEn={() => handleClick('en')}
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal items-center flex-nowrap">
            {/* Route Button */}
            {menuButton.map((button) => (
              <li key={button.text}>
                <CustomNavButton
                  link={button.link}
                  title={button.text}
                  buttonStyle={({ isActive }) => (isActive ? 'btn btn-ghost text-secondary' : 'btn btn-ghost')}
                />
              </li>
            ))}
            {/* Modals Button */}
            <li>
              <OpenModalButton
                buttonStyle="btn btn-ghost"
                title={t('MENU_LOGIN', { ns: 'common' })}
                modalId="login_modal"
              />
            </li>
            <li>
              <OpenModalButton
                buttonStyle="btn btn-ghost"
                title={t('MENU_SIGNUP', { ns: 'common' })}
                modalId="signup_modal"
              />
            </li>
            {/* Language Button */}
            <li>
              <LanguageSelectorButton
                text={t('MENU_LANGUAGE', { ns: 'common' })}
                firstLanguagge={t('MENU_LANGUAGE_1', { ns: 'common' })}
                secondLanguage={t('MENU_LANGUAGE_2', { ns: 'common' })}
                handleClickFr={() => handleClick('fr')}
                handleClickEn={() => handleClick('en')}
              />
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
