import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PromptCard from './../components/prompt/promptCard';
const Dashboard = ({ prompts: propsPrompts, setPrompts: propsSetPrompts }) => {
  const navigate = useNavigate();
  const [prompts, setPrompts] = useState([]);
  const [filter, setFilter] = useState("");
  const [dragActive, setDragActive] = useState(false);

  // Charger les prompts depuis props ou localStorage
  useEffect(() => {
    if (propsPrompts) {
      setPrompts(propsPrompts);
    } else {
      const savedPrompts = JSON.parse(localStorage.getItem("my_prompts") || "[]");
      setPrompts(savedPrompts);
    }
  }, [propsPrompts]);

  // Supprimer un prompt
  const handleDelete = (id) => {
    const newPrompts = prompts.filter((p) => p.id !== id);
    setPrompts(newPrompts);
    localStorage.setItem("my_prompts", JSON.stringify(newPrompts));
    if (propsSetPrompts) propsSetPrompts(newPrompts); // si le parent gère l’état
  };

  const handleEdit = (prompt) => {
    navigate(`/edit/${prompt.id}`);
  };

  const handleUse = (id) => {
    navigate(`/use/${id}`);
  };

  // Drag & drop handlers
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        const title = file.name.replace(/\.[^/.]+$/, "");
        const newPrompt = {
          id: Date.now().toString(),
          title: title,
          text: text
        };
        const newPrompts = [...prompts, newPrompt];
        setPrompts(newPrompts);
        localStorage.setItem("my_prompts", JSON.stringify(newPrompts));
        if (propsSetPrompts) propsSetPrompts(newPrompts);
        alert(`Prompt "${title}" created from file!`);
      };
      reader.readAsText(file);
    }
  };

  const filteredPrompts = prompts.filter((p) =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      className={`max-w-5xl mx-auto p-4 space-y-4 rounded border-2 transition ${
        dragActive ? "border-green-500 bg-green-50 dark:bg-gray-700" : "border-transparent"
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Filter prompts..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded flex-1 mr-4 dark:bg-gray-700 dark:text-gray-200"
        />
        <button
          onClick={() => navigate("/new-prompt")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          New Prompt
        </button>
      </div>

      {dragActive && (
        <div className="text-center py-6 text-green-600 font-semibold">
          Drop your text file here to create a new prompt
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {filteredPrompts.map((prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={prompt}
            onDelete={handleDelete}
            onEdit={() => handleEdit(prompt)}
            onUse={() => handleUse(prompt.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;