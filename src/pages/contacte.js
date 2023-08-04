import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'

import ImageComponent from '../components/ImageComponent/ImageComponent'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'
import {CenteredColoredBox} from '../components/ColoredBox/ColoredBox';

import ImatgeContacte from '../images/banners/contactar-pastorets-de-girona.webP'
import ImatgeContacteBlur from '../images/blured/contactar-pastorets-de-girona.webP'


import Footer from '../components/Footer/Footer'
const Contacte = () => {
  return (
    <div>
      <Navbar />
      <Burger />      
      <ImageComponent src={ImatgeContacte} blurSrc={ImatgeContacteBlur} alt="Contacta'ns" text="Contacta'ns" opacity={.5}/>
      <CenteredColoredBox textColor="#F1F1F1" backgroundColor="#D91E01" text="Per posar-te en contacte amb nosaltres envia un correu a:" text2="pastoret.major@pastoretsdegirona.cat"/>      
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Contacte