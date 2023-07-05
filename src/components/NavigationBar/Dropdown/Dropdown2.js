import React, { useState } from 'react';
import { MenuItems } from '../MenuItems/MenuItems2';
import './Dropdown.css';
import  { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          if (item.path.startsWith('http')) {
            // Open in a new tab if it starts with 'http' or 'https'
            return (
              <li key={index}>
                <a
                  className={item.cName}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </a>
              </li>
            );
          } else {
            // Use the regular Link component for other paths
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}

export default Dropdown