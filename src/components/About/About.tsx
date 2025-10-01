import React from 'react';
import '../../styles/About.css';
import leftGif from '../../assets/gif/Scarlet.gif';
import rightGif from '../../assets/gif/Miku.gif';

type AboutProps = {
    profileImage: string;
};

const About: React.FC<AboutProps> = ({ profileImage }) => {
    return (
        <div className="about-section">
            <img src={leftGif} alt="Scarlet" className="about-gif" />
            <div className="about-container electric-border">
                <div className="about-content">
                    <img
                        src={profileImage}
                        alt="Portrait de Dylan Levant"
                        className="profile-image"
                    />
                    <div className="bio">
                        <p>Développeur passionné en React et JavaScript. Je crée des expériences web innovantes en combinant créativité et expertise technique.</p>
                        <p>Actuellement à la recherche d'une alternance et de nouveaux défis pour progresser.</p>
                    </div>
                </div>
            </div>
            <img src={rightGif} alt="Miku" className="about-gif" />
        </div>
    );
};

export default About;


