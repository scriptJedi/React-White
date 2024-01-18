import React, {useEffect} from 'react';
import Cookies from 'js-cookie';
import '../assets/Cookie.css';

const Cookie = () => {
    useEffect(() => {
        let cookieDate = localStorage.getItem("cookie-uk--cookieDate");
        let cookieNotification = document.getElementById("cookie-uk");
        setTimeout(() => {
            cookieNotification.style.display = 'block';
        }, 3000);

        if (!cookieDate || +cookieDate + 31536000000 < Date.now()) {
            cookieNotification.classList.add("show");
        }

        const handleAcceptClick = () => {
            localStorage.setItem("cookie-uk--cookieDate", Date.now());
            cookieNotification.classList.remove("show");
            Cookies.set('cookie_accept', 'true', {expires: 365});
        };

        const cookieBtn = cookieNotification.querySelector('[data-cookie-accept]');

        if (cookieBtn) {
            cookieBtn.addEventListener("click", handleAcceptClick);
        }

        return () => {
            if (cookieBtn) {
                cookieBtn.removeEventListener("click", handleAcceptClick);
            }
        };
    }, []);

    return (
        <div className="cookie-card" id="cookie-uk">
            <span className="cookie-title">🍪 Cookie Notice</span>
            <p className="cookie-description">We use cookies to ensure that we give you the best experience on our website. <a
                href="#">Read cookies policies</a>.</p>
            <div className="cookie-actions">
                <button className="cookie-pref">Manage your preferences</button>
                <button className="cookie-accept" data-cookie-accept="true">
                    Accept
                </button>
            </div>
        </div>
    );
};

export default Cookie;
