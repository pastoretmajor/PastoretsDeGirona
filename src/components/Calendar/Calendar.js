// Calendari.js
import React from 'react';
import './Calendar.css';
import imatgeFonsCalendari from '../../images/banners/alaAngelCalendari.png';
import calendarImage from '../../images/banners/desembre.png'
const Calendari = () => {
  return (
    <div className="calendari-container">
      <img className="background-image" src={imatgeFonsCalendari} alt="Imatge ala amb fons negre" />
      <img className="overlay-image" src={calendarImage} alt="Imatge calendari" />
    </div>
  );
};

export default Calendari;
