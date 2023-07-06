import React from 'react';
import './ColoredBox.css';

const ColoredBox = ({ width, height, backgroundColor, textColor, text, text2, src, alt, link }) => {
  const boxStyle = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    color: textColor, // Set the text color
  };

  const textStyle = {
    color: textColor, // Set the text color
  };

  return (
    <a href={link} className="colored-box-link" aria-label="Link cap a la pàgina a la que es vol anar">
      <div className="colored-box" style={boxStyle}>
        {src && <img src={src} alt={alt} className="box-image" />}
        {text && (
          <div>
            <p style={textStyle}>{text}</p>
            <p style={textStyle}>{text2}</p>
          </div>
        )}
      </div>
    </a>
  );
};

const CenteredColoredBox = ({ width, height, backgroundColor, textColor, text, text2, src, alt, link, hasCircle }) => {
  const boxStyle = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    color: textColor, // Set the text color
  };

  const textStyle = {
    color: textColor, // Set the text color
  };

  return (
    <div className="centered-colored-box" style={boxStyle}>
      {src && <img src={src} alt={alt} className="box-image" />}
      {hasCircle ? (
        <a href={link} className="centered-colored-box-link" style={{ textDecoration: 'none' }} aria-label="Link cap a la pàgina a la que es vol anar">
          <div className="red-circle">
            <div className="circle-content">
              {text && <p style={textStyle}>{text}</p>}
              {text2 && <p style={textStyle}>{text2}</p>}
            </div>
          </div>
        </a>
      ) : (
        <div className="circle-content">
          {text && <p style={textStyle}>{text}</p>}
          {text2 && <p style={textStyle}>{text2}</p>}
        </div>
      )}
    </div>
  );
};

export { ColoredBox, CenteredColoredBox };
