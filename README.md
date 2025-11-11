# NotesApp

NotesApp is a full-stack MERN project for creating, editing, and managing personal notes. The app features a clean React interface, RESTful Express API, and MongoDB data storage.

## Features

- Create, view, edit, and delete notes
- Minimal, responsive design (single CSS file)
- Built with React, Vite, Express, Node.js, and Mongoose
- Basic server-side validation

## Getting Started

git clone https://github.com/yourusername/notes-app.git

cd notes-app/backend
npm install

cd ../frontend
npm install

cd ../backend
npm run dev

cd ../frontend
npm run dev

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Folder Structure
#### 
    notes-app/
    ├── backend/
    │   ├── controllers/
    │   │   └── note.controller.js
    │   ├── models/
    │   │   └── note.model.js
    │   ├── routes/
    │   │   └── notes.routes.js
    │   ├── .env
    │   ├── package.json
    │   └── server.js
    │
    └── frontend/
        ├── public/
        ├── src/
        │   ├── components/
        │   │   ├── NoteCard.jsx
        │   │   ├── NoteForm.jsx
        │   │   └── Navbar.jsx
        │   ├── pages/
        │   │   ├── Home.jsx
        │   │   ├── CreateNote.jsx
        │   │   └── EditNote.jsx
        │   ├── services/
        │   │   └── api.js
        │   ├── App.jsx
        │   ├── App.css
        │   ├── main.jsx
        │   └── index.css
        ├── index.html
        ├── package.json
        └── vite.config.js


## API Summary
| Method | Endpoint       | Description     | Request Body       |
| ------ | -------------- | --------------- | ------------------ |
| GET    | /api/notes     | Get all notes   | -                  |
| GET    | /api/notes/:id | Get single note | -                  |
| POST   | /api/notes     | Create note     | { title, content } |
| PUT    | /api/notes/:id | Update note     | { title, content } |
| DELETE | /api/notes/:id | Delete note     | -                  |

## License

MIT
EOF

