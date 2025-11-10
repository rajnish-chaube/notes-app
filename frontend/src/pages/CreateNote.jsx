import { useNavigate } from 'react-router-dom';
import { createNote } from '../services/api';
import NoteForm from '../components/NoteForm';

function CreateNote() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await createNote(formData);
      navigate('/');
    } catch (err) {
      alert('Failed to create note. Please try again.');
      console.error('Error creating note:', err);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Create New Note</h1>
      <NoteForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
}

export default CreateNote;
