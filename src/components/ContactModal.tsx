import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Mail, X } from 'lucide-react';
import { useContact } from '../context/ContactContext';

export default function ContactModal() {
  const { isModalOpen, closeModal } = useContact();

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-[100]"
          />
          
          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-md rounded-[32px] p-8 shadow-2xl relative pointer-events-auto overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-bg-soft transition-colors"
              >
                <X className="w-5 h-5 text-ink-muted" />
              </button>

              <div className="mb-10">
                <span className="text-accent font-serif italic text-lg mb-2 block">Connect with me</span>
                <h2 className="text-3xl font-serif">Let's build something <br /> amazing together.</h2>
              </div>

              <div className="space-y-6">
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/cravix.design16?igsh=MXB5cG8zeHpvZnQ4Mw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-bg-soft transition-all border border-transparent hover:border-ink/5"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Instagram className="w-6 h-6 text-accent group-hover:text-ink transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-0.5">Instagram</p>
                    <p className="font-medium text-lg group-hover:text-accent transition-colors">cravix.design16</p>
                  </div>
                </a>

                {/* Email */}
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-ink/5">
                  <div className="w-12 h-12 bg-ink/5 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-ink/40" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-0.5">Email</p>
                    <p className="font-medium text-lg text-ink/60">flintpc16@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-ink/5 text-center">
                <p className="text-sm text-ink-muted italic font-serif">
                  "I will make your thoughts into reality."
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
