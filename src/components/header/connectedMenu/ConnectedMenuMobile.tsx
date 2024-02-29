import React from 'react';
import { MenuButton } from '../../../types';
import { LanguageSelector, CustomButton, Avatar } from '../../customElements';

interface Props {
  menuButton: MenuButton[];
}

function ConnectedMenuMobile(props: Props): JSX.Element {
  const { menuButton } = props;

  return (
    <div className="navbar-end py-4">
      <div className="dropdown dropdown-end lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost mr-4" aria-label="open menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>

        <ul className="menu menu-sm dropdown-content mt-6 z-[1] p-2 shadow bg-base-200 border border-stone-700 rounded-box rounded-t-none w-56">
          <li className="flex-row flex-nowrap items-center">
            <Avatar
              index={0}
              role="button"
              size="16"
              img="https://picsum.photos/id/1062/200"
              alt="user avatar"
            />
            <h2 className="text-lg font-bold mr-2">Username</h2>
          </li>
          <div className="divider divider-secondary m-1 px-1" />
          {/* Nav Button */}
          {menuButton.map((button) => (
            <li key={button.text}>
              <CustomButton
                link={button.link}
                title={button.text}
                buttonStyle={({ isActive }) => (isActive ? 'font-semibold text-secondary' : 'font-semibold')}
                onClick={button.onClick}
              />
            </li>
          ))}
          {/* Language Button */}
          <li>
            <LanguageSelector />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ConnectedMenuMobile;
