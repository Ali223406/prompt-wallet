import React from 'react';

const PromptCard = ({ prompt, onDelete, onEdit }) => {
    return (
        <div className="prompt-card">
            <h3>{prompt.title}</h3>
            <p>{prompt.text}</p>
            <button onClick={() => onDelete(prompt.id)}>Delete</button>
            <button onClick={() => onEdit(prompt)}>Edit</button>
        </div>
    );
}

export default PromptCard;