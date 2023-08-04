import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'

import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'
import Donacio from '../components/Donacio/Donacio'

import ImatgeSocis from '../images/banners/feste-soci-pastorets-de-girona.webP'
import ImatgeSocisBlur from '../images/blured/feste-soci-pastorets-de-girona.webP'


const Soci = () => {
  
  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={ImatgeSocis} blurSrc={ImatgeSocisBlur} alt="Fes una donació" text="Fes una donació" opacity={.5}/>
      <Donacio />
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Soci