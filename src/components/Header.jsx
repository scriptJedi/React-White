import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Button} from './Button';
import '../styles/style.css';
import '../styles/all.css';
import './header.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


library.add(faAngleDown);


const Header = () => {
        const [isMenuOpen, setMenuOpen] = useState(false);
        const toggleMenu = () => {
            setMenuOpen(!isMenuOpen);
        };
        return (
            <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className="header__container">
                    <div className="header__menu menu">
                        <div className="header__logo">
                            <a href="#">
                                <span>CompanyName</span>
                            </a>
                        </div>

                        <nav className="menu__body">
                            <ul className="menu__list">
                                <li className="menu__item"><a href="" className="menu__link">Services</a></li>
                                <li className="menu__item"><a href="" className="menu__link">Portfolio</a></li>
                                <li className="menu__item"><a href="" className="menu__link">About us</a></li>
                                <li className="menu__item"><a href="" className="menu__link">Contacts</a></li>
                            </ul>
                        </nav>

                        <div className="header__actions">
                            <Button label={'Contact us'}/>
                            <button type="button" className="menu__icon icon-menu" onClick={toggleMenu}><span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
;

export default Header;
// Header.propTypes = {
//     user: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//     }),
//     onLogin: PropTypes.func.isRequired,
//     onLogout: PropTypes.func.isRequired,
//     onCreateAccount: PropTypes.func.isRequired,
// };
//
// Header.defaultProps = {
//     user: null,
// };


// ---------------------


// <header>
//   <div className="storybook-header">
//     <div>
//       <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//         <g fill="none" fillRule="evenodd">
//           <path
//             d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
//             fill="#FFF"
//           />
//           <path
//             d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
//             fill="#555AB9"
//           />
//           <path
//             d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
//             fill="#91BAF8"
//           />
//         </g>
//       </svg>
//       <h1>Acme</h1>
//     </div>
//     <div>
//       {user ? (
//         <>
//           <span className="welcome">
//             Welcome, <b>{user.name}</b>!
//           </span>
//           <Button size="small" onClick={onLogout} label="Log out" />
//         </>
//       ) : (
//         <>
//           <Button size="small" onClick={onLogin} label="Log in" />
//           <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
//         </>
//       )}
//     </div>
//   </div>
// </header>