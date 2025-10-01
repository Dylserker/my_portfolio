import React, { useRef } from 'react';
import '../../styles/Projects.css';
import emblemeEC from '../../assets/images/Embleme_ec.png';
import reactIcon from '../../assets/images/React_Icon.png';

type Project = {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
    github: string;
    demo: string;
};

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: 'Portfolio React',
            description: 'Portfolio personnel développé avec React et animations CSS avec un style jeux vidéo rétro.',
            tech: ['React', 'CSS3', 'JavaScript', 'Node.js', 'TypeScript'],
            image: reactIcon,
            github: 'https://github.com/Dylserker/my_portfolio',
            demo: '...'
        },
        {
            id: 2,
            title: 'Exilium Carnage',
            description: "Application web pour un clan du jeux vidéo warframe permettant de gérer les membres et les événements.",
            tech: ['React', 'Node.js', 'MongoDB', 'Typescript'],
            image: emblemeEC,
            github: 'https://github.com/Dylserker/Exilium_Carnage_Warframe',
            demo: '...'
        },
        {
            id: 3,
            title: 'MUD_Coda',
            description: "Jeux vidéo en terminal fait en PHP. Dans le cadre d'une mini game jam en équipe.",
            tech: ['Php', 'Vendor', 'MongoDB'],
            image: reactIcon,
            github: 'https://github.com/Dylserker/MUD_Coda',
            demo: '...'
        },
        {
            id: 4,
            title: 'Focus_Carot',
            description: "Site pour aider les TDAH et TSA dans leur quotidien.",
            tech: ['React', 'Tailwind', 'JavaScript', 'TypeScript', 'Php', 'Vendor', 'MongoDB'],
            image: reactIcon,
            github: 'https://github.com/Dylserker/focus-carot-web',
            demo: '...'
        },
        {
            id: 5,
            title: 'Num_eco_eval',
            description: "Site pour le minièstre de la transition écologique.",
            tech: ['React', 'Tailwind', 'JavaScript', 'TypeScript', 'Nest.js'],
            image: reactIcon,
            github: 'https://github.com/Dylserker/numecoeval',
            demo: '...'
        }
    ];

    const trackRef = useRef<HTMLDivElement | null>(null);

    const scrollByAmount = (amount: number) => {
        if (trackRef.current) {
            trackRef.current.scrollBy({ left: amount, behavior: 'smooth' });
        }
    };

    return (
        <div className="projects-carousel">
            <button
                aria-label="Précédent"
                className="carousel-btn prev"
                onClick={() => scrollByAmount(-400)}
            >
                ◀
            </button>
            <div className="projects-track" ref={trackRef}>
                {projects.map((project) => (
                    <div key={project.id} className="project-card electric-border">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">Démo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                aria-label="Suivant"
                className="carousel-btn next"
                onClick={() => scrollByAmount(400)}
            >
                ▶
            </button>
        </div>
    );
};

export default Projects;


