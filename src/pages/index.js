import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'

import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import AraSi from '../images/alaAngelGris.webP'
import BlurAraSi from '../images/alaAngelGrisBlur.webP'
import ImatgeCalendari from '../images/calendariPastorets.webP'
import BlurImatgeCalendari from '../images/calendariPastoretsBlur.webP'
import TeatreMunicipalInterior from '../images/teatreMunicipalInterior.webP'
import BlurTeatreMunicipalInterior from '../images/teatreMunicipalInteriorBlur.webP'

const Inici = () => {
    return (
    <div>
      <Navbar />
      <Burger />      
      <ImageComponent src={AraSi} blurSrc={BlurAraSi} alt="Pastorets de Girona ara sí" text="Pastorets de Girona"/>
      <ImageComponent src={ImatgeCalendari} blurSrc={BlurImatgeCalendari} alt="ImatgeCalendari" text="" />
      <ImageComponent src={TeatreMunicipalInterior} blurSrc={BlurTeatreMunicipalInterior} alt="Venta d'entrades" text="Venta d'entrades" />
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
    )
}
export default Inici