import Canvas from '../Canvas/Canvas';
import './Card.css';
import SuccessMessage from '../SuccessMessage/SuccessMessage';
import { useState } from 'react';

function Card({ counter, p, q, k1, k2, gyp, viewable }) {

    const [isMainOpened, setIsMainOpened] = useState(false);

    return (
        <section className="card">
            <header className="card__header">
                <p className="card__num">{counter}.</p>
                <p className="card__num">{p || 1}</p>
                <p className="card__num">{q || 1}</p>
                <p className="card__num">{k1 || 1}</p>
                <p className="card__num">{k2 || 1}</p>
                <p className="card__num">{gyp || 1}</p>
                <button onClick={() => {
                    setIsMainOpened(!isMainOpened);
                }} className="card__view" disabled={!viewable}>+</button>
            </header>
            <div className={`card__main ${isMainOpened ? '' : 'card__main-hidden'}`}>
                <div className="card__data">
                    <p className="card__num">Порядковый номер : {counter || 2}</p>
                    <p className="card__num">Показатель P : {p || 1}</p>
                    <p className="card__num">Показатель Q : {q || 1}</p>
                    <p className="card__num">Первый катет : {k1}</p>
                    <p className="card__num">Второй катет : {k2}</p>
                    <p className="card__num">Гипотенуза : {gyp}</p>
                    <SuccessMessage message="Треугольник был проверен напиши тестами!" isHidden={false} />
                </div>
                <div className="card__canvas">
                    <Canvas width="400" height="400" k1={k1} k2={k2} gyp={gyp} />
                </div>
            </div>
        </section>
    );
}

export default Card;