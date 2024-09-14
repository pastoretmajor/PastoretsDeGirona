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
    const [adress, setAdress] = useState('');
    const [iban, setIban] = useState('');
    const [termsAndConditions, setTermsAndConditions] = useState('');
    const [succesMessage, setSuccesMessage] = useState(' ');
    const [errorMessage, setErrorMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

const encryptIban = (iban) => {
    return CryptoJS.AES.encrypt(iban, passphrase).toString();
}

const validateForm = () => {
    return nom && cognom1 && dataNaixement && iban && termsAndConditions && adress;
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
        adress,
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
        setAdress('');
        setIban('');
        setTermsAndConditions('');
        setSuccesMessage("El registre s'ha completat amb èxit.")
        setErrorMessage('');
        setShowAlert(true);
    } catch (error) {
        console.error('Error adding Persona:', error);
        setSuccesMessage('');
        setErrorMessage("Hi ha hagut un error en l'enviament del registre. Si el problema persisteix, poseu-vos en contacte mitjançant el correu");
        setShowAlert(true);
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
                        <label>Primer Cognom:<span className="obligatory-mark">*</span></label>
                        <input type="text" placeholder="Primer Cognom" value={cognom1} onChange={(e) => setCognom1(e.target.value)} required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-field half-width">
                        <label>Segon Cognom:</label>
                        <input type="text" placeholder="Cognom 2" value={cognom2} onChange={(e) => setCognom2(e.target.value)} />
                    </div>
                    <div className="form-field half-width">
                        <label>Data de naixement:<span className="obligatory-mark">*</span></label>
                        <input type="date" value={dataNaixement} onChange={(e) => setDataNaixement(e.target.value)} required />
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
                        <input type="text" placeholder="ES7921000813610123456789" value={iban} onChange={(e) => setIban(e.target.value)} required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-field full-width">
                        <label>Adreça postal:<span className="obligatory-mark">*</span></label>
                        <input type="text" placeholder="C/ Plaça del vi, 1 - Girona" value={adress} onChange={(e) => setAdress(e.target.value)} required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-field full-width">
                        <label>Termes i condicions:<span className="obligatory-mark">*</span></label>
                        <input type="checkbox" checked={termsAndConditions} onChange={(e) => setTermsAndConditions(e.target.checked)} />
                    </div>
                </div>
                
                <div>
                    <p className="terms-and-conditions">La inscripció a aquest formulari implica el consentiment per a tractar les vostres dades personals per a la gestió de dades de l’Associació Pastorets de Girona.</p>
                    <p className="terms-and-conditions">Les vostres dades no s’utilitzaran per a finalitats diferents ni es cediran a tercers sense el vostre consentiment excepte que una norma legal ho autoritzi.</p>
                    <p className="terms-and-conditions">L’Associació Pastorets de Girona, com a Responsable del Tractament, només les conservarà el temps indispensable per a la correcta gestió d’aquesta activitat i/o mentre la vostra inscripció sigui activa.</p>
                    <p className="terms-and-conditions">Entenc i accepto que se'm domiciliarà la quota de soci anual al compte bancari indicat (actualment 20€).</p>
                    <p className="terms-and-conditions">Per a exercir el dret de cancel·lació d’aquesta inscripció, ens heu d’escriure un correu electrònic a pastoret.major@pastoretsdegirona.cat</p>
                    <p className="terms-and-conditions">En qualsevol cas, els menors de X anys no poden fer ús d'aquest servei sense autorització del pare/mare o tutor legal.</p>
                    <p className="terms-and-conditions">Encarregats del tractament de les dades: ASSOCIACIÓ PASTORETS DE GIRONA</p>
                </div>
                {showAlert && (
                    <div className="alert-container">    
                        {succesMessage && <div className="alert success">{succesMessage}</div>}
                        {errorMessage && <div className="alert error">{errorMessage}</div>}
                    </div>
                )}
                <button type="submit" disabled={!termsAndConditions} className={`submit-btn ${termsAndConditions ? 'active': ''}`}>Registrar-se</button>
            </div>
        </form>
   </div>
    );

}
export default AddPersones
