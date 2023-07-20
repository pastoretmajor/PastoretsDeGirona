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
            <li><a href="#/">Inici</a></li>
            <li><a href="#/lobra">L'obra</a></li>
            <li>
              <a href="#/equip">Equip humà</a>
              <ul>
                <li><a href="#/tecnics">Equip tècnic</a></li>
                <li><a href="#/actors">Actors i actrius</a></li>
                <li><a href="#/ajudants">Ajudants de producció</a></li>
              </ul>
            </li>
            <li><a href="#/manela">La Manela</a></li>
            <li><a href="#/entrades">Compra entrades</a></li>
            <li>
              <a href="#/associacio">Associació</a>
              <ul>
                <li><a href="#/valors">Valors</a></li>
                <li><a href="https://www.fundacioesplaigirona.cat/" rel="noopener noreferrer" target="_blank">Fundació esplai Girona</a></li>
                <li><a href="#/donacio">Fes una donació</a></li>
              </ul>
            </li>
            <li>
              <a href="#/transparencia">Transparència</a>
              <ul>
                <li><a href="#/subvencions">Subvencions</a></li>
                <li><a href="#/patrocinadors">Patrocinadors</a></li>
              </ul>
            </li>
            <li><a href="#/contacte">Contacta'ns</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Burger;
