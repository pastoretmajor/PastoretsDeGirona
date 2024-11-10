// Calendari.js
import React from 'react';
import './Calendar.css';
import imatgeCalendari from '../../images/banners/fotoCalendari.webp';
const Calendari = () => {
  return (
    <div className="calendari-container">
      <img className="background-image" src={imatgeCalendari} alt="Imatge del calendari d'aquest any" />
    </div>
  );
};

export default Calendari;
