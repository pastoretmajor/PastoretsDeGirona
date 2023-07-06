import Navbar from '../components/NavigationBar/Navbar'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import LaManela from '../images/backgroundImageAraSi.webP'
import Footer from '../components/Footer/Footer'
const Manela = () => {
  return (
    <div>
      <Navbar />
      <ImageComponent src={LaManela} alt="La Manela" text="La Manela" />
      <h2>PROPERAMENT</h2>
      <Footer />
    </div>
  )
}

export default Manela
