import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'

import ImageComponent from '../components/ImageComponent/ImageComponent'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import ImatgeContacte from '../images/banners/contactar-pastorets-de-girona.png'

import Footer from '../components/Footer/Footer'
const Contacte = () => {
  return (
    <div>
      <Navbar />
      <Burger />      
      <ImageComponent src={ImatgeContacte} alt="Contacta'ns" text="Contacta'ns" />
      <h2>PROPERAMENT</h2>
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Contacte