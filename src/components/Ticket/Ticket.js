import React from 'react';
import './Ticket.css';

import ticketImage from '../../images/banners/capCabro.jpg';

const Ticket = () => {
  return (
    <article className="card">
      <div className="ticket-img">
        <img src={ticketImage} alt="Imatge ticket" />
      </div>
      <div className="card_content">
        <span className="card_title">ADQUIRIR ENTRADES</span>
        <span className="card_subtitle">Funcions: 25, 26, 28, 29 de Desembre</span>
        <p className="card_description">Ubicació: Teatre Municipal de Girona</p>
        <p className="card_description">Hora d'inici: 17:30h</p>
        <p className="card_description">Duració aproximada: 1:30h</p>
        <a href="https://www.giglon.cat/girona/teatremunicipal/esdeveniments?idEvent=els-pastorets-de-girona-2024" target="_blank" rel="noopener noreferrer">
          <button className="ticket-button">
            <span className="actual-text">&nbsp;COMPRAR&nbsp;</span>
            <span aria-hidden="true" className="hover-text">&nbsp;COMPRAR&nbsp;</span>
          </button>
        </a>
      </div>
    </article>
  );
};

export default Ticket;
