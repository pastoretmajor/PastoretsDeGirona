import React from 'react';
import Logo from '../../images/logoLaTostadora.png';
import './PatrocinadorsPrincipals.css';
import { CenteredColoredBox } from '../ColoredBox/ColoredBox';

const PatrocinadorsPrincipals = () => {
  const logos = [
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
    Logo,
  ];

  return (
    <div>
      <div className="logos-container">
        <h6>Amb el patrocini de:</h6>
        {logos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatrocinadorsPrincipals;
