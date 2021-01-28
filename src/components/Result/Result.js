import './Result.css';
import Card from '../Card/Card';

function Result({ answer }) {
    const { counter, p, q, k1, k2, gyp } = answer;
    return (
        <>
            <Card counter={'№'} p={'P'} q={"Q"} k1={'K1'} k2={'K2'} gyp={'GYP'} viewable={false} />
            <Card counter={counter + '.'} p={p} q={q} k1={k1} k2={k2} gyp={gyp} viewable={true} />
        </>
    )
};

export default Result;