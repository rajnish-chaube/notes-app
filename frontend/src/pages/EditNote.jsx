import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNoteById, updateNote } from '../services/api';
import NoteForm from '../components/NoteForm';

function EditNote() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNote();
  }, [id]);

  const fetchNote = async () => {
    try {
      const data = await getNoteById(id);
      setNote(data);
    } catch (err) {
      alert('Failed to fetch note. Please try again.');
      console.error('Error fetching note:', err);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      await updateNote(id, formData);
      navigate('/');
    } catch (err) {
      alert('Failed to update note. Please try again.');
      console.error('Error updating note:', err);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  if (loading) {
    return <div className="container"><p className="message">Loading note...</p></div>;
  }

  return (
    <div className="container">
      <h1>Edit Note</h1>
      {note && (
        <NoteForm 
          initialData={note} 
          onSubmit={handleSubmit} 
          onCancel={handleCancel} 
        />
      )}
    </div>
  );
}

export default EditNote;
