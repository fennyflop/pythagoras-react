import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <ul className="header__links">
                <li className="header__li">
                    <NavLink exact to="/" className="header__link" activeClassName="header__link-active">Домой</NavLink>
                </li>
                <li className="header__li">
                    <NavLink to="/calculator" className="header__link" activeClassName="header__link-active">Калькулятор</NavLink>
                </li>
                <li className="header__li">
                    <NavLink to="/table" className="header__link" activeClassName="header__link-active">Таблица</NavLink>
                </li>
                <li className="header__li">
                    <NavLink to="/blog" className="header__link" activeClassName="header__link-active">Блог</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;