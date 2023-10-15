import React, { useState } from 'react';
import logoMarlex from '../../images/patrocinadors/logoMarlex.png';
import logoEmpresa8 from '../../images/patrocinadors/logoLaTostadora.png';

import './PatrocinadorsB.css';

const patrocinadors = [
  {
    logo: logoMarlex,
    descripcio: "Marlex és una firma líder de serveis professionals que ofereix solucions de Recursos Humans a lnterim, Recruiting i Executive. Comptem amb més de 25 anys d'experiència al sector i una xarxa de més de 70 oficines, posicionant-nos com una de les 5 firmes líders a nivell peninsular i una de les de més alt creixement en els darrers anys. Compartim viatge amb més de 5.000 empreses que confien en els nostres serveis i equips especialitzats. Per filosofia d'empresa dediquem, des del 1996, un 5% de tots els nostres beneficis a accions de compromís social.",
    link: 'https://www.marlex.net/ca',
  },
  {
    logo:logoEmpresa8
  },
  
  
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
