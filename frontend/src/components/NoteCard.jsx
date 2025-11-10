import { Link } from 'react-router-dom';

function NoteCard({ note, onDelete }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="note-card">
      <h3>{note.title}</h3>
      <p className="note-content">{note.content}</p>
      <div className="note-footer">
        <span className="note-date">{formatDate(note.createdAt)}</span>
        <div className="note-actions">
          <Link to={`/edit/${note._id}`} className="btn btn-secondary">
            Edit
          </Link>
          <button 
            onClick={() => onDelete(note._id)} 
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
