import React from 'react'
import CountdownTimer from '../components/CountDown/CountDownTimer'
import Navbar from '../components/NavigationBar/Navbar'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import EntradesImatge from '../images/backgroundImageAraSi.jpg'
import FotoTeatre from '../images/backgroundImage.jpg'
const Entrades = () => {

  const targetDate = new Date(2023,12,25,17,30,0).getTime();

  return (
    <div>
      <Navbar />
      <ImageComponent src={EntradesImatge} alt="Compra entrades" text="Compra entrades" />
      <ImageComponent src={FotoTeatre} alt="FotoTeatre"/>
      <CountdownTimer targetDate={targetDate} />
      <Footer />
    </div>
  )
}

export default Entrades