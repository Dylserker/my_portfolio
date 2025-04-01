import React, { useEffect, useState } from 'react';
import PixelEffect from './components/PixelEffect';
import './styles/App.css';
import Header from './components/Header/Header';
import profileImage from './assets/images/Photo_Levant_Dylan.jpg';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
    const [glitchText, setGlitchText] = useState(false);

    useEffect(() => {
        const glitchInterval = setInterval(() => {
            setGlitchText(true);
            setTimeout(() => setGlitchText(false), 200);
        }, 5000);

        return () => clearInterval(glitchInterval);
    }, []);

    return (
        <div className="App">
            <PixelEffect />
            <Header className={glitchText ? 'glitch' : ''} />
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
                    <Contact />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;