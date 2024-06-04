import React from 'react';

import { LoginModal, SignupModal } from '../../modals';
import { LogoWithName } from '../../customElements';
import { type MenuButton } from '../../../types';

import VisitorMenuDesktop from './VisitorMenuDesktop';
import VisitorMenuMobile from './VisitorMenuMobile';

interface VisitorMenuProps {
  menuButton: MenuButton[];
}

function VisitorMenu(props: VisitorMenuProps): JSX.Element {
  const { menuButton } = props;

  return (
    <>
      <div className="navbar bg-base-100 bg-opacity-50 backdrop-blur-[10px] border-b border-stone-700 px-0">
        <LogoWithName />
        <VisitorMenuMobile menuButton={menuButton} />
        <VisitorMenuDesktop menuButton={menuButton} />
      </div>
      <LoginModal />
      <SignupModal />
    </>
  );
}

export default VisitorMenu;
