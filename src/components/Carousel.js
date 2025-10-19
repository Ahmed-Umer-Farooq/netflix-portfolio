import React from 'react';
import Thumbnail from './Thumbnail';
import './Carousel.css';
import { useInView } from 'react-intersection-observer'; // Import the hook

// Accept 'onThumbnailClick' as a prop
function Carousel({ title, projects, onThumbnailClick }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation only happens once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  return (
    // Add the 'ref' and a conditional class to the container
    <div
      ref={ref}
      className={`carousel-container ${inView ? 'is-visible' : ''}`}
    >
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-thumbnails">
        {projects.map(project => (
          <Thumbnail
            key={project.id}
            project={project}
            // Pass the click handler to each thumbnail
            onClick={onThumbnailClick}
            isTopTen={project.isTopTen} // Pass the new prop
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
