import React from 'react';
import './style.scss';

const App = () => {
    return (
        <div className="wrapper">
            <h1 className="hello-text">Здравствуйте! Пожалуйста, введите следующую информацию.</h1>
            <form className="form">
                <input placeholder="Имя"></input>
                <input placeholder="E-mail" type="email"></input>
                <input placeholder="Телефон"></input>
                <input placeholder="Сообщение" type="textarea"></input>
            </form>
        </div>
    );
};

export default App;
