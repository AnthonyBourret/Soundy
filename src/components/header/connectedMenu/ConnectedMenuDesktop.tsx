import React from 'react';
import { useTranslation } from 'react-i18next';
import { MenuButton } from '../../../types';
import { LanguageSelectorBurgerMenu } from '../../customElements/LanguageSelector';
import CustomButton from '../../customElements/CustomButton';
import Avatar from '../../customElements/Avatar';

interface Props {
  menuButton: MenuButton[];
}

function ConnectedMenuDesktop({ menuButton }: Props) {
  const { t, i18n } = useTranslation();
  function handleClick(lng: string) {
    i18n.changeLanguage(lng);
  }
  return (
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal items-center flex-nowrap">
        {/* Nav Button (array sliced) */}
        {menuButton.slice(0, 4).map((button) => (
          <li key={button.text}>
            <CustomButton
              link={button.link}
              title={button.text}
              buttonStyle={({ isActive }) => (isActive ? 'btn btn-ghost text-secondary' : 'btn btn-ghost')}
            />
          </li>
        ))}
        {/* Avatar Clickable */}
        <div className="dropdown dropdown-hover dropdown-end ml-4">
          <Avatar
            index={0}
            role="button"
            size="12"
            img="https://picsum.photos/id/1062/200"
            alt="user avatar"
          />
          <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            {menuButton.slice(4).map((button) => (
              <li key={button.text}>
                <CustomButton
                  link={button.link}
                  title={button.text}
                  buttonStyle={({ isActive }) => (isActive ? 'font-semibold' : 'font-semibold')}
                />
              </li>
            ))}

            {/* Language Button */}
            <li>
              <LanguageSelectorBurgerMenu
                text={t('MENU_LANGUAGE', { ns: 'common' })}
                firstLanguagge={t('MENU_LANGUAGE_1', { ns: 'common' })}
                secondLanguage={t('MENU_LANGUAGE_2', { ns: 'common' })}
                handleClickFr={() => handleClick('fr')}
                handleClickEn={() => handleClick('en')}
              />
            </li>
          </ul>
        </div>
      </ul>
    </div>

  );
}

export default ConnectedMenuDesktop;