import React from 'react';
import { MenuButton } from '../../../types';
import { LanguageSelectorBurgerMenu } from '../../customElements/LanguageSelector';
import CustomButton from '../../customElements/CustomButton';
import Avatar from '../../customElements/Avatar';

interface Props {
  menuButton: MenuButton[];
}

function ConnectedMenuMobile({ menuButton }: Props) {
  return (
    <div className="navbar-end">
      <div className="dropdown dropdown-end lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost" aria-label="open menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>

        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li className="flex-row flex-nowrap items-center">
            <Avatar
              index={0}
              role="button"
              size="1"
              img="https://picsum.photos/id/1062/200"
              alt="user avatar"
            />
            <h2 className="text-lg font-bold">Username</h2>
          </li>
          <div className="divider divider-secondary m-1 px-1" />
          {/* Nav Button */}
          {menuButton.map((button) => (
            <li key={button.text}>
              <CustomButton
                link={button.link}
                title={button.text}
                buttonStyle={({ isActive }) => (isActive ? 'font-semibold text-secondary' : 'font-semibold')}
              />
            </li>
          ))}
          {/* Language Button */}
          <li>
            <LanguageSelectorBurgerMenu />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ConnectedMenuMobile;
