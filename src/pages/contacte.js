import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'

import ImageComponent from '../components/ImageComponent/ImageComponent'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'
import Contactar from '../components/Contactar/Contactar'

import ImatgeContacte from '../images/banners/contactar-pastorets-de-girona.webP'
import ImatgeContacteBlur from '../images/blured/contactar-pastorets-de-girona.webP'


import Footer from '../components/Footer/Footer'
const Contacte = () => {
  return (
    <div>
      <Navbar />
      <Burger />      
      <ImageComponent src={ImatgeContacte} blurSrc={ImatgeContacteBlur} alt="Contacta'ns" text="Contacta'ns" opacity={.5}/>
      <Contactar />
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Contacte