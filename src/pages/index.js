import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'

import ImageComponent from '../components/ImageComponent/ImageComponent'
import Stamp from '../components/Stamp/Stamp'
import Footer from '../components/Footer/Footer'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import AraSi from '../images/banners/fons-index-pastorets-de-girona.webP'
import AraSiBlur from '../images/blured/fons-index-pastorets-de-girona.webP'

import ImatgeCalendari from '../images/banners/calendariPastorets.webP'
import BlurImatgeCalendari from '../images/blured/calendariPastoretsBlur.webP'
import TeatreMunicipalInterior from '../images/banners/teatreMunicipalInterior.webP'
import BlurTeatreMunicipalInterior from '../images/blured/teatreMunicipalInteriorBlur.webP'

const Inici = () => {
    return (
    <div>
      <Navbar />
      <Burger />      
      <ImageComponent src={AraSi} blurSrc={AraSiBlur} alt="Pastorets de Girona ara sí" text="Pastorets de Girona" opacity={.5}/>
      <Stamp />
      <ImageComponent src={ImatgeCalendari} blurSrc={BlurImatgeCalendari} alt="ImatgeCalendari" text="" />
      <ImageComponent src={TeatreMunicipalInterior} blurSrc={BlurTeatreMunicipalInterior} alt="Venta d'entrades" text="Venta d'entrades" />
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
    )
}
export default Inici