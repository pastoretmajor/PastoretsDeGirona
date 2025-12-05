import React from 'react'
import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'

import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import ColumnLayout from '../components/ColumnLayout/ColumnLayout';
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'
import Team from '../components/Team/Team'

import EquipHuma from '../images/banners/equip-huma-pastorets-de-girona.webP'
import EquipHumaBlur from '../images/blured/equip-huma-pastorets-de-girona.webP'


import EquipTecnic from '../images/logos/bombeta.webP'
import ActorsActrius from '../images/logos/mascares.webP'
import AjudantsProduccio from '../images/logos/llapis.webP'

const Equip = () => {

  const boxes = [
    { textColor:'#F1F1F1', hasCircle:"true", link:"#/equip", backgroundColor: '#C41919', text: "Equip tècnic", src: EquipTecnic, alt: "Logo Equip Tècnic"},
    { textColor:'#F1F1F1', hasCircle:"true", link:"#/equip", backgroundColor: '#414141', text: "Actors i actrius", src: ActorsActrius, alt: "Logo Actors i actrius" },
    { backgroundColor: '#D9D9D9', hasCircle:"true", link:"#/equip", text: "Ajudants de producció", src: AjudantsProduccio, alt: "Logo Ajudants de producció" },
  ];

  const backgroundColors = boxes.map((box) => box.backgroundColor);

  return (
    <div>
      <Navbar />
      <Burger />      
      <ImageComponent src={EquipHuma} blurSrc={EquipHumaBlur} alt="Equip huma" text="Equip humà" opacity={.5}/>
      <Team />
      <ColumnLayout boxes={boxes} centered={true} backgroundColors={backgroundColors} />
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Equip
