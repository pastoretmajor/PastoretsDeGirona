import React from 'react';
import './ValorsLayout.css';
import ColoredCircle from '../ColoredCircle/ColoredCircle';

const ValorsLayout = ({ circles }) => {
  return (
    <div className="valors-layout">
      {circles.map((circle, index) => (
        <div key={index} className="valors">
          <div className="valors-content">
              <ColoredCircle {...circle} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ValorsLayout;
