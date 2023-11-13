import React from 'react';
import './CartaDirector.css';

const Carta = () => {
  return (
    <div className="director-body">
      <div className="director-container">
        <div className="director-header">
          <h1 className="director-title">Carta del Director</h1>
        </div>
        <div className="director-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            Sed nisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
            porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
          </p>
        </div>
        <div className="director-footer">
          <p className="director-signature">Atentament,<br />El Director</p>
        </div>
      </div>
    </div>
  );
}

export default Carta;
