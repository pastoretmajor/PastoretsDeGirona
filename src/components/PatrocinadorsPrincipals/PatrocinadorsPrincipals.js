import React from 'react';
import Logo from '../../images/laManela.gif';
import './PatrocinadorsPrincipals.css';

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
