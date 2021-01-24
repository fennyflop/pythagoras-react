import './Calculator.css';
import SuccessMessage from '../SuccessMessage/SuccessMessage'
import CalculatorZone from '../CalculatorZone/CalculatorZone';

function Calculator() {
    return (
        <section className="calculator">
            <div className="calculator__interface">
                <CalculatorZone title="Первый треугольник" />
                <p className="calculator__name">Прибавить через виета</p>
                <CalculatorZone title="Второй треугольник" />
            </div>
        </section>
    );
};

export default Calculator;