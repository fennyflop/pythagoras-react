import './Calculator.css';
import CalculatorZone from '../CalculatorZone/CalculatorZone';
import { useState, useEffect } from 'react';

function Calculator() {

    const [triangle1, setTriangle1] = useState({});
    const [triangle2, setTriangle2] = useState({});

    function onTriangle1Change(config) {
        setTriangle1(config);
    };

    function onTriangle2Change(config) {
        setTriangle2(config);
    }

    useEffect(() => {
        console.log(triangle2, triangle1)
    }, [triangle1, triangle2])

    return (
        <section className="calculator">
            <div className="calculator__interface">
                <CalculatorZone onTriangleChange={onTriangle1Change} title="Первый треугольник" />
                <p className="calculator__name">Прибавить через виета</p>
                <CalculatorZone onTriangleChange={onTriangle2Change} title="Второй треугольник" />
            </div>
        </section>
    );
};

export default Calculator;