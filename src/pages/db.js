import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DB = () => {
  const API_URL = 'http://localhost:3001/api/persones';
  const [nom, setNom] = useState('');
  const [cognom1, setCognom1] = useState('');
  const [cognom2, setCognom2] = useState('');
  const [telf, setTelf] = useState('');
  const [mail, setMail] = useState('');
  const [dataNaixement, setDataNaixement] = useState('');
  const [persones, setPersones] = useState([]);
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [editPersona, setEditPersona] = useState(null); 

  const fetchPersones = async () => {
    try {
      const response = await axios.get(API_URL);
      setPersones(response.data);
    } catch (error) {
      console.error('Error fetching persones:', error);
    }
  };

  useEffect(() => {
    fetchPersones();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPersona = {
      nom,
      cognom1,
      cognom2,
      telf,
      mail,
      dataNaixement
    };

    try {
      const response = await axios.post(API_URL, newPersona);
      console.log('New persona added:', response.data);
      setNom('');
      setCognom1('');
      setCognom2('');
      setTelf('');
      setMail('');
      setDataNaixement('');
      fetchPersones();
    } catch (error) {
      console.error('Error adding persona:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      console.log('Persona deleted:', id);
      fetchPersones();
    } catch (error) {
      console.error('Error deleting persona:', error);
    }
  };

  const handleEdit = (persona) => {
    setSelectedPersona(persona);
    setEditPersona({ 
      nom: persona.nom,
      cognom1: persona.cognom1,
      cognom2: persona.cognom2 || '',
      telf: persona.telf || '',
      mail: persona.mail || '',
      dataNaixement: persona.dataNaixement
    });
  };

  const handleUpdate = async (e, id) => {
    e.preventDefault();

    const updatedPersona = {
      nom: editPersona.nom,
      cognom1: editPersona.cognom1,
      cognom2: editPersona.cognom2,
      telf: editPersona.telf,
      mail: editPersona.mail,
      dataNaixement: editPersona.dataNaixement
    };

    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedPersona);
      console.log('Persona updated:', response.data);
      setSelectedPersona(null);
      setEditPersona(null); // Reset the edit form state
      fetchPersones();
    } catch (error) {
      console.error('Error updating persona:', error);
    }
  };

  return (
    <div>
      <h1>Data Base</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom:</label>
          <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} required />

          <label>Cognom 1:</label>
          <input type="text" placeholder="Cognom1" value={cognom1} onChange={(e) => setCognom1(e.target.value)} required />

          <label>Cognom 2:</label>
          <input type="text" placeholder="Cognom2" value={cognom2} onChange={(e) => setCognom2(e.target.value)} />

          <label>Telèfon:</label>
          <input type="text" placeholder="+34000000000" value={telf} onChange={(e) => setTelf(e.target.value)} />

          <label>e-mail:</label>
          <input type="email" placeholder="correu.exemple@gmail.com" value={mail} onChange={(e) => setMail(e.target.value)} />

          <label>Data:</label>
          <input type="date" value={dataNaixement} onChange={(e) => setDataNaixement(e.target.value)} required />

          <button type="submit">Afegir Persona</button>
        </div>
      </form>

      <h2>Totes les Persones</h2>
      <div className="person-tiles">
        <div className="person-tile">
          <div className="grid-container">
            {persones.map((persona) => (
              <div key={persona.personaId}>
                {selectedPersona && selectedPersona.personaId === persona.personaId ? (
                  <form onSubmit={(e) => handleUpdate(e, persona.personaId)}>
                    <div className="form-group">
                      <label>Nom:</label>
                      <input type="text" placeholder="Nom" value={editPersona.nom} onChange={(e) => setEditPersona({ ...editPersona, nom: e.target.value })} required />

                      <label>Cognom 1:</label>
                      <input type="text" placeholder="Cognom1" value={editPersona.cognom1} onChange={(e) => setEditPersona({ ...editPersona, cognom1: e.target.value })} required />

                      <label>Cognom 2:</label>
                      <input type="text" placeholder="Cognom2" value={editPersona.cognom2} onChange={(e) => setEditPersona({ ...editPersona, cognom2: e.target.value })} />

                      <label>Telf:</label>
                      <input type="text" placeholder="+34000000000" value={editPersona.telf} onChange={(e) => setEditPersona({ ...editPersona, telf: e.target.value })} />

                      <label>Mail:</label>
                      <input type="email" placeholder="pastoret.major@pastoretsdegirona.cat" value={editPersona.mail} onChange={(e) => setEditPersona({ ...editPersona, mail: e.target.value })} />

                      <button type="submit">Actualitzar</button>
                    </div>
                  </form>
                ) : (
                  <div>
                    <div className="field">{persona.nom} {persona.cognom1} {persona.cognom2}</div>
                    <div className="field">{persona.mail}</div>
                    <div className="field">{persona.telf}</div>
                    <div className="field">{new Date(persona.dataNaixement).toLocaleDateString()}</div>
                    <button className='button' type='button' onClick={() => handleEdit(persona)}>Editar</button>
                    <button className='button' onClick={() => handleDelete(persona.personaId)}>Eliminar</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DB;
