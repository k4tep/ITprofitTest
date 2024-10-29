import React from 'react';
import './style.scss';

const Modal = ({ answer, visibe, setIsVisible }) => {
    if (visibe) {
        setInterval(() => setIsVisible(false), 10000);
    }
    return (
        <div className={visibe ? 'modal-wrapper' : 'modal-wrapper close'}>
            <h1 onClick={() => setIsVisible(false)}>x</h1>
            <div className="modal">
                <h1>{answer}</h1>
                <p>Test text</p>
            </div>
        </div>
    );
};

export default Modal;
