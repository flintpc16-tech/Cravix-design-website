import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Mail } from 'lucide-react';

function InteractiveEyes() {
  return (
    <div className="flex gap-8">
      {[0, 1].map((i) => (
        <div key={i} className="relative w-32 h-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Eye Shape / Sclera */}
            <motion.path
              d="M 10 50 Q 50 10 90 50 Q 50 90 10 50"
              fill="white"
              stroke="#141414"
              strokeWidth="2"
              variants={{
                initial: { opacity: 0 },
                hover: { opacity: 1 }
              }}
            />
            
            {/* Pupil */}
            <motion.circle
              cx="50"
              cy="50"
              r="15"
              fill="#141414"
              variants={{
                initial: { opacity: 0, scale: 0 },
                hover: { opacity: 1, scale: 1 }
              }}
              transition={{ delay: 0.1 }}
            />

            {/* Top Eyelid */}
            <motion.path
              variants={{
                initial: { d: "M 10 50 Q 50 50 90 50" },
                hover: { d: "M 10 50 Q 50 10 90 50" }
              }}
              fill="none"
              stroke="#141414"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Bottom Eyelid */}
            <motion.path
              variants={{
                initial: { d: "M 10 50 Q 50 50 90 50" },
                hover: { d: "M 10 50 Q 50 90 90 50" }
              }}
              fill="none"
              stroke="#141414"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-ink-muted font-serif italic text-xl mb-4 block">/ Who Am I</span>
          <h2 className="text-5xl md:text-7xl font-serif">
            Designing with <span className="text-ink/30">purpose and precision</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <motion.div 
              whileHover="hover"
              whileTap="hover"
              initial="initial"
              className="aspect-[4/3] rounded-[40px] bg-bg-soft flex items-center justify-center relative overflow-hidden group cursor-pointer"
            >
              {/* Background Glow */}
              <motion.div
                variants={{
                  initial: { opacity: 0, scale: 0.8 },
                  hover: { opacity: 1, scale: 1.2 }
                }}
                className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full"
              />
              
              <div className="z-10">
                <InteractiveEyes />
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-bold uppercase tracking-widest text-ink">Visionary Design</span>
              </div>
            </motion.div>
            
            <div className="flex space-x-6">
              {[
                { Icon: Instagram, href: 'https://www.instagram.com/cravix.design16?igsh=MXB5cG8zeHpvZnQ4Mw%3D%3D&utm_source=qr' },
                { Icon: Mail, href: 'mailto:flintpc16@gmail.com' }
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-ink/10 hover:bg-accent hover:border-accent transition-all">
                  <item.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            <div className="max-w-xl">
              <p className="text-xl text-ink-muted leading-relaxed mb-8">
                I’m a creative designer passionate about shaping digital experiences that feel effortless and intuitive. I work closely with startups to bring ideas to life—transforming concepts into functional, user-focused products by combining design thinking, visual clarity, and a deep understanding of user behavior.
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-serif italic text-ink-muted">tools i can use -</h3>
              <div className="flex gap-8 items-center">
                {/* Photoshop */}
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-[#001E36] border-2 border-[#31A8FF] rounded-xl flex items-center justify-center shadow-xl group cursor-pointer"
                >
                  <span className="text-[#31A8FF] font-bold text-2xl group-hover:text-white transition-colors">Ps</span>
                </motion.div>
                
                {/* Canva */}
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#00C4CC] to-[#7D2AE8] rounded-full flex items-center justify-center shadow-xl cursor-pointer"
                >
                  <span className="text-white font-bold text-2xl">C</span>
                </motion.div>
                
                {/* Lightroom */}
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-[#001E36] border-2 border-[#31A8FF] rounded-xl flex items-center justify-center shadow-xl group cursor-pointer"
                >
                  <span className="text-[#31A8FF] font-bold text-2xl group-hover:text-white transition-colors">Lr</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
