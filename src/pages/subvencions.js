import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'

import ImatgeCollaboradors from '../images/banners/transparencia-pastorets-de-girona.png'


const Col·laboradors = () => {
  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={ImatgeCollaboradors} alt="Col·laboradors" text="Col·laboradors" />
      <h2>Aquest podria ser el teu espai</h2>
      <Footer />
    </div>
  )
}

export default Col·laboradors