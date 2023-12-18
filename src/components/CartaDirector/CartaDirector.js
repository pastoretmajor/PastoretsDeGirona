import React from 'react';
import './CartaDirector.css';
import logoBarretina from "../../images/logos/logoBarretinaSenseFons.png"

const Carta = () => {
  return (
    <div className="director-body">
      <div className="director-container">
        <div className="director-header">
          <h1 className="director-title">Carta dels Directors</h1>
        </div>
        <img className="director-logo"src={logoBarretina} alt="Logo Barretina" />
        <div className="director-content">
          <p>
            Els nous Pastorets de Girona estan fets amb molta il·lusió.
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
            Esperem retrobar-nos ben aviat.
          </p>
          <br></br>
        </div>
        <div className="director-footer">
          <p className="director-signature">Atentament,<br />Els directors dels Pastorets de Girona</p>
        </div>
      </div>
        <div className="director-enquesta">T'ha agradat la funció? Si us plau, respon la següent enquesta i coneixerem la teva opinió.</div>
        <a className="director-tooltip" href='https://forms.gle/YJbzxmVtAz8vyCud7' rel="noopener noreferrer" target="_blank">Enquesta 
          <div className="director-tooltiptext">La teva resposta ens ajuda molt!</div>
        </a>
    </div>
  );
}

export default Carta;
