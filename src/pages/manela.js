import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'

import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import LaManela from '../images/banners/lamanela-pastorets-de-girona.webP'
import LaManelaBlur from '../images/blured/lamanela-pastorets-de-girona.webP'


const Manela = () => {

  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={LaManela} blurSrc={LaManelaBlur} alt="Concurs cartell 2025" text="Concurs cartell 2025" opacity={.5}/>
      <div className='bases_concurs'>
      <iframe src="/concurs_cartell.pdf" title="Bases concurs cartell"/>        
      </div>
      <PatrocinadorsPrincipals />      
      <Footer />
    </div>
  )
}

export default Manela
