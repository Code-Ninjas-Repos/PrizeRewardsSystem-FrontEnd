import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './hamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <input id="toggle" type="checkbox" checked={isOpen} onChange={toggleMenu}></input>
      <label htmlFor="toggle" className="hamburger">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </label>
      <div className="nav" onClick={closeMenu}>
        <div className="nav-wrapper">
          <nav>
            <Link to="/admin/home" className={location.pathname === '/admin/home' ? 'active' : ''}>Home</Link>
            <Link to="/admin/createAccount" className={location.pathname === '/admin/createAccount' ? 'active' : ''}>Create Account</Link>
            <Link to="/admin/profile" className={location.pathname === '/admin/profile' ? 'active' : ''}>Profile</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
