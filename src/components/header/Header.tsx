import React from 'react';
import VisitorMenu from './visitorMenu/VisitorMenu';
import ConnectedMenu from './connectedMenu/ConnectedMenu';

function Header({ isLogin }: { isLogin: boolean }) {
  return (
    <div className="w-full">
      {isLogin ? <ConnectedMenu /> : <VisitorMenu />}
    </div>
  );
}

export default Header;
