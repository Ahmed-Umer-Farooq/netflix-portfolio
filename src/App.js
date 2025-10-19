import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfileScreen from './components/ProfileScreen';
import Portfolio from './pages/Portfolio';
import AboutMe from './components/AboutMe';
import ProjectsPage from './pages/ProjectsPage';
import CertificatesPage from './pages/CertificatesPage';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

// A layout component to wrap pages that need a navbar
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProfileScreen />} />
          {/* All pages with a navbar are nested here */}
          <Route path="/browse" element={<MainLayout><Portfolio /></MainLayout>} />
          <Route path="/about" element={<MainLayout><AboutMe /></MainLayout>} />
          <Route path="/projects" element={<MainLayout><ProjectsPage /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/certificates" element={<MainLayout><CertificatesPage /></MainLayout>} />
          {/* Redirect any other path to the home screen */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;