import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import Footer from '../components/Footer/Footer';
import ColumnLayout from '../components/ColumnLayout/ColumnLayout';
import { ColoredBox } from '../components/ColoredBox/ColoredBox';
import Logo from '../images/logoPastorets.webP';
import ImageComponent from '../components/ImageComponent/ImageComponent'
import ObraBackground from '../images/backgroundImage.webP'

const Lobra = () => {
  const boxes = [
    { width: '480px', height: '480px', backgroundColor: '#DADADA', text: "Pastorets de Girona, una tradició" },
    { width: '480px', textColor: '#F1F1F1',height: '480px',backgroundColor: '#D91E01', text: "Pastorets ha estat la porta d'entrada al món del teatre d'actors, actrius i tècnics que després han fet el pas al món professional i una escola per a generacions d'aficionats al món del teatre" },
    { width: '480px', textColor: '#F1F1F1', height: '480px', backgroundColor: '#414141', text: 'Els nous Pastorets continuaran essent de caire familiar i musical amb un format diferent, inclusiu i innovador.' },
  ];

  return (
    <div>
      <Navbar />
      <ImageComponent src={ObraBackground} alt="L'obra" text="L'obra" />
      <ColumnLayout boxes={boxes}  centered={false}/>
      <ColoredBox width="1440px" height="700px" backgroundColor="#F1F1F1" src={Logo} alt="Logo" text="Després d'un any sense els Pastorets a la ciutat de Girona i amb la voluntat de tornar a representar-los durant quatre dies al Teatre Municipal, hem creat un nou text a on es barreja el món actual amb el passat. Els nous Pastorets continuaran essent de caire familiar i musical amb un format diferent, inclusiu i innovador." text2="L'obra combina humor, música, modernitat i tradició per explicar la història del naixement de Jesús i els diferents obstacles que van passant als personatges típics de la nostra cultura catalana"/>
      <ColoredBox textColor="#F1F1F1" width="1440px" height="350px" backgroundColor="#D91E01" text="A través de la seva trama, Pastorets de Girona transmeten valors com l'amistat i la solidaritat."/>
      <ColoredBox width="1440px"  height="350px" backgroundColor="#F1F1F1" />      
      <Footer />
    </div>
  );
};

export default Lobra;
