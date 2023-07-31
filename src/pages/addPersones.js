import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddPersones = () => {
  const API_URL = 'http://localhost:3001/api';
  const [nom, setNom] = useState('');
  const [cognom1, setCognom1] = useState('');
  const [cognom2, setCognom2] = useState('');
  const [telf, setTelf] = useState('');
  const [mail, setMail] = useState('');
  const [dataNaixement, setDataNaixement] = useState('');
  const [persones, setPersones] = useState([]);
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [editPersona, setEditPersona] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteKey, setDeleteKey] = useState('');
  const [deletePersonaId, setDeletePersonaId] = useState('');

  const fetchPersones = async () => {
    try {
      const response = await axios.get(`${API_URL}/persones`);
      setPersones(response.data);
    } catch (error) {
      console.error('Error fetching persones:', error);
    }
  };

  useEffect(() => {
    fetchPersones();
  }, []);

  const handleSubmitPersona = async (e) => {
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
      const response = await axios.post(`${API_URL}/persones`, newPersona);
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

  const handleDeletePersona = async (id) => {
    setDeletePersonaId(id);
    setShowModal(true);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setDeleteKey('');
    setDeletePersonaId('');
  };

  const handleConfirmDelete = async () => {
    if (deleteKey === deletePersonaId) {
      try {
        await axios.delete(`${API_URL}/persones/${deletePersonaId}`);
        console.log('Persona deleted:', deletePersonaId);
        setShowModal(false);
        setDeleteKey('');
        setDeletePersonaId('');
        fetchPersones();
      } catch (error) {
        console.error('Error deleting persona:', error);
      }
    } else {
      console.error('Clau incorrecta, no es pot eliminar la persona.');
    }
  };

  const handleEditPersona = (persona) => {
    setSelectedPersona(persona);
    setEditPersona({ ...persona });
  };

  const handleUpdatePersona = async (e, id) => {
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
      const response = await axios.put(`${API_URL}/persones/${id}`, updatedPersona);
      console.log('Persona updated:', response.data);
      setSelectedPersona(null);
      setEditPersona(null);
      fetchPersones();
    } catch (error) {
      console.error('Error updating persona:', error);
    }
  };

  return (
    <div>
      <h1>Data Base</h1>
      <form onSubmit={handleSubmitPersona}>
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
                  <form onSubmit={(e) => handleUpdatePersona(e, persona.personaId)}>
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
                    <button className='button' type='button' onClick={() => handleEditPersona(persona)}>Editar</button>
                    <button className='button' onClick={() => handleDeletePersona(persona.personaId)}>Eliminar</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Modal */}
      {showModal && (
        <div>
          <h2>Eliminar persona</h2>
          <p>Per eliminar a aquesta persona, has d'escriure la següent clau: {deletePersonaId}</p>
          <input
            type="text"
            value={deleteKey}
            onChange={(e) => setDeleteKey(e.target.value)}
            placeholder="Introdueix la clau"
          />
          <button onClick={handleCancelDelete}>Cancel·lar</button>
          <button onClick={handleConfirmDelete} disabled={deleteKey !== deletePersonaId}>Eliminar</button>
        </div>
      )}
    </div>
  );
};

export default AddPersones;
