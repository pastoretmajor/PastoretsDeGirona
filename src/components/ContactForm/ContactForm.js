import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; // Constant amb la URL del backend

const EmailForm = () => {
  const [assumpte, setAssumpte] = useState('');
  const [cos, setCos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const dadesCorreu = {
      assumpte: assumpte,
      cos: cos,
    };

    axios.post(`${API_URL}/enviar-correu`, dadesCorreu)
      .then((response) => {
        console.log(response.data);
        alert('Correu electrònic enviat amb èxit.');
      })
      .catch((error) => {
        console.error(error);
        alert('Hi ha hagut un error en l\'enviament del correu electrònic.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="destinatari"
        value="joel.cano.puigvert@gmail.com" // Estableix el valor directament des del backend
      />

      <div>
        <label>Assumpte:</label>
        <input
          type="text"
          value={assumpte}
          onChange={(e) => setAssumpte(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Cos:</label>
        <textarea
          value={cos}
          onChange={(e) => setCos(e.target.value)}
          required
        />
      </div>
      <button type="submit">Enviar correu electrònic</button>
    </form>
  );
};

export default EmailForm;
