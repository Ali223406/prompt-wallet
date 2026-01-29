import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';

const DarkModeToggleLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isElectron, setIsElectron] = useState(false);

  useEffect(() => {
    // Detect if running in Electron with the preload script
    if (window.darkMode && typeof window.darkMode.toggle === 'function') {
      setIsElectron(true);
    }
  }, []);

  const switchDarkMode = async () => {
    if (isElectron) {
      try {
        const isDarkMode_ = await window.darkMode.toggle();
        setIsDarkMode(isDarkMode_);
      } catch (err) {
        console.error("Failed to toggle dark mode via Electron:", err);
      }
    } else {
      // Fallback for browser: toggle local state only
      setIsDarkMode(prev => !prev);
    }
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <button className="switch-dark-light-btn" onClick={switchDarkMode}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </button>
      <Outlet />
    </div>
  );
};

export default DarkModeToggleLayout;
