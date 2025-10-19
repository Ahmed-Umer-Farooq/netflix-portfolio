import React from 'react';
import './Thumbnail.css';
import TopTenBadge from './TopTenBadge'; // Import the new badge

// We'll pass a new prop 'isTopTen'
function Thumbnail({ project, onClick, isTopTen }) {
  return (
    // The main div is now the container that will have the aspect ratio
    <div className="thumbnail" onClick={() => onClick(project)}>
      {/* Conditionally render the badge */}
      {isTopTen && <TopTenBadge />}

      <img
        src={project.thumbnailUrl}
        alt={`Thumbnail for ${project.title}`}
        className="thumbnail-image"
      />
    </div>
  );
}

export default Thumbnail;
