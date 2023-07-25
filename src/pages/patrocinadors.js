import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import PatrocinadorsA from '../components/PatrocinadorsA/PatrocinadorsA'
import PatrocinadorsB from '../components/PatrocinadorsB/PatrocinadorsB'

import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'
import ImatgePatrocinadors from '../images/mascaraDimoni.webP'
import BlurImatgePatrocinadors from '../images/mascaraDimoniBlur.webP'
import Marquee from '../components/Marquee/Marquee'

const Patrocinadors = () => {
  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={ImatgePatrocinadors} blurSrc={BlurImatgePatrocinadors} alt="Patrocinadors" text="Patrocinadors" />
        <h2>Aquest podria ser el teu espai</h2>
      <PatrocinadorsA />
      <PatrocinadorsB />
      <Marquee />
      <Footer />
    </div>
  )
}

export default Patrocinadors