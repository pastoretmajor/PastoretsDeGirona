import React, { useState } from 'react';
import logoEmpresa1 from '../../images/patrocinadors/logoLaTostadora.png';
import logoEmpresa2 from '../../images/patrocinadors/logoLaTostadora.png';
import logoEmpresa3 from '../../images/patrocinadors/logoLaTostadora.png';
import logoEmpresa4 from '../../images/patrocinadors/logoLaTostadora.png';
import logoEmpresa5 from '../../images/patrocinadors/logoLaTostadora.png';
import logoEmpresa6 from '../../images/patrocinadors/logoLaTostadora.png';


import './PatrocinadorsA.css';

const patrocinadors = [
  {
    logo: logoEmpresa1,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu. Nam lacinia nisi et nunc viverra consequat. Maecenas ac varius arcu. Fusce nec euismod diam, vitae malesuada nulla. Vivamus quis orci eu lorem eleifend fringilla id non augue. Fusce quis consequat ex. Vestibulum fringilla, magna a venenatis vehicula, metus nisl blandit ipsum, scelerisque lobortis risus sem at elit. Donec sed tellus viverra, mollis enim id, venenatis velit. Nam bibendum, lectus et tincidunt lobortis, nunc leo pellentesque leo, ac auctor risus tortor eu nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rhoncus porttitor ex eu gravida. Vivamus ullamcorper erat at lacus volutpat, non congue libero hendrerit. Morbi quis arcu enim. Donec ultricies sit amet massa eu pulvinar.',
    link: 'https://www.latostadora.com/',
  },
  {
    logo: logoEmpresa2,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu. Nam lacinia nisi et nunc viverra consequat. Maecenas ac varius arcu. Fusce nec euismod diam, vitae malesuada nulla. Vivamus quis orci eu lorem eleifend fringilla id non augue. Fusce quis consequat ex. Vestibulum fringilla, magna a venenatis vehicula, metus nisl blandit ipsum, scelerisque lobortis risus sem at elit. Donec sed tellus viverra, mollis enim id, venenatis velit. Nam bibendum, lectus et tincidunt lobortis, nunc leo pellentesque leo, ac auctor risus tortor eu nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rhoncus porttitor ex eu gravida. Vivamus ullamcorper erat at lacus volutpat, non congue libero hendrerit. Morbi quis arcu enim. Donec ultricies sit amet massa eu pulvinar.',
    link: 'https://www.latostadora.com/',
  },
  {
    logo: logoEmpresa3,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu. Nam lacinia nisi et nunc viverra consequat. Maecenas ac varius arcu. Fusce nec euismod diam, vitae malesuada nulla. Vivamus quis orci eu lorem eleifend fringilla id non augue. Fusce quis consequat ex. Vestibulum fringilla, magna a venenatis vehicula, metus nisl blandit ipsum, scelerisque lobortis risus sem at elit. Donec sed tellus viverra, mollis enim id, venenatis velit. Nam bibendum, lectus et tincidunt lobortis, nunc leo pellentesque leo, ac auctor risus tortor eu nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rhoncus porttitor ex eu gravida. Vivamus ullamcorper erat at lacus volutpat, non congue libero hendrerit. Morbi quis arcu enim. Donec ultricies sit amet massa eu pulvinar.',
    link: 'https://www.latostadora.com/',
  },
  {
    logo: logoEmpresa4,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu. Nam lacinia nisi et nunc viverra consequat. Maecenas ac varius arcu. Fusce nec euismod diam, vitae malesuada nulla. Vivamus quis orci eu lorem eleifend fringilla id non augue. Fusce quis consequat ex. Vestibulum fringilla, magna a venenatis vehicula, metus nisl blandit ipsum, scelerisque lobortis risus sem at elit. Donec sed tellus viverra, mollis enim id, venenatis velit. Nam bibendum, lectus et tincidunt lobortis, nunc leo pellentesque leo, ac auctor risus tortor eu nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rhoncus porttitor ex eu gravida. Vivamus ullamcorper erat at lacus volutpat, non congue libero hendrerit. Morbi quis arcu enim. Donec ultricies sit amet massa eu pulvinar.',
    link: 'https://www.latostadora.com/',
  },
  {
    logo: logoEmpresa5,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu. Nam lacinia nisi et nunc viverra consequat. Maecenas ac varius arcu. Fusce nec euismod diam, vitae malesuada nulla. Vivamus quis orci eu lorem eleifend fringilla id non augue. Fusce quis consequat ex. Vestibulum fringilla, magna a venenatis vehicula, metus nisl blandit ipsum, scelerisque lobortis risus sem at elit. Donec sed tellus viverra, mollis enim id, venenatis velit. Nam bibendum, lectus et tincidunt lobortis, nunc leo pellentesque leo, ac auctor risus tortor eu nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rhoncus porttitor ex eu gravida. Vivamus ullamcorper erat at lacus volutpat, non congue libero hendrerit. Morbi quis arcu enim. Donec ultricies sit amet massa eu pulvinar.',
    link: 'https://www.latostadora.com/',
  },
  {
    logo: logoEmpresa6,
    descripcio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus ut diam tincidunt auctor. Vivamus finibus consequat nibh, eget vehicula velit viverra quis. Fusce ornare, metus at rhoncus faucibus, purus eros fringilla ligula, congue consectetur nisi purus ut arcu. Nam lacinia nisi et nunc viverra consequat. Maecenas ac varius arcu. Fusce nec euismod diam, vitae malesuada nulla. Vivamus quis orci eu lorem eleifend fringilla id non augue. Fusce quis consequat ex. Vestibulum fringilla, magna a venenatis vehicula, metus nisl blandit ipsum, scelerisque lobortis risus sem at elit. Donec sed tellus viverra, mollis enim id, venenatis velit. Nam bibendum, lectus et tincidunt lobortis, nunc leo pellentesque leo, ac auctor risus tortor eu nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rhoncus porttitor ex eu gravida. Vivamus ullamcorper erat at lacus volutpat, non congue libero hendrerit. Morbi quis arcu enim. Donec ultricies sit amet massa eu pulvinar.',
    link: 'https://www.latostadora.com/',
  },
];

const Patrocinador = ({ logo, descripcio, link }) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <div className="patrocinadorA" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <img src={logo} alt="Logo del patrocinador" />
      {hover && (
        <div className="infoA">
          <div className="descriptionA">
            <p>{descripcio}</p>
          </div>
          <div className="button-containerA">
            <button onClick={() => window.open(link, "_blank")}>Visita la web</button>
          </div>
        </div>
      )}
    </div>
  );
};

const PatrocinadorsA = () => {
  return (
    <div className="patrocinadors-containerA">
      {patrocinadors.map((patrocinador, index) => (
        <Patrocinador key={index} {...patrocinador} />
      ))}
    </div>
  );
};

export default PatrocinadorsA;
