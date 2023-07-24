import React, { useState } from 'react';
import logoEmpresa1 from '../../images/logoLaTostadora.png';
import logoEmpresa2 from '../../images/logoLaTostadora.png';
import logoEmpresa3 from '../../images/logoLaTostadora.png';
import logoEmpresa4 from '../../images/logoLaTostadora.png';
import logoEmpresa5 from '../../images/logoLaTostadora.png';

import './PatrocinadorsB.css';

const patrocinadors = [
  {
    logo: logoEmpresa1,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu.',
    link: 'https://www.latostadora.com/',
  },
  {
    logo: logoEmpresa2,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu.',
    link: 'https://www.latostadora.com/',
  },
  {
    logo: logoEmpresa3,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu.',
    link: 'https://www.latostadora.com/',
  },
  {
    logo: logoEmpresa4,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu.',
    link: 'https://www.latostadora.com/',
  },
  {
    logo: logoEmpresa5,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu.',
    link: 'https://www.latostadora.com/',
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
