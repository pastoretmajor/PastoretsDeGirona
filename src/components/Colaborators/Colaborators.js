import React, { useState } from 'react';
import fundacioEsplai from '../../images/colaborators/fundacioEsplai.png';
import escolaDansa from '../../images/colaborators/gironaDansa.png';
import ajGirona from '../../images/colaborators/logo_ajgirona_color.png';
import escolaFedac from '../../images/colaborators/logotip-fedac.png';
import corXantica from '../../images/colaborators/cor_xantica.png'
import yasminaTeixits from '../../images/colaborators/Yasmina.jpg'
import qstura from '../../images/colaborators/qstura-nova-imatge-sol-05.png'
import diputacioGirona from '../../images/colaborators/diputacio-de-girona-Pastorets-de-Girona.png'
import centreRecerca from '../../images/colaborators/CentreRecercaEco.jpg'
import barStNarcis from '../../images/colaborators/BarCentreSantNarcis.jpg'
import impserDigital from '../../images/colaborators/impserDigital.jpg'
import departamentCultura from '../../images/colaborators/GENERALITATdeCATALUNYA-cultura_PastoretsDeGirona.png'
import lesVoltes from '../../images/colaborators/lesVoltes.png'
import dracs from '../../images/colaborators/dracs.png'

import './Colaborators.css';

const colaborators = [
  {
    logo: fundacioEsplai,
    descripcio: "La Fundació Esplai Girona - Mare de Déu del Mont és una entitat educativa creada l'any 1999. Mentres l'Associació Pastorets de Girona es troba en constitució, la Fundació Esplai Girona acull l'rogranització dels Pastorets 2023.",
    link: 'https://www.fundacioesplaigirona.cat',
  },
  {
    logo: escolaDansa,
    descripcio: '',
    link: '',
  },
  {
    logo: ajGirona,
    descripcio: '',
    link: 'https://web.girona.cat/',
  },
  {
    logo: escolaFedac,
    descripcio: '',
    link: 'https://escoles.fedac.cat/',
  },
  {
    logo: corXantica,
    descripcio: '',
    link: '',
  },
  {
    logo: yasminaTeixits,
    descripcio: '',
    link: '',
  },

  {
    logo: qstura,
    descripcio: '',
    link: '',
  },
  {
    logo: diputacioGirona,
    descripcio: '',
    link: '',
  },
  {
    logo: centreRecerca,
    descripcio: '',
    link: '',
  },
  {
    logo: barStNarcis,
    descripcio: '',
    link: '',
  },
  {
    logo: impserDigital,
    descripcio: '',
    link: '',
  },
  {
    logo: departamentCultura,
    descripcio: '',
    link: '',
  },
  {
    logo: lesVoltes,
    descripcio: '',
    link: '',
  },
  {
    logo: dracs,
    descripcio: '',
    link: '',
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
