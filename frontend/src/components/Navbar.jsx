import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          📝 NotesApp
        </Link>
        <Link to="/create" className="btn btn-primary">
          + New Note
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
