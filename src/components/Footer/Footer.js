import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    const email = 'pastoret.major@pastoretsdegirona.cat'
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.instagram.com/elspastoretsdegirona/" target="_blank" rel="noopener noreferrer" className='icon-instagram' aria-label="Link cap a l'instagram de l'associació Pastorets de Girona" hrefLang="x-default">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100094741527277" target="_blank" rel="noopener noreferrer" className='icon-facebook' aria-label="Link cap a el facebook de l'associació Pastorets de Girona" hrefLang="x-default">
          <FaFacebook className="icon" />
        </a>
        <a href="https://twitter.com/elspastoretsgi?t=o5SkbfuB65jR5MuChWxT5g&s=08" target="_blank" rel="noopener noreferrer" className='icon-twitter' aria-label="Link cap a el twitter de l'associació Pastorets de Girona" hrefLang="x-default">
        <svg className='colored-svg icon' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
        </svg>        
        </a>
        <a href="https://www.tiktok.com/@pastorets.de.girona" target="_blank" rel="noopener noreferrer" className='icon-tiktok' aria-label="Link cap a el tiktok de l'associació Pastorets de Girona" hrefLang="x-default">
          <FaTiktok className="icon" />
        </a>
      </div>
      <div className="footer-contact">
        <p>
            <a href={`mailto:${email}`} className='email-link'>{email}</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
