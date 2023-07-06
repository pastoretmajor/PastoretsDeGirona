import Navbar from '../components/NavigationBar/Navbar'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import AraSi from '../images/backgroundImageAraSi.webP'
import Cartell from '../images/backgroundImage.webP'
import Footer from '../components/Footer/Footer'
import TeatreMunicipalInterior from '../images/teatreMunicipalInterior.webP'
const Inici = () => {
    return (
    <div>
      <Navbar />
      <ImageComponent src={AraSi} alt="ARA SÍ" text="ARA SÍ" />
      <ImageComponent src={Cartell} alt="Cartell" text="" />
      <ImageComponent src={TeatreMunicipalInterior} alt="Venta d'entrades" text="Venta d'entrades" />
      <Footer />
    </div>
    )
}
export default Inici