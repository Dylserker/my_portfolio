import React from 'react';
import '../../styles/Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", level: 85 },
                { name: "JavaScript", level: 90 },
                { name: "HTML/CSS", level: 85 },
                { name: "TypeScript", level: 75 }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", level: 75 },
                { name: "MongoDB", level: 70 },
                { name: "Express", level: 70 },
                { name: "SQL", level: 65 }
            ]
        },
        {
            title: "Outils",
            skills: [
                { name: "Git", level: 80 },
                { name: "VS Code", level: 85 },
                { name: "npm", level: 75 },
                { name: "Jest", level: 70 }
            ]
        }
    ];

    return (
        <div className="skills-container">
            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h3>{category.title}</h3>
                        <div className="skill-list">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="skill-item">
                                    <div className="skill-name">{skill.name}</div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-progress"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;