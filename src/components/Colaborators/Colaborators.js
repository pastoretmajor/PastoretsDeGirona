import React, { useState } from 'react';
import ajGirona from '../../images/colaborators/logo_ajgirona_color.png';
import cafesCornella from '../../images/colaborators/cafesCornella.png';
import centreRecerca from '../../images/colaborators/CentreRecercaEco.jpg'
import escolaDansa from '../../images/colaborators/gironaDansa.png';
import departamentCultura from '../../images/colaborators/GENERALITATdeCATALUNYA-cultura_PastoretsDeGirona.png'
import kooking from '../../images/colaborators/kookingcatering.png';
import impserDigital from '../../images/colaborators/impserDigital.jpg'
import barStNarcis from '../../images/colaborators/BarCentreSantNarcis.jpg'
import manaies from '../../images/colaborators/manaies.webp';
import caixaBank from '../../images/colaborators/logoCaixabank.jpg';
import corXantica from '../../images/colaborators/cor_xantica.png';

import './Colaborators.css';

const colaborators = [
  {
    logo: escolaDansa,
    descripcio: 'Escola en dansa Girona',
    link: '',
  },
  {
    logo: ajGirona,
    descripcio: 'Web de l\'ajuntament de Girona',
    link: 'https://web.girona.cat/',
  },
  {
    logo: cafesCornella,
    descripcio: '',
    link: '',
  },
  { 
    logo: kooking,
    descripcio: '',
    link: '',
  },
  {
    logo: impserDigital,
    descripcio: '',
    link: '',
  },
  {
    logo: barStNarcis,
    descripcio: '',
    link: '',
  },
  {
    logo: caixaBank,
    descripcio: '',
    link: '',
  },
  { 
    logo: manaies,
    descripcio: '',
    link: '',
  },
  {
    logo: corXantica,
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
