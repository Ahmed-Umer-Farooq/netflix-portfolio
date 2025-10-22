// --- src/pages/ProjectsPage.js ---

import React, { useState } from 'react';
import './ProjectsPage.css';
import '../styles/responsive.css';
import Modal from '../components/Modal';
import projectData from '../data/projects.json';

// Import your project GIFs and a placeholder
import mernAuthThumb from '../assets/mern-auth.gif';
import automationScraperThumb from '../assets/automation-scraper.gif';
import heartDiseaseThumb from '../assets/billboard-bg.gif';
import brainyThumb from '../assets/Brainy.png';
import femaThumb from '../assets/FEMA.png';
import mlbThumb from '../assets/MLB.png';
import placeholderThumb from '../assets/placeholder.png'; 

const getThumbnail = (id) => {
  switch (id) {
    case 'p4': return heartDiseaseThumb;
    case 'p5': return automationScraperThumb;
    case 'p6': return mernAuthThumb;
    case 'p7': return femaThumb;
    case 'p8': return brainyThumb;
    case 'p9': return mlbThumb;
    default: return placeholderThumb;
  }
};

const allFeaturedProjects = projectData.featured.map(p => ({ ...p, thumbnailUrl: getThumbnail(p.id) }));
const allLibraryProjects = projectData.library.map(p => ({ ...p, thumbnailUrl: getThumbnail(p.id) }));

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const renderProjectCard = (project) => (
    <div key={project.id} className="project-card" onClick={() => handleCardClick(project)}>
      <div className="card-media-wrapper">
        <img src={project.thumbnailUrl} alt={project.title} className="card-media" />
      </div>
      <div className="card-content">
        <div className="card-tags">
          {project.tags.map(tag => <span key={tag} className="card-tag">{tag}</span>)}
        </div>
        <h3 className="card-title" spellCheck="false">{project.title}</h3>
        <p className="card-description">{project.description}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="projects-page-container">
        <div className="page-container">
          <div className="page-content">
            <header className="page-header">
              <h1 className="section-title">All Projects</h1>
              <p className="section-subtitle">
                A collection of my work, from full-stack web applications to machine learning models and automation scripts.
              </p>
          </header>

          <section className="featured-section section">
            <h2 className="section-title">Featured Premieres</h2>
            <div className="projects-grid featured-grid">
              {allFeaturedProjects.map(renderProjectCard)}
            </div>
          </section>

          <section className="library-section section">
            <h2 className="section-title">Project Library</h2>
            <div className="projects-grid library-grid">
              {allLibraryProjects.map(renderProjectCard)}
            </div>
          </section>
          </div>
        </div>
      </div>

      <Modal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
}

export default ProjectsPage;