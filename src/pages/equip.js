import React from 'react'
import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'

import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import ColumnLayout from '../components/ColumnLayout/ColumnLayout';
import {CenteredColoredBox} from '../components/ColoredBox/ColoredBox';
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import EquipHuma from '../images/banners/equip-huma-pastorets-de-girona.webP'
import EquipHumaBlur from '../images/blured/equip-huma-pastorets-de-girona.webP'


import EquipTecnic from '../images/logos/bombeta.svg'
import ActorsActrius from '../images/logos/mascares.svg'
import Logo from '../images/logos/logoPastorets.webP'

const Equip = () => {

  const boxes = [
    { textColor:'#F1F1F1', hasCircle:"true", link:"/#/tecnics", backgroundColor: '#C41919', text: "Equip tècnic", src: EquipTecnic, alt: "Logo Equip Tècnic"},
    { textColor:'#F1F1F1', hasCircle:"true", link:"/#/actors", backgroundColor: '#414141', text: "Actors i actrius", src: ActorsActrius, alt: "Logo Actors i actrius" },
    { backgroundColor: '#D9D9D9', hasCircle:"true", link:"/#/ajudants", text: "Ajudants de producció", src: Logo, alt: "Logo Ajudants de producció" },
  ];

  const backgroundColors = boxes.map((box) => box.backgroundColor);

  return (
    <div>
      <Navbar />
      <Burger />      
      <ImageComponent src={EquipHuma} blurSrc={EquipHumaBlur} alt="Equip huma" text="Equip humà" />
      <CenteredColoredBox backgroundColor="#F1F1F1" src={Logo} alt="Logo" text="L'Associació Pastorets de Girona, està formada per professionals dels diferents àmibts teatrals i amateurs amb una àmplia experiència en el món dels Pastorets de Girona"/>
      <ColumnLayout boxes={boxes} centered={true} backgroundColors={backgroundColors} />
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Equip