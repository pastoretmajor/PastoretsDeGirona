import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ImageComponent.css';

const ImageComponent = ({ src, blurSrc, text, opacity }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setIsLoaded(true);
          observer.unobserve(entry.target);
        }
      });
    });

    const currentImageRef = imageRef.current;

    if (currentImageRef) {
      observer.observe(currentImageRef);
    }

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const divStyle = {
    backgroundImage: `url(${src})`,
    opacity: isLoaded ? opacity || 1 : 0,
    transition: 'opacity 0.5s ease',
  };

  const blurDivStyle = {
    backgroundImage: blurSrc ? `url(${blurSrc})` : '',
    opacity: isLoaded ? 0 : opacity || 1,
    transition: 'opacity 0.5s ease',
  };

  return (
    <div className="content-container">
      <div
        className="image-component"
        style={divStyle}
        ref={imageRef}
        onLoad={handleLoad}
      ></div>
      {blurSrc && (
        <div className="blur-image-component" style={blurDivStyle}></div>
      )}
      {text && (
        <div className="text-overlay">
          <h1>{text}</h1>
        </div>
      )}
      
    </div>
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  blurSrc: PropTypes.string,
  text: PropTypes.string,
};

export default ImageComponent;
