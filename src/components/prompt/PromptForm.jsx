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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.text) return alert('Please fill both fields!');
    onSave({ ...formData, id: promptToEdit ? promptToEdit.id : Date.now().toString() });
  };

  return (
    <div className="form-container">
      <h2>{promptToEdit ? 'Edit Prompt' : 'New Prompt'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input name="title" value={formData.title} onChange={handleChange} />
        </label>

        <label>
          Prompt Text:
          <textarea name="text" value={formData.text} onChange={handleChange} rows="6" />
        </label>

        <button type="submit">{promptToEdit ? 'Update Prompt' : 'Save Prompt'}</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default PromptForm;
