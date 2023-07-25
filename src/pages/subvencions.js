import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'
import ImatgeCol·laboradors from '../images/esqueletImatge.webP'
import BlurImatgeCol·laboradors from '../images/esqueletImatgeBlur.webP'


const Col·laboradors = () => {
  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={ImatgeCol·laboradors} blurSrc={BlurImatgeCol·laboradors} alt="Col·laboradors" text="Col·laboradors" />
      <h2>Aquest podria ser el teu espai</h2>
      <Footer />
    </div>
  )
}

export default Col·laboradors