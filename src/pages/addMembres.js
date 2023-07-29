import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const AddMembers = () => {
  const [selectedPerson, setSelectedPerson] = useState('');
  const [people, setPeople] = useState([]);
  const [memberData, setMemberData] = useState({
    funcio: '',
    firmadretsImatge: false,
    actiu: true,
    dataEntrada: '',
    dataFi: ''
  });

  useEffect(() => {
    axios.get(`${API_URL}/persones`)
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => {
        console.error('Error al obtenir les persones:', error);
      });
  }, []);

  const handlePersonChange = (event) => {
    setSelectedPerson(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setMemberData({
      ...memberData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleAddMember = (event) => {
    event.preventDefault();
    if (selectedPerson && memberData.funcio && memberData.dataEntrada) {
      const newMember = {
        personaId: selectedPerson,
        funcio: memberData.funcio,
        firmadretsImatge: memberData.firmadretsImatge,
        actiu: memberData.actiu,
        dataEntrada: memberData.dataEntrada,
        dataFi: memberData.dataFi || null
      };

      axios.post(`${API_URL}/membres`, newMember)
        .then((response) => {
          console.log('Nou membre afegit:', response.data);
          // Aquí pots afegir lògica addicional, com actualitzar la llista de membres, mostrar un missatge de confirmació, etc.
        })
        .catch((error) => {
          console.error('Error al afegir el membre:', error);
        });
    } else {
      console.warn('Cal seleccionar una persona, afegir una funció i una data d\'entrada.');
    }
  };

  return (
    <div>
      <h1>Selecciona una persona:</h1>
      <select value={selectedPerson} onChange={handlePersonChange}>
        <option value="">Selecciona una persona</option>
        {people.map((person) => (
          <option key={person.personaId} value={person.personaId}>
            {person.nom} {person.cognom1} {person.cognom2}
          </option>
        ))}
      </select>

      {selectedPerson && (
        <div>
          <h2>Formulari d'afegir membre:</h2>
          <form onSubmit={handleAddMember}>
            <label>
              Funció:
              <input
                type="text"
                name="funcio"
                value={memberData.funcio}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Firmadrets Imatge:
              <input
                type="checkbox"
                name="firmadretsImatge"
                checked={memberData.firmadretsImatge}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Actiu:
              <input
                type="checkbox"
                name="actiu"
                checked={memberData.actiu}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Data d'Entrada:
              <input
                type="date"
                name="dataEntrada"
                value={memberData.dataEntrada}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Data Fi (opcional):
              <input
                type="date"
                name="dataFi"
                value={memberData.dataFi}
                onChange={handleInputChange}
              />
            </label>

            <button type="submit">Afegir Membre</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddMembers;
