import React, { useState } from 'react';
import '../../styles/Header.css';
import logo from '../../assets/images/Dylserker_Logo.webp';

type HeaderProps = {
    className?: string;
};

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Fonction pour fermer le menu quand on clique sur un lien
    const handleLinkClick = () => {
        if (window.innerWidth <= 768) { // seulement pour mobile/tablette
            setIsMenuOpen(false);
        }
    };

    return (
        <header className={`header ${className}`}>
            <div className="header-content">
                <div className="title-container">
                    <img src={logo} alt="Logo" className="logo" />

                    {/* 👉 Bouton hamburger */}
                    <button 
                        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Menu de navigation */}
                    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                        <ul className="nav-links">
                            <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                            <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                            <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
                            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
