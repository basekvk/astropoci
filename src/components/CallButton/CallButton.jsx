import React from 'react';
import './CallButton.css'; // Asegúrate de crear este archivo CSS
import { FaPhone } from 'react-icons/fa'; // Asegúrate de tener 'react-icons' instalado

function CallButton({ phoneNumber }) {
    return (
        <div className="call-button-container">
            <a href={`tel:${phoneNumber}`} className="call-button">
                <FaPhone className="phone-icon" />
                Llama Ahora
            </a>
        </div>
    );
}

export default CallButton;
