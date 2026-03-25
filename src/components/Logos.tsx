import React from 'react';
import { LOGOS } from '../constants';

export default function Logos() {
  return (
    <section className="py-20 border-y border-ink/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 grayscale">
          {LOGOS.map((logo) => (
            <span key={logo} className="text-xl font-serif font-bold tracking-widest uppercase">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
