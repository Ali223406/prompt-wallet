import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const NavMenu = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 shadow">
      <ul className="flex gap-2 flex-wrap">
        {/* Prompt Menu */}
        <li className="relative group">
          <button
            onClick={() => toggleMenu('prompt')}
            className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center gap-1 text-gray-800 dark:text-gray-200"
          >
            Prompt
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`text-xs transition ${expandedMenu === 'prompt' ? 'rotate-180' : ''}`}
            />
          </button>
          <ul
            className={`absolute left-0 mt-0 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded shadow-lg transition max-h-0 overflow-hidden group-hover:max-h-48 ${
              expandedMenu === 'prompt' ? 'max-h-48' : ''
            }`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ${
                    isActive ? 'bg-green-500 text-white dark:bg-green-600' : 'text-gray-800 dark:text-gray-200'
                  }`
                }
              >
                Liste
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/new-prompt"
                className={({ isActive }) =>
                  `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ${
                    isActive ? 'bg-green-500 text-white dark:bg-green-600' : 'text-gray-800 dark:text-gray-200'
                  }`
                }
              >
                Nouveau
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Info Menu */}
        <li className="relative group">
          <button
            onClick={() => toggleMenu('info')}
            className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center gap-1 text-gray-800 dark:text-gray-200"
          >
            Info
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`text-xs transition ${expandedMenu === 'info' ? 'rotate-180' : ''}`}
            />
          </button>
          <ul
            className={`absolute left-0 mt-0 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded shadow-lg transition max-h-0 overflow-hidden group-hover:max-h-48 ${
              expandedMenu === 'info' ? 'max-h-48' : ''
            }`}
          >
            <li>
              <NavLink
                to="/cgu"
                className={({ isActive }) =>
                  `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ${
                    isActive ? 'bg-green-500 text-white dark:bg-green-600' : 'text-gray-800 dark:text-gray-200'
                  }`
                }
              >
                CGU
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ${
                    isActive ? 'bg-green-500 text-white dark:bg-green-600' : 'text-gray-800 dark:text-gray-200'
                  }`
                }
              >
                A propos
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
