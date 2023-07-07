import React from 'react'
import Navbar from '../components/NavigationBar/Navbar'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import ValorsLayout from '../components/ValorsLayout/ValorsLayout';
import ValorsImatge from '../images/alaAngelBlanc.webP'
import BlurValorsImatge from '../images/alaAngelBlancBlur.webP'

const Valors = () => {

  const boxes = [
    { width: '720px', height: '500px', backgroundColor: '#79CD8D', text:"Lorem Ipsum", hasCircle: true, link:"/"},
    { width: '720px', height: '500px', backgroundColor: '#8FCED0', text:"Lorem Ipsum", hasCircle: true, link:"/"},
    { width: '720px', height: '500px', backgroundColor: '#8FCED0', text:"Lorem Ipsum", hasCircle: true, link:"/"},
    { width: '720px', height: '500px', backgroundColor: '#79CD8D', text:"Lorem Ipsum", hasCircle: true, link:"/"},
    { width: '720px', height: '500px', backgroundColor: '#79CD8D', text:"Lorem Ipsum", hasCircle: true, link:"/"},
    { width: '720px', height: '500px', backgroundColor: '#8FCED0', text:"Lorem Ipsum", hasCircle: true, link:"/"},
  ];

  return (
    <div>
      <Navbar />
      <ImageComponent src={ValorsImatge} blurSrc={BlurValorsImatge} alt="Valors" text="Valors" />
      <ValorsLayout boxes={boxes}  centered={true}/>
      <Footer />
    </div>
  )
}

export default Valors