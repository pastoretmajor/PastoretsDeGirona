import React, { useState } from 'react';
import './GifComponent.css';

const GifComponent = ({ gif }) => {
  const [resetCount, setResetCount] = useState(0);

  const handleGifReset = () => {
    setResetCount(prevCount => prevCount + 1);
  };

  return (
    <div className="gif-container">
      <img
        key={resetCount} // Esto hace que la imagen se reinicie cada vez que resetCount cambie
        src={gif}
        alt="Animated GIF"
        className="gif"
        onAnimationIteration={handleGifReset} // Llamada cuando se reinicia la animación
      />
    </div>
  );
};

export default GifComponent;
