import React from 'react';
import Logo from '../../images/laManela.gif';
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
      <CenteredColoredBox text={"ÀNGELS"} height={"100px"} width={"1440px"} backgroundColor={"#1D1D1B"}  textColor={"#F1F1F1"}/>
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
