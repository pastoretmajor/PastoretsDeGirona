import Navbar from '../components/NavigationBar/Navbar'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import ImatgeSocis from '../images/alaNegreLtR.webP'
import Footer from '../components/Footer/Footer'
const Soci = () => {
  return (
    <div>
      <Navbar />
      <ImageComponent src={ImatgeSocis} alt="Fes-te soci" text="Fes-te soci" />
      <h2>PROPERAMENT</h2>
      <Footer />
    </div>
  )
}

export default Soci