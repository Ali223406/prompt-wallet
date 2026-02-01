import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';

const DarkModeToggleLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isElectron, setIsElectron] = useState(false);

  useEffect(() => {
    if (window.darkMode?.toggle) setIsElectron(true);

    // Load saved mode for browser
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    if (!isElectron) localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode, isElectron]);

  const switchDarkMode = async () => {
    if (isElectron) {
      try {
        const newMode = await window.darkMode.toggle();
        setIsDarkMode(newMode);
      } catch (err) {
        console.error("Failed to toggle dark mode via Electron:", err);
      }
    } else {
      setIsDarkMode(prev => !prev);
    }
  };

  return (
    <div className="p-4">
      <button
        className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        onClick={switchDarkMode}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </button>

      <Outlet />
    </div>
  );
};

export default DarkModeToggleLayout;
