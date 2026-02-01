import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import PromptEdit from "./pages/PromptEdit";
import PromptUsePage from "./pages/PromptUsePage";
import NewPromptPage from "./pages/NewPromptPage";
import About from "./pages/About";
import CGU from "./pages/CGU";

const savedPrompts = JSON.parse(localStorage.getItem("my_prompts") || "[]");

const App = () => {
  const [prompts, setPrompts] = React.useState(savedPrompts);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard prompts={prompts} setPrompts={setPrompts} />} />
        <Route path="/edit/:id" element={<PromptEdit prompts={prompts} setPrompts={setPrompts} />} />
        <Route path="/use/:id" element={<PromptUsePage prompts={prompts} />} />
        <Route path="/new-prompt" element={<NewPromptPage prompts={prompts} setPrompts={setPrompts} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


