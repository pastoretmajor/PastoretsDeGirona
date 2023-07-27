import FastMarquee from 'react-fast-marquee'
import './PatrocinadorsPrincipals.css';
import laTostadora from '../../images/patrocinadors/logoLaTostadora.png';
import ajGirona from '../../images/colaborators/logo_ajgirona_color.png';
import fedac from '../../images/colaborators/logotip-fedac.png';


const PatrocinadorsPrincipals = () => {
  const images = [laTostadora, ajGirona, fedac,laTostadora, ajGirona, fedac,laTostadora, ajGirona, fedac,laTostadora, ajGirona, fedac,laTostadora, ajGirona, fedac, laTostadora, ajGirona, fedac,laTostadora, ajGirona, fedac,];


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
