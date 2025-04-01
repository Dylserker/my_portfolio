import React from 'react';
import '../../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Portfolio React",
            description: "Portfolio personnel développé avec React et animations CSS avec un style jeux vidéo rétro.",
            tech: ["React", "CSS3", "JavaScript", "Node.js"],
            image: "portfolio.jpg",
            github: "https://github.com/Dylserker/my_portfolio",
            demo: "..."
        },
        {
            id: 2,
            title: "Exilium Carnage",
            description: "Application web pour un clan du jeux vidéo warframe permettant de gérer les membres et les événements.",
            tech: ["React", "Node.js", "MongoDB", "Typescript"],
            image: "app-web.jpg",
            github: "https://github.com/Dylserker/Exilium_Carnage_Warframe",
            demo: "..."
        }
    ];

    return (
        <div className="projects-grid">
            {projects.map(project => (
                <div key={project.id} className="project-card">
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
    );
};

export default Projects;