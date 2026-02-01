import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PromptUse from "./PromptUse";

const PromptUsePage = ({ prompts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
if (!prompts || prompts.length === 0) return <div>Loading...</div>;

  // Comparer ID correctement
  const prompt = prompts.find((p) => p.id.toString() === id.toString());

  if (!prompt) {
    return (
      <div className="p-4 text-center">
        Prompt not found
        <br />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => navigate("/")}
        >
          Go back
        </button>
      </div>
    );
  }

  return <PromptUse prompt={prompt} />;
};

export default PromptUsePage;
