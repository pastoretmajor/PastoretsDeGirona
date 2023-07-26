import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'

import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'
import GifComponent from '../components/GifAnimation/GifComponent'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import gifUrl from '../images/logos/laManela.gif'
import LaManela from '../images/banners/lamanela-pastorets-de-girona.webP'
import LaManelaBlur from '../images/blured/lamanela-pastorets-de-girona.webP'


const Manela = () => {

  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={LaManela} blurSrc={LaManelaBlur} alt="La Manela" text="La Manela" />
      <GifComponent gif={gifUrl}/>
      <PatrocinadorsPrincipals />      
      <Footer />
    </div>
  )
}

export default Manela
