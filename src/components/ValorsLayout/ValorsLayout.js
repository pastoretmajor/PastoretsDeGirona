import React from 'react';
import './ValorsLayout.css';
import { ColoredBox, CenteredColoredBox } from '../ColoredBox/ColoredBox';

const ValorsLayout = ({ boxes, centered }) => {
  return (
    <div className="valors-layout">
      {boxes.map((box, index) => (
        <div key={index} className="valors">
          <div className="valors-content">
            {centered ? (
              <CenteredColoredBox {...box} />
            ) : (
              <ColoredBox {...box}>
                {box.hasCircle && <div className="red-circle"></div>}
              </ColoredBox>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ValorsLayout;
