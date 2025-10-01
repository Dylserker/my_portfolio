import React from 'react';
import '../../styles/Header.css';
import leftGif from '../../assets/gif/Selena.gif';
import rightGif from '../../assets/gif/Vargas.gif';
import logo from '../../assets/images/React_Icon.png';

type HeaderProps = {
    className?: string;
};

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
    return (
        <header className={`header ${className}`}>
            <div className="header-content">
                <div className="title-container">
                    <img src={leftGif} alt="Gif gauche" className="title-gif" />
                    <nav className="nav">
                        <img src={logo} alt="Logo" className="logo" />
                        <ul className="nav-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <img src={rightGif} alt="Gif droite" className="title-gif" />
                </div>
            </div>
        </header>
    );
};

export default Header;


