import FastMarquee from 'react-fast-marquee'
import './PatrocinadorsPrincipals.css';
import logoValvi from '../../images/patrocinadors/logoValvi.png';
import logoCaixaBank from '../../images/patrocinadors/logoCaixabank.jpg';
import ajGirona from '../../images/colaborators/logo_ajgirona_color.png';
import dansaGirona from '../../images/colaborators/gironaDansa.png';
import corXantica from '../../images/colaborators/cor_xantica.png';
import impserDigital from '../../images/colaborators/impserDigital.jpg';
import barStNarcis from '../../images/colaborators/BarCentreSantNarcis.jpg';
import cafesCornella from '../../images/colaborators/cafesCornella.png'
import kooking from '../../images/colaborators/kookingcatering.png';
import manaies from '../../images/colaborators/manaies.webp';
import recercaEco from '../../images/colaborators/CentreRecercaEco.jpg';
import cultura from '../../images/colaborators/GENERALITATdeCATALUNYA-cultura_PastoretsDeGirona.png';

const PatrocinadorsPrincipals = () => {
  const images = [
    ajGirona, dansaGirona, corXantica, logoCaixaBank, impserDigital,
    barStNarcis, cafesCornella, kooking ,manaies
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
