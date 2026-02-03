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
    // Apply dark class immediately on mount
    if (savedMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    // Apply dark class to html element for Tailwind
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

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
    <div>
      <button
        className="fixed top-4 right-4 z-50 px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 transition"
        onClick={switchDarkMode}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </button>

      <Outlet context={{ isDarkMode }} />
    </div>
  );
};

export default DarkModeToggleLayout;
