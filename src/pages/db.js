import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DB = () => {
  const [notes, setNotes] = useState([]);
  const [newNoteContent, setNewNoteContent] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/notes')
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleInputChange = (event) => {
    setNewNoteContent(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (newNoteContent.trim() === '') {
      return; // Do not submit an empty note
    }

    const newNote = {
      content: newNoteContent,
      important: false
    };

    axios.post('http://localhost:3001/api/notes', newNote)
      .then(response => {
        setNotes([...notes, response.data]); // Add the new note to the existing notes list
        setNewNoteContent(''); // Clear the input field
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDeleteNote = (noteId) => {
    axios.delete(`http://localhost:3001/api/notes/${noteId}`)
      .then(() => {
        setNotes(notes.filter(note => note.id !== noteId));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Gestor de la Base de Dades de l'Associació Pastorets de Girona</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={newNoteContent}
          onChange={handleInputChange}
          placeholder="Enter a new note"
        />
        <button type="submit">Add Note</button>
      </form>
      <ul>
        {notes.map(note => (
          <li key={note.id}>{note.content}
                <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DB;
