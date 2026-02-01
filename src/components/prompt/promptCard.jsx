import React from 'react';

const PromptCard = ({ prompt, onDelete, onEdit }) => {
    return (
        <div className="prompt-card">
            <h3
        style={{ cursor: 'pointer', color: '#7bc950' }}
        onClick={() => onUse(prompt.id)}
      >
        {prompt.title}
      </h3>

      {/* Texte du prompt */}
      <p>{prompt.text}</p>

      {/* Boutons */}
      <button onClick={() => onEdit(prompt)}>Edit</button>
      <button
        onClick={() => {
          if (window.confirm('Are you sure you want to delete this prompt?')) {
            onDelete(prompt.id);
          }
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default PromptCard;