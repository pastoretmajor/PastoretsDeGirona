import React from 'react'
import CountdownTimer from '../components/CountDown/CountDownTimer'
import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import EntradesImatge from '../images/banners/entrades-pastorets-de-girona.webP'
import EntradesImatgeBlur from '../images/blured/entrades-pastorets-de-girona.webP'

import FotoTeatre from '../images/banners/teatreMunicipalInterior.webP'
import BlurFotoTeatre from '../images/blured/teatreMunicipalInteriorBlur.webP'

const Entrades = () => {

  const targetDate = new Date(2023,12,25,17,30,0).getTime();

  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={EntradesImatge} blurSrc={EntradesImatgeBlur} alt="Compra entrades" text="Compra entrades" opacity={.5}/>
      <ImageComponent src={FotoTeatre} blurSrc={BlurFotoTeatre} alt="FotoTeatre"/>
      <CountdownTimer targetDate={targetDate} />
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Entrades