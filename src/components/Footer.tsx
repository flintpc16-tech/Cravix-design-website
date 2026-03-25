import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContact } from '../context/ContactContext';

export default function Footer() {
  const { openModal } = useContact();

  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', onClick: openModal },
  ];

  return (
    <footer id="contact" className="bg-bg-soft pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <h2 className="text-6xl md:text-9xl font-serif mb-12">
            Let's Make <br />
            It Happen
          </h2>
          <p className="text-ink-muted max-w-xl mx-auto mb-12">
            Always open to new opportunities, collaborations, and creative challenges. Let's work together to bring your ideas to life.
          </p>
          <button 
            onClick={openModal}
            className="bg-ink text-white px-12 py-6 rounded-full font-medium inline-flex items-center space-x-3 hover:bg-accent hover:text-ink transition-all duration-300 group"
          >
            <span className="text-lg">Get in Touch</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-ink/5 gap-8">
          <div className="flex space-x-10">
            {footerLinks.map(link => (
              link.href ? (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <button 
                  key={link.name} 
                  onClick={link.onClick}
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  {link.name}
                </button>
              )
            ))}
          </div>
          
          <p className="text-xs text-ink-muted">
            © 2025 Cravix. All rights reserved.
          </p>
        </div>
        
        {/* Massive Background Text */}
        <div className="mt-20 overflow-hidden pointer-events-none select-none">
          <h3 className="text-[20vw] font-serif font-bold text-ink/[0.02] leading-none whitespace-nowrap -mb-10">
            Cravix
          </h3>
        </div>
      </div>
    </footer>
  );
}
