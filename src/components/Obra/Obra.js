import React from 'react';
import Logo from '../../images/logos/logoBarretinaSenseFons.png';
import './Obra.css';

const Obra = () => {
  return (
    <div className="flex-container">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Logo Barretina Sense Fons" />
      </div>
      <p className='text-obra'>Després de més de quaranta anys de Pastorets a càrrec del grup Proscenium, l'any 2022 es van aturar les representacions d'aquest espectacle en el Teatre Municipal de Girona. Va ser aleshores quan un grup de persones van iniciar el projecte que culminaria amb aquesta nova etapa dels Pastorets de Girona.</p>
      <p />
      <p className='text-obra'>L'elecció de la versió de l'obra a representar va ser un dels punts claus del projecte: no se'n trobava cap que s'ajustés a la durada desitjada i que permetés modificacions en les representacions de cada any per adaptar-se a l'actualitat de la ciutat, tal i com era tradicional de fer.</p>
      <p />
      <p className='text-obra'>És en aquest context que Núria Donato es va oferir a escriure una obra amb tots els elements tradicionals dels relats dels Pastorets però amb suficient flexibilitat per a poder fer lleugeres modificacions a cada nova temporada. A més, l'autora va fer cessió dels drets d'autor a l'Associació Pastorets de Girona, qui la va registrar per tal de protegir-ne la correcta utilització segons les condicions acordades amb l'escriptora.</p>
      <p />
    </div>
  );
};

export default Obra;
