import React from 'react';
import './styles/App.css';
import profileImage from './assets/images/Photo_Levant_Dylan.jpg';
import Projects from './components/Projects/Projects.js';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Mon Portfolio</h1>
            </header>
            <main>
                <section id="about">
                    <h2>À propos de moi</h2>
                    <div className="about-content">
                        <img
                            src={profileImage}
                            alt="Photo de profil"
                            className="profile-image"
                        />
                        <div className="bio">
                            <p>Développeur passionné en React et JavaScript.Je crée des expériences web innovantes en combinant créativité et expertise technique.</p>
                            <p>Actuellement à la recherche d'une alternance et de nouveaux défis pour progresser.</p>
                        </div>
                    </div>
                </section>
                <section id="projects">
                    <h2>Mes Projets</h2>
                    <Projects />
                </section>
                <section id="skills">
                    <h2>Compétences</h2>
                </section>
                <section id="contact">
                    <h2>Contact</h2>
                </section>
            </main>
        </div>
    );
}

export default App;