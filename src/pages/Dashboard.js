import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PromptCard from './../components/prompt/promptCard';
const Dashboard = ({ prompts: propsPrompts, setPrompts: propsSetPrompts }) => {
  const navigate = useNavigate();
  const [prompts, setPrompts] = useState([]);
  const [filter, setFilter] = useState("");

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

  const filteredPrompts = prompts.filter((p) =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Filter prompts..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded flex-1 mr-4"
        />
        <button
          onClick={() => navigate("/new-prompt")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          New Prompt
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredPrompts.map((prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={prompt}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onUse={handleUse}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;