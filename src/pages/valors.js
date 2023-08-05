import React from 'react';
import Navbar from '../components/NavigationBar/Navbar';
import Burger from '../components/Burger/Burger';
import Footer from '../components/Footer/Footer';
import ImageComponent from '../components/ImageComponent/ImageComponent';
import ValorsLayout from '../components/ValorsLayout/ValorsLayout';
import PatrocinadorsPrincipals from '../components/PatrocinadorsPrincipals/PatrocinadorsPrincipals';

import ValorsImatge from '../images/banners/valors-pastorets-de-girona.webP';
import ValorsImatgeBlur from '../images/blured/valors-pastorets-de-girona.webP';

const Valors = () => {
  const circles = [
    {
      defaultText: 'Emprenedoria \ni \nInnovació',
      hoverText: 'Plantegem els reptes com a oportunitats per crear una representació teatral innovadora sobre el Nadal. Mirem cap al futur i ens enfoquem en aspectes de l’actualitat.',
      circleColor: "#DADADA",
    },
    {
      defaultText: 'Girona \nKm0',
      hoverText: 'Estimem Girona i la seva gent. Per això treballem per promoure la representació teatral a la ciutat i amb la seva gent, sempre obert a tothom que hi vulgui participar.',
      circleColor: "#D91E01",
      textColor: "#F1F1F1"
    },
    {
      defaultText: 'Paritat i perspectiva \nde gènere',
      hoverText: 'Tenim el compromís d’assolir espais d’activitat segurs, amb relacions basades en la llibertat i el respecte entre les persones i conseqüentment lliures de situacions d’assetjament sexual i per raó de sexe.',
      circleColor: "#414141",
      textColor: "#F1F1F1"
      },
    {
      defaultText: 'Sostenibilitat',
      hoverText: 'Apostem per la sostenibilitat a través de diferents aspectes dins i fora l’escenari, reduint al màxim l’impacte ambiental del material utilitzat per l’escenari, vestuari i il·luminació.',
      circleColor: "#D91E01",
      textColor: "#F1F1F1"
    },
    {
      defaultText: 'Tradicions \ncatalanes',
      hoverText: 'Vetllem per la perduració de la cultura catalana a la nostra ciutat. Els Pastorets és una representació teatral nadalenca que té els seus orígens en l’època medieval i ha perdurat fins als nostres dies.',
      circleColor: "#414141",
      textColor: "#F1F1F1"
    },
    {
      defaultText: 'Transparència',
      hoverText: 'Valorem la transparència i les bones pràctiques per exhibir la gestió de l\'Associació Pastorets de Girona i l\'assoliment del nostre propòsit. Estem plenament compromesos amb els nostres socis i membres.',
      circleColor: "#DADADA"
    },
  ];

  // Function to render text with line breaks
  const renderTextWithLineBreaks = (text) => {
    const lines = text.split('\n');
    return lines.map((line, index) => <div key={index}>{line}</div>);
  };

  return (
    <div>
      <Navbar />
      <Burger />
      <ImageComponent src={ValorsImatge} blurSrc={ValorsImatgeBlur} alt="Valors" text="Valors" opacity={0.5} />
      <ValorsLayout
        circles={circles.map((circle) => ({
          defaultText: renderTextWithLineBreaks(circle.defaultText),
          hoverText: circle.hoverText,
          circleColor : circle.circleColor,
          textColor: circle.textColor,
        }))}
      />
      <PatrocinadorsPrincipals />
      <Footer />
    </div>
  );
};

export default Valors;
