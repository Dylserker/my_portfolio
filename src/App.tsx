import React from 'react';
import PixelEffect from './components/Effect/PixelEffect';
import './styles/App.css';
import Header from './components/Header/Header';
import profileImage from './assets/images/Photo_Levant_Dylan.jpg';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/ElectricBorder.css';

function App() {
    return (
        <div className="App">
            <PixelEffect />
            <Header />
            <main>
                <section id="about" className="electric-border">
                    <h2>À propos de moi</h2>
                    <About profileImage={profileImage} />
                </section>
                <section id="projects" className="electric-border">
                    <h2>Mes Projets</h2>
                    <Projects />
                </section>
                <section id="skills" className="electric-border">
                    <h2>Compétences</h2>
                    <Skills />
                </section>
                <section id="contact" className="electric-border">
                    <h2>Contact</h2>
                    <Contact />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;


