// src/components/Footer.js
import React from 'react';

import '../assets/styles/Footer.css';

const Footer = ({companyName}) => {
    return (
        <footer>
            <div className="container">
                <div className="footer__wrapper">
                    <span className="footer__copy">2024 {companyName}</span>
                    <a>
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
