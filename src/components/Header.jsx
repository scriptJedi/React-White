import React, {useState, useEffect} from 'react';
import {Button} from './Button';
import '../assets/styles/App.css';
import '../assets/styles/Header.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDown);

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolling, setScrolling] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const stickyHeader = document.getElementById('sticky-header');

        if (stickyHeader) {
            const scrollFunction = () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                setScrolling(scrollTop > 50);

                if (scrollTop > 200 && isScrolling) {
                    stickyHeader.classList.add('reveal-header');
                } else {
                    stickyHeader.classList.remove('reveal-header');
                }
            };

            window.addEventListener('scroll', scrollFunction);
            window.addEventListener('load', scrollFunction);

            return () => {
                window.removeEventListener('scroll', scrollFunction);
                window.removeEventListener('load', scrollFunction);
            };
        }
    }, [isScrolling]);

    useEffect(() => {
        const handleBodyOverflow = () => {
            if (isMenuOpen) {
                document.documentElement.classList.add('lock');
            } else {
                document.documentElement.classList.remove('lock');
            }
        };

        handleBodyOverflow();

        return () => {
            document.documentElement.classList.remove('lock');
        };
    }, [isMenuOpen]);

    return (
        <header className={`header ${isMenuOpen ? 'menu-open' : ''} ${isScrolling ? 'scrolling reveal-header' : ''}`}
                id="sticky-header">
            <div className="container">
                <div className="header__menu menu">
                    <div className="header__logo">
                        <a href="#">
                            Company <span>Name</span>
                        </a>
                    </div>

                    <nav className="menu__body">
                        <ul className="menu__list">
                            <li className="menu__item link-hover"><a href="" className="menu__link">Services</a></li>
                            <li className="menu__item link-hover"><a href="" className="menu__link">Portfolio</a></li>
                            <li className="menu__item link-hover"><a href="" className="menu__link">About us</a></li>
                            <li className="menu__item link-hover"><a href="" className="menu__link">Contacts</a></li>
                        </ul>
                    </nav>

                    <div className="header__actions">
                        <Button mode={'primary'} label={'Contact us'}/>
                        {/*<Button mode={'secondary'} label={'Contact us'}/>*/}
                        <button type="button" className="menu__icon icon-menu" onClick={toggleMenu}><span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
