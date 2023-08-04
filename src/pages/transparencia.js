import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import ImatgeTransparencia from '../images/banners/transparencia-pastorets-de-girona.webP'
import ImatgeTransparenciaBlur from '../images/blured/transparencia-pastorets-de-girona.webP'

const Transparencia = () => {
  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={ImatgeTransparencia} blurSrc={ImatgeTransparenciaBlur} alt="Trasnparència" text="Transparència" opacity={.5}/>
      <h2>Pròximament</h2>
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Transparencia