import './CalculatorAnswer.css';
import Algorithm from '../Algorithm/Algorithm';
import Card from '../Card/Card';
import { useState, useEffect } from 'react';

function CalculatorAnswer({ x1, x2, opened }) {

    const [answer, setAnswer] = useState({
        k1: 2,
        k2: 2,
        gyp: 2,
    });

    const algorithm = new Algorithm(30000);
    const array = algorithm.renderArray();

    let possibleAnswers = [];

    function findAns(a, b, c, w, v, u) {
        const ans = {};
        ans.gyp = c * w;
        ans.k2 = b * u + a * v;
        ans.k1 = Math.abs(a * u - b * v);
        return ans;
    };

    useEffect(() => {
        (function () {
            const { gyp: c, k2: a, k1: b } = x1;
            const { gyp: w, k2: v, k1: u } = x2;
            const ans = findAns(a, b, c, w, v, u);
            possibleAnswers.push(ans);
        })();
        (function () {
            const { gyp: c, k2: b, k1: a } = x1;
            const { gyp: w, k2: v, k1: u } = x2;
            const ans = findAns(a, b, c, w, v, u);
            possibleAnswers.push(ans);
        })();
        (function () {
            const { gyp: c, k2: a, k1: b } = x1;
            const { gyp: w, k2: u, k1: v } = x2;
            const ans = findAns(a, b, c, w, v, u);
            possibleAnswers.push(ans);
        })();
        (function () {
            const { gyp: c, k2: b, k1: a } = x1;
            const { gyp: w, k2: u, k1: v } = x2;
            const ans = findAns(a, b, c, w, v, u);
            possibleAnswers.push(ans);
        })();
        possibleAnswers.forEach(({ k1, k2, gyp }) => {
            const triangle = array.find((e) => {
                return e.gyp === gyp && e.k1 === k1 && e.k2 === k2;
            });
            if (triangle) {
                setAnswer(triangle);
                console.log(triangle);
            };
        });
    }, [opened]);

    return (
        <div className={`calculator__answer ${opened ? '' : 'calculator__answer-hidden'}`}>
            <Card counter={'№'} p={'P'} q={"Q"} k1={'K1'} k2={'K2'} gyp={'GYP'} viewable={false} />
            <Card counter={answer.counter} p={answer.p} q={answer.q} k1={answer.k1} k2={answer.k2} gyp={answer.gyp} viewable={true} />
        </div>
    );
};

export default CalculatorAnswer;