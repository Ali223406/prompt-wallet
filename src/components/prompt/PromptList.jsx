import React from 'react';
import PromptCard from './promptCard';

function PromptList({ prompts, onDelete, onEdit }) {
    return (
        <div>
            {prompts.map(prompt => (
                <PromptCard
                    key={prompt.id}
                    prompt={prompt}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
}

export default PromptList;