import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLang } from '../../context/LangContext.jsx';
import { site } from '../../data/content.js';
import { Arrow, Building, Sparkles } from '../ui/Icons.jsx';

const ease = [0.22, 1, 0.36, 1];
const fade = (d) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: d, ease }
});

const desktopSlides = [
  {
    src: '/images/hero-aid-distribution-pradhan.jpg',
    alt: 'ग्राम प्रधान विष्णु प्रताप सिंह एवं प्रशासनिक सहयोग द्वारा राहत सामग्री वितरण'
  },
  {
    src: '/images/hero-gathering-collage.jpg',
    alt: 'चिलूली में विशाल ग्रामीण मातृशक्ति एवं जनसहभागिता'
  },
  {
    src: '/images/hero-village-pradhan-group.jpg',
    alt: 'ग्राम प्रधान विष्णु प्रताप सिंह एवं ग्रामवासी'
  }
];

const mobileSlides = [
  {
    src: '/images/hero-mobile-1.jpg',
    alt: 'ग्राम प्रधान विष्णु प्रताप सिंह द्वारा जरूरतमंदों को सहायता वितरण'
  },
  {
    src: '/images/hero-mobile-2.jpg',
    alt: 'घर-घर जाकर मातृशक्ति को उपहार व किट वितरण'
  },
  {
    src: '/images/hero-mobile-3.jpg',
    alt: 'ग्रामवासियों को बर्तन व आवश्यक सहायता वितरण'
  }
];

export default function Hero() {
  const { lang, tr } = useLang();
  const reduce = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % desktopSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reduce]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] min-h-[100dvh] w-full flex-col justify-center overflow-hidden bg-neutral-950 pt-20 pb-10 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20 text-ivory"
    >
      {/* Background Slideshow: Optimized for Desktop (landscape) & Mobile (portrait) */}
      <div className="absolute inset-0 overflow-hidden bg-neutral-950">
        <AnimatePresence mode="sync">
          <div key={currentSlide} className="absolute inset-0 h-full w-full">
            {/* Desktop / Laptop Slides */}
            <motion.img
              key={`desktop-${currentSlide}`}
              src={desktopSlides[currentSlide].src}
              alt={desktopSlides[currentSlide].alt}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="hidden sm:block absolute inset-0 h-full w-full object-cover object-center pointer-events-none"
            />

            {/* Mobile Slides (Portrait Optimized for phone screens) */}
            <motion.img
              key={`mobile-${currentSlide}`}
              src={mobileSlides[currentSlide].src}
              alt={mobileSlides[currentSlide].alt}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              className="block sm:hidden absolute inset-0 h-full w-full object-cover object-top pointer-events-none"
            />
          </div>
        </AnimatePresence>
      </div>

      {/* Pure Neutral Contrast Overlays - ZERO Blue Tint so Original Photo Colors are Vibrant & Clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-black/75 sm:from-black/70 sm:via-black/25 sm:to-black/80 pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-8 lg:px-10">
        {/* Eyebrow Pill Badge */}
        <motion.div {...fade(0.2)} className="mb-2 sm:mb-4">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 rounded-full border border-gold/40 bg-black/60 px-3 py-1 sm:px-3.5 sm:py-1 text-[10px] sm:text-[11px] font-medium tracking-[0.2em] sm:tracking-[0.25em] text-gold uppercase backdrop-blur-md shadow-sm">
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gold" />
              <span>Chiluli</span>
            </span>
            <span className="text-ivory/50">•</span>
            <span className="text-ivory/90">Tiloi, Amethi</span>
            <span className="text-ivory/50 hidden xs:inline">•</span>
            <span className="text-gold/90 hidden xs:inline">उत्तर प्रदेश</span>
          </div>
        </motion.div>

        {/* Hero Headline with crisp drop-shadow */}
        <div className="max-w-4xl">
          <h1 className="font-serif text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.2] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block text-gold"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease }}
              >
                चिलूली —
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block text-ivory"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease }}
              >
                हमारी मिट्टी, हमारी पहचान।
              </motion.span>
            </span>
          </h1>
        </div>

        {/* Subtitle / Description */}
        <motion.div {...fade(0.7)} className="mt-2 sm:mt-3.5 max-w-2xl space-y-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
          <p className="font-serif text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] sm:tracking-[0.28em] text-gold/95">
            GRAM PANCHAYAT CHILULI, TILOI
          </p>
          <p className="text-sm sm:text-lg md:text-xl font-medium text-ivory leading-relaxed">
            परंपरा से जुड़ा, विकास की ओर बढ़ता हमारा गाँव।
          </p>
          <p className="text-xs sm:text-sm md:text-base text-ivory/80 tracking-wide">
            Celebrating our heritage · Building a progressive tomorrow.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          {...fade(0.9)}
          className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-4 max-w-md sm:max-w-none"
        >
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold via-[#c8a96e] to-gold px-5 py-2 sm:px-7 sm:py-2.5 text-xs sm:text-sm font-semibold text-navy shadow-lg shadow-gold/25 transition-all duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-95"
          >
            <span>{lang === 'hi' ? 'गाँव के बारे में जानें' : 'Explore Our Village'}</span>
            <Arrow className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Link>
          <Link
            to="/development"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-ivory/40 bg-black/30 px-5 py-2 sm:px-7 sm:py-2.5 text-xs sm:text-sm font-medium text-ivory backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-black/50 active:scale-95"
          >
            <span>{lang === 'hi' ? 'ग्राम विकास देखें' : 'Village Development'}</span>
          </Link>
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-gold/50 bg-gold/15 px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-medium text-gold backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-navy active:scale-95"
          >
            <span>{lang === 'hi' ? 'फोटो गैलरी' : 'Photo Gallery'}</span>
          </Link>
        </motion.div>

        {/* Pradhan Trust Card */}
        <motion.div {...fade(1.1)} className="mt-3.5 sm:mt-6">
          <Link to="/team" className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-black/40 px-3.5 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md shadow-inner hover:border-gold/50 transition">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/20 text-gold">
              <Building className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-gold">
                {lang === 'hi' ? 'वर्तमान ग्राम प्रधान' : 'Present Gram Pradhan'}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-medium text-ivory">
                  {tr(site.pradhan)}
                </span>
                <span className="flex h-2 w-2 relative" title="Active">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator (visible on mobile & desktop) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mt-5 sm:mt-8 flex justify-center relative z-10"
      >
        <a
          href="#about"
          aria-label="Scroll to Discover Chiluli"
          className="flex flex-col items-center gap-1.5 text-[9px] sm:text-[10px] font-medium tracking-[0.3em] text-ivory/80 transition hover:text-gold active:scale-95"
        >
          <span className="font-semibold text-gold/90">
            {lang === 'hi' ? 'नीचे देखें' : 'SCROLL DOWN'}
          </span>
          <motion.span
            animate={reduce ? {} : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="block h-5 sm:h-6 w-0.5 rounded-full bg-gold"
          />
        </a>
      </motion.div>
    </section>
  );
}
