import Navbar from '../components/NavigationBar/Navbar'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import LaManela from '../images/backgroundImageAraSi.webP'
import Footer from '../components/Footer/Footer'
import GifComponent from '../components/GifAnimation/GifComponent'
import gifUrl from '../images/laManela.gif'

const Manela = () => {

  return (
    <div>
      <Navbar />
      <ImageComponent src={LaManela} alt="La Manela" text="La Manela" />
      <GifComponent gif={gifUrl}/>
      <Footer />
    </div>
  )
}

export default Manela
