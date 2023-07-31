import React, { useState } from 'react';
import fundacioEsplai from '../../images/colaborators/fundacioEsplai.png';
import logoEmpresa2 from '../../images/colaborators/logotip-fedac.png';
import logoEmpresa3 from '../../images/colaborators/logo_ajgirona_color.png';
import logoEmpresa4 from '../../images/colaborators/logotip-fedac.png';
import logoEmpresa5 from '../../images/colaborators/logo_ajgirona_color.png';
import logoEmpresa6 from '../../images/colaborators/logotip-fedac.png';
import logoEmpresa7 from '../../images/colaborators/logo_ajgirona_color.png';
import logoEmpresa8 from '../../images/colaborators/logotip-fedac.png';
import logoEmpresa9 from '../../images/colaborators/logo_ajgirona_color.png';
import logoEmpresa10 from '../../images/colaborators/logotip-fedac.png';

import './Colaborators.css';

const colaborators = [
  {
    logo: fundacioEsplai,
    descripcio: "La Fundació Esplai Girona - Mare de Déu del Mont és una entitat educativa creada l'any 1999. Mentres l'Associació Pastorets de Girona es troba en constitució, la Fundació Esplai Girona acull l'rogranització dels Pastorets 2023.",
    link: 'https://www.fundacioesplaigirona.cat',
  },
  {
    logo: logoEmpresa2,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu.',
    link: 'https://escoles.fedac.cat/',
  },
  {
    logo: logoEmpresa3,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu.',
    link: 'https://web.girona.cat/',
  },
  {
    logo: logoEmpresa4,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu.',
    link: 'https://escoles.fedac.cat/',
  },
  {
    logo: logoEmpresa5,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu.',
    link: 'https://web.girona.cat/',
  },
  {
    logo: logoEmpresa6,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu.',
    link: 'https://escoles.fedac.cat/',
  },
  {
    logo: logoEmpresa7,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu.',
    link: 'https://web.girona.cat/',
  },
  {
    logo: logoEmpresa8,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu.',
    link: 'https://escoles.fedac.cat/',
  },
  {
    logo: logoEmpresa9,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu.',
    link: 'https://web.girona.cat/',
  },
  {
    logo: logoEmpresa10,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu.',
    link: 'https://escoles.fedac.cat/',
  },
];

const Colaborator = ({ logo, descripcio, link }) => {
    const [hover, setHover] = useState(false);
  
    const handleHover = () => {
      setHover(!hover);
    };
  
    return (
      <div className="patrocinadorC" onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <img src={logo} alt="Logo del patrocinador" />
        {hover && (
          <div className="infoC">
            <div className="descriptionC">
              <p>{descripcio}</p>
            </div>
            <div className="button-containerC">
              <button onClick={() => window.open(link, "_blank")}>Visita la web</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  const Colaborators = () => {
    return (
      <div className="patrocinadors-containerC">
        {colaborators.map((colaborators, index) => (
          <Colaborator key={index} {...colaborators} />
        ))}
      </div>
    );
  };

export default Colaborators;
