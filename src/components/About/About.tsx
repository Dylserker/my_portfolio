import React from 'react';
import '../../styles/About.css';

type AboutProps = {
    profileImage: string;
};

const About: React.FC<AboutProps> = ({ profileImage }) => {
    return (
        <div className="about-section">
            <div className="about-container electric-border">
                <div className="about-content">
                    <img
                        src={profileImage}
                        alt="Portrait de Dylan Levant"
                        className="profile-image"
                    />
                    <div className="bio">
                        <p>Développeur passionné en React et JavaScript. Je crée des expériences web innovantes en combinant créativité et expertise technique.</p>
                        <p>Actuellement en alternance chez LSDH en tant que développeur fonctionnel. J'apprend le WinDev et l'Angular</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;


