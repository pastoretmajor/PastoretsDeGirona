import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

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
  const [dataNaixementOriginalFormatted, setDataNaixementOriginalFormatted] = useState('');

  const fetchPersones = async () => {
    try {
      const response = await axios.get(API_URL);
      setPersones(response.data);
    } catch (error) {
      console.error('Error fetching persones:', error);
      // Handle the error
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
      // Reset the form after successful submission
      setNom('');
      setCognom1('');
      setCognom2('');
      setTelf('');
      setMail('');
      setDataNaixement('');
      // Refresh the list of persons
      fetchPersones();
    } catch (error) {
      console.error('Error adding persona:', error);
      // Handle the error
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      console.log('Persona deleted:', id);
      // Refresh the list of persons after deletion
      fetchPersones();
    } catch (error) {
      console.error('Error deleting persona:', error);
      // Handle the error
    }
  };

  const handleEdit = (persona) => {
    setSelectedPersona(persona);
    setNom(persona.nom);
    setCognom1(persona.cognom1);
    setCognom2(persona.cognom2 || '');
    setTelf(persona.telf || '');
    setMail(persona.mail || '');
    setDataNaixement(persona.dataNaixement);
    const formattedDate = format(parseISO(persona.dataNaixement), 'yyyy-MM-dd');
    setDataNaixementOriginalFormatted(formattedDate); // Emmagatzemar la data de naixement original formatejada
  };
  

  const handleUpdate = async (e, id) => {
    e.preventDefault();

    const updatedPersona = {
      nom,
      cognom1,
      cognom2,
      telf,
      mail,
      dataNaixement
    };

    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedPersona);
      console.log('Persona updated:', response.data);
      // Clear the selected persona and form fields after successful update
      setSelectedPersona(null);
      setNom('');
      setCognom1('');
      setCognom2('');
      setTelf('');
      setMail('');
      setDataNaixement('');
      // Refresh the list of persons after update
      fetchPersones();
    } catch (error) {
      console.error('Error updating persona:', error);
      // Handle the error
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
          <input type="text" placeholder="+34 000 00 00 00" value={telf} onChange={(e) => setTelf(e.target.value)} />

          <label>e-mail:</label>
          <input type="email" placeholder="correu.exemple@gmail.com" value={mail} onChange={(e) => setMail(e.target.value)} />

          <label>Data:</label>
          <input type="date" value={dataNaixement || dataNaixementOriginalFormatted} onChange={(e) => setDataNaixement(e.target.value)} required />

          <button type="submit">Afegir Persona</button>
        </div>
      </form>

      <h2>Totes les Persones</h2>
      <div className="person-tiles">
        <div className="person-tile">
          <div className="grid-container">
            <div className="header">Nom</div>
            <div className="header">Cognoms</div>
            <div className="header">e-mail</div>
            <div className="header">Telf</div>
            <div className="header">Naixement</div>
            <div className="header">Id</div>
            <div className="header">Editar</div>
            <div className="header">Eliminar</div>


            {persones.map((persona) => (
              <React.Fragment key={persona.personaId}>
                {selectedPersona && selectedPersona.personaId === persona.personaId ? (
                  <form onSubmit={(e) => handleUpdate(e, persona.personaId)}>
                    <div className="form-group">
                      <label>Nom:</label>
                      <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} required />

                      <label>Cognom 1:</label>
                      <input type="text" placeholder="Cognom1" value={cognom1} onChange={(e) =>setCognom1(e.target.value)} required />

                      <label>Cognom 2:</label>
                      <input type="text" placeholder="Cognom2" value={cognom2} onChange={(e) => setCognom2(e.target.value)} />

                      <label>Telf:</label>
                      <input type="text" placeholder="+34 666 66 66 66" value={telf} onChange={(e) => setTelf(e.target.value)} />

                      <label>Mail:</label>
                      <input type="email" placeholder="pastoret.major@pastoretsdegirona.cat" value={mail} onChange={(e) => setMail(e.target.value)} />

                      <label>Data:</label>
                      <input type="date" value={dataNaixement} onChange={(e) => setDataNaixement(e.target.value)} required />

                      <button type="submit">Actualitzar</button>
                    </div>
                  </form>
                ) : (
                  <React.Fragment>
                    <div className="field">{persona.nom}</div>
                    <div className="field">{persona.cognom1} {persona.cognom2}</div>
                    <div className="field">{persona.mail}</div>
                    <div className="field">{persona.telf}</div>
                    <div className="field">{new Date(persona.dataNaixement).toLocaleDateString()}</div>
                    <div className="field">{persona.personaId}</div>    
                    <button className='button' type='button' onClick={() => handleEdit(persona)}>Editar</button>
                    <button className='button' onClick={() => handleDelete(persona.personaId)}>Eliminar</button>
                    
                    
                  </React.Fragment>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DB;
