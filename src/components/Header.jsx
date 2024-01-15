import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Button} from './Button';
import '../assets/style.css';
import '../assets/header.css';

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
                                Company <span>Name</span>
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