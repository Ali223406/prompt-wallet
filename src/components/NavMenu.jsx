import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition ${
      isActive ? 'bg-gray-300 dark:bg-gray-600 font-semibold' : ''
    }`;

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 shadow">
      <ul className="flex gap-4">
        <li>
          <NavLink to="/" className={linkClass}>
            List
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-prompt" className={linkClass}>
            New
          </NavLink>
        </li>
        <li>
          <NavLink to="/cgu" className={linkClass}>
            CGU
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
