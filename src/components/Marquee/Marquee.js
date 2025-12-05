import FastMarquee from 'react-fast-marquee'
import './Marquee.css';
import logoValvi from '../../images/patrocinadors/logoValvi.png';
import logoChFormacio from '../../images/patrocinadors/chFormacio.png';
import logoEtalentum from '../../images/patrocinadors/etalentum.png'

const Marquee = () => {
  const images = [logoValvi, logoEtalentum, logoValvi, logoEtalentum, logoValvi, logoEtalentum, logoValvi, logoEtalentum, logoValvi, logoEtalentum, logoValvi, logoEtalentum];


  return (
    <FastMarquee speed={30} direction="left">
        {images.map((image, index) => (
            <img key={index} src={image} alt="Logos" />
        ))}
    </FastMarquee>
  );
};

export default Marquee;
