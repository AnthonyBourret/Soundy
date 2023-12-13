import React from 'react';
import HeaderLogo from '../../customElements/HeaderLogo';
import ConnectedMenuDesktop from './ConnectedMenuDesktop';
import ConnectedMenuMobile from './ConnectedMenuMobile';
import { MenuButton } from '../../../types';

interface Props {
  menuButton: MenuButton[];
}

function ConnectedMenu({ menuButton }: Props) {
  return (
    <div className="navbar bg-base-100 bg-opacity-50 backdrop-blur-[10px] border-b border-stone-700 px-0">
      <HeaderLogo />
      <ConnectedMenuMobile menuButton={menuButton} />
      <ConnectedMenuDesktop menuButton={menuButton} />
    </div>
  );
}

export default ConnectedMenu;
