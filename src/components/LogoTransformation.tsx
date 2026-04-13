import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LogoTransformation() {
  const [isTransformed, setIsTransformed] = useState(false);

  return (
    <section className="py-32 bg-bg-soft overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
      <div className="max-w-4xl w-full px-6 text-center">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-serif italic text-xl mb-4 block"
          >
            / The Magic of Design
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-serif">
            Where Ideas Take <span className="italic text-ink/40">Shape</span>
          </h2>
        </div>

        <div className="relative h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isTransformed ? (
              <motion.div
                key="ps-logo"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0, filter: 'blur(20px)' }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsTransformed(true)}
                className="cursor-pointer group relative"
              >
                {/* Photoshop Logo */}
                <div className="w-40 h-40 bg-[#001E36] border-[4px] border-[#31A8FF] rounded-[24px] flex items-center justify-center shadow-2xl relative z-10">
                  <span className="text-[#31A8FF] font-bold text-6xl select-none">Ps</span>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[#31A8FF]/20 blur-[40px] rounded-full group-hover:bg-[#31A8FF]/40 transition-colors" />
                
                {/* Floating Particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, i % 2 === 0 ? 10 : -10, 0],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute w-2 h-2 bg-[#31A8FF] rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                  />
                ))}

                <div className="mt-8 text-ink-muted text-sm font-medium uppercase tracking-widest animate-pulse">
                  Click to Transform
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="final-design"
                initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  duration: 0.8
                }}
                className="relative w-full max-w-2xl aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl border border-white/10"
              >
                <img 
                  src="https://i.ibb.co/Z6kXzwn0/t-design-poster.png" 
                  alt="Transformed Design"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Sparkle Effects */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      x: (Math.random() - 0.5) * 400,
                      y: (Math.random() - 0.5) * 400
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 0.2 + (i * 0.05),
                      ease: "easeOut"
                    }}
                    className="absolute top-1/2 left-1/2 w-1 h-1 bg-accent rounded-full z-20"
                  />
                ))}

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsTransformed(false);
                  }}
                  className="absolute top-6 right-6 bg-white/20 backdrop-blur-md hover:bg-white/40 p-2 rounded-full text-white transition-colors z-30"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-12">
          <p className="text-ink-muted italic font-serif text-lg max-w-xl mx-auto">
            "Turning technical tools into creative masterpieces. It's not just about the software, it's about the vision."
          </p>
        </div>
      </div>
    </section>
  );
}
