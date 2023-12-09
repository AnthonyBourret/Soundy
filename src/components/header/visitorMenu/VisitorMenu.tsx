import React from 'react';
import HeaderLogo from '../../customElements/HeaderLogo';
import VisitorMenuDesktop from './VisitorMenuDesktop';
import VisitorMenuMobile from './VisitorMenuMobile';
import LoginModal from '../../modals/LoginModal';
import SignupModal from '../../modals/SignupModal';
import { MenuButton } from '../../../types';

interface Props {
  menuButton: MenuButton[];
}

function VisitorMenu({ menuButton }: Props) {
  return (
    <>
      <div className="navbar bg-base-100 bg-opacity-90 backdrop-blur-sm px-0 py-4 lg:py-5">
        <HeaderLogo />
        <VisitorMenuMobile menuButton={menuButton} />
        <VisitorMenuDesktop menuButton={menuButton} />
      </div>
      <LoginModal />
      <SignupModal />
    </>
  );
}

export default VisitorMenu;
