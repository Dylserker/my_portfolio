import React from 'react';
import './styles/App.css';

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
                            src="votre-photo.jpg"
                            alt="Photo de profil"
                            className="profile-image"
                        />
                        <div className="bio">
                            <p>Développeur passionné spécialisé en React et JavaScript. Je crée des expériences web innovantes en combinant créativité et expertise technique.</p>
                            <p>Actuellement à la recherche de nouveaux défis passionnants dans le développement web moderne.</p>
                        </div>
                    </div>
                </section>
                <section id="projects">
                    <h2>Mes Projets</h2>
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