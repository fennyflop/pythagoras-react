import './Search.css';
import Card from '../Card/Card';
import { useState } from 'react';

function Search({ array }) {

    const [searchResults, setSearchResults] = useState([]);
    const [search, setSearch] = useState('');
    const [resultsHidden, setResultsHidden] = useState(true);

    function handleSearchBar(evt) {
        setSearch(Number(evt.target.value));
    };

    function handleSearch(evt) {
        setSearchResults([]);
        setResultsHidden(false);
        evt.preventDefault();
        array.forEach((triangle) => {
            if (search === triangle.counter || search === triangle.k1 || search === triangle.k2 || search === triangle.gyp) {
                setSearchResults(searchResults => [...searchResults, triangle]);
            };
        })
    }

    return (
        <>
            <section className="search">
                <form className="search__form" onSubmit={handleSearch} >
                    <input className="search__input" type="number" placeholder="Найти треугольник" onChange={handleSearchBar} />
                    <button type="submit" className="search__submit">Найти</button>
                </form>
                <section className={`list search__result ${resultsHidden ? 'search__result-hidden' : ''}`}>
                    <Card counter="№" p="P" q="Q" k1="K1" k2="K2" gyp="GYP" viewable={false} />
                    {searchResults.map(({ counter, p, q, k1, k2, gyp }, i) => {
                        return <Card counter={counter} p={p} q={q} k1={k1} k2={k2} gyp={gyp} key={i} viewable={true} />;
                    })}
                </section>
            </section>
        </>
    );
};

export default Search;