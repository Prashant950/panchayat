import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../../context/LangContext.jsx';
import { Menu, Close, Emblem, Phone, Insta, Fb } from '../ui/Icons.jsx';
import { site } from '../../data/content.js';

const links = [
  ['/', 'Home', 'मुख्य पृष्ठ'],
  ['/about', 'About', 'चिलुली परिचय'],
  ['/development', 'Development', 'ग्राम विकास'],
  ['/services', 'Services', 'जन सेवाएँ'],
  ['/gallery', 'Gallery', 'गैलरी'],
  ['/notices', 'Notices', 'सूचनाएँ'],
  ['/team', 'Leadership', 'नेतृत्व'],
  ['/contact', 'Contact', 'संपर्क']
];

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      // Always solid on non-home pages for crisp readability, or when scrolled > 30 on home
      setSolid(!isHomePage || window.scrollY > 30);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHomePage]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const label = (l) => (lang === 'hi' ? l[2] : l[1]);

  const langToggle = (
    <button
      onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wider transition-all duration-300 ${
        solid
          ? 'border border-navy/20 bg-navy/5 text-navy hover:bg-gold/20 hover:border-gold'
          : 'border border-gold/40 bg-gold/15 text-ivory hover:bg-gold hover:text-navy'
      }`}
      aria-label="Switch language / भाषा बदलें"
      title="Switch Language"
    >
      <span className={lang === 'hi' ? 'font-bold text-gold' : 'opacity-70'}>हिं</span>
      <span className="opacity-40">/</span>
      <span className={lang === 'en' ? 'font-bold text-gold' : 'opacity-70'}>EN</span>
    </button>
  );

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? 'border-b border-gold/30 bg-pearl/95 py-2.5 sm:py-3 text-navy shadow-md backdrop-blur-md'
            : 'border-b border-white/10 bg-navy/85 sm:bg-navy/70 py-3 sm:py-4 text-ivory backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo / Brand Link */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 sm:gap-3 leading-tight"
            aria-label="Gram Panchayat Chiluli Home"
          >
            <div
              className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border transition-all ${
                solid
                  ? 'border-gold bg-gold/10 text-navy group-hover:bg-gold group-hover:text-pearl'
                  : 'border-gold/50 bg-gold/15 text-gold group-hover:border-gold'
              }`}
            >
              <Emblem className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:scale-110" />
            </div>
            <div>
              <span className="block font-serif text-sm sm:text-base font-semibold tracking-[0.16em] sm:tracking-[0.2em]">
                GRAM PANCHAYAT
              </span>
              <span className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-medium tracking-[0.3em] text-gold">
                <span className="h-px w-3 sm:w-5 bg-gold" />
                CHILULI, TILOI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Active Styling */}
          <nav className="hidden items-center gap-5 xl:gap-7 text-xs font-semibold lg:flex" aria-label="Main navigation">
            {links.map((l) => (
              <NavLink
                key={l[0]}
                to={l[0]}
                className={({ isActive }) =>
                  `relative py-1 transition-all duration-200 hover:text-gold ${
                    isActive
                      ? 'text-gold font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gold'
                      : 'opacity-85 hover:opacity-100'
                  }`
                }
              >
                {label(l)}
              </NavLink>
            ))}
            <div className="ml-1 pl-3 border-l border-current/20">
              {langToggle}
            </div>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            {langToggle}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`flex h-9 w-9 items-center justify-center rounded-lg border transition ${
                solid
                  ? 'border-navy/20 text-navy hover:bg-navy/5'
                  : 'border-white/20 text-ivory hover:bg-white/10'
              }`}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-navy/95 text-ivory backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-white/15 px-6 py-4">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                <Emblem className="h-6 w-6 text-gold" />
                <div>
                  <span className="block font-serif text-sm font-semibold tracking-wider">GRAM PANCHAYAT CHILULI</span>
                  <span className="text-[10px] tracking-widest text-gold">तिलोई, अमेठी (उ.प्र.)</span>
                </div>
              </Link>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white/10"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <Close className="h-5 w-5" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <nav className="flex flex-col gap-2">
                {links.map((l, i) => (
                  <NavLink
                    key={l[0]}
                    to={l[0]}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `group flex items-center justify-between rounded-xl border p-3.5 transition ${
                        isActive
                          ? 'border-gold bg-gold/15 text-gold'
                          : 'border-white/5 bg-white/[0.03] text-ivory hover:border-gold/40 hover:bg-white/[0.08]'
                      }`
                    }
                  >
                    <div>
                      <p className="font-serif text-lg font-medium group-hover:text-gold transition">
                        {label(l)}
                      </p>
                      <p className="text-xs text-ivory/50">
                        {lang === 'hi' ? l[1] : l[2]}
                      </p>
                    </div>
                    <span className="text-gold/60 transition group-hover:translate-x-1 group-hover:text-gold">
                      →
                    </span>
                  </NavLink>
                ))}
              </nav>

              {/* Quick Helplines in Drawer */}
              <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/10 p-4">
                <p className="text-xs uppercase tracking-widest text-gold font-semibold">
                  {lang === 'hi' ? 'आपातकालीन हेल्पलाइन' : 'Emergency Helplines'}
                </p>
                <div className="mt-2.5 flex items-center gap-3">
                  <a
                    href="tel:112"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-navy px-3 py-2 text-xs font-semibold text-ivory hover:bg-navy/80"
                  >
                    <Phone className="h-3.5 w-3.5 text-gold" /> 112 आपातकाल
                  </a>
                  <a
                    href="tel:1076"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-navy px-3 py-2 text-xs font-semibold text-ivory hover:bg-navy/80"
                  >
                    <Phone className="h-3.5 w-3.5 text-gold" /> 1076 जनसुनवाई
                  </a>
                </div>
              </div>

              {/* Social Links in Drawer */}
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-ivory/70">
                <span>{lang === 'hi' ? 'सोशल मीडिया पर जुड़ें:' : 'Connect on Social:'}</span>
                <div className="flex gap-3">
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="p-1 text-gold hover:text-ivory" aria-label="Instagram">
                    <Insta className="h-5 w-5" />
                  </a>
                  <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="p-1 text-gold hover:text-ivory" aria-label="Facebook">
                    <Fb className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
