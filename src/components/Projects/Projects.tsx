import React, { useRef } from 'react';
import '../../styles/Projects.css';
import reactIcon from '../../assets/images/React_Icon.webp';
import Dylserker from '../../assets/images/Dylserker_Logo.webp';
import Carole from '../../assets/images/Carole.webp';
import Focus from '../../assets/images/Focus_Carot.webp';
import Eco from '../../assets/images/Ministere.webp';

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
            image: Dylserker,
            github: 'https://github.com/Dylserker/my_portfolio',
            demo: '...'
        },
        {
            id: 2,
            title: 'Vitrine_Carole',
            description: "Site en ligne pour une assistante maternelle agréer sur Riom.",
            tech: ['React', 'Node.js'],
            image: Carole,
            github: 'https://github.com/Dylserker/Vitrine_Carole',
            demo: 'https://carole-levant.vercel.app/'
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
            image: Focus,
            github: 'https://github.com/Dylserker/focus-carot-web',
            demo: '...'
        },
        {
            id: 5,
            title: 'Num_eco_eval',
            description: "Site pour le minièstre de la transition écologique.",
            tech: ['React', 'Tailwind', 'JavaScript', 'TypeScript', 'Nest.js'],
            image: Eco,
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
                    <div
                        key={project.id}
                        className="project-card electric-border"
                    >
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
                                {project.demo && project.demo !== '...'
                                    ? (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">Démo</a>
                                      )
                                    : (
                                        <span className="link-disabled" aria-disabled="true" title="Démo indisponible">
                                            Démo
                                        </span>
                                      )}
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


