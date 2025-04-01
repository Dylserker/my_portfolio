import React from 'react';
import './styles/App.css';
import profileImage from './assets/images/Photo_Levant_Dylan.jpg';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Mon Portfolio</h1>
            </header>
            <main>
                <section id="about">
                    <h2>À propos de moi</h2>
                    <About profileImage={profileImage} />
                </section>
                <section id="projects">
                    <h2>Mes Projets</h2>
                    <Projects />
                </section>
                <section id="skills">
                    <h2>Compétences</h2>
                    <Skills />
                </section>
                <section id="contact">
                    <h2>Contact</h2>
                </section>
            </main>
        </div>
    );
}

export default App;