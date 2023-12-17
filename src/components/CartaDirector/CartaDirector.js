import React from 'react';
import './CartaDirector.css';

const Carta = () => {
  return (
    <div className="director-body">
      <div className="director-container">
        <div className="director-header">
          <h1 className="director-title">Carta del Director</h1>
        </div>
        <div className="director-content">
          <p>
            Els nous Pastorets de Girona estan fets amb molta il·lusió.
          </p>
          <p>
            Tot comença de nou: el text, l'escenografia, els vesits, la música...
          </p>
          <p>
            Des del voluntariat hem dedicat temps i esforços per preparar un espectacle nadalenc agradable a petits i a grans.
          </p>
          <p>
            Moltes persones hem anat teixint grans complicitats fins arribar a les funcions que presentem aquest any amb el desig que passeu una bona estona.
          </p>
          <p>
            Amb aquestes línies volem agrair la vostra confiança, sense la qual no seria possible aquest projecte.
          </p>
          <p>
            Esperem retrobar-nos ben aviat
          </p>
        </div>
        <div className="director-footer">
          <p className="director-signature">Atentament,<br />els directors</p>
        </div>
      </div>
    </div>
  );
}

export default Carta;
