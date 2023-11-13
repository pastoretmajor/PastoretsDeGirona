import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'

import Footer from '../components/Footer/Footer'
import Carta from '../components/CartaDirector/CartaDirector'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

const Director = () => {

  return (
    <div>
      <Navbar />
      <Burger />
      <Carta />
      <PatrocinadorsPrincipals />      
      <Footer />
    </div>
  )
}

export default Director