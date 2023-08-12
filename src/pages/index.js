import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import Popup from '../components/Popup/Popup'

import ImageComponent from '../components/ImageComponent/ImageComponent'
import Calendari from '../components/Calendar/Calendar'
import Stamp from '../components/Stamp/Stamp'
import Footer from '../components/Footer/Footer'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import AraSi from '../images/banners/fons-index-pastorets-de-girona.webP'
import AraSiBlur from '../images/blured/fons-index-pastorets-de-girona.webP'

import TeatreMunicipalInterior from '../images/banners/teatreMunicipalInterior.webP'
import BlurTeatreMunicipalInterior from '../images/blured/teatreMunicipalInteriorBlur.webP'

const Inici = () => {

    return (
    <div>
      <Navbar />
      <Burger />
      <Popup />      
      <ImageComponent src={AraSi} blurSrc={AraSiBlur} alt="Pastorets de Girona ara sí" text="Pastorets de Girona" opacity={.5}/>
      <Stamp />
      <Calendari />
      <ImageComponent src={TeatreMunicipalInterior} blurSrc={BlurTeatreMunicipalInterior} alt="Venta d'entrades" text="Pròximament"/>
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
    )
}
export default Inici