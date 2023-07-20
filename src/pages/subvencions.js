import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'
import ImatgeSubvencions from '../images/esqueletImatge.webP'
import BlurImatgeSubvencions from '../images/esqueletImatgeBlur.webP'


const Subvencions = () => {
  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={ImatgeSubvencions} blurSrc={BlurImatgeSubvencions} alt="Subvencions" text="Subvencions" />
      <h2>Aquest podría ser el teu espai</h2>
      <Footer />
    </div>
  )
}

export default Subvencions