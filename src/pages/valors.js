import React from 'react'
import Navbar from '../components/NavigationBar/Navbar'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import ValorsLayout from '../components/ValorsLayout/ValorsLayout';
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import ValorsImatge from '../images/alaAngelBlanc.webP'
import BlurValorsImatge from '../images/alaAngelBlancBlur.webP'

const Valors = () => {
  const circles = [
    { defaultText: 'Valor 1', hoverText: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lectus nisl, blandit ornare fringilla accumsan, elementum id sapien. Integer vitae egestas nulla, at auctor tellus. Vestibulum finibus rhoncus molestie. Curabitur non lorem et ante pellentesque elementum. Etiam sed tortor ullamcorper augue posuere pharetra varius at libero. Nam euismod nisl velit. Curabitur nec ultrices est. Proin nec orci ac urna vulputate convallis. Integer ex leo, efficitur eget euismod vitae, ultrices non erat. Nunc blandit, turpis sit amet commodo consectetur, nunc metus luctus ante, sed congue nunc mauris ac felis. Morbi hendrerit lectus placerat felis vestibulum, eu dapibus lectus cursus.' },
    { defaultText: 'Valor 2', hoverText: 'Lorem Ipsum Dolor Amet' },
    { defaultText: 'Valor 3', hoverText: 'Lorem Ipsum Dolor Amet' },
    { defaultText: 'Valor 4', hoverText: 'Lorem Ipsum Dolor Amet' },
    { defaultText: 'Valor 5', hoverText: 'Lorem Ipsum Dolor Amet' },
    { defaultText: 'Valor 6', hoverText: 'Lorem Ipsum Dolor Amet' },
  ]

  return (
    <div>
      <Navbar />
      <ImageComponent src={ValorsImatge} blurSrc={BlurValorsImatge} alt="Valors" text="Valors" />
      <ValorsLayout circles={circles}/>
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Valors