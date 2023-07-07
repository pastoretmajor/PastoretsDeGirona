import Navbar from '../components/NavigationBar/Navbar'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import Footer from '../components/Footer/Footer'
import GifComponent from '../components/GifAnimation/GifComponent'
import gifUrl from '../images/laManela.gif'
import LaManela from '../images/plomaAngel.webP'
import BlurLaManela from '../images/plomaAngelBlur.webP'

const Manela = () => {

  return (
    <div>
      <Navbar />
      <ImageComponent src={LaManela} blurSrc={BlurLaManela} alt="La Manela" text="La Manela" />
      <GifComponent gif={gifUrl}/>
      <Footer />
    </div>
  )
}

export default Manela
