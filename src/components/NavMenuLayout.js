import React from "react";
import { Outlet, useOutletContext } from "react-router";
import NavMenu from "./NavMenu";
import './NavMenu.css';

const NavMenuLayout = () => {
  const context = useOutletContext() || {};  // <-- fallback
  const { isDarkMode = false } = context;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <NavMenu isDarkMode={isDarkMode} />

      <main className="flex-1 p-4">
        <Outlet context={{ isDarkMode }} />
      </main>
    </div>
  );
};

export default NavMenuLayout;

