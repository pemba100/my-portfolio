import React from "react";
import html5 from '../image/html5.png';
import css from '../image/css.png';
import bootstrap from '../image/bootstrap.png';
import tailwind from '../image/tailwind.png';
import react from '../image/react.png';
import js from '../image/js.png';
import '../pages/Skills.css';

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      description:
        "HTML5 is the latest version of the HyperText Markup Language, which is used to structure and present content on the web. It introduced new elements, attributes, and behaviors that make it easier to create modern, dynamic websites",
      img: html5,
    },
    {
      name: "CSS3",
      description:
        "CSS3 (Cascading Style Sheets, Level 3) is the latest evolution of the CSS standard, used to control the presentation and layout of web pages. It brings powerful new features and capabilities that allow developers to create visually stunning and responsive designs.",
      img: css,
    },
    {
      name: "JavaScript",
      description:
        "JavaScript (JS) is a powerful, lightweight, and versatile programming language widely used for web development. It enables developers to create interactive and dynamic web pages, making the user experience engaging and responsive.",
      img: js,
    },
    {
      name: "React",
      description:
        "React.js is a popular JavaScript library for building user interfaces, developed and maintained by Facebook. Known for its efficiency, flexibility, and component-based architecture, React simplifies the process of creating dynamic, interactive, and highly performant web applications.",
      img: react,
    },
    {
      name: "Bootstrap",
      description:
        "Bootstrap is a popular open-source front-end framework developed by Twitter, designed to simplify the process of creating responsive and mobile-first websites. It provides pre-designed components, utility classes, and a grid system that help developers build web applications quickly and efficiently.",
      img: bootstrap,
    },
    {
      name: "Tailwind",
      description:
        "Tailwind CSS is a modern utility-first CSS framework that allows developers to create custom designs directly within their HTML by using pre-defined utility classes. Unlike traditional frameworks that provide pre-designed components, Tailwind gives you the building blocks to create unique, fully responsive designs.",
      img: tailwind,
    },
  ];

  return (
    <div className="skills-container container py-5">
      <h2 className="text-center mb-4">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="card h-100 text-center shadow border-0">
              <div className="card-body">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="img-fluid mb-3"
                  style={{ maxHeight: "80px" }}
                />
                <h5 className="card-title">{skill.name}</h5>
                <p className="card-text">{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
