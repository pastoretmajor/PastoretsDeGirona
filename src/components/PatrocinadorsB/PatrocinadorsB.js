import React, { useState } from 'react';
import logoValvi from '../../images/patrocinadors/logoValvi.png';
import logoCHFormacio from '../../images/patrocinadors/chFormacio.png';

import './PatrocinadorsB.css';

const patrocinadors = [
  {
    logo: logoValvi,
    descripcio: "",
    link: '',
  },  
  {
    logo: logoCHFormacio,
    descripcio: '',
    link: '',
  }
];

const Patrocinador = ({ logo, descripcio, link }) => {
    const [hover, setHover] = useState(false);
  
    const handleHover = () => {
      setHover(!hover);
    };
  
    return (
      <div className="patrocinadorB" onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <img src={logo} alt="Logo del patrocinador" />
        {hover && (
          <div className="infoB">
            <div className="descriptionB">
              <p>{descripcio}</p>
            </div>
            <div className="button-containerB">
              <button onClick={() => window.open(link, "_blank")}>Visita la web</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  const PatrocinadorsB = () => {
    return (
      <div className="patrocinadors-containerB">
        {patrocinadors.map((patrocinador, index) => (
          <Patrocinador key={index} {...patrocinador} />
        ))}
      </div>
    );
  };

export default PatrocinadorsB;
