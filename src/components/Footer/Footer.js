import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    const email = 'pastoret.major@pastoretsdegirona.cat'
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.instagram.com/elspastoretsdegirona/" target="_blank" rel="noopener noreferrer" className='icon-instagram' aria-label="Link cap a l'instagram de l'associació Pastorets de Girona" hrefLang="x-default">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='icon-facebook' aria-label="Link cap a el facebook de l'associació Pastorets de Girona" hrefLang="x-default">
          <FaFacebook className="icon" />
        </a>
        <a href="https://twitter.com/elspastoretsgi?t=o5SkbfuB65jR5MuChWxT5g&s=08" target="_blank" rel="noopener noreferrer" className='icon-twitter' aria-label="Link cap a el twitter de l'associació Pastorets de Girona" hrefLang="x-default">
          <FaTwitter className="icon" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className='icon-tiktok' aria-label="Link cap a el tiktok de l'associació Pastorets de Girona" hrefLang="x-default">
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
