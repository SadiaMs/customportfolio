import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Figma templete",
      description:  "A web UI design using Figma .",
      image: '/my figma.png',
      link: '#',
    },
    {
      id: 2,
      title: 'Dynamic Blog website',
      description: ' "A web application for building Dynamic blog website using TypeScript .',
      image: '/Screenshot 2025-01-13 143001.png',
      link: '#',
    },
    {
      id: 3,
      title: 'Flower Shop',
      description: 'A responsive website for a flower shop.',
      image: '/Screenshot 2025-01-13 222312.png',
      link: '#',
    },
   
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <Image src={project.image} alt={project.title} width={500} height={500} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <Link href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </Link>
            
            </div>
           
          </div>
        ))}
      </div>
    </section>
    
  );
};

export default Projects;
