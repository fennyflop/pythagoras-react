import './Spinner.css';
import spinner from '../../images/spinner.gif';
function Spinner() {
    return (
        <section className="spinner">
            <img className="spinner__image" src={spinner} alt="spinner" />
        </section>
    );
};

export default Spinner;