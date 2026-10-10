import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '../../context/LangContext.jsx';
import { site } from '../../data/content.js';
import { Insta, Fb, Emblem } from '../ui/Icons.jsx';

export default function Footer() {
  const { lang, tr } = useLang();
  const hi = lang === 'hi';

  const nav = [
    ['/', 'Home', 'मुख्य पृष्ठ'],
    ['/about', 'About Chiluli', 'चिलुली परिचय'],
    ['/development', 'Development & Projects', 'ग्राम विकास कार्य'],
    ['/services', 'Public Services & Schemes', 'जन सेवाएँ व योजनाएँ'],
    ['/gallery', 'Village Gallery', 'गाँव की गैलरी'],
    ['/notices', 'Notices & Bulletin', 'सूचनाएँ एवं आदेश'],
    ['/team', 'Leadership & Team', 'पंचायत प्रतिनिधि मंडल'],
    ['/contact', 'Contact & Grievance', 'नागरिक संपर्क व सुझाव']
  ];

  return (
    <footer className="relative bg-navy px-5 sm:px-8 pb-10 pt-20 text-ivory overflow-hidden">
      {/* Decorative radial ambient glow */}
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium leading-tight">
          Our Village.<br />
          Our Pride. <span className="text-gold">Our Tomorrow.</span>
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="my-10 h-px origin-left bg-gradient-to-r from-gold via-gold/50 to-transparent"
        />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Identity & Address */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-gold/15 text-gold group-hover:scale-105 transition">
                <Emblem className="h-5 w-5" />
              </div>
              <div>
                <p className="font-serif text-lg font-semibold tracking-[0.18em]">
                  GRAM PANCHAYAT
                </p>
                <p className="text-[10px] tracking-[0.35em] text-gold">
                  CHILULI, TILOI, AMETHI
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-md text-sm text-ivory/75 leading-relaxed">
              {tr(site.address)}
            </p>
            <p className="mt-2.5 max-w-md text-xs text-ivory/60 leading-relaxed">
              {hi
                ? 'साझा प्रयास, निरंतर विकास — गाँव का प्रत्येक नागरिक हमारे चिलुली की वास्तविक ताकत है।'
                : 'Shared vision, steady progress — every citizen is the foundational strength of Chiluli.'}
            </p>
            <p className="mt-3 text-xs text-gold">
              {hi ? 'वर्तमान ग्राम प्रधान' : 'Present Pradhan'}:{' '}
              <span className="text-ivory font-semibold">{tr(site.pradhan)}</span>
            </p>
          </div>

          {/* Quick Navigation with Clean URLs */}
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
              {hi ? 'पोर्टल पृष्ठ' : 'Portal Pages'}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {nav.map((n) => (
                <li key={n[0]}>
                  <Link
                    className="text-ivory/70 transition hover:text-gold hover:translate-x-1 inline-block"
                    to={n[0]}
                  >
                    {hi ? n[2] : n[1]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social and Support */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
              {hi ? 'सोशल कनेक्ट' : 'Social Channels'}
            </p>
            <div className="flex gap-3">
              <a
                aria-label="Instagram"
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-white/5 text-gold transition hover:border-gold hover:bg-gold hover:text-navy"
              >
                <Insta className="h-5 w-5" />
              </a>
              <a
                aria-label="Facebook"
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-white/5 text-gold transition hover:border-gold hover:bg-gold hover:text-navy"
              >
                <Fb className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs text-ivory/60">
              <p>📍 {hi ? 'विकास खंड: सिंहपुर | तहसील: तिलोई | जनपद: अमेठी (उत्तर प्रदेश)' : 'Block: Singhpur | Tehsil: Tiloi | District: Amethi (UP)'}</p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-ivory/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-center sm:text-left">
            {hi
              ? 'यह एक सामुदायिक सूचना पोर्टल है। सरकारी योजनाओं की आधिकारिक नियमावली हेतु संबंधित पोर्टल देखें।'
              : 'Community information portal. Refer to official government portals for statutory guidelines.'}
          </p>
          <p className="shrink-0 text-center sm:text-right">
            © {new Date().getFullYear()} Gram Panchayat Chiluli, Tiloi
          </p>
        </div>
      </div>
    </footer>
  );
}
