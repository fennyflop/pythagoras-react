import './List.css';
import Card from '../Card/Card';
import Search from '../Search/Search';
import Algorithm from '../Algorithm/Algorithm';
import { useState } from 'react';

function List({ array }) {
    return (
        <>
            <Search array={array} />
            <section className="list search__result">
                <Card counter="№" p="P" q="Q" k1="K1" k2="K2" gyp="GYP" viewable={false} />
                {array.map(({ counter, p, q, k1, k2, gyp }, i) => {
                    return <Card counter={counter} p={p} q={q} k1={k1} k2={k2} gyp={gyp} key={i} viewable={true} />;
                })}
            </section>
        </>
    )
}

export default List;