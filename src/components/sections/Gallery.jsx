import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../../context/LangContext.jsx';
import Heading from '../ui/Heading.jsx';
import Reveal from '../ui/Reveal.jsx';
import { Close, Arrow, Sparkles } from '../ui/Icons.jsx';
import { gallery, galleryCats } from '../../data/content.js';

export default function Gallery() {
  const { lang, tr } = useLang();
  const [cat, setCat] = useState('');
  const [open, setOpen] = useState(null);

  const list = gallery.filter((g) => !cat || g.cat === cat);

  useEffect(() => {
    if (open === null) return;
    const k = (e) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % list.length);
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + list.length) % list.length);
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, list.length]);

  // Lock body scroll cleanly
  useEffect(() => {
    if (open !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const chip = (on) =>
    `rounded-full border px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
      on
        ? 'border-navy bg-navy text-ivory shadow-sm'
        : 'border-navy/20 bg-pearl text-ink/80 hover:border-gold hover:text-navy'
    }`;

  const cur = open !== null ? list[open] : null;

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24 md:py-32">
      <Heading
        eyebrow="Village Life & Heritage"
        title="Chiluli, Through Our Eyes."
        sub="हमारे गाँव की जीवंत झलक"
      />

      {/* Filter Chips */}
      <div className="mt-8 flex flex-wrap items-center gap-2.5">
        <button
          className={chip(!cat)}
          onClick={() => { setCat(''); setOpen(null); }}
        >
          {lang === 'hi' ? 'सभी तस्वीरें' : 'All Photos'}
        </button>
        {galleryCats.map(([k, l]) => (
          <button
            key={k}
            className={chip(cat === k)}
            onClick={() => { setCat(k); setOpen(null); }}
          >
            {tr(l)}
          </button>
        ))}
      </div>

      {/* Responsive Cards Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {list.map((g, i) => {
          const cardDelay = i < 2 ? i * 0.05 : 0;
          return (
            <Reveal key={g.id} delay={cardDelay}>
              <div className="group overflow-hidden rounded-2xl border border-navy/10 bg-pearl shadow-md transition duration-300 hover:shadow-xl">
                <button
                  onClick={() => setOpen(i)}
                  className="relative block w-full overflow-hidden text-left bg-sand/30 aspect-[16/11]"
                  aria-label={tr(g.alt)}
                >
                  <img
                    src={g.src}
                    alt={tr(g.alt)}
                    loading={i < 4 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/0 transition duration-300 group-hover:bg-navy/30 flex items-center justify-center">
                    <span className="scale-75 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100 rounded-full bg-pearl/90 p-3 text-navy shadow-lg">
                      🔍
                    </span>
                  </div>
                </button>
                <div className="p-4 sm:p-5">
                  <p className="font-serif text-base sm:text-lg text-navy font-medium">
                    {tr(g.alt)}
                  </p>
                  <p className="mt-1 text-xs text-ink/60">
                    {g.cat === 'infra' ? (lang === 'hi' ? 'अवसंरचना' : 'Infrastructure') : (lang === 'hi' ? 'ग्राम सभा एवं समुदाय' : 'Community')}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-2 rounded-xl border border-gold/30 bg-gold/5 p-3.5 text-xs text-ink/70">
        <Sparkles className="h-4 w-4 text-gold shrink-0" />
        <p>
          {lang === 'hi'
            ? 'केवल चिलूली गाँव की वास्तविक व सत्यापित तस्वीरें यहाँ प्रदर्शित की जाती हैं।'
            : 'Only authentic, verified photographs from Chiluli village are presented here.'}
        </p>
      </div>

      {/* Lightbox Modal with AnimatePresence & GPU Smoothness */}
      <AnimatePresence>
        {cur && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy/95 sm:bg-navy/90 p-4 backdrop-blur-[2px] transform-gpu will-change-[opacity]"
            onClick={() => setOpen(null)}
          >
            <button
              className="absolute right-4 top-4 sm:right-6 sm:top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-ivory hover:bg-white/30 active:scale-90 transition z-30 shadow-lg"
              aria-label="Close"
              onClick={() => setOpen(null)}
            >
              <Close className="h-5 w-5" />
            </button>
            {list.length > 1 && (
              <button
                className="absolute left-3 sm:left-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-ivory hover:bg-white/30 active:scale-90 transition rotate-180 z-30 shadow-lg"
                aria-label="Previous"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((open - 1 + list.length) % list.length);
                }}
              >
                <Arrow className="h-5 w-5" />
              </button>
            )}
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 8 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl max-h-[88vh] flex flex-col items-center transform-gpu"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-2xl border-4 sm:border-8 border-pearl bg-pearl shadow-2xl">
                <div className="relative bg-navy/20 flex items-center justify-center min-h-[220px] max-h-[72vh]">
                  <img
                    src={cur.src}
                    alt={tr(cur.alt)}
                    decoding="sync"
                    className="max-h-[72vh] max-w-full rounded-lg object-contain shadow-2xl"
                  />
                </div>
                <div className="p-4 bg-pearl text-left">
                  <p className="font-serif text-base sm:text-lg font-bold text-navy">
                    {tr(cur.alt)}
                  </p>
                  <p className="mt-1 text-xs text-gold font-medium">
                    {lang === 'hi' ? 'तस्वीर ' : 'Photo '} {open + 1} / {list.length}
                  </p>
                </div>
              </div>
            </motion.div>
            {list.length > 1 && (
              <button
                className="absolute right-3 sm:right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-ivory hover:bg-white/30 active:scale-90 transition z-30 shadow-lg"
                aria-label="Next"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((open + 1) % list.length);
                }}
              >
                <Arrow className="h-5 w-5" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
