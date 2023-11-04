import React from 'react'
import CountdownTimer from '../components/CountDown/CountDownTimer'
import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'
import Ticket from '../components/Ticket/Ticket'

import EntradesImatge from '../images/banners/entrades-pastorets-de-girona.webP'
import EntradesImatgeBlur from '../images/blured/entrades-pastorets-de-girona.webP'


const Entrades = () => {

  const targetDate = new Date(2023,11,25,17,30,0).getTime();

  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={EntradesImatge} blurSrc={EntradesImatgeBlur} alt="Comprar entrades" text="Comprar entrades" opacity={.5}/>
      <Ticket />
      <CountdownTimer targetDate={targetDate} />
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Entrades