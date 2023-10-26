import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import PatrocinadorsA from '../components/PatrocinadorsA/PatrocinadorsA'
import PatrocinadorsB from '../components/PatrocinadorsB/PatrocinadorsB'
import PatrocinadorsAngels from '../components/PatrocinadorsAngels/PatrocinadorsAngels'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'
import Marquee from '../components/Marquee/Marquee'

import ImatgePatrocinadors from '../images/banners/transparencia-pastorets-de-girona.webP'
import ImatgePatrocinadorsBlur from '../images/blured/transparencia-pastorets-de-girona.webP'


const Patrocinadors = () => {
  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={ImatgePatrocinadors} blurSrc={ImatgePatrocinadorsBlur} alt="Patrocinadors" text="Patrocinadors" opacity={.5}/>
      <h4>Els Pastorets de Girona són possibles gràcies a el patrocini de</h4>
      <PatrocinadorsA />
      <PatrocinadorsB />
      <PatrocinadorsAngels />
      <Marquee />
      <Footer />
    </div>
  )
}

export default Patrocinadors