import React from 'react';
import './BirthdayList.css';

const BirthdayList = ({ teamMembers }) => {
  // Obtenir la data d'avui
  const today = new Date();

  // Filtrar els membres de l'equip que compleixen anys avui
  const birthdaysToday = teamMembers.filter((teamMember) => {
    // Comprovar que la data de naixement no sigui nul·la o invàlida
    if (teamMember.birth instanceof Date && !isNaN(teamMember.birth)) {
      return (
        teamMember.birth.getDate() === today.getDate() &&
        teamMember.birth.getMonth() === today.getMonth()
      );
    }
    return false; // No es mostra si la data de naixement és nul·la o invàlida
  });

  return (
    <div className="container">
      <h2>Avui és el seu dia</h2>
      {birthdaysToday.length > 0 ? (
        <div>
          <ul>
            {birthdaysToday.map((teamMember, index) => (
              <li key={index}>
                {teamMember.name}
                {teamMember.msg && <p>{teamMember.msg}</p>}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Avui fa anys... Una persona que encara no s'ha apuntat!</p>
      )}
    </div>
  );
};

export default BirthdayList;