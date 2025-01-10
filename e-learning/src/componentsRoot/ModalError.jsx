import React from 'react';
import './modalError.css';

function ModalError({ subtitle, message, onClose }) {
    return (
        <>
            <div className="modal-overlay">
                <div className="modal-container">
                    <h3>{subtitle}</h3>
                    <p>{message}</p>
                    <button onClick={onClose}>Fechar</button>
                </div>
            </div>
        </>
    )
}
export default ModalError;


