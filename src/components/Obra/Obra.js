import React from 'react';
import Logo from '../../images/logos/logoBarretinaSenseFons.png';
import './Obra.css';

const Obra = () => {
  return (
    <div className="flex-container">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Logo Barretina Sense Fons" />
      </div>
      <p className='text-obra'>Després d'un any sense els Pastorets a la ciutat de Girona, aquest any tornen amb una proposta renovada i emocionant. </p>
      <p className='text-obra'>Els nous Pastorets mantindran el seu esperit familiar i musical, però arriben amb un format diferent, inclusiu i innovador. Una combinació magistral d'humor, música, modernitat i tradició donarà vida a la fascinant història del naixement de Jesús, amb un toc molt especial que posarà en relleu els personatges típics de la nostra estimada cultura catalana.</p>
      <p className='text-obra'>Amb una posada en escena repleta de sorpreses i emoció, l'obra ens portarà a viure les aventures i desventures dels protagonistes mentre superen diferents obstacles. A través d'aquesta experiència teatral, el públic podrà connectar amb el passat i el present de manera única.</p>
      <p className='text-obra'>Així doncs, prepareu-vos per gaudir d'uns Pastorets renovats, que ens transportaran en un viatge inoblidable que ens connectarà amb les nostres arrels i alhora ens sorprendrà amb la frescor i creativitat del moment actual.</p>
      <p className='text-obra'>Us convidem a compartir aquesta meravellosa experiència teatral plena d'emocions i significat, que no deixarà a ningú indiferent. Us esperem al Teatre Municipal per celebrar aquesta festa de la tradició i la cultura amb una nova perspectiva que us enamorarà.</p>
    </div>
  );
};

export default Obra;
