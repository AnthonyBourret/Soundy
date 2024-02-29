import React from 'react';
import { LogoWithName } from '../../customElements';
import ConnectedMenuDesktop from './ConnectedMenuDesktop';
import ConnectedMenuMobile from './ConnectedMenuMobile';
import { MenuButton } from '../../../types';

interface Props {
  menuButton: MenuButton[];
}

function ConnectedMenu(props: Props): JSX.Element {
  const { menuButton } = props;

  return (
    <div className="navbar bg-base-100 bg-opacity-50 backdrop-blur-[10px] border-b border-stone-700 px-0">
      <LogoWithName />
      <ConnectedMenuMobile menuButton={menuButton} />
      <ConnectedMenuDesktop menuButton={menuButton} />
    </div>
  );
}

export default ConnectedMenu;
