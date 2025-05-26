import React from 'react';
import logoFull from '../images/logo_full.png';

function Header() {
  return (
    <header className="app-header">
      <img src={logoFull} className="header-centered-logo" alt="Full logo" />
    </header>
  );
}

export default Header;