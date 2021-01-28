import './NotFoundCard.css';

function NotFoundCard() {
    return (
        <div className="card">
            <p className="card__text-404">
                Мы не нашли подходящую пифагорову тройку. Проблема решается, увеличив лимит гипотенузы. Текующий лимит - 30000
            </p>
        </div>
    );
};

export default NotFoundCard;