import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';
import { IoMail, IoCall } from 'react-icons/io5';

const Footer = () => {
    const email = 'pastoret.major@pastoretsdegirona.cat'
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.instagram.com" className='icon-instagram'>
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.facebook.com" className='icon-facebook'>
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.twitter.com" className='icon-twitter'>
          <FaTwitter className="icon" />
        </a>
        <a href="https://www.tiktok.com" className='icon-tiktok'>
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
