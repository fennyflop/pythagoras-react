import './SuccessMessage.css';
import checkmark from '../../images/checkmark.png';
import { useState } from 'react';

function SuccessMessage({ isHidden, message }) {
    return (
        <div className={`success ${!isHidden ? 'success__shown' : ''}`}>
            <img className="success__image" src={checkmark} alt="checkmark" />
            <p className="success__message">{message}</p>
        </div>
    );
};

export default SuccessMessage;