import './CalculatorZone.css';
import SuccessMessage from '../SuccessMessage/SuccessMessage';
import { useState, useEffect } from 'react';

function CalculatorZone({ title }) {

    const [k1, setK1] = useState(1);
    const [k2, setK2] = useState(1);
    const [gyp, setGyp] = useState(1);

    function handleK1(evt) {
        setK1(evt.target.value);
    };

    function handleK2(evt) {
        setK2(evt.target.value);
    };

    function handleGyp(evt) {
        setGyp(evt.target.value);
    };

    return (
        <div className="calculator__zone">
            <p className="calculator__title">{title}</p>
            <fieldset className="calculator__fieldset">
                <input type="number" className="calculator__input" placeholder="Катет" onChange={handleK1} />
                <input type="number" className="calculator__input" placeholder="Катет" onChange={handleK2} />
                <input type="number" className="calculator__input" placeholder="Гипотенуза" onChange={handleGyp} />
            </fieldset>
            <SuccessMessage message="Ваш треугольник был проверен напиши тестами!" isHidden={!(k1 ** 2 + k2 ** 2 == gyp ** 2)} />
        </div>
    );
}

export default CalculatorZone;