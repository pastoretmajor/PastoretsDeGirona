import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const AddMembers = () => {
  const [selectedPerson, setSelectedPerson] = useState('');
  const [people, setPeople] = useState([]);
  const [members, setMembers] = useState([]);
  const [memberData, setMemberData] = useState({
    funcio: '',
    firmadretsImatge: false,
    actiu: true,
    dataEntrada: '',
  });

  // Opcions disponibles per a la funció
  const funcioOptions = ['Actor/Actriu', 'Llum i so', 'Maquillatge i vestuari', 'Patrocinadors', 'Web i XXSS', 'Col·laboradors Varis', 'Baixes i Standby'];

  useEffect(() => {
    // Obté la llista de persones al carregar el component
    axios.get(`${API_URL}/persones`)
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => {
        console.error('Error al obtenir les persones:', error);
      });

    // Obté la llista de membres al carregar el component
    axios.get(`${API_URL}/membres`)
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error('Error al obtenir els membres:', error);
      });
  }, []);

  const handlePersonChange = (event) => {
    setSelectedPerson(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setMemberData({
      ...memberData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleAddMember = (event) => {
    event.preventDefault();
    if (selectedPerson && memberData.funcio) {
      const newMember = {
        personaId: selectedPerson,
        funcio: memberData.funcio,
        firmadretsImatge: memberData.firmadretsImatge,
        actiu: memberData.actiu,
        dataEntrada: new Date().toISOString(),
      };

      // Afegeix un nou membre a través de la crida POST
      axios.post(`${API_URL}/membres`, newMember)
        .then((response) => {
          console.log('Nou membre afegit:', response.data);
          // Refresca la llista de membres després d'afegir un membre amb èxit
          axios.get(`${API_URL}/membres`)
            .then((response) => {
              setMembers(response.data);
            })
            .catch((error) => {
              console.error('Error al obtenir els membres:', error);
            });

          // Reseteja les dades del formulari a l'estat inicial
          setMemberData({
            funcio: '',
            firmadretsImatge: false,
            actiu: true,
            dataEntrada: '',
          });
          setSelectedPerson('');
        })
        .catch((error) => {
          console.error('Error al afegir el membre:', error);
        });
    } else {
      console.warn('Cal seleccionar una persona i afegir una funció.');
    }
  };

  const handleDeleteMember = (memberId) => {
    // Comprova si memberId és un valor vàlid abans de fer la crida
    if (!memberId) {
      console.error('ID de membre no vàlid');
      return;
    }

    // Realitza una crida API per eliminar el membre
    axios.delete(`${API_URL}/membres/${memberId}`)
      .then((response) => {
        console.log('Membre eliminat amb èxit:', response.data);
        // Refresca la llista de membres després d'eliminar el membre
        axios.get(`${API_URL}/membres`)
          .then((response) => {
            setMembers(response.data);
          })
          .catch((error) => {
            console.error('Error al obtenir els membres:', error);
          });
      })
      .catch((error) => {
        console.error('Error en eliminar el membre:', error);
      });
  };

  // Funció per filtrar la llista de persones i excloure aquelles que ja són membres
  const filteredPeople = people.filter((person) => !members.some((member) => member.personaId === person.personaId));

  return (
    <div>
      <h1>Selecciona una persona:</h1>
      <select value={selectedPerson} onChange={handlePersonChange}>
        <option value="">Selecciona una persona</option>
        {filteredPeople.map((person) => (
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
              <select
                name="funcio"
                value={memberData.funcio}
                onChange={handleInputChange}
              >
                <option value="">Selecciona una funció</option>
                {funcioOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
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
            <button type="submit">Afegir Membre</button>
          </form>
        </div>
      )}

      <div>
        <h2>Llista de membres:</h2>
        <ul>
          {members.map((member) => {
            const person = people.find((person) => person.personaId === member.personaId);
            return (
              <li key={member.id}>
                {person ? `${person.nom} ${person.cognom1} ${person.cognom2}` : 'Persona desconeguda'} - {member.funcio}
                <button onClick={() => handleDeleteMember(member._id)}>Eliminar</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AddMembers;
