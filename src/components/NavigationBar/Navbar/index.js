import React, { useState } from 'react';
import { Button } from '../../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown1 from '../Dropdown/Dropdown1';
import Dropdown2 from '../Dropdown/Dropdown2';
import Dropdown3 from '../Dropdown/Dropdown3';
import logoImage from '../../../images/logoHoritzontal.webP';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const handleDropdown1 = () => {
    setDropdown1(!dropdown1);
    setDropdown2(false); // Close other dropdowns if open
    setDropdown3(false); // Close other dropdowns if open
  };

  const handleDropdown2 = () => {
    setDropdown2(!dropdown2);
    setDropdown1(false); // Close other dropdowns if open
    setDropdown3(false); // Close other dropdowns if open
  };

  const handleDropdown3 = () => {
    setDropdown3(!dropdown3);
    setDropdown1(false); // Close other dropdowns if open
    setDropdown2(false); // Close other dropdowns if open
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logoImage} alt ='Pastorets de Girona' className='logo-image'/>
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/lobra' className='nav-links' onClick={closeMobileMenu}>
              L'OBRA
            </Link>
          </li>
          <li className='nav-item' onMouseEnter={handleDropdown1} onMouseLeave={() => setDropdown1(false)}>
            <Link to='/equip' className='nav-links' onClick={closeMobileMenu}>
              EQUIP HUMÀ
            </Link>
            {dropdown1 && <Dropdown1 />}
          </li>
          <li className='nav-item'>
            <Link to='/manela' className='nav-links' onClick={closeMobileMenu}>
              LA MANELA
            </Link>
          </li>
          <li className='nav-item'>
            <Button />
          </li>
          <li className='nav-item' onMouseEnter={handleDropdown2} onMouseLeave={() => setDropdown2(false)}>
            <Link to='/associacio' className='nav-links' onClick={closeMobileMenu}>
              ASSOCIACIÓ
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
          <li className='nav-item' onMouseEnter={handleDropdown3} onMouseLeave={() => setDropdown3(false)}>
            <Link to='/transparencia' className='nav-links' onClick={closeMobileMenu}>
              TRANSPARÈNCIA
            </Link>
            {dropdown3 && <Dropdown3 />}
          </li>
          <li className='nav-item'>
            <Link to='/contacte' className='nav-links' onClick={closeMobileMenu}>
              CONTACTA'NS
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
