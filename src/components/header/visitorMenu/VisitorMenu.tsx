import React from 'react';
import HeaderLogo from '../../customElements/HeaderLogo';
import VisitorMenuDesktop from './VisitorMenuDesktop';
import VisitorMenuMobile from './VisitorMenuMobile';
import LoginModal from '../../modals/LoginModal';
import SignupModal from '../../modals/SignupModal';
import { MenuButton } from '../../../types';

interface VisitorMenuProps {
  menuButton: MenuButton[];
}

function VisitorMenu(props: VisitorMenuProps) {
  const { menuButton } = props;

  return (
    <>
      <div className="navbar bg-base-100 bg-opacity-50 backdrop-blur-[10px] border-b border-stone-700 px-0">
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
