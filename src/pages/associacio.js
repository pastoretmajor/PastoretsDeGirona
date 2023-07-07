import React from 'react'
import Navbar from '../components/NavigationBar/Navbar'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import AssociacioImatge from '../images/backgroundImageAraSi.webP'
import {CenteredColoredBox} from '../components/ColoredBox/ColoredBox';
import LogoValors from '../images/logoPastorets.webP';
const Associacio = () => {
  return (
    <div>
      <Navbar />
      <ImageComponent src={AssociacioImatge} alt="Associació" text="Associació" />
      <CenteredColoredBox width="1440px" height="400px" backgroundColor="#D90559" src={LogoValors} alt="LogoValors"/>
      <CenteredColoredBox width="1440px" height="400px" backgroundColor="#FFFFFF" src={LogoValors} alt="LogoValors"/>
      <CenteredColoredBox width="1440px" height="400px" backgroundColor="#79CD8D" src={LogoValors} alt="LogoValors"/>
      <CenteredColoredBox width="1440px" height="400px" backgroundColor="#8FCED0" src={LogoValors} alt="LogoValors"/>
      <Footer />
    </div>
  )
}

export default Associacio