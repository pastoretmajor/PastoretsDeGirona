import React, { useState } from 'react';
import './Burger.css'

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <button className="burger-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isOpen && (
        <nav className="menu">
          <ul>
            <li><a href="#/">INICI</a></li>
            <li><a href="#/lobra">L'OBRA</a></li>
            <li>
              <a href="#/equip">EQUIP HUMÀ </a>
              <ul>
                <li><a href="#/tecnics">· Equip tècnic</a></li>
                <li><a href="#/actors">· Actors i actrius</a></li>
                <li><a href="#/ajudants">· Ajudants de producció</a></li>
              </ul>
            </li>
            <li><a href="#/manela">LA MANELA</a></li>
            <li><a href="#/entrades">ENTRADES</a></li>
            <li>
              <a href="#/associacio">ASSOCIACIÓ</a>
              <ul>
                <li><a href="#/valors">· Valors</a></li>
                <li><a href="https://www.fundacioesplaigirona.cat/" rel="noopener noreferrer" target="_blank">· Fundació esplai Girona</a></li>
                <li><a href="#/soci">· Fes una donació</a></li>
              </ul>
            </li>
            <li>
              <a href="#/transparencia">TRANSPARÈNCIA</a>
              <ul>
                <li><a href="#/collaboradors">· Col·laboradors</a></li>
                <li><a href="#/patrocinadors">· Patrocinadors</a></li>
              </ul>
            </li>
            <li><a href="#/contacte">CONTACTA'NS</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Burger;
