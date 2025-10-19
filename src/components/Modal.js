import React from 'react';
import './Modal.css';

function Modal({ project, onClose }) {
  if (!project) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-description">{project.description}</p>

        {/* NEW: Add buttons for links */}
        <div className="modal-links">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="modal-link-button">
            View Code on GitHub
          </a>
          {/* Only show the Live Demo button if the URL exists */}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="modal-link-button live">
              ► Live Demo
            </a>
          )}
        </div>

      </div>
    </div>
  );
}

export default Modal;
