import React from 'react';
import './ColumnLayout.css';
import { ColoredBox, CenteredColoredBox } from '../ColoredBox/ColoredBox';

const ColumnLayout = ({ boxes, centered, backgroundColors }) => { 
  return (
    <div className="column-layout">
      {boxes.map((box, index) => (
        <div key={index} className="column">
          <div className="column-content" style={{ backgroundColor: backgroundColors[index] }}>
            {centered ? (
              <CenteredColoredBox {...box} />
            ) : (
              <ColoredBox {...box} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColumnLayout;
