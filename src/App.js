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