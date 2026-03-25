import React from 'react';
import { motion } from 'motion/react';
import { Layout, Youtube, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Philosophy() {
  const values = [
    { icon: Layout, title: 'Social Media Designs', color: 'bg-blue-500', href: '/social-media' },
    { icon: Youtube, title: 'Thumbnail Designs', color: 'bg-gray-500', href: '/thumbnails' },
    { icon: FileText, title: 'Posters', color: 'bg-yellow-500', href: '/posters' },
  ];

  return (
    <section className="py-32 overflow-hidden bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-ink-muted font-serif italic text-xl mb-4 block">Hello!</span>
          <h2 className="text-4xl md:text-6xl font-serif max-w-4xl mx-auto leading-tight">
            focus is on blending clear strategy, <br />
            thoughtful design, and user empathy to <br />
            <span className="text-ink/30">craft visuals that catch users' eye</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((val, idx) => {
            const Content = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-full ${val.color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform`}>
                  <val.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-center">{val.title}</span>
              </motion.div>
            );

            return val.href ? (
              <Link key={val.title} to={val.href}>
                {Content}
              </Link>
            ) : (
              <div key={val.title}>{Content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
