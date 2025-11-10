import { useState, useEffect } from 'react';

function NoteForm({ initialData = {}, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });
  
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData.title || initialData.content) {
      setFormData({
        title: initialData.title || '',
        content: initialData.content || ''
      });
    }
  }, [initialData]);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={errors.title ? 'error' : ''}
          placeholder="Enter note title"
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className={errors.content ? 'error' : ''}
          placeholder="Enter note content"
          rows="10"
        />
        {errors.content && <span className="error-message">{errors.content}</span>}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          Save Note
        </button>
        <button type="button" onClick={onCancel} className="btn btn-secondary">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default NoteForm;
