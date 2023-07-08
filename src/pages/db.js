import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DB = () => {
  const [notes, setNotes] = useState([]);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState(false);
  const [editNoteId, setEditNoteId] = useState(null);
  const [editNoteContent, setEditNoteContent] = useState('');
  const [editNoteImportant, setEditNoteImportant] = useState(false);

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
      important: newNoteImportant
    };

    axios.post('http://localhost:3001/api/notes', newNote)
      .then(response => {
        setNotes([...notes, response.data]); // Add the new note to the existing notes list
        setNewNoteContent(''); // Clear the input field
        setNewNoteImportant(false); // Reset the importance input
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

  const handleEditInputChange = (event) => {
    setEditNoteContent(event.target.value);
  };

  const handleEditFormSubmit = (event, noteId) => {
    event.preventDefault();

    if (editNoteContent.trim() === '') {
      return; // Do not update with empty content
    }

    const updatedNote = {
      content: editNoteContent,
      important: editNoteImportant
    };

    axios.put(`http://localhost:3001/api/notes/${noteId}`, updatedNote)
      .then(response => {
        const updatedNotes = notes.map(note => {
          if (note.id === noteId) {
            return response.data;
          }
          return note;
        });
        setNotes(updatedNotes);
        setEditNoteId(null);
        setEditNoteContent('');
        setEditNoteImportant(false);
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
        <label>
          <input
            type="checkbox"
            checked={newNoteImportant}
            onChange={() => setNewNoteImportant(!newNoteImportant)}
          />
          Important
        </label>
        <button type="submit">Add Note</button>
      </form>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <div>
              {note.id === editNoteId ? (
                <form onSubmit={(e) => handleEditFormSubmit(e, note.id)}>
                  <input
                    type="text"
                    value={editNoteContent}
                    onChange={handleEditInputChange}
                  />
                  <label>
                    <input
                      type="checkbox"
                      checked={editNoteImportant}
                      onChange={() => setEditNoteImportant(!editNoteImportant)}
                    />
                    Important
                  </label>
                  <button type="submit">Save</button>
                  <button onClick={() => setEditNoteId(null)}>Cancel</button>
                </form>
              ) : (
                <>
                  {note.content}
                  <button onClick={() => {
                    setEditNoteId(note.id);
                    setEditNoteContent(note.content);
                    setEditNoteImportant(note.important);
                  }}>Edit</button>
                  <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DB;
