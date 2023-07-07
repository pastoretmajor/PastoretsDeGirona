import React, { useRef, useEffect, useState } from 'react';
import './ImageComponent.css';

const ImageComponent = ({ src, blurSrc, text }) => {
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
    opacity: isLoaded ? 1 : 0,
  };

  const blurDivStyle = {
    backgroundImage: `url(${blurSrc})`,
    opacity: isLoaded ? 0 : 1,
  };

  return (
    <div className="content-container">
      <div
        className="image-component"
        style={divStyle}
        ref={imageRef}
        onLoad={handleLoad}
      ></div>
      <div className="blur-image-component" style={blurDivStyle}></div>
      {text && (
        <div className="text-overlay">
          <h1>{text}</h1>
        </div>
      )}
    </div>
  );
};

export default ImageComponent;
