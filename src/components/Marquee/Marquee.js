import FastMarquee from 'react-fast-marquee'
import './Marquee.css';
import logoValvi from '../../images/patrocinadors/logoValvi.png';
import logoCHFormacio from '../../images/patrocinadors/chFormacio.png';

const Marquee = () => {
  const images = [logoValvi, logoCHFormacio, logoValvi, logoCHFormacio, logoValvi, logoCHFormacio, logoValvi, logoCHFormacio, logoValvi, logoCHFormacio, logoValvi, logoCHFormacio];


  return (
    <FastMarquee speed={30} direction="left">
        {images.map((image, index) => (
            <img key={index} src={image} alt="Logos" />
        ))}
    </FastMarquee>
  );
};

export default Marquee;
