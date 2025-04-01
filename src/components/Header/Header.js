import React from 'react';
import '../../styles/Header.css';
import leftGif from '../../assets/gif/Selena.gif';
import rightGif from '../../assets/gif/Vargas.gif';

const Header = ({ className }) => {
    return (
        <header className={`header ${className}`}>
            <div className="header-content">
                <div className="title-container">
                    <img src={leftGif} alt="Gif gauche" className="title-gif" />
                    <h1>Portfolio de Levant Dylan</h1>
                    <img src={rightGif} alt="Gif droite" className="title-gif" />
                </div>
            </div>
        </header>
    );
};

export default Header;