import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/dashboard">Accueil</Link></li>
        <li><Link to="/about">À propos</Link></li>
        <li><Link to="/cgu">CGU</Link></li>
      </ul>
    </nav>
  );
};

export default NavMenu;