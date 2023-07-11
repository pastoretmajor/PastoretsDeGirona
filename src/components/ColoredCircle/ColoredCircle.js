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

  const circleClassName = isHovered ? 'circle hovered' : 'circle';

  return (
    <div
      className={circleClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="circle-content">
        <span className="text">
          {isHovered ? hoverText : defaultText}
        </span>
      </div>
    </div>
  );
};

export default ColoredCircle;
