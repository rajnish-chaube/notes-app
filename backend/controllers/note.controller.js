const Note = require('../models/note.model');

// Get all notes
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notes', error: error.message });
  }
};

// Get a single note by ID
exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching note', error: error.message });
  }
};

// Create a new note
exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    
    // Additional validation
    if (!title || !title.trim()) {
      return res.status(400).json({ message: 'Title cannot be empty' });
    }
    
    if (!content || !content.trim()) {
      return res.status(400).json({ message: 'Content cannot be empty' });
    }
    
    const newNote = new Note({
      title: title.trim(),
      content: content.trim()
    });
    
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(400).json({ message: 'Error creating note', error: error.message });
  }
};

// Update a note
exports.updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    
    // Additional validation
    if (!title || !title.trim()) {
      return res.status(400).json({ message: 'Title cannot be empty' });
    }
    
    if (!content || !content.trim()) {
      return res.status(400).json({ message: 'Content cannot be empty' });
    }
    
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title: title.trim(), content: content.trim() },
      { new: true, runValidators: true } // Return updated doc and run validators
    );
    
    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(400).json({ message: 'Error updating note', error: error.message });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    
    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    
    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting note', error: error.message });
  }
};
