import React from "react";
import { useNavigate } from "react-router-dom";
import PromptForm from "../components/prompt/PromptForm";

const PromptCreate = ({ prompts, setPrompts }) => {
  const navigate = useNavigate();

  const handleSave = (newPrompt) => {
    // Récupérer les prompts existants ou tableau vide
    const currentPrompts = prompts || [];

    // Ajouter le nouveau prompt avec un ID unique (toujours string)
    const updatedPrompts = [
      ...currentPrompts,
      { ...newPrompt, id: Date.now().toString() } // <-- ID en string
    ];

    // Sauvegarder dans le localStorage
    localStorage.setItem("my_prompts", JSON.stringify(updatedPrompts));

    // Mettre à jour l’état global si fourni
    if (setPrompts) setPrompts(updatedPrompts);

    // Retour au Dashboard
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/"); // Retour au Dashboard sans sauvegarder
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <PromptForm onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
};

export default PromptCreate;
