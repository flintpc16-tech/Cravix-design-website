import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { useContact } from '../context/ContactContext';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openModal } = useContact();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
        <h1 className="text-4xl font-serif mb-8">Project not found</h1>
        <Link to="/" className="text-accent flex items-center gap-2 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={() => navigate(-1)}
          className="mb-12 flex items-center gap-2 text-ink-muted hover:text-accent transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Projects</span>
        </button>

        <div className="mb-16">
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">{project.title}</h1>
          <p className="text-xl text-ink-muted max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="rounded-[40px] overflow-hidden shadow-2xl mb-20">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="text-center py-20 border-t border-ink/5">
          <h2 className="text-4xl md:text-6xl font-serif mb-10">Want yours?</h2>
          <button 
            onClick={openModal}
            className="inline-flex items-center gap-4 bg-ink text-white px-10 py-6 rounded-full text-xl font-medium hover:bg-accent hover:text-ink transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Contact Us
          </button>
        </div>
      </div>
    </motion.div>
  );
}
