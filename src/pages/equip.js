import React from 'react'
import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'

import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import ColumnLayout from '../components/ColumnLayout/ColumnLayout';
import {CenteredColoredBox} from '../components/ColoredBox/ColoredBox';
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import EquipHuma from '../images/banyesNormals.webP'
import BlurEquipHuma from '../images/banyesNormalsBlur.webP'


import Logo from '../images/logoPastorets.webP'
const Equip = () => {

  const boxes = [
    { textColor:'#F1F1F1', backgroundColor: '#C41919', text: "Equip tècnic", src: Logo, alt: "Logo Equip Tècnic"},
    { textColor:'#F1F1F1', backgroundColor: '#414141', text: "Actors i actrius", src: Logo, alt: "Logo Actors i actrius" },
    { backgroundColor: '#D9D9D9', text: "Ajudants de producció", src: Logo, alt: "Logo Ajudants de producció" },
  ];

  const backgroundColors = boxes.map((box) => box.backgroundColor);

  return (
    <div>
      <Navbar />
      <Burger />      
      <ImageComponent src={EquipHuma} blurSrc={BlurEquipHuma} alt="Equip huma" text="Equip humà" />
      <CenteredColoredBox backgroundColor="#F1F1F1" src={Logo} alt="Logo" text="L'Associació Pastorets de Girona, està formada per professionals dels diferents àmibts teatrals i amateurs amb una àmplia experiència en el món dels Pastorets de Girona"/>
      <ColumnLayout boxes={boxes} centered={true} backgroundColors={backgroundColors} />
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Equip