import React from 'react';
import './CallButton.css'; // Asegúrate de crear este archivo CSS
import { FaPhone } from 'react-icons/fa'; // Asegúrate de tener 'react-icons' instalado

function CallButton() {
    return (
        <div className="call-button-container">
            <a href= "tel:647376782" className="call-button">
                <FaPhone className="phone-icon" />
                Llamar Ahora
            </a>
            <a href= "/contacto" className="call-button">
                <FaPhone className="phone-icon" />
                ¿Te llamamos?
            </a>
        </div>
    );
}

export default CallButton;
