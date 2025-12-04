import React, { useState } from 'react';
import logoValvi from '../../images/patrocinadors/logoValvi.png';
import logoCHFormacio from '../../images/patrocinadors/chFormacio.png';
import logoEtalentum from '../../images/patrocinadors/etalentum.png';

import './PatrocinadorsB.css';

const patrocinadors = [
  {
    logo: logoValvi,
    descripcio: "",
    link: '',
  },  
  {
    logo: logoEtalentum,
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
