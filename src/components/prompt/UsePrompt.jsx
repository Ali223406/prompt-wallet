import React, { useState } from "react";

const PromptUse = ({ prompt }) => {
  const [topic, setTopic] = useState("");
  const [language, setLanguage] = useState("");

  const finalPrompt = prompt.text
    .replace("[topic]", topic)
    .replace("[language]", language);

  const handleCopy = () => {
    navigator.clipboard.writeText(finalPrompt);
  };

  return (
    <div className="prompt-use">
      <h2>{prompt.title}</h2>

      <textarea value={finalPrompt} readOnly />

      <div>
        <label>Topic</label>
        <input
          type="text"
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>

      <div>
        <label>Language</label>
        <input
          type="text"
          onChange={(e) => setLanguage(e.target.value)}
        />
      </div>

      <button onClick={handleCopy}>Copy</button>
    </div>
  );
};

export default PromptUse;
