import { useState } from 'react';
import { useLang } from '../../context/LangContext.jsx';
import Heading from '../ui/Heading.jsx';
import { notices, noticeCats } from '../../data/content.js';
import { FileText, Sparkles, Building } from '../ui/Icons.jsx';

export default function Notices() {
  const { lang, tr } = useLang();
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('');

  const list = notices
    .filter(
      (n) =>
        (!cat || n.cat === cat) &&
        (tr(n.title) + tr(n.text)).toLowerCase().includes(q.toLowerCase())
    )
    .sort((a, b) => b.date.localeCompare(a.date));

  const chip = (on) =>
    `rounded-full border px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
      on
        ? 'border-navy bg-navy text-ivory shadow-sm'
        : 'border-navy/20 bg-pearl text-ink/80 hover:border-gold hover:text-navy'
    }`;

  return (
    <section id="notices" className="bg-sand/35 py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Heading
          eyebrow="Community Bulletin"
          title="What’s Happening in Chiluli?"
          sub="ग्राम सभा, विकास एवं सार्वजनिक सूचनाएँ"
        />

        {/* Filter & Search Bar */}
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
          <div className="relative flex-1 min-w-[240px]">
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={lang === 'hi' ? 'सूचना या विषय खोजें...' : 'Search notices & topics...'}
              aria-label="Search notices"
              className="w-full rounded-full border border-navy/20 bg-pearl px-5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none shadow-sm"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button className={chip(!cat)} onClick={() => setCat('')}>
              {lang === 'hi' ? 'सभी' : 'All'}
            </button>
            {noticeCats.map(([k, l]) => (
              <button
                key={k}
                className={chip(cat === k)}
                onClick={() => setCat(k)}
              >
                {tr(l)}
              </button>
            ))}
          </div>
        </div>

        {/* Notice List or Beautiful Empty State */}
        {list.length === 0 ? (
          <div className="mt-10 overflow-hidden rounded-2xl border border-gold/40 bg-pearl p-8 sm:p-12 text-center shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold border border-gold/30">
              <FileText className="h-7 w-7" />
            </div>
            <h3 className="mt-4 font-serif text-2xl font-medium text-navy">
              {lang === 'hi' ? 'ग्राम पंचायत डिजिटल सूचना पटल' : 'Digital Notice Board'}
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-sm sm:text-base text-ink/70 leading-relaxed">
              {lang === 'hi'
                ? 'वर्तमान में कोई लंबित या आपातकालीन सूचना नहीं है। आगामी ग्राम सभा बैठक, विकास कार्य एवं कल्याणकारी योजनाओं की आधिकारिक सूचनाएँ यहाँ प्रकाशित की जाएँगी।'
                : 'No active urgent notices at present. Upcoming Gram Sabha meetings, developmental notices, and official announcements will be posted here.'}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-ivory px-4 py-1.5 text-xs text-navy font-medium">
                🏛️ बैठक स्थल: पंचायत भवन चिलूली
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-ivory px-4 py-1.5 text-xs text-navy font-medium">
                📢 सूचना प्रकार: ग्राम सभा / विकास
              </span>
            </div>
          </div>
        ) : (
          <ul className="mt-10 space-y-4">
            {list.map((n) => (
              <li
                key={n.id}
                className="overflow-hidden rounded-2xl border border-navy/15 bg-pearl p-6 shadow-sm transition hover:shadow-md md:grid md:grid-cols-12 md:gap-6 items-center"
              >
                <div className="md:col-span-3 mb-2 md:mb-0">
                  <span className="inline-block rounded-full bg-navy/10 px-3 py-1 font-mono text-xs font-semibold text-navy">
                    {n.date}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-navy">
                    {tr(n.title)}
                  </h3>
                  <p className="mt-2 text-sm text-ink/75 leading-relaxed">
                    {tr(n.text)}
                  </p>
                  {n.file && (
                    <a
                      href={n.file}
                      download
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-terra hover:underline"
                    >
                      <FileText className="h-4 w-4" />
                      <span>{lang === 'hi' ? 'दस्तावेज़ डाउनलोड करें (PDF)' : 'Download Document (PDF)'}</span>
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
