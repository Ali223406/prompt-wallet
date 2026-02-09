import React, { useState, useEffect } from 'react';

const PromptForm = ({ promptToEdit, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ title: '', text: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (promptToEdit) {
      setFormData({ title: promptToEdit.title, text: promptToEdit.text });
    }
  }, [promptToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.text.trim()) {
      newErrors.text = 'Prompt text is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave({
      ...formData,
      id: promptToEdit ? promptToEdit.id : Date.now().toString(),
    });
  };

  const isFormValid = formData.title.trim() && formData.text.trim();

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
            className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 ${
              errors.title ? 'border-red-500' : ''
            }`}
          />
          {errors.title && <span className="text-red-500 text-sm mt-1">{errors.title}</span>}
        </label>

        <label className="flex flex-col">
          <span className="mb-1 font-medium text-gray-700 dark:text-gray-200">Prompt Text:</span>
          <textarea
            name="text"
            value={formData.text}
            onChange={handleChange}
            rows="6"
            placeholder="Enter prompt text with placeholders like [variable]"
            className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400  text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 ${
              errors.text ? 'border-red-500' : ''
            }`}
          />
          {errors.text && <span className="text-red-500 text-sm mt-1">{errors.text}</span>}
        </label>

        <div className="flex gap-2 mt-2">
          <button
            type="submit"
            disabled={!isFormValid}
            className={`px-4 py-2 text-white rounded transition ${
              isFormValid
                ? 'bg-green-500 hover:bg-green-600 cursor-pointer'
                : 'bg-gray-400 cursor-not-allowed opacity-50'
            }`}
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
