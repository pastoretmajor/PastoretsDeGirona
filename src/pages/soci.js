import Navbar from '../components/NavigationBar/Navbar'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'
import ImatgeSocis from '../images/alaNegreLtR.webP'
import BlurImatgeSocis from '../images/alaNegreLtRBlur.webP'

const Soci = () => {
  return (
    <div>
      <Navbar />
      <ImageComponent src={ImatgeSocis} blurSrc={BlurImatgeSocis} alt="Fes-te soci" text="Fes-te soci" />
      <h2>PROPERAMENT</h2>
      <Footer />
    </div>
  )
}

export default Soci