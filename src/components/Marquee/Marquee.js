import FastMarquee from 'react-fast-marquee'
import './Marquee.css';
import laTostadora from '../../images/patrocinadors/logoLaTostadora.png';
import logoValvi from '../../images/patrocinadors/logoValvi.png';
import logoCaixaBank from '../../images/patrocinadors/logoCaixabank.jpg';
import memora from '../../images/patrocinadors/logoMemora.png';
import marlex from '../../images/patrocinadors/logoMarlex.png';
import teaming from '../../images/patrocinadors/logoTeaming.png';

const Marquee = () => {
  const images = [laTostadora, logoValvi, logoCaixaBank, memora, marlex, teaming, laTostadora, logoValvi, logoCaixaBank, memora, marlex, teaming, laTostadora, logoValvi, logoCaixaBank, memora, marlex, teaming, laTostadora, logoValvi, logoCaixaBank, memora, marlex, teaming, laTostadora, logoValvi, logoCaixaBank, memora, marlex, teaming, laTostadora, logoValvi, logoCaixaBank, memora, marlex, teaming];


  return (
    <FastMarquee speed={30} direction="left">
        {images.map((image, index) => (
            <img key={index} src={image} alt="Logos" />
        ))}
    </FastMarquee>
  );
};

export default Marquee;
