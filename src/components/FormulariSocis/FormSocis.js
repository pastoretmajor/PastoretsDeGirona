import React, { useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

import './FormSocis.css';

const passphrase = process.env.REACT_APP_ENCRYPTION_PASSPHRASE;

const AddPersones = () => {
    const API_URL= 'https://prova-nodejs-43ce.vercel.app/api';
    const [nom, setNom] = useState('');
    const [cognom1, setCognom1] = useState('');
    const [cognom2, setCognom2] = useState('');
    const [telf, setTelf] = useState('');
    const [mail, setMail] = useState('');
    const [dataNaixement, setDataNaixement] = useState('');
    const [iban, setIban] = useState('');
    const [termsAndConditions, setTermsAndConditions] = useState('');

const encryptIban = (iban) => {
    return CryptoJS.AES.encrypt(iban, passphrase).toString();
}

const validateForm = () => {
    return nom && cognom1 && dataNaixement && iban && termsAndConditions;
}

const handleSubmitPersona = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
        alert("Tots els camps obligatoris han de ser plens");
        return;
    }


    const encryptedIban = encryptIban(iban);

    const newPersona = {
        nom,
        cognom1,
        cognom2,
        telf,
        mail,
        dataNaixement,
        iban: encryptedIban,
        termsAndConditions,
    };

    try {
        const response = await axios.post(`${API_URL}/persones`, newPersona);
        console.log('New persona added:', response.data);
        setNom('');
        setCognom1('');
        setCognom2('');
        setTelf('');
        setMail('');
        setDataNaixement('');
        setIban('');
        setTermsAndConditions('');
    } catch (error) {
        console.error('Error adding Persona:', error);
    }
};

    return (
    <div>
        <h2 className="sociHeader">Fes-te Soci</h2>
        <form onSubmit={handleSubmitPersona}>
            <div className="form-group">
                
                <div className="form-row">
                    <div className="form-field half-width">
                        <label>Nom:<span className="obligatory-mark">*</span></label>
                        <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
                    </div>
                    <div className="form-field half-width">
                        <label>Data de naixement:<span className="obligatory-mark">*</span></label>
                        <input type="date" value={dataNaixement} onChange={(e) => setDataNaixement(e.target.value)} required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-field half-width">
                        <label>Cognom 1:<span className="obligatory-mark">*</span></label>
                        <input type="text" placeholder="Cognom 1" value={cognom1} onChange={(e) => setCognom1(e.target.value)} required />
                    </div>
                    <div className="form-field half-width">
                        <label>Cognom 2:</label>
                        <input type="text" placeholder="Cognom 2" value={cognom2} onChange={(e) => setCognom2(e.target.value)} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-field full-width">
                        <label>E-mail:</label>
                        <input type="email" placeholder="correu.exemple@gmail.com" value={mail} onChange={(e) => setMail(e.target.value)} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-field half-width">
                        <label>Telèfon:</label>
                        <input type="text" placeholder="+34000000000" value={telf} onChange={(e) => setTelf(e.target.value)} />
                    </div>
                    <div className="form-field half-width">
                        <label>IBAN:<span className="obligatory-mark">*</span></label>
                        <input type="text" placeholder="ES7921000813610123456789" value={iban} onChange={(e) => setIban(e.target.value)} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-field full-width">
                        <label>Termes i condicions:<span className="obligatory-mark">*</span></label>
                        <input type="checkbox" checked={termsAndConditions} onChange={(e) => setTermsAndConditions(e.target.checked)} />
                    </div>
                </div>
                
                <div>
                    <p className="terms-and-conditions">El sotasignat declara que la informació continguda en el present formulari és vertadera i correcte en tots els seus aspectes. Així mateix dona el seu consentiment perquè totes les seves dades de caràcter personal que es recullen en el present formulari només siguin emmagatzemades i utilitzades per l'Associació Els Pastorets de Girona per a fins administratius.</p> 
                    <p className="terms-and-conditions">Entenc i accepto que se'm domiciliarà la quota de soci anual al compte bancari indicat (actualment 20€).</p>
                </div>
                
                <button type="submit" disabled={!termsAndConditions} className={`submit-btn ${termsAndConditions ? 'active': ''}`}>Registrar-se</button>
            </div>
        </form>
    </div>
    );

}
export default AddPersones
























