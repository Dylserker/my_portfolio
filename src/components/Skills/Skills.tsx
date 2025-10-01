import React from 'react';
import leftGif from '../../assets/gif/Sefia.gif';
import rightGif from '../../assets/gif/Magress.gif';
import '../../styles/Skills.css';

type Skill = { name: string; level: number };
type SkillCategory = { title: string; skills: Skill[] };

const Skills: React.FC = () => {
    const skillCategories: SkillCategory[] = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', level: 85 },
                { name: 'JavaScript', level: 90 },
                { name: 'HTML/CSS', level: 85 },
                { name: 'TypeScript', level: 75 }
            ]
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', level: 75 },
                { name: 'MongoDB', level: 70 },
                { name: 'Express', level: 70 },
                { name: 'SQL', level: 65 }
            ]
        },
        {
            title: 'Outils',
            skills: [
                { name: 'Git', level: 80 },
                { name: 'VS Code', level: 85 },
                { name: 'Npm', level: 75 },
                { name: 'Jet Brain', level: 70 }
            ]
        }
    ];

    return (
        <div className="skills-container">
            <img src={leftGif} alt="Sefia" className="skills-gif" />
            <div className="skills-content">
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category electric-border">
                            <h3>{category.title}</h3>
                            <div className="skill-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-name">{skill.name}</div>
                                        <div className="skill-bar-container">
                                            <div className="skill-bar">
                                                <div
                                                    className="skill-progress"
                                                    style={{ width: `${skill.level}%` }}
                                                />
                                            </div>
                                            <div className="skill-level">Lv {skill.level}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img src={rightGif} alt="Magress" className="skills-gif" />
        </div>
    );
};

export default Skills;


