import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSelectorButton } from '../../customElements/LanguageSelector';
import CustomButton from '../../customElements/CustomButton';
import OpenModalButton from '../../customElements/OpenModalButton';
import { MenuButton } from '../../../types';

interface Props {
  menuButton: MenuButton[];
}

function VisitorMenuDesktop({ menuButton }: Props) {
  const { t, i18n } = useTranslation();
  function handleClick(lng: string) {
    i18n.changeLanguage(lng);
  }
  return (
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal items-center flex-nowrap">
        {/* Route Button */}
        {menuButton.slice(0, 3).map((button) => (
          <li key={button.text}>
            <CustomButton
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
  );
}

export default VisitorMenuDesktop;
