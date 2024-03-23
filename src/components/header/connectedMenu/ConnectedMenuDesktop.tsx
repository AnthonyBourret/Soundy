import React from 'react';
import { MenuButton } from '../../../types';
import { LanguageSelector, CustomButton, Avatar } from '../../customElements';
import { useAppSelector } from '../../../redux';

interface Props {
  menuButton: MenuButton[];
}

function ConnectedMenuDesktop(props: Props): JSX.Element {
  const { menuButton } = props;
  const userPicture = useAppSelector((state) => state.user.picture);

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
            img={userPicture || 'https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg'}
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
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </ul>
    </div>

  );
}

export default ConnectedMenuDesktop;
