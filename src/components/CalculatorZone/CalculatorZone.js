import './CalculatorZone.css';
import SuccessMessage from '../SuccessMessage/SuccessMessage';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Canvas from '../Canvas/Canvas';
import { useState, useEffect } from 'react';

function CalculatorZone({ title, onTriangleChange }) {

    const [k1, setK1] = useState(2);
    const [k2, setK2] = useState(2);
    const [gyp, setGyp] = useState(2);

    function handleK1(evt) {
        setK1(evt.target.value);
    };

    function handleK2(evt) {
        setK2(evt.target.value);
    };

    function handleGyp(evt) {
        setGyp(evt.target.value);
    };

    useEffect(() => {
        onTriangleChange({
            k1: +k1,
            k2: +k2,
            gyp: +gyp,
            isValid: (Number(k1) ** 2 + Number(k2) ** 2 == Number(gyp) ** 2 && Number(k1) != '' && Number(k2) != '' && Number(gyp) != ''),
        })
    }, [k1, k2, gyp])

    return (
        <div className="calculator__zone">
            <p className="calculator__title">{title}</p>
            <fieldset className="calculator__fieldset">
                <input type="number" className="calculator__input" placeholder="Катет" onChange={handleK1} />
                <input type="number" className="calculator__input" placeholder="Катет" onChange={handleK2} />
                <input type="number" className="calculator__input" placeholder="Гипотенуза" onChange={handleGyp} />
            </fieldset>
            <SuccessMessage message="Ваш треугольник был проверен напиши тестами!" isHidden={!(Number(k1) ** 2 + Number(k2) ** 2 == Number(gyp) ** 2 && Number(k1) != '' && Number(k2) != '' && Number(gyp) != '')} />
            <ErrorMessage message="Ваш треугольник не подходит" isHidden={!(Number(k1) ** 2 + Number(k2) ** 2 == Number(gyp) ** 2) || Number(k1) == '' || Number(k2) == '' || Number(gyp) == ''} />
            <div className={`canvas ${!(Number(k1) ** 2 + Number(k2) ** 2 == Number(gyp) ** 2 && Number(k1) != '' && Number(k2) != '' && Number(gyp) != '') ? 'canvas-none' : ''}`}>
                <p className="canvas__value k1">{k1}</p>
                <p className="canvas__value k2">{k2}</p>
                <p className="canvas__value gyp">{gyp}</p>
                <Canvas width="400" height="400" k1={k1} k2={k2} gyp={gyp} />
            </div>
        </div>
    );
}

export default CalculatorZone;