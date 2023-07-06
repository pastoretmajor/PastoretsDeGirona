import Navbar from '../components/NavigationBar/Navbar'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import ImatgeTransparencia from '../images/backgroundImageAraSi.webP'
import Footer from '../components/Footer/Footer'
const Transparencia = () => {
  return (
    <div>
      <Navbar />
      <ImageComponent src={ImatgeTransparencia} alt="Trasnparència" text="Transparència" />
      <h2>PROPERAMENT</h2>
      <Footer />
    </div>
  )
}

export default Transparencia