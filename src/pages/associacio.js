import React from 'react'
import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'
import {CenteredColoredBox} from '../components/ColoredBox/ColoredBox';

import AssociacioImatge from '../images/banners/associacio-pastorets-de-girona.webP'
import AssociacioImatgeBlur from '../images/blured/associacio-pastorets-de-girona.webP'


import LogoValors from '../images/logos/logoPastorets.webP';

const Associacio = () => {
  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={AssociacioImatge} blurSrc={AssociacioImatgeBlur} alt="Associació" text="Associació" opacity={.5}/>
      <CenteredColoredBox backgroundColor="#D90559" src={LogoValors} alt="LogoValors"/>
      <CenteredColoredBox backgroundColor="#FFFFFF" src={LogoValors} alt="LogoValors"/>
      <CenteredColoredBox backgroundColor="#79CD8D" src={LogoValors} alt="LogoValors"/>
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Associacio