import React from 'react'
import Navbar from '../components/NavigationBar/Navbar'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import ColumnLayout from '../components/ColumnLayout/ColumnLayout';
import {CenteredColoredBox} from '../components/ColoredBox/ColoredBox';
import EquipHuma from '../images/banyesNormals.webP'
import Logo from '../images/logoPastorets.webP'
const Equip = () => {

  const boxes = [
    { width: '480px', height: '400px', textColor:'#F1F1F1', backgroundColor: '#C41919', text: "Equip tècnic" },
    { width: '480px', height: '400px', textColor:'#F1F1F1', backgroundColor: '#414141', text: "Actors i Actrius" },
    { width: '480px', height: '400px', backgroundColor: '#D9D9D9', text: "Ajudants de producció" },
  ];

  return (
    <div>
      <Navbar />
      <ImageComponent src={EquipHuma} alt="Equip huma" text="Equip humà" />
      <CenteredColoredBox width="1440px" height="530px" backgroundColor="#F1F1F1" src={Logo} alt="Logo" text="L'Associació Pastorets de Girona, està formada per persones professionals dels diferents àmibts teatrals i persones amateurs amb una àmplia experiència en el món dels Pastorets de Girona"/>
      <ColumnLayout boxes={boxes} centered={true}/>
      <Footer />
    </div>
  )
}

export default Equip