import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'
import Colaborators from '../components/Colaborators/Colaborators'

import ImatgeCollaboradors from '../images/banners/transparencia-pastorets-de-girona.webP'
import ImatgeCollaboradorsBlur from '../images/blured/transparencia-pastorets-de-girona.webP'


const Col·laboradors = () => {
  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={ImatgeCollaboradors} blurSrc={ImatgeCollaboradorsBlur} alt="Col·laboradors" text="Col·laboradors" opacity={.5}/>
      <h4>Els Pastorets de Girona són possibles gràcies a la col·laboració de</h4>
      <Colaborators />
      <Footer />
    </div>
  )
}

export default Col·laboradors


