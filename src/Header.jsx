import React from 'react';

const Header = () => {

  const aboutPlaceholder = () => {
    alert('About: Coming Soon!')
  }


  const contactPlaceholder = () => {
    alert('Contact: Coming Soon!')
  }
  return (
    <header>
      <h1>• Flixster •</h1>
      <nav className="nav-container">
        <span onClick={aboutPlaceholder}>About</span>
        : :
        <span onClick={contactPlaceholder}>Contact</span>
      </nav>
    </header>
  );
};

export default Header;