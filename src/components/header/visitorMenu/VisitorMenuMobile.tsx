import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSelectorBurgerMenu } from '../../customElements/LanguageSelector';
import CustomButton from '../../customElements/CustomButton';
import OpenModalButton from '../../customElements/OpenModalButton';
import { MenuButton } from '../../../types';

interface Props {
  menuButton: MenuButton[];
}

function VisitorMenuMobile({ menuButton }: Props) {
  const { t } = useTranslation();

  return (
    <div className="navbar-end">
      <div className="dropdown dropdown-end lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost" aria-label="open menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {/* Route Button */}
          {menuButton.slice(0, 3).map((button) => (
            <li key={button.text}>
              <CustomButton
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
            <LanguageSelectorBurgerMenu />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VisitorMenuMobile;
