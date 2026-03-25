import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

export default function SelectedWorks() {
  return (
    <section id="work" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-accent font-serif italic text-xl mb-4 block">/ Best Projects</span>
            <h2 className="text-5xl md:text-7xl font-serif">Selected Works</h2>
          </div>
          <p className="text-ink-muted max-w-sm">
            A curated selection of my favorite projects where strategy meets aesthetic excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/project/${project.id}`}>
                <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ExternalLink className="w-6 h-6 text-ink" />
                    </div>
                  </div>
                  
                  <div className="absolute top-6 left-6 flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    {project.tools.slice(0, 2).map(tool => (
                      <span key={tool} className="text-[10px] text-ink-muted border border-ink/10 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
