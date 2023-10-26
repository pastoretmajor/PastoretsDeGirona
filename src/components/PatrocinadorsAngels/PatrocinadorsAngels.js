import React, { useState } from 'react';

import './PatrocinadorsAngels.css';

const patrocinadors = [
];

const Patrocinador = ({ logo, descripcio, link }) => {
    const [hover, setHover] = useState(false);
  
    const handleHover = () => {
      setHover(!hover);
    };
  
    return (
      <div className="patrocinadorAG" onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <img src={logo} alt="Logo del patrocinador" />
        {hover && (
          <div className="infoAG">
            <div className="descriptionAG">
              <p>{descripcio}</p>
            </div>
            <div className="button-containerAG">
              <button onClick={() => window.open(link, "_blank")}>Visita la web</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  const PatrocinadorsAngels = () => {
    return (
      <div className="patrocinadors-containerAG">
        {patrocinadors.map((patrocinador, index) => (
          <Patrocinador key={index} {...patrocinador} />
        ))}
      </div>
    );
  };

export default PatrocinadorsAngels;
