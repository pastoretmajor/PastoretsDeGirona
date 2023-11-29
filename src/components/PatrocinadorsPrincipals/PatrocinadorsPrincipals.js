import FastMarquee from 'react-fast-marquee'
import './PatrocinadorsPrincipals.css';
import laTostadora from '../../images/patrocinadors/logoLaTostadora.png';
import logoValvi from '../../images/patrocinadors/logoValvi.png';
import logoCaixaBank from '../../images/patrocinadors/logoCaixabank.jpg';
import memora from '../../images/patrocinadors/logoMemora.png';
import marlex from '../../images/patrocinadors/logoMarlex.png';
import teaming from '../../images/patrocinadors/logoTeaming.png';
import ajGirona from '../../images/colaborators/logo_ajgirona_color.png';
import fedac from '../../images/colaborators/logotip-fedac.png';
import fundacioEsplai from '../../images/colaborators/fundacioEsplai.png';
import dansaGirona from '../../images/colaborators/gironaDansa.png';
import corXantica from '../../images/colaborators/cor_xantica.png';
import impserDigital from '../../images/colaborators/impserDigital.jpg';
import barStNarcis from '../../images/colaborators/BarCentreSantNarcis.jpg';
import recercaEco from '../../images/colaborators/CentreRecercaEco.jpg';
import yasmina from '../../images/colaborators/Yasmina.jpg';
import cultura from '../../images/colaborators/GENERALITATdeCATALUNYA-cultura_PastoretsDeGirona.png';
import diputacio from '../../images/colaborators/diputacio-de-girona-Pastorets-de-Girona.png';
import qstura from '../../images/colaborators/qstura-nova-imatge-sol-05.png';


const PatrocinadorsPrincipals = () => {
  const images = [
    laTostadora, ajGirona, fedac, fundacioEsplai, dansaGirona, corXantica, logoValvi, logoCaixaBank, impserDigital, memora, marlex, teaming,
    barStNarcis, recercaEco, yasmina, cultura, diputacio, qstura,
  ];


  return (
    <div>
      <p>Patrocinadors i col·laboradors principals:</p>
    <FastMarquee speed={30} direction="left">
        {images.map((image, index) => (
            <img key={index} src={image} alt="Logos" />
        ))}
    </FastMarquee>
    </div>
  );
};

export default PatrocinadorsPrincipals;
