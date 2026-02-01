import React, { useState } from "react";

const PromptUse = ({ prompt }) => {
  // Détecte tous les placeholders [variable] dynamiquement
  const placeholders = Array.from(prompt.text.matchAll(/\[(.*?)\]/g)).map(
    (m) => m[1]
  );

  // État pour tous les placeholders
  const [values, setValues] = useState(
    placeholders.reduce((acc, ph) => ({ ...acc, [ph]: "" }), {})
  );

  // Génère le texte final
  const finalPrompt = placeholders.reduce(
    (text, ph) => text.replace(`[${ph}]`, values[ph]),
    prompt.text
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(finalPrompt);
    alert("Prompt copied to clipboard!");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded shadow mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        {prompt.title}
      </h2>

      <textarea
        value={finalPrompt}
        readOnly
        rows="6"
        className="w-full border rounded px-3 py-2 mb-4 dark:bg-gray-700 dark:text-gray-200"
      />

      {placeholders.map((ph) => (
        <div key={ph} className="flex flex-col mb-2">
          <label className="mb-1 font-medium text-gray-700 dark:text-gray-200">
            {ph}
          </label>
          <input
            type="text"
            value={values[ph]}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, [ph]: e.target.value }))
            }
            className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-gray-700 dark:text-gray-200"
            placeholder={`Enter ${ph}`}
          />
        </div>
      ))}

      <button
        onClick={handleCopy}
        className="px-4 py-2 mt-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Copy
      </button>
    </div>
  );
};

export default PromptUse;

