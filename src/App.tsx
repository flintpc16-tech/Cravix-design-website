import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTransformation from './components/LogoTransformation';
import Logos from './components/Logos';
import Philosophy from './components/Philosophy';
import Process from './components/Process';
import SelectedWorks from './components/SelectedWorks';
import About from './components/About';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import PostersGallery from './components/PostersGallery';
import SocialMediaGallery from './components/SocialMediaGallery';
import ThumbnailGallery from './components/ThumbnailGallery';
import PortfolioGallery from './components/PortfolioGallery';
import { ContactProvider } from './context/ContactContext';
import ContactModal from './components/ContactModal';

function Home() {
  return (
    <>
      <Hero />
      <LogoTransformation />
      <Logos />
      <Philosophy />
      <Process />
      <SelectedWorks />
      <About />
    </>
  );
}

export default function App() {
  return (
    <ContactProvider>
      <Router>
        <div className="selection:bg-accent selection:text-ink">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/posters" element={<PostersGallery />} />
              <Route path="/social-media" element={<SocialMediaGallery />} />
              <Route path="/thumbnails" element={<ThumbnailGallery />} />
              <Route path="/portfolio" element={<PortfolioGallery />} />
            </Routes>
          </main>
          <Footer />
          <ContactModal />
        </div>
      </Router>
    </ContactProvider>
  );
}
