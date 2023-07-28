import React, { useState } from 'react';
import './ColoredCircle.css';

const ColoredCircle = ({ defaultText, hoverText, circleColor, textColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const circleClassName = isHovered ? 'circle-valors hovered' : 'circle-valors';

  const circleStyle = {
    backgroundColor: isHovered ? undefined : circleColor, // Utilitza circleColor només quan no està en estat "hover"
    color: isHovered ? undefined : textColor, // Utilitza textColor només quan no està en estat "hover"
  };

  return (
    <div
      className={circleClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={circleStyle} // Afegir l'estil inline només quan no està en estat "hover"
    >
      <div className="text">
        {isHovered ? hoverText : defaultText}
      </div>
    </div>
  );
};

export default ColoredCircle;