import './Card.css';

function Card({ count, p, q, k1, k2, gyp }) {
    return (
        <div className="card__item">
            <p className="card__num card__count">{count}</p>
            <p className="card__num card__p">{p}</p>
            <p className="card__num card__q">{q}</p>
            <p className="card__num card__k1">{k1}</p>
            <p className="card__num card__k2">{k2}</p>
            <p className="card__num card__gyp">{gyp}</p>
            <button className="card__button">Look</button>
        </div>
    );
}

export default Card;