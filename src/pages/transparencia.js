import Navbar from '../components/NavigationBar/Navbar'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'
import ImatgeTransparencia from '../images/alaAngelGris.webP'
import BlurImatgeTransparencia from '../images/alaAngelGrisBlur.webP'

const Transparencia = () => {
  return (
    <div>
      <Navbar />
      <ImageComponent src={ImatgeTransparencia} blurSrc={BlurImatgeTransparencia} alt="Trasnparència" text="Transparència" />
      <h2>PROPERAMENT</h2>
      <Footer />
    </div>
  )
}

export default Transparencia