import React, { useState } from 'react';
import './ColoredCircle.css';

const ColoredCircle = ({ defaultText, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const circleClassName = isHovered ? 'circle-valors hovered' : 'circle-valors';

  return (
    <div
      className={circleClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text">
        {isHovered ? hoverText : defaultText}
      </div>
    </div>
  );
};

export default ColoredCircle;
