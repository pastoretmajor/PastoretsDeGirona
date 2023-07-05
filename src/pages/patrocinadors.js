import Navbar from '../components/NavigationBar/Navbar'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import ImatgePatrocinadors from '../images/backgroundImageAraSi.jpg'
import Footer from '../components/Footer/Footer'
const Patrocinadors = () => {
  return (
    <div>
      <Navbar />
      <ImageComponent src={ImatgePatrocinadors} alt="Patrocinadors" text="Patrocinadors" />
      <div>
        <h2>Aquest podría ser el teu espai</h2>
      </div>
      <Footer />
    </div>
  )
}

export default Patrocinadors