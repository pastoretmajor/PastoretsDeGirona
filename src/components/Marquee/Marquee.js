import FastMarquee from 'react-fast-marquee'
import './Marquee.css';
import image1 from '../../images/patrocinadors/logoLaTostadora.png';
import image2 from '../../images/patrocinadors/logoLaTostadora.png';
import image3 from '../../images/logos/castingIcon.webP';
import image4 from '../../images/patrocinadors/logoLaTostadora.png';
import image5 from '../../images/patrocinadors/logoLaTostadora.png';
import image6 from '../../images/patrocinadors/logoLaTostadora.png';
import image7 from '../../images/patrocinadors/logoLaTostadora.png';
import image8 from '../../images/patrocinadors/logoLaTostadora.png';
import image9 from '../../images/patrocinadors/logoLaTostadora.png';

// Importa les altres imatges que necessitis aquí

const Marquee = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image1, image2, image3, image4, image5, image6, image7, image8, image9];


  return (
    <FastMarquee speed={30} direction="left">
        {images.map((image, index) => (
            <img key={index} src={image} alt="Logos" />
        ))}
    </FastMarquee>
  );
};

export default Marquee;
