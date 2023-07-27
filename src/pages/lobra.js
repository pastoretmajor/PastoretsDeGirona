import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import Burger from '../components/Burger/Burger';
import Footer from '../components/Footer/Footer';
import ColumnLayout from '../components/ColumnLayout/ColumnLayout';
import { ColoredBox } from '../components/ColoredBox/ColoredBox';
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals';
import ImageComponent from '../components/ImageComponent/ImageComponent';

import Logo from '../images/logos/logoPastorets.webP';
import ObraBackground from '../images/banners/lobra-pastorets-de-girona.webP';
import ObraBackgroundBlur from '../images/blured/lobra-pastorets-de-girona.webP';


const Lobra = () => {
  const boxes = [
    { backgroundColor: '#DADADA', text: "Pastorets de Girona, una tradició" },
    { textColor: '#F1F1F1', backgroundColor: '#D91E01', text: "Una escola per a generacions d'aficionats al teatre" },
    { textColor: '#F1F1F1', backgroundColor: '#414141', text: "Un format nou i innovador" },
  ];

  const backgroundColors = boxes.map((box) => box.backgroundColor);

  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={ObraBackground} blurSrc={ObraBackgroundBlur} alt="L'obra" text="L'obra" opacity={.5} />
      <ColumnLayout boxes={boxes} centered={false} backgroundColors={backgroundColors} /> 
      <ColoredBox paddingLeft="250px" paddingRight="250px" backgroundColor="#F1F1F1" src={Logo} alt="Logo" text="Després d'un any sense els Pastorets a la ciutat de Girona i amb la voluntat de tornar a representar-los durant quatre dies al Teatre Municipal, hem creat un nou text a on es barreja el món actual amb el passat. Els nous Pastorets continuaran essent de caire familiar i musical amb un format diferent, inclusiu i innovador." text2="L'obra combina humor, música, modernitat i tradició per explicar la història del naixement de Jesús i els diferents obstacles que van passant als personatges típics de la nostra cultura catalana" />
      <ColoredBox textColor="#F1F1F1" backgroundColor="#D91E01" text="A través de la seva trama, Pastorets de Girona transmet valors com l'amistat i la solidaritat." />
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  );
};

export default Lobra;
