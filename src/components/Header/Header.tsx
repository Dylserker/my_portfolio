import React from 'react';
import '../../styles/Header.css';
import logo from '../../assets/images/React_Icon.png';

type HeaderProps = {
    className?: string;
};

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
    return (
        <header className={`header ${className}`}>
            <div className="header-content">
                <div className="title-container">
                    <nav className="nav">
                        <img src={logo} alt="Logo" className="logo" />
                        <ul className="nav-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;


