import {useState, useEffect} from 'react';
import {Button} from './Button';
import '../assets/styles/App.css';
import '../assets/styles/Header.css';

const Header = ({scrollToForm, companyName, menuItems}) => {
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
                            {companyName}
                        </a>
                    </div>

                    <nav className="menu__body">
                        <ul className="menu__list">
                            {menuItems.map((menuItem) => (
                                <li key={menuItem} className="menu__item link-hover">
                                    <a href={`#${menuItem}`} className="menu__link">
                                        {menuItem}
                                    </a>
                                </li>
                            ))}
                            <li key="testimonials" className="menu__item link-hover">
                                <a href={"#testimonials"} className="menu__link">
                                    testimonials
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__actions">
                        <Button mode={'primary'} label={'Contact us'} onClick={scrollToForm}/>
                        <button type="button" className="menu__icon icon-menu" onClick={toggleMenu}><span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
