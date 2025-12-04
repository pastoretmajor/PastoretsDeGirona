import React, { useState } from 'react';

import './PatrocinadorsA.css';

const patrocinadors = [

];

const Patrocinador = ({ logo, descripcio, link }) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <div className="patrocinadorA" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <img src={logo} alt="Logo del patrocinador" />
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
