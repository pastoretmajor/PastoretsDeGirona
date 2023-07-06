import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';
import { IoMail, IoCall } from 'react-icons/io5';

const Footer = () => {
    const email = 'pastoret.major@pastoretsdegirona.cat'
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.instagram.com" className='icon-instagram' aria-label="Link cap a l'instagram de l'associació Pastorets de Girona">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.facebook.com" className='icon-facebook' aria-label="Link cap a el facebook de l'associació Pastorets de Girona">
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.twitter.com" className='icon-twitter' aria-label="Link cap a el twitter de l'associació Pastorets de Girona">
          <FaTwitter className="icon" />
        </a>
        <a href="https://www.tiktok.com" className='icon-tiktok' aria-label="Link cap a el tiktok de l'associació Pastorets de Girona">
          <FaTiktok className="icon" />
        </a>
      </div>
      <div className="footer-contact">
      <div className="footer-icon">
          <IoCall className="icon" />
        </div>
        <p>+34 666 66 66 66</p>
        <div className="footer-icon">
          <IoMail className="icon" />
        </div>
        <p>
            <a href={`mailto:${email}`} className='email-link'>{email}</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
