import React from 'react';
import ecommerce from '../image/ecommerce.jpeg';
import pembaportfolio from '../image/pembaportfolio.JPG';

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React.js and Bootstrap.",
      image: pembaportfolio,
    },
    {
      title: "E-commerce App",
      description: "An online shopping platform.",
      image:  ecommerce ,
    },

  ];

  return (
    <section className="py-5 bg-light max-vw-100" id="projects">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projectList.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel=""
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
