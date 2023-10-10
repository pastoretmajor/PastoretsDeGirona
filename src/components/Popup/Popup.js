import React, { Component } from 'react';
import { FaInstagram, FaFacebook, FaTiktok, FaLink } from 'react-icons/fa';
import './Popup.css';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;

    if (!isOpen) {
      return null;
    }

    return (
      <div className="popup">
        <div className="popup-content">
          <button className="close-button" onClick={this.handleClose}>
            X
          </button>
          <h2>Vols fer d'angelet?</h2>
          <hr className='separador' />
          <div className="link-row" />
            <a href='https://docs.google.com/forms/d/1pp1dgWNS0yqAVWnBr6OsrCP1UHBKjJLHmE0bfJOIAn0/edit?usp=drivesdk' rel="noopener noreferrer" target="_blank" className="icon-link">
              <FaLink />
            </a>
          <hr className='separador' />
          <h2>Seguiu-nos</h2>
          <hr className='separador'/>
          <div className="icon-row">
            <a href="https://www.instagram.com/elspastoretsdegirona/" rel="noopener noreferrer" target="_blank" className="icona-instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/people/Els-Pastorets-De-Girona/100094741527277/" rel="noopener noreferrer" target="_blank" className="icon-facebook">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/elspastoretsgi" rel="noopener noreferrer" target="_blank" className="icon-twitter">
            <svg className='colored-svg' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
            </svg>
            </a>
            <a href="https://www.tiktok.com/@pastorets.de.girona?_t=8eI6rU4GtOk&_r=1" rel="noopener noreferrer" target="_blank" className="icon-tiktok">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
