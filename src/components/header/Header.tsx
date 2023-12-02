import React from 'react';
import VisitorMenu from './visitorMenu/VisitorMenu';
import ConnectedMenu from './connectedMenu/ConnectedMenu';

function Header() {
  return (
    <>
      {/* <VisitorMenu /> */}
      <ConnectedMenu />
    </>
  );
}

export default Header;
