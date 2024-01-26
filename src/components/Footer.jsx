// src/components/Footer.js
import React from 'react';

import '../assets/Styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer__wrapper">
                    <span className="footer__copy">2024 CompanyName</span>
                    <a>
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
