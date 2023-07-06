import React from 'react';
import './ImageComponent.css';

const ImageComponent = ({ src, text }) => {
  const divStyle = {
    backgroundImage: `url(${src})`,
  };

  return (
    <div className="content-container">
      <div className="image-component" style={divStyle}></div>
      {text && (
        <div className="text-overlay">
        <h1>{text}</h1>
      </div>
      )}
    </div>
  );
};

export default ImageComponent;
