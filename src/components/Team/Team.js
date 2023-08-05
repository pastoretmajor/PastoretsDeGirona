import React from 'react';
import Logo from '../../images/logos/logoBarretinaSenseFons.png';
import './Team.css';

const Obra = () => {
  return (
    <div className="flex-container">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Logo Barretina Sense Fons" />
      </div>
        <h2>Tens curiositat per saber qui forma part dels Pastorets de Girona? </h2>
        <p className='text-team'>L'Associació Pastorets de Girona està integrada per una apassionada i talentosa comunitat de professionals, així com per entusiastes aficionats dels Pastorets. Aquest grup cohesionat es converteix en un autèntic engranatge creatiu que ens regala l'espectacle inigualable dels Pastorets de Girona al Teatre Municipal. No et perdis aquesta experiència única plena de tradició i emoció!</p>
      </div>
  );
};

export default Obra;
