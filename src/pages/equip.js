import React from 'react'
import Navbar from '../components/NavigationBar/Navbar'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import ColumnLayout from '../components/ColumnLayout/ColumnLayout';
import {CenteredColoredBox, ColoredBox} from '../components/ColoredBox/ColoredBox';
import EquipHuma from '../images/backgroundImage.webP'
import Logo from '../images/logoPastorets.png'
const Equip = () => {

  const boxes = [
    { width: '480px', height: '400px', backgroundColor: '#D90559', text: "Equip tècnic" },
    { width: '480px', height: '400px', backgroundColor: '#79CD8D', text: "Actors i Actrius" },
    { width: '480px', height: '400px', backgroundColor: '#8FCED0', text: "Ajudants de producció" },
  ];

  return (
    <div>
      <Navbar />
      <ImageComponent src={EquipHuma} alt="Equip huma" text="Equip humà" />
      <CenteredColoredBox width="1440px" height="530px" backgroundColor="#FFC55C" src={Logo} alt="Logo" text="L'Associació Pastorets de Girona, està formada per persones professionals dels diferents àmibts teatrals i persones amateurs amb una àmplia experiència en el món dels Pastorets de Girona"/>
      <ColumnLayout boxes={boxes} centered={true}/>
      <ColoredBox width="1440px" height="350px" backgroundColor="#fff"/> 
      <Footer />
    </div>
  )
}

export default Equip