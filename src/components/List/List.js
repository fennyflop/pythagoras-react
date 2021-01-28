import './List.css';
import Algorithm from '../Algorithm/Algorithm';
import Card from '../Card/Card';

function List() {

    const algorithm = new Algorithm(30000);

    const array = algorithm.renderArray();

    return (
        <section className="list">
            <Card count="&#8470;" p="P" q="Q" k1="K1" k2="K2" gyp="GYP" viewable={false} />
            {array.map(({ counter, p, q, k1, k2, gyp }, i) => {
                return <Card count={counter + '.'} p={p} q={q} k1={k1} k2={k2} gyp={gyp} key={i} viewable={true} />;
            })}
        </section>
    )
}

export default List;