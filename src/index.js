import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CGU from './pages/CGU';
import PromptCreate from './pages/PromptCreate';
import PromptEdit from './pages/PromptEdit';
import PromptUsePage from './pages/PromptUsePage';
import About from './pages/About';
import NavMenuLayout from './components/NavMenuLayout';
import BackButtonLayout from './components/BackButtonLayout';
import DarkModeToggleLayout from './components/DarkModeToggleLayout';

const App = () => {
  const [prompts, setPrompts] = useState([]);

  // Charger les prompts depuis localStorage
  useEffect(() => {
    const savedPrompts = JSON.parse(localStorage.getItem("my_prompts") || "[]");
    setPrompts(savedPrompts);
  }, []);

  // Créer le router **après** que prompts et setPrompts existent
  const router = createBrowserRouter([
    {
      element: <DarkModeToggleLayout />,
      children: [
        {
          element: <NavMenuLayout />,
          children: [
            { path: "/", element: <Dashboard prompts={prompts} setPrompts={setPrompts} /> },
            { path: "cgu", element: <CGU /> },
            { path: "about", element: <About /> },
          ],
        },
        {
          element: <BackButtonLayout />,
          children: [
            { path: "new-prompt", element: <PromptCreate prompts={prompts} setPrompts={setPrompts} /> },
            { path: "edit/:id", element: <PromptEdit prompts={prompts} setPrompts={setPrompts} /> },
            { path: "use/:id", element: <PromptUsePage prompts={prompts} /> },
          ],
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
