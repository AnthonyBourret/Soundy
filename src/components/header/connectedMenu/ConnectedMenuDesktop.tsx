import React from 'react';
import { MenuButton } from '../../../types';
import { LanguageSelectorBurgerMenu } from '../../customElements/LanguageSelector';
import CustomButton from '../../customElements/CustomButton';
import Avatar from '../../customElements/Avatar';

interface Props {
  menuButton: MenuButton[];
}

function ConnectedMenuDesktop(props: Props): JSX.Element {
  const { menuButton } = props;

  return (
    <div className="navbar-end hidden mr-4 lg:flex">
      <ul className="menu menu-horizontal p-1 items-center flex-nowrap">
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
        <div className="dropdown dropdown-end ml-4 rounded-full border-4 border-base-300 transition hover:border-primary">
          <Avatar
            index={0}
            role="button"
            size="12"
            img="https://picsum.photos/id/1062/200"
            alt="user avatar"
          />
          <ul className="dropdown-content z-[1] menu p-2 mt-4 shadow bg-base-200 rounded-box rounded-t-none w-52 border border-stone-700">
            {menuButton.slice(4).map((button) => (
              <li key={button.text}>
                <CustomButton
                  link={button.link}
                  title={button.text}
                  buttonStyle={({ isActive }) => (isActive ? 'font-semibold' : 'font-semibold')}
                  onClick={button.onClick}
                />
              </li>
            ))}

            {/* Language Button */}
            <li>
              <LanguageSelectorBurgerMenu />
            </li>
          </ul>
        </div>
      </ul>
    </div>

  );
}

export default ConnectedMenuDesktop;
