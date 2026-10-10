import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../context/LangContext.jsx';
import Heading from '../components/ui/Heading.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import { Close, Arrow, Sparkles, Building, Users, ShieldCheck } from '../components/ui/Icons.jsx';
import { gallery, galleryCats, site } from '../data/content.js';

export default function GalleryPage() {
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

  const chip = (on) =>
    `rounded-full border px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
      on
        ? 'border-navy bg-navy text-ivory shadow-md scale-105'
        : 'border-navy/20 bg-pearl text-ink/80 hover:border-gold hover:text-navy hover:bg-gold/10'
    }`;

  const cur = open !== null ? list[open] : null;

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Page Header */}
      <section className="bg-navy py-14 sm:py-20 text-ivory relative overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Official Photo Gallery</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium leading-tight text-ivory">
            {lang === 'hi' ? 'चिलूली — जीवंत स्मृतियाँ एवं जनकल्याण' : 'Chiluli — Authentic Moments & Welfare'}
          </h1>
          <p className="mt-3 text-sm sm:text-lg text-ivory/80 max-w-2xl leading-relaxed">
            {lang === 'hi'
              ? 'ग्राम पंचायत चिलूली में आयोजित जनकल्याणकारी कार्यक्रमों, राहत वितरण, ग्राम सभा बैठकों और पंचायत भवन की वास्तविक तस्वीरें।'
              : 'Authentic moments from community welfare distributions, Gram Sabha gatherings, and infrastructure in Gram Panchayat Chiluli.'}
          </p>
        </div>
      </section>

      {/* Main Gallery Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pb-6 border-b border-navy/10">
          <button
            className={chip(!cat)}
            onClick={() => { setCat(''); setOpen(null); }}
          >
            {lang === 'hi' ? `सभी तस्वीरें (${gallery.length})` : `All Photos (${gallery.length})`}
          </button>
          {galleryCats.map(([k, l]) => (
            <button
              key={k}
              className={chip(cat === k)}
              onClick={() => { setCat(k); setOpen(null); }}
            >
              {tr(l)} ({gallery.filter((g) => g.cat === k).length})
            </button>
          ))}
        </div>

        {/* Gallery Grid with Framed White/Pearl Borders */}
        <div className="mt-10 grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {list.map((g, i) => (
            <Reveal key={g.id} delay={i * 0.08} className="w-full min-w-0">
              {/* White Framed Card exactly as requested */}
              <figure className="group overflow-hidden rounded-2xl border-4 sm:border-8 border-pearl bg-pearl shadow-xl hover:shadow-2xl transition-all duration-300">
                <button
                  onClick={() => setOpen(i)}
                  className="relative block w-full overflow-hidden text-left cursor-pointer"
                  aria-label={tr(g.alt)}
                >
                  <img
                    src={g.src}
                    alt={tr(g.alt)}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  {/* Category Pill on Image */}
                  <div className="absolute top-3 left-3 rounded-full bg-navy/85 px-3 py-1 text-[10px] font-semibold text-gold backdrop-blur-md border border-gold/40 shadow">
                    {g.cat === 'welfare' && '🤝 जनकल्याण व सहायता'}
                    {g.cat === 'community' && '👥 ग्राम सभा व समुदाय'}
                    {g.cat === 'infra' && '🏛️ पंचायत अवसंरचना'}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-navy/0 transition duration-300 group-hover:bg-navy/35 flex items-center justify-center">
                    <span className="scale-75 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100 rounded-full bg-pearl/95 px-4 py-2 text-xs font-bold text-navy shadow-lg flex items-center gap-1.5">
                      <span>🔍</span>
                      <span>{lang === 'hi' ? 'बड़ा देखें' : 'View Full'}</span>
                    </span>
                  </div>
                </button>

                {/* Caption Details */}
                <figcaption className="p-4 sm:p-5 bg-pearl">
                  <h3 className="font-serif text-base sm:text-lg text-navy font-semibold leading-snug">
                    {tr(g.alt)}
                  </h3>
                  {g.desc && (
                    <p className="mt-2 text-xs sm:text-sm text-ink/75 leading-relaxed">
                      {tr(g.desc)}
                    </p>
                  )}
                  <div className="mt-3 flex items-center justify-between text-[11px] text-ink/50 pt-2 border-t border-navy/10">
                    <span>📍 {lang === 'hi' ? 'चिलूली, तिलोई (अमेठी)' : 'Chiluli, Tiloi (Amethi)'}</span>
                    <span className="font-medium text-gold font-serif">Gram Panchayat</span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Verification Banner */}
        <div className="mt-14 rounded-2xl border border-gold/30 bg-pearl p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="font-serif text-lg font-medium text-navy">
                {lang === 'hi' ? 'सत्यापित फोटोग्राफिक अभिलेख' : 'Verified Photographic Documentation'}
              </p>
              <p className="text-xs text-ink/70">
                {lang === 'hi'
                  ? 'सभी तस्वीरें ग्राम पंचायत चिलूली में आयोजित वास्तविक कार्यक्रमों व स्थलों की हैं।'
                  : 'All photographs represent genuine events, distributions, and public assets in Chiluli.'}
              </p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/chiluli_tiloi_amethi_2022?cplk=Y3dqdXRmN3JhZjUx"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-xs font-semibold text-ivory hover:bg-gold hover:text-navy transition shadow"
          >
            <span>{lang === 'hi' ? 'इंस्टाग्राम पर और देखें' : 'View More on Instagram'}</span>
            <span>→</span>
          </a>
        </div>
      </main>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {cur && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy/95 p-4 backdrop-blur-md"
            onClick={() => setOpen(null)}
          >
            {/* Close button */}
            <button
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-ivory hover:bg-white/20 transition z-10"
              aria-label="Close"
              onClick={() => setOpen(null)}
            >
              <Close className="h-6 w-6" />
            </button>

            {/* Prev button */}
            {list.length > 1 && (
              <button
                className="absolute left-4 sm:left-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-ivory hover:bg-white/20 transition rotate-180 z-10"
                aria-label="Previous"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((open - 1 + list.length) % list.length);
                }}
              >
                <Arrow className="h-6 w-6" />
              </button>
            )}

            {/* Modal Content with White Frame */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-4xl max-h-[90vh] flex flex-col items-center overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden rounded-2xl border-4 sm:border-8 border-pearl bg-pearl shadow-2xl">
                <img
                  src={cur.src}
                  alt={tr(cur.alt)}
                  className="max-h-[68vh] w-auto max-w-full object-contain"
                />
                <div className="p-4 sm:p-5 bg-pearl text-left">
                  <p className="font-serif text-lg sm:text-xl font-bold text-navy">
                    {tr(cur.alt)}
                  </p>
                  {cur.desc && (
                    <p className="mt-1.5 text-xs sm:text-sm text-ink/75 leading-relaxed">
                      {tr(cur.desc)}
                    </p>
                  )}
                  <p className="mt-2 text-xs text-gold font-medium">
                    {lang === 'hi' ? 'तस्वीर ' : 'Photo '} {open + 1} / {list.length}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Next button */}
            {list.length > 1 && (
              <button
                className="absolute right-4 sm:right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-ivory hover:bg-white/20 transition z-10"
                aria-label="Next"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((open + 1) % list.length);
                }}
              >
                <Arrow className="h-6 w-6" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
