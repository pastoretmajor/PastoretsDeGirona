import React from 'react'
import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'
import ColumnLayout from '../components/ColumnLayout/ColumnLayout'
import TimeLine from '../components/TimeLine/TimeLine'
import FormulariSocis from '../components/FormulariSocis/FormSocis'
import DadesAssociacio from '../components/DadesAssociacio/DadesAssociacio'

import AssociacioImatge from '../images/banners/associacio-pastorets-de-girona.webP'
import AssociacioImatgeBlur from '../images/blured/associacio-pastorets-de-girona.webP'


import LogoValors from '../images/logos/logoBarretinaSenseFons.png';



const Associacio = () => {

  const boxes = [
    { hasCircle:"true", link:"#/equip", backgroundColor: '#FFFFFF', text: "Informa't", src:LogoValors, alt: "Logo Associació Pastorets de Girona"},
    { textColor:'#FFFFFF', hasCircle:"true", link:"#/valors", backgroundColor: '#C41919', text: "Valors", src:LogoValors, alt: "Imatge valors" },
    { textColor:'#FFFFFF', backgroundColor: '#414141', hasCircle:"true", link:"#/soci", text: "Fes una donació", src: LogoValors, alt: "Imatge fes una donació" },
  ];

  const backgroundColors = boxes.map((box) => box.backgroundColor);

  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={AssociacioImatge} blurSrc={AssociacioImatgeBlur} alt="Associació" text="Associació" opacity={.5}/>
      <ColumnLayout boxes={boxes} centered={true} backgroundColors={backgroundColors} />
      <FormulariSocis />
      <DadesAssociacio />
      <TimeLine />
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Associacio
