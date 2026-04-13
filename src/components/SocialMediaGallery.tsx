import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { useContact } from '../context/ContactContext';

const SOCIAL_MEDIA_IMAGES = [
  'https://i.ibb.co/Z6kXzwn0/t-design-poster.png',
  'https://i.ibb.co/Cp3v2Vtz/messi-split.png',
  'https://i.ibb.co/LzZ5Sfk9/el-classico-matchday.png',
  'https://i.ibb.co/VYH3K9nF/POSTER-KOHLI-WO-PARTICALS.jpg',
  'https://i.ibb.co/S7yNz4bR/iwill-middle.jpg',
  'https://i.ibb.co/Ldhw06d0/goblin-matchday.png'
];

export default function SocialMediaGallery() {
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
          <span className="text-accent font-serif italic text-xl mb-4 block">/ Digital Presence</span>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">Social Media Designs</h1>
          <p className="text-2xl text-ink-muted max-w-3xl leading-relaxed font-serif italic">
            Engaging visuals designed to stop the scroll and build brand authority across all platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {SOCIAL_MEDIA_IMAGES.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500"
            >
              <img 
                src={src} 
                alt={`Social Media Design ${index + 1}`}
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center py-20 border-t border-ink/5">
          <h2 className="text-4xl md:text-6xl font-serif mb-10">Need a social boost?</h2>
          <button 
            onClick={openModal}
            className="inline-flex items-center gap-4 bg-ink text-white px-10 py-6 rounded-full text-xl font-medium hover:bg-accent hover:text-ink transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Let's Talk
          </button>
        </div>
      </div>
    </motion.div>
  );
}
