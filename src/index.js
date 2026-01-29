import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from './pages/Dashboard';
import CGU from './pages/CGU';
import PromptCreate from './pages/PromptCreate';
import PromptEdit from './pages/PromptEdit';
import About from './pages/About';
import NavMenuLayout from './components/NavMenuLayout';
import BackButtonLayout from './components/BackButtonLayout';
import DarkModeToggleLayout from './components/DarkModeToggleLayout';


const router = createBrowserRouter([
  {
    element: <DarkModeToggleLayout/>,
    children: [
      {
        element: <NavMenuLayout/>,
        children: [
          { path: "/", Component: Dashboard },
          { path: "cgu", Component: CGU },
          { path: "about", Component: About },
        ],
      },
      {
        element: <BackButtonLayout/>,
        children: [
          { path: "new-prompt", Component: PromptCreate },
          { path: "prompt-edit", Component: PromptEdit },
        ],
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
