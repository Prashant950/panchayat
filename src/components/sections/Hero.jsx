import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useLang } from '../../context/LangContext.jsx';
import { site } from '../../data/content.js';
import { Arrow, Building, Sparkles } from '../ui/Icons.jsx';

const ease = [0.22, 1, 0.36, 1];
const fade = (d) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: d, ease }
});

export default function Hero() {
  const { lang, tr } = useLang();
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-navy pt-24 pb-14 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28 text-ivory"
    >
      {/* Background Media */}
      {reduce ? (
        <img
          src="/images/hero-poster.jpg"
          alt="Panchayat Bhawan Chiluli"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 h-full w-full object-cover scale-105"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </motion.video>
      )}

      {/* Layered Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/70 to-navy/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 sm:px-8 lg:px-10">
        {/* Eyebrow Pill Badge */}
        <motion.div {...fade(0.3)} className="mb-4 sm:mb-6">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1 text-[11px] font-medium tracking-[0.25em] text-gold uppercase backdrop-blur-md shadow-sm">
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span>Chiluli</span>
            </span>
            <span className="text-ivory/50">•</span>
            <span className="text-ivory/90">Tiloi, Amethi</span>
            <span className="text-ivory/50 hidden xs:inline">•</span>
            <span className="text-gold/90 hidden xs:inline">उत्तर प्रदेश</span>
          </div>
        </motion.div>

        {/* Hero Headline */}
        <div className="max-w-4xl">
          <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.2] tracking-tight">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block text-gold"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.45, ease }}
              >
                चिलुली —
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block text-ivory drop-shadow-sm"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.65, ease }}
              >
                हमारी मिट्टी, हमारी पहचान।
              </motion.span>
            </span>
          </h1>
        </div>

        {/* Subtitle / Description */}
        <motion.div {...fade(0.9)} className="mt-4 sm:mt-6 max-w-2xl space-y-1.5">
          <p className="font-serif text-xs font-semibold uppercase tracking-[0.28em] text-gold/90">
            GRAM PANCHAYAT CHILULI, TILOI
          </p>
          <p className="text-base sm:text-lg md:text-xl font-medium text-ivory/95 leading-relaxed">
            परंपरा से जुड़ा, विकास की ओर बढ़ता हमारा गाँव।
          </p>
          <p className="text-xs sm:text-sm md:text-base text-ivory/70 tracking-wide">
            Celebrating our heritage · Building a progressive tomorrow.
          </p>
        </motion.div>

        {/* Action Buttons using clean React Router Links without # */}
        <motion.div
          {...fade(1.1)}
          className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none"
        >
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-gold via-[#c8a96e] to-gold px-7 py-3 text-sm font-semibold text-navy shadow-lg shadow-gold/25 transition-all duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-95"
          >
            <span>{lang === 'hi' ? 'गाँव के बारे में जानें' : 'Explore Our Village'}</span>
            <Arrow className="h-4 w-4" />
          </Link>
          <Link
            to="/development"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/35 bg-white/5 px-7 py-3 text-sm font-medium text-ivory backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-white/15 active:scale-95"
          >
            <span>{lang === 'hi' ? 'ग्राम विकास देखें' : 'Village Development'}</span>
          </Link>
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-6 py-3 text-sm font-medium text-gold backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-navy active:scale-95"
          >
            <span>{lang === 'hi' ? 'फोटो गैलरी' : 'Photo Gallery'}</span>
          </Link>
        </motion.div>

        {/* Pradhan Trust Card */}
        <motion.div {...fade(1.3)} className="mt-7 sm:mt-10">
          <Link to="/team" className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-navy/60 px-4 py-2.5 backdrop-blur-md shadow-inner hover:border-gold/50 transition">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/20 text-gold">
              <Building className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-gold/90">
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

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="mt-8 hidden sm:flex justify-center"
      >
        <Link
          to="/about"
          aria-label="Discover Chiluli"
          className="flex flex-col items-center gap-2 text-[10px] font-medium tracking-[0.35em] text-ivory/70 transition hover:text-gold"
        >
          <span>DISCOVER CHILULI</span>
          <motion.span
            animate={reduce ? {} : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="block h-7 w-px bg-gold"
          />
        </Link>
      </motion.div>
    </section>
  );
}
