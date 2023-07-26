import React from 'react'
import Navbar from '../components/NavigationBar/Navbar'
import Burger from '../components/Burger/Burger'
import Footer from '../components/Footer/Footer'
import ImageComponent from '../components/ImageComponent/ImageComponent'
import ValorsLayout from '../components/ValorsLayout/ValorsLayout';
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals'

import ValorsImatge from '../images/banners/valors-pastorets-de-girona.png'

const Valors = () => {
  const circles = [
    { defaultText: 'Emprenedoria i Innovació', hoverText: 'Plantegem els reptes com a oportunitats per crear una innovadora representació teatral sobre Nadal. Mirem cap al futur i ens enfoquem en aspectes de l’actualitat.' },
    { defaultText: 'Girona Km0', hoverText: 'Estimem Girona i la seva gent. Per això treballem per promoure la representació teatral a la ciutat i interpretat a través de la seva gent, sempre obert a tothom qui hi vulgui participar.' },
    { defaultText: 'Paritat i perspectiva de gènere', hoverText: 'Tenim el compromís d’assolir espais d’activitat segurs, unes relacions basades en la llibertat i el respecte entre les persones i conseqüentment lliures de situacions d’assetjament sexual i per raó de sexe.' },
    { defaultText: 'Sostenibilitat', hoverText: 'Apostem per la sostenibilitat a través de diferents aspectes dins i fora l’escenari, reduint al màxim l’impacte ambiental del material utilitzat per l’escenari, vestuari i il·luminació.' },
    { defaultText: 'Tradicions catalanes', hoverText: 'Vetllem per la perduració de la cultura catalana a la nostra ciutat. Els pastorets, com  representació nadalenca, tenen els seus orígens des de l’època medieval fins avui en dia.' },
    { defaultText: 'Transparència', hoverText: 'Creiem en la importància del principi de transparència i de les bones pràctiques com a forma de mostrar la gestió de l’Associació Pastorets de Girona, així com de l’assoliment de la finalitat per la qual ha estat constituïda. També estem compromesos amb tots els socis, sòcies i membres de l’associació, i per tant oferim una informació clara i transparent sobre la gestió d’aquesta associació.' },
  ]

  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={ValorsImatge} alt="Valors" text="Valors" />
      <ValorsLayout circles={circles}/>
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  )
}

export default Valors