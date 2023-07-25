import React from 'react'
import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import AssociacioImatge from '../images/banyesRecargolades.webP'
import BlurAssociacioImatge from '../images/banyesRecargoladesBlur.webP'

import {CenteredColoredBox} from '../components/ColoredBox/ColoredBox';
import LogoValors from '../images/logoPastorets.webP';

const Associacio = () => {
  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={AssociacioImatge} blurSrc={BlurAssociacioImatge} alt="Associació" text="Associació" />
      <CenteredColoredBox backgroundColor="#D90559" src={LogoValors} alt="LogoValors"/>
      <CenteredColoredBox backgroundColor="#FFFFFF" src={LogoValors} alt="LogoValors"/>
      <CenteredColoredBox backgroundColor="#79CD8D" src={LogoValors} alt="LogoValors"/>
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Associacio