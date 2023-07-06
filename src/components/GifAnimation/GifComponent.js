import React from 'react';
import './GifComponent.css'
const GifComponent = ({ gif }) => {
  return (
    <div className="gif-component">
      <img
        src={gif}
        alt="Animated GIF"
        className="gif"
      />
    </div>
  );
};

export default GifComponent;
