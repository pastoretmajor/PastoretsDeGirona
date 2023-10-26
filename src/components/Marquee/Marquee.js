import FastMarquee from 'react-fast-marquee'
import './Marquee.css';
import logoLaTostadora from '../../images/patrocinadors/logoLaTostadora.png';
import logoMarlex from '../../images/patrocinadors/logoMarlex.png';

// Importa les altres imatges que necessitis aquí

const Marquee = () => {
  const images = [logoLaTostadora, logoMarlex, logoLaTostadora, logoMarlex, logoLaTostadora, logoMarlex, logoLaTostadora, logoMarlex, ];


  return (
    <FastMarquee speed={30} direction="left">
        {images.map((image, index) => (
            <img key={index} src={image} alt="Logos" />
        ))}
    </FastMarquee>
  );
};

export default Marquee;
