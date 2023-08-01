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
  const [deleteKey, setDeleteKey] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [deleteMemberId, setDeleteMemberId] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  const funcioOptions = ['Actor/Actriu', 'Llum i so', 'Maquillatge i vestuari', 'Patrocinadors', 'Comunicació', 'Col·laboradors Varis', 'Baixes i Standby', 'Programació'];

  useEffect(() => {
    axios.get(`${API_URL}/persones`)
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => {
        console.error('Error al obtenir les persones:', error);
      });

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
      axios.post(`${API_URL}/membres`, newMember)
        .then((response) => {
          console.log('Nou membre afegit:', response.data);
          axios.get(`${API_URL}/membres`)
            .then((response) => {
              setMembers(response.data);
            })
            .catch((error) => {
              console.error('Error al obtenir els membres:', error);
            });
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
    setShowModal(true);
    setDeleteMemberId(memberId);
  };

  const handleModalInputChange = (event) => {
    setDeleteKey(event.target.value);
  };

  const handleConfirmDelete = () => {
    if (deleteKey === deleteMemberId) {
      axios.delete(`${API_URL}/membres/${deleteMemberId}`)
        .then((response) => {
          console.log('Membre eliminat amb èxit:', response.data);
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
    } else {
      console.error('Clau incorrecta, no es pot eliminar el membre.');
    }
    setShowModal(false);
    setDeleteMemberId('');
    setDeleteKey('');
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setDeleteMemberId('');
    setDeleteKey('');
  };

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value.toLowerCase());
  };

  const filteredPeople = people.filter(
    (person) =>
      (person.nom.toLowerCase().includes(nameFilter) ||
      person.cognom1.toLowerCase().includes(nameFilter) ||
      person.cognom2.toLowerCase().includes(nameFilter) ||
      `${person.nom} ${person.cognom1} ${person.cognom2}`.toLowerCase().includes(nameFilter))
  );

  return (
    <div>
      <h1>Selecciona una persona:</h1>
      <input
        type="text"
        value={nameFilter}
        onChange={handleNameFilterChange}
        placeholder="Filtrar per nom"
      />
      <ul>
        {filteredPeople.map((person) => (
          <li
            key={person.personaId}
            onClick={() => setSelectedPerson(person.personaId)}
            style={{ cursor: 'pointer' }}
          >
            {person.nom} {person.cognom1} {person.cognom2}
          </li>
        ))}
      </ul>
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
                {person ? `${person.nom} ${person.cognom1} ${person.cognom2}` : 'Persona eliminada'} - {member.funcio}
                <button onClick={() => handleDeleteMember(member._id)}>Eliminar</button>
              </li>
            );
          })}
        </ul>
      </div>
      {showModal && (
        <div>
          <h2>Eliminar membre</h2>
          <p>Per eliminar a aquest membre, has d'escriure la següent clau: {deleteMemberId}</p>
          <input
            type="text"
            value={deleteKey}
            onChange={handleModalInputChange}
            placeholder="Introdueix la clau"
          />
          <button onClick={handleCancelDelete}>Cancel·lar</button>
          <button onClick={handleConfirmDelete} disabled={deleteKey !== deleteMemberId}>Eliminar</button>
        </div>
      )}
    </div>
  );
};

export default AddMembers;
