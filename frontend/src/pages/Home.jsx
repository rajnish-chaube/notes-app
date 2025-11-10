import { useState, useEffect } from 'react';
import { getAllNotes, deleteNote } from '../services/api';
import NoteCard from '../components/NoteCard';

function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const data = await getAllNotes();
      setNotes(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch notes. Please try again.');
      console.error('Error fetching notes:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await deleteNote(id);
        setNotes(notes.filter(note => note._id !== id));
      } catch (err) {
        alert('Failed to delete note. Please try again.');
        console.error('Error deleting note:', err);
      }
    }
  };

  if (loading) {
    return <div className="container"><p className="message">Loading notes...</p></div>;
  }

  if (error) {
    return <div className="container"><p className="message error">{error}</p></div>;
  }

  return (
    <div className="container">
      <h1>My Notes</h1>
      {notes.length === 0 ? (
        <p className="message">No notes yet. Create your first note!</p>
      ) : (
        <div className="notes-grid">
          {notes.map(note => (
            <NoteCard 
              key={note._id} 
              note={note} 
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
