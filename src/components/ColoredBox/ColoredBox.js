import React from 'react';
import './ColoredBox.css';

const ColoredBox = ({ backgroundColor, textColor, text, text2, src, alt, link, paddingLeft, paddingRight, height }) => {
  const boxStyle = {
    color: textColor,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight, 
    height: height,
  };

  const backgroundStyle = {
    backgroundColor: backgroundColor,
  };

  return (
      <div className="colored-box" style={backgroundStyle}>
        {src && <img src={src} alt={alt} className="box-image" />}
        {text && (
          <div className="box-content" style={boxStyle}>
            <p>{text}</p>
            {text2 && <p>{text2}</p>}
          </div>
        )}
      </div>
  );
};

const CenteredColoredBox = ({ backgroundColor, textColor, text, text2, src, alt, link, hasCircle, height }) => {
  const boxStyle = {
    color: textColor,
    height: height,
  };

  const backgroundStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="centered-colored-box" style={backgroundStyle}>
      {src && <img src={src} alt={alt} className="box-image" />}
      {hasCircle ? (
        <a href={link} className="centered-colored-box-link" style={{ textDecoration: 'none' }} aria-label="Link cap a la pàgina a la que es vol anar">
          <div className="red-circle">
            <div className="circle-content">
              {text && <p style={boxStyle}>{text}</p>}
              {text2 && <p style={boxStyle}>{text2}</p>}
            </div>
          </div>
        </a>
      ) : (
        <div className="circle-content">
          {text && <p style={boxStyle}>{text}</p>}
          {text2 && <p style={boxStyle}>{text2}</p>}
        </div>
      )}
    </div>
  );
};


export { ColoredBox, CenteredColoredBox };
