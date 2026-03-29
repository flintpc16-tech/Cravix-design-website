import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { useContact } from '../context/ContactContext';

const PORTFOLIO_IMAGES = [
  'https://i.ibb.co/Cp3v2Vtz/messi-split.png',
  'https://i.ibb.co/LzZ5Sfk9/el-classico-matchday.png',
  'https://i.ibb.co/VYH3K9nF/POSTER-KOHLI-WO-PARTICALS.jpg',
  'https://i.ibb.co/S7yNz4bR/iwill-middle.jpg',
  'https://i.ibb.co/LXBpQDFX/snax-thumbnail.png',
  'https://i.ibb.co/p6qw4SZ6/documentary-thumbnail.png',
  'https://i.ibb.co/MDwppF17/flayer-w-cc.png',
  'https://i.ibb.co/RT5HK6V4/skincare-w-text.png',
  'https://i.ibb.co/5WkfnvdN/jordan.png',
  'https://i.ibb.co/s9HHB71g/PERFUME.png',
  'https://i.ibb.co/Ldhw06d0/goblin-matchday.png'
];

export default function PortfolioGallery() {
  const navigate = useNavigate();
  const { openModal } = useContact();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <span className="text-sm font-medium">Back</span>
        </button>

        <div className="mb-20">
          <span className="text-accent font-serif italic text-xl mb-4 block">/ Full Showcase</span>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">Portfolio</h1>
          <p className="text-2xl text-ink-muted max-w-3xl leading-relaxed font-serif italic">
            A comprehensive collection of my creative works across branding, social media, and digital design.
          </p>
        </div>

        {/* Masonry-style layout to preserve original aspect ratios */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mb-20">
          {PORTFOLIO_IMAGES.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <img 
                src={src} 
                alt={`Portfolio Item ${index + 1}`}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center py-20 border-t border-ink/5">
          <h2 className="text-4xl md:text-6xl font-serif mb-10">Ready to start?</h2>
          <button 
            onClick={openModal}
            className="inline-flex items-center gap-4 bg-ink text-white px-10 py-6 rounded-full text-xl font-medium hover:bg-accent hover:text-ink transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Contact Me
          </button>
        </div>
      </div>
    </motion.div>
  );
}
