import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'

import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import ImatgeSocis from '../images/alaNegreLtR.webP'
import BlurImatgeSocis from '../images/alaNegreLtRBlur.webP'

const Soci = () => {
  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={ImatgeSocis} blurSrc={BlurImatgeSocis} alt="Fes una donació" text="Fes una donació" />
      <h2>PROPERAMENT</h2>
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Soci