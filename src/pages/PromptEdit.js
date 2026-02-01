import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PromptForm from "../components/prompt/PromptForm";

const PromptEdit = ({ prompts, setPrompts }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  if (!prompts || prompts.length === 0) {
    return <div className="p-4 text-center">Loading prompts...</div>;
  }

  const promptToEdit = prompts.find(p => p.id.toString() === id);

  if (!promptToEdit) {
    return <div className="p-4 text-center">Prompt not found</div>;
  }

  const handleSave = (updatedPrompt) => {
    const newPrompts = prompts.map(p =>
      p.id.toString() === updatedPrompt.id.toString() ? updatedPrompt : p
    );
    setPrompts(newPrompts);
    localStorage.setItem("my_prompts", JSON.stringify(newPrompts));
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <PromptForm
        promptToEdit={promptToEdit}
        onSave={handleSave}
        onCancel={() => navigate("/")}
      />
    </div>
  );
};

export default PromptEdit;
