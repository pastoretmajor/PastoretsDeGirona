import Navbar from '../components/NavigationBar/Navbar'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import ImatgeSubvencions from '../images/backgroundImageAraSi.jpg'
import Footer from '../components/Footer/Footer'
const Subvencions = () => {
  return (
    <div>
      <Navbar />
      <ImageComponent src={ImatgeSubvencions} alt="Subvencions" text="Subvencions" />
      <h2>Aquest podría ser el teu espai</h2>
      <Footer />
    </div>
  )
}

export default Subvencions