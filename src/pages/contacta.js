import Navbar from '../components/NavigationBar/Navbar'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import ImatgeContacte from '../images/alaAngelBlanc.webP'
import BlurImatgeContacte from '../images/alaAngelBlancBlur.webP'

import Footer from '../components/Footer/Footer'
const Contacte = () => {
  return (
    <div>
      <Navbar />
      <ImageComponent src={ImatgeContacte} blurSrc={BlurImatgeContacte} alt="Contacta'ns" text="Contacta'ns" />
      <h2>PROPERAMENT</h2>
      <Footer />
    </div>
  )
}

export default Contacte