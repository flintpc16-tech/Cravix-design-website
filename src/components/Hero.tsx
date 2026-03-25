import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useContact } from '../context/ContactContext';

export default function Hero() {
  const { openModal } = useContact();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wider">Available for new opportunities</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8">
            Hi I'm Cravix <br />
            <span className="italic text-ink/40">Graphic</span> Designer
          </h1>
          
          <p className="text-lg text-ink-muted max-w-md mb-10 leading-relaxed">
            Passionate about creating intuitive digital experiences that connect users with value through thoughtful design and strategy.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={openModal}
              className="bg-ink text-white px-8 py-4 rounded-full font-medium flex items-center space-x-2 hover:bg-accent hover:text-ink transition-all duration-300 group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex -space-x-3 items-center ml-4">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?u=${i}`} 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white"
                  referrerPolicy="no-referrer"
                />
              ))}
              <span className="ml-6 text-xs font-medium text-ink-muted">
                Trusted by many happy clients
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden relative group">
            <img 
              src="https://i.ibb.co/KzFX6LWJ/IMG-6621.png" 
              alt="Cravix" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-soft/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-bg-soft"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
                <span className="font-serif font-bold text-xl">3+</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-tighter">Years</p>
                <p className="text-sm font-serif italic">Experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
