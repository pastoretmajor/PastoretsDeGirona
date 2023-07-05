import Navbar from '../components/NavigationBar/Navbar'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import ImatgePatrocinadors from '../images/backgroundImageAraSi.jpg'
import Footer from '../components/Footer/Footer'
const Patrocinadors = () => {
  return (
    <div>
      <Navbar />
      <ImageComponent src={ImatgePatrocinadors} alt="Patrocinadors" text="Patrocinadors" />
      <h2>PROPERAMENT</h2>
      <Footer />
    </div>
  )
}

export default Patrocinadors