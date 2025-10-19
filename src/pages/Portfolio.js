import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import projectData from '../data/projects.json';
import mernAuthThumb from '../assets/mern-auth.gif';
import automationScraperThumb from '../assets/automation-scraper.gif';
import heartDiseaseThumb from '../assets/billboard-bg.gif';

const getThumbnail = (id) => {
  switch (id) {
    case 'p4': return heartDiseaseThumb;
    case 'p5': return automationScraperThumb;
    case 'p6': return mernAuthThumb;
    default: return '';
  }
};
const featuredProjects = projectData.featured.map(p => ({ ...p, thumbnailUrl: getThumbnail(p.id) })).slice(0, 3);

function Portfolio() {
  return (
    <>
      <main>
        <Hero projects={featuredProjects} />
      </main>
      <Footer />
    </>
  );
}
export default Portfolio;
