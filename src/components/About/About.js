import React from 'react';
import '../../styles/About.css';

const About = ({ profileImage }) => {
    return (
        <div className="about-container electric-border">
            <div className="about-content">
                <img
                    src={profileImage}
                    alt="Photo de profil"
                    className="profile-image"
                />
                <div className="bio">
                    <p>Développeur passionné en React et JavaScript. Je crée des expériences web innovantes en combinant créativité et expertise technique.</p>
                    <p>Actuellement à la recherche d'une alternance et de nouveaux défis pour progresser.</p>
                </div>
            </div>
        </div>
    );
};

export default About;