import './Calculator.css';
import CalculatorZone from '../CalculatorZone/CalculatorZone';
import CalculatorAnswer from '../CalculatorAnswer/CalculatorAnswer';
import { useState, useEffect } from 'react';

function Calculator() {

    const [triangle1, setTriangle1] = useState({});
    const [triangle2, setTriangle2] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [opened, setOpened] = useState(false);

    function onTriangle1Change(config) {
        setTriangle1(config);
    };

    function onTriangle2Change(config) {
        setTriangle2(config);
    }

    function handleSubmit() {
        setOpened(!opened);
        console.log(!opened);
    }

    useEffect(() => {
        if (triangle1.isValid && triangle2.isValid) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [triangle1, triangle2]);

    return (
        <section className="calculator">
            <div className="calculator__interface">
                <CalculatorZone onTriangleChange={onTriangle1Change} title="Первый треугольник" />
                <button className="calculator__add" disabled={!isValid} onClick={handleSubmit} >Прибавить через виета</button>
                <CalculatorZone onTriangleChange={onTriangle2Change} title="Второй треугольник" />
            </div>
            <CalculatorAnswer x1={triangle1} x2={triangle2} opened={opened} />
        </section>
    );
};

export default Calculator;