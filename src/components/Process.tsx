import React from 'react';
import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      id: '01',
      title: 'Discover',
      desc: 'Understanding your goals, users, and challenges through research and strategy.'
    },
    {
      id: '02',
      title: 'Design',
      desc: 'Transforming insights into intuitive, beautiful, and functional product experiences.'
    },
    {
      id: '03',
      title: 'Deliver',
      desc: 'Testing, refining, and launching the final product with clarity and precision.'
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-ink/5 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-24">
          <span className="text-ink-muted font-serif italic text-xl mb-4 block">/ Our Projects Explained</span>
          <h2 className="text-5xl md:text-7xl font-serif">Here's how it works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-bg-soft p-10 rounded-[40px] relative group hover:bg-accent/10 transition-colors duration-500"
            >
              <span className="text-6xl font-serif font-bold text-ink/10 group-hover:text-accent/30 transition-colors mb-8 block">
                {step.id}
              </span>
              <h3 className="text-3xl font-serif mb-6">{step.title}</h3>
              <p className="text-ink-muted leading-relaxed">
                {step.desc}
              </p>
              
              {/* Connector */}
              {idx < 2 && (
                <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-accent">
                    <path d="M10 20H30M30 20L22 12M30 20L22 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
