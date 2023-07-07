import Navbar from '../components/NavigationBar/Navbar'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'
import ImatgePatrocinadors from '../images/mascaraDimoni.webP'
import BlurImatgePatrocinadors from '../images/mascaraDimoniBlur.webP'

const Patrocinadors = () => {
  return (
    <div>
      <Navbar />
      <ImageComponent src={ImatgePatrocinadors} blurSrc={BlurImatgePatrocinadors} alt="Patrocinadors" text="Patrocinadors" />
        <h2>Aquest podría ser el teu espai</h2>
      <PatrocinadorsPrincipals />  
      <Footer />
    </div>
  )
}

export default Patrocinadors