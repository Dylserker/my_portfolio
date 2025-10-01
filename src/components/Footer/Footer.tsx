import React from 'react';
import '../../styles/Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="copyright">
                    &copy; {currentYear} Dylan Levant. Tous droits réservés.
                </div>
                <div className="social-links">
                    <a href="https://github.com/Dylserker" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


