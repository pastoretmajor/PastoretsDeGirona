import Navbar from '../components/NavigationBar/Navbar'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import AraSi from '../images/backgroundImageAraSi.jpg'
import Cartell from '../images/backgroundImage.jpg'
import Footer from '../components/Footer/Footer'
const Inici = () => {
    return (
    <div>
      <Navbar />
      <ImageComponent src={AraSi} alt="Ara si" text="ARA SÍ" />
      <ImageComponent src={Cartell} alt="Cartell" text="" />
      <Footer />
    </div>
    )
}
export default Inici