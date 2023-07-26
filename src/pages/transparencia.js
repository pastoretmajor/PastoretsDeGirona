import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import ImatgeTransparencia from '../images/banners/transparencia-pastorets-de-girona.png'

const Transparencia = () => {
  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={ImatgeTransparencia} alt="Trasnparència" text="Transparència" />
      <h2>PROPERAMENT</h2>
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Transparencia