import React from 'react';

const PromptCard = ({ prompt, onDelete, onEdit, onUse }) => {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
      {/* Titre cliquable */}
      <h3
        className="cursor-pointer text-green-500 font-semibold text-lg hover:underline mb-2"
        onClick={() => onUse(prompt.id)}
      >
        {prompt.title}
      </h3>

      {/* Texte du prompt (tronqué si trop long) */}
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {prompt.text.length > 100 ? prompt.text.slice(0, 100) + '...' : prompt.text}
      </p>

      {/* Boutons */}
      <div className="flex gap-2">
        <button
            onClick={() => onEdit(prompt)}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
            Edit
        </button>

        <button
            onClick={() => {
            if (window.confirm('Are you sure you want to delete this prompt?')) {
                onDelete(prompt.id);
            }
            }}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
            Delete
        </button>

        <button
            onClick={() => onUse(prompt.id)}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
            Use
        </button>
        </div>

            </div>
  );
};

export default PromptCard;
