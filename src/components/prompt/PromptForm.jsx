import React, { useState, useEffect } from 'react';

const PromptForm = ({ promptToEdit, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ title: '', text: '' });

  useEffect(() => {
    if (promptToEdit) {
      setFormData({ title: promptToEdit.title, text: promptToEdit.text });
    }
  }, [promptToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.text) {
      return alert('Please fill both fields!');
    }
    onSave({
      ...formData,
      id: promptToEdit ? promptToEdit.id : Date.now().toString(),
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 rounded shadow mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        {promptToEdit ? 'Edit Prompt' : 'New Prompt'}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="mb-1 font-medium text-gray-700 dark:text-gray-200">Title:</span>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter prompt title"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-1 font-medium text-gray-700 dark:text-gray-200">Prompt Text:</span>
          <textarea
            name="text"
            value={formData.text}
            onChange={handleChange}
            rows="6"
            placeholder="Enter prompt text with placeholders like [variable]"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
        </label>

        <div className="flex gap-2 mt-2">
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            {promptToEdit ? 'Update Prompt' : 'Save Prompt'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PromptForm;
