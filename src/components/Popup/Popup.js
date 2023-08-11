import React, { Component } from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';
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
          <button className="close-button" onClick={this.handleClose}>X</button>
          <h2>Seguiu-nos</h2>
          <hr className='separador'/>
          <div className="icon-row">
            <a href="https://www.instagram.com/elspastoretsdegirona/" rel="noopener noreferrer" target="_blank" className="icon-instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/people/Els-Pastorets-De-Girona/100094741527277/" rel="noopener noreferrer" target="_blank" className="icon-facebook">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/elspastoretsgi" rel="noopener noreferrer" target="_blank" className="icon-twitter">
              <FaTwitter />
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
