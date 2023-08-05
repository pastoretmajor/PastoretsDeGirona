import React, { useState } from 'react';
import logoEmpresa1 from '../../images/patrocinadors/logoLaTostadora.png';
import logoEmpresa2 from '../../images/patrocinadors/logoLaTostadora.png';
import logoEmpresa3 from '../../images/patrocinadors/logoLaTostadora.png';
import logoEmpresa4 from '../../images/patrocinadors/logoLaTostadora.png';
import logoEmpresa5 from '../../images/patrocinadors/logoLaTostadora.png';
import logoEmpresa6 from '../../images/patrocinadors/logoLaTostadora.png';
import logoEmpresa7 from '../../images/patrocinadors/logoLaTostadora.png';
import logoEmpresa8 from '../../images/patrocinadors/logoLaTostadora.png';

import './PatrocinadorsAngels.css';

const patrocinadors = [
  {
    logo: logoEmpresa1,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus fini',
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
  {
    logo: logoEmpresa6,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu.',
    link: 'https://www.latostadora.com/',
  },
  {
    logo: logoEmpresa7,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu.',
    link: 'https://www.latostadora.com/',
  },
  {
    logo: logoEmpresa8,
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
