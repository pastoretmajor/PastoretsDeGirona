import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import Burger from '../components/Burger/Burger';
import Footer from '../components/Footer/Footer';
import ColumnLayout from '../components/ColumnLayout/ColumnLayout';
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals';
import ImageComponent from '../components/ImageComponent/ImageComponent';
import Obra from '../components/Obra/Obra'

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
      <Obra />
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  );
};

export default Lobra;
