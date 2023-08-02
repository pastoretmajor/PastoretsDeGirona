import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const AssignMembers = () => {
  const [actorActressMembers, setActorActressMembers] = useState([]);
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [customName, setCustomName] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [altres, setAltres] = useState([]);
  const [angels, setAngels] = useState([]);
  const [dimonis, setDimonis] = useState([]);
  const [pastors, setPastors] = useState([]);
  const [principals, setPrincipals] = useState([]);

  // Fetch data for "actor/actress" members and "people"
  useEffect(() => {
    axios.get(`${API_URL}/membres`)
      .then((response) => {
        setActorActressMembers(response.data.filter((member) => member.funcio === 'Actor/Actriu'));
      })
      .catch((error) => {
        console.error('Error al obtenir els membres:', error);
      });

    axios.get(`${API_URL}/persones`)
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => {
        console.error('Error al obtenir les persones:', error);
      });

    // Fetch data for "altres" collection
    axios.get(`${API_URL}/altres`)
      .then((response) => {
        setAltres(response.data);
      })
      .catch((error) => {
        console.error('Error al obtenir els membres de la col·lecció "altres":', error);
      });

    // Fetch data for "angels" collection
    axios.get(`${API_URL}/angels`)
      .then((response) => {
        setAngels(response.data);
      })
      .catch((error) => {
        console.error('Error al obtenir els membres de la col·lecció "angels":', error);
      });

    // Fetch data for "dimonis" collection
    axios.get(`${API_URL}/dimonis`)
      .then((response) => {
        setDimonis(response.data);
      })
      .catch((error) => {
        console.error('Error al obtenir els membres de la col·lecció "dimonis":', error);
      });

    // Fetch data for "pastors" collection
    axios.get(`${API_URL}/pastors`)
      .then((response) => {
        setPastors(response.data);
      })
      .catch((error) => {
        console.error('Error al obtenir els membres de la col·lecció "pastors":', error);
      });

    // Fetch data for "principals" collection
    axios.get(`${API_URL}/principals`)
      .then((response) => {
        setPrincipals(response.data);
      })
      .catch((error) => {
        console.error('Error al obtenir els membres de la col·lecció "principals":', error);
      });
  }, []);

  const handleSaveMember = () => {
    const newMember = {
      membreId: selectedPerson,
    };

    // Check if the selected role is "Altres" or "Principal"
    if (selectedRole === 'Altres' || selectedRole === 'Principal') {
      newMember.paper = customName;
    }

    let endpoint = '';
    switch (selectedRole) {
      case 'Principal':
        endpoint = 'principals';
        break;
      case 'Pastor':
        endpoint = 'pastors';
        break;
      case 'Dimoni':
        endpoint = 'dimonis';
        break;
      case 'Àngel':
        endpoint = 'angels';
        break;
      case 'Altres':
        endpoint = 'altres';
        break;
      default:
        endpoint = 'altres';
        break;
    }

    // Send the POST request to the backend to add a new member
    axios.post(`${API_URL}/${endpoint}`, newMember)
      .then((response) => {
        console.log('Nou membre afegit:', response.data);

        // After adding a new member, update the corresponding collection state
        switch (selectedRole) {
          case 'Principal':
            setPrincipals([...principals, response.data]);
            break;
          case 'Pastor':
            setPastors([...pastors, response.data]);
            break;
          case 'Dimoni':
            setDimonis([...dimonis, response.data]);
            break;
          case 'Àngel':
            setAngels([...angels, response.data]);
            break;
          case 'Altres':
            setAltres([...altres, response.data]);
            break;
          default:
            break;
        }

        // Refresh the list of actor/actress members
        axios.get(`${API_URL}/membres`)
          .then((response) => {
            setActorActressMembers(response.data.filter((member) => member.funcio === 'Actor/Actriu'));
          })
          .catch((error) => {
            console.error('Error al obtenir els membres:', error);
          });

        // Reset the selectedPerson, selectedRole, and customName
        setSelectedPerson('');
        setSelectedRole('');
        setCustomName('');
      })
      .catch((error) => {
        console.error('Error en crear un nou membre:', error);
      });
  };

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value.toLowerCase());
  };

  const handlePersonClick = (personId) => {
    setSelectedPerson(personId);
    setSelectedRole('');
    setCustomName('');
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleCustomNameChange = (event) => {
    setCustomName(event.target.value);
  };

  // Function to render members in a collection
  const renderMembersInCollection = (collectionName, collectionData) => (
    <div>
      <h2>{collectionName}</h2>
      <ul>
        {collectionData.map((member) => {
          const person = people.find((person) => person.personaId === member.membreId);
          return (
            <li key={member.id}>
              {person
                ? `${person.nom} ${person.cognom1} ${person.cognom2}`
                : 'Persona eliminada'}
            </li>
          );
        })}
      </ul>
    </div>
  );

  const filteredActorActressMembers = actorActressMembers.filter((member) => {
    const person = people.find((person) => person.personaId === member.personaId);
    const isActorActress = member.funcio === 'Actor/Actriu';

    const isInOtherCollection =
      altres.some((item) => item.membreId === member.personaId) ||
      angels.some((item) => item.membreId === member.personaId) ||
      dimonis.some((item) => item.membreId === member.personaId) ||
      pastors.some((item) => item.membreId === member.personaId) ||
      principals.some((item) => item.membreId === member.personaId);

    return person && isActorActress && !isInOtherCollection && `${person.nom} ${person.cognom1} ${person.cognom2}`.toLowerCase().includes(nameFilter);
  });

  return (
    <div>
      <h1>Llista d'Actors i Actrius:</h1>
      <input
        type="text"
        value={nameFilter}
        onChange={handleNameFilterChange}
        placeholder="Filtrar per nom"
      />
      <ul>
        {filteredActorActressMembers.map((member) => {
          const person = people.find((person) => person.personaId === member.personaId);
          const isActorActress = member.funcio === 'Actor/Actriu';

          const isInOtherCollection =
            altres.some((item) => item.membreId === member.personaId) ||
            angels.some((item) => item.membreId === member.personaId) ||
            dimonis.some((item) => item.membreId === member.personaId) ||
            pastors.some((item) => item.membreId === member.personaId) ||
            principals.some((item) => item.membreId === member.personaId);

          if (person && isActorActress && !isInOtherCollection && `${person.nom} ${person.cognom1} ${person.cognom2}`.toLowerCase().includes(nameFilter)) {
            return (
              <li
                key={member.id}
                onClick={() => handlePersonClick(person.personaId)}
                style={{ cursor: 'pointer' }}
              >
                {person ? `${person.nom} ${person.cognom1} ${person.cognom2}` : 'Persona eliminada'}
              </li>
            );
          }
          return null;
        })}
      </ul>

      {selectedPerson && (
        <div>
          <h2>Persona seleccionada:</h2>
          <p>
            Nom de la persona seleccionada:{' '}
            {selectedPerson ? people.find((person) => person.personaId === selectedPerson).nom : ''}{' '}
            {selectedPerson ? people.find((person) => person.personaId === selectedPerson).cognom1 : ''}{' '}
            {selectedPerson ? people.find((person) => person.personaId === selectedPerson).cognom2 : ''}
          </p>
          <select value={selectedRole} onChange={handleRoleChange}>
            <option value="">Selecciona un rol</option>
            <option value="Principal">Principal</option>
            <option value="Pastor">Pastor</option>
            <option value="Dimoni">Dimoni</option>
            <option value="Àngel">Àngel</option>
            <option value="Altres">Altres</option>
          </select>
          {selectedRole === 'Principal' || selectedRole === 'Altres' ? (
            <div>
              <input
                type="text"
                value={customName}
                onChange={handleCustomNameChange}
                placeholder="Escriu el paper"
              />
            </div>
          ) : null}
          <button onClick={handleSaveMember}>Afegir Membre</button>
        </div>
      )}

      {/* Display members in the "altres" collection */}
      {altres.length > 0 && renderMembersInCollection('Altres', altres)}

      {/* Display members in the "angels" collection */}
      {angels.length > 0 && renderMembersInCollection('Àngels', angels)}

      {/* Display members in the "dimonis" collection */}
      {dimonis.length > 0 && renderMembersInCollection('Dimonis', dimonis)}

      {/* Display members in the "pastors" collection */}
      {pastors.length > 0 && renderMembersInCollection('Pastors', pastors)}

      {/* Display members in the "principals" collection */}
      {principals.length > 0 && renderMembersInCollection('Principals', principals)}
    </div>
  );
};

export default AssignMembers;
