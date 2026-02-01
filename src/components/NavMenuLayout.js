// NavMenuLayout.jsx
import React from "react";
import { Outlet, useOutletContext } from "react-router";
import NavMenu from "./NavMenu";

const NavMenuLayout = () => {
  const { isDarkMode } = useOutletContext(); // récupère le dark mode depuis le layout parent

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
