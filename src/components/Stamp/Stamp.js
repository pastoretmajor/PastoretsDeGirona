import React, { useState, useEffect } from 'react';
import StampAraSi from "../../images/logos/AraSi_inclinat.png";
import "./Stamp.css";

const Stamp = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Obtenir la posició actual de la finestra en la pantalla
      const scrollY = window.scrollY;
      
      // Si la posició és a la part superior de la pàgina, mostrem la imatge
      if (scrollY <= 475) {
        setShowImage(true);
      } else {
        setShowImage(false);
      }
    };

    // Afegim un esdeveniment d'escolta d'escorçament a la finestra
    window.addEventListener("scroll", handleScroll);

    // Comprovem la posició de la finestra al carregar la pàgina
    handleScroll();

    // Eliminem l'esdeveniment d'escolta quan el component es desmunti
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showImage && (
        <img
          src={StampAraSi}
          alt="Imatge Fixa"
          className="fixed-image"
        />
      )}
    </>
  );
};

export default Stamp;
