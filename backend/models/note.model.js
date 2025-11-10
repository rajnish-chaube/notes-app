const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [1, 'Title cannot be empty']
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
      trim: true,
      minlength: [1, 'Content cannot be empty']
    }
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt fields
  }
);

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
