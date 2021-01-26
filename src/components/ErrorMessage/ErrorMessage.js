import './ErrorMessage.css';
import errorIcon from '../../images/error.png';

function ErrorMessage({ message, isHidden }) {
    return (
        <div className={`error ${!isHidden ? '' : 'error__shown'}`}>
            <img className="error__image" src={errorIcon} alt="error" />
            <p className="error__message">{message}</p>
        </div>
    );
};

export default ErrorMessage;