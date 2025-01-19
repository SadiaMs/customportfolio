import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Projects2 = () => {
  const projectData = [
    {
      id: 1,
      title: "Dynamic resume builder",
      description:  "A dynamic resume builder in html css typescript.",
      Image: '/Screenshot 2024-12-19 160142.png',
      link: '#',
    },
    {
      id: 2,
      title: 'Youtube Thumbnails',
      description: ' i can create Youtube thumbnail using canva.',
      Image: '/Screenshot 2025-01-01 204022.png',
      link: '#',
    },
    {
      id: 3,
      title: 'Figma templete to next js',
      description: 'I can make figma templete into next js .',
      Image: '/Screenshot 2025-01-05 215611.png',
      link: '#',
    },
   
  ];

  return (
    <section id="projects" className="projects-section">
   
      <div className="projects-grid">
        {projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <Image src={project.Image} alt={project.title} height={500} width={500} className="project-image" />
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

export default Projects2;
