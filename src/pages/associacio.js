import React from 'react'
import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'
import {CenteredColoredBox} from '../components/ColoredBox/ColoredBox';

import AssociacioImatge from '../images/banners/associacio-pastorets-de-girona.webP'
import AssociacioImatgeBlur from '../images/blured/associacio-pastorets-de-girona.webP'


import LogoValors from '../images/logos/logoBarretinaSenseFons.png';
import FundacioEsplai from '../images/colaborators/fundacioEsplai.png'

const Associacio = () => {
  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={AssociacioImatge} blurSrc={AssociacioImatgeBlur} alt="Associació" text="Associació" opacity={.5}/>
      <CenteredColoredBox backgroundColor="#FFF" src={FundacioEsplai} alt="LogoValors" hasCircle={true} text="Informa't" link="https://www.fundacioesplaigirona.cat/"/>
      <CenteredColoredBox backgroundColor="#D91E01" src={LogoValors} alt="LogoValors"hasCircle={true} text="Valors" link="/#/valors" textColor="#fff"/>
      <CenteredColoredBox backgroundColor="#414141" src={LogoValors} alt="LogoValors" hasCircle={true} text="Fes una donació" link="/#/soci" textColor="#fff"/>
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Associacio