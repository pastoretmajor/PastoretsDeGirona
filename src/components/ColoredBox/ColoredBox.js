import React from 'react';
import './ColoredBox.css';

const ColoredBox = ({ width, height, backgroundColor, text, text2, src, alt, link }) => {
  const boxStyle = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
  };

  return (
    <a href={link} className="colored-box-link">
      <div className="colored-box" style={boxStyle}>
        {src && <img src={src} alt={alt} className="box-image" />}
        {text && (
          <div>
            <p>{text}</p>
            <p>{text2}</p>
          </div>
        )}
      </div>
    </a>
  );
};


const CenteredColoredBox = ({ width, height, backgroundColor, text, text2, src, alt, link, hasCircle }) => {
  const boxStyle = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
  };

  return (
    <div className="centered-colored-box" style={boxStyle}>
      {src && <img src={src} alt={alt} className="box-image" />}
      {hasCircle ? (
        <a href={link} className="centered-colored-box-link" style={{ textDecoration: 'none' }}>
          <div className="red-circle">
            <div className="circle-content">
              {text && <p>{text}</p>}
              {text2 && <p>{text2}</p>}
            </div>
          </div>
        </a>
      ) : (
        <div className="circle-content">
          {text && <p>{text}</p>}
          {text2 && <p>{text2}</p>}
        </div>
      )}
    </div>
  );
};

export { ColoredBox, CenteredColoredBox };
