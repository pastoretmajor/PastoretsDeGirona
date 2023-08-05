import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'
import { ColoredBox } from '../components/ColoredBox/ColoredBox'

import ImatgeTransparencia from '../images/banners/transparencia-pastorets-de-girona.webP'
import ImatgeTransparenciaBlur from '../images/blured/transparencia-pastorets-de-girona.webP'

const Transparencia = () => {
  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={ImatgeTransparencia} blurSrc={ImatgeTransparenciaBlur} alt="Trasnparència" text="Transparència" opacity={.5}/>
      <ColoredBox paddingLeft={"175px"} paddingRight={"175px"} textColor="#000" backgroundColor="#FFF" text="Valorem la transparència i les bones pràctiques per exhibir la gestió de l'Associació Pastorets de Girona i l'assoliment del nostre propòsit. Estem plenament compromesos amb els nostres socis i membres." />
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Transparencia