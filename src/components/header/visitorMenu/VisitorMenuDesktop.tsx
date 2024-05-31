import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector, CustomButton, OpenModalButton } from '../../customElements';
import { MenuButton } from '../../../types';

interface Props {
  menuButton: MenuButton[];
}

function VisitorMenuDesktop({ menuButton }: Props) {
  const { t } = useTranslation();

  return (
    <div className="navbar-end hidden mr-4 lg:flex">
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
          <LanguageSelector />
        </li>
      </ul>
    </div>
  );
}

export default VisitorMenuDesktop;
