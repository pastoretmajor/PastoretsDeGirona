import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'

import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import ImatgeSocis from '../images/banners/feste-soci-pastorets-de-girona.webP'
import ImatgeSocisBlur from '../images/blured/feste-soci-pastorets-de-girona.webP'

const Premsa = () => {
    return (
        <div>
          <Navbar />
          <Burger />
          <ImageComponent src={ImatgeSocis} blurSrc={ImatgeSocisBlur} alt="Premsa" text="Premsa" opacity={.5}/>
          <PatrocinadorsPrincipals />
          <Footer />
        </div>
      )
}

export default Premsa