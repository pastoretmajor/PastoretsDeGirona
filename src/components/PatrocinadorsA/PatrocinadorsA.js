import React, { useState } from 'react';
import logoLaTostadora from '../../images/patrocinadors/logoLaTostadora.png';


import './PatrocinadorsA.css';

const patrocinadors = [
  {
    logo: logoLaTostadora,
    descripcio: '',
    link: 'https://www.latostadora.com/',
  },
  
];

const Patrocinador = ({ logo, descripcio, link }) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <div className="patrocinadorA" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <img src={logo} alt="Logo del patrocinador" />
      {hover && (
        <div className="infoA">
          <div className="descriptionA">
            <p>{descripcio}</p>
          </div>
          <div className="button-containerA">
            <button onClick={() => window.open(link, "_blank")}>Visita la web</button>
          </div>
        </div>
      )}
    </div>
  );
};

const PatrocinadorsA = () => {
  return (
    <div className="patrocinadors-containerA">
      {patrocinadors.map((patrocinador, index) => (
        <Patrocinador key={index} {...patrocinador} />
      ))}
    </div>
  );
};

export default PatrocinadorsA;
