import Card from '../Card/Card';
import Algorithm from '../Algorithm/Algorithm';

function AddList() {
    const algorithm = new Algorithm(10000);
    // const addedTriangle = algorithm.addTriangles(8, 724);
    return (
        <section className="list">
            {/* <Card count="&#8470;" p="P" q="Q" k1="K1" k2="K2" gyp="GYP" />
            {array.map(({ counter, p, q, k1, k2, gyp }, i) => {
                return <Card count={counter + '.'} p={p} q={q} k1={k1} k2={k2} gyp={gyp} key={i} />;
            })} */}
        </section>
    );
};

export default AddList;