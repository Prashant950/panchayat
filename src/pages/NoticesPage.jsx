import { useState } from 'react';
import { useLang } from '../context/LangContext.jsx';
import { notices, noticeCats } from '../data/content.js';
import { FileText, Sparkles, Building, Calendar, CheckCircle } from '../components/ui/Icons.jsx';
import CyberAlert from '../components/common/CyberAlert.jsx';

export default function NoticesPage() {
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
    `rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
      on
        ? 'border-navy bg-navy text-ivory shadow-sm'
        : 'border-navy/20 bg-pearl text-ink/80 hover:border-gold hover:text-navy'
    }`;

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-navy py-14 sm:py-20 text-ivory relative overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-4">
            <FileText className="h-3.5 w-3.5" />
            <span>Official Announcements</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium leading-tight text-ivory">
            {lang === 'hi' ? 'सूचना पटल एवं सार्वजनिक आदेश' : 'Digital Notice Board & Announcements'}
          </h1>
          <p className="mt-3 text-sm sm:text-lg text-ivory/80 max-w-2xl leading-relaxed">
            {lang === 'hi'
              ? 'ग्राम सभा बैठकों, विकास योजनाओं के अनुमोदन एवं नागरिक कल्याण से जुड़ी आधिकारिक सूचनाएँ।'
              : 'Official publications, meeting notices, beneficiary surveys, and administrative directives of Gram Panchayat Chiluli.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 space-y-10">
        {/* Urgent Cyber Crime Warning */}
        <CyberAlert />

        {/* Search & Filter Toolbar */}
        <div className="rounded-2xl border border-navy/15 bg-pearl p-4 sm:p-6 shadow-md flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
          <div className="relative flex-1 min-w-[240px]">
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={lang === 'hi' ? 'सूचना का विषय या शब्द खोजें...' : 'Search notices & topics...'}
              aria-label="Search notices"
              className="w-full rounded-full border border-navy/20 bg-ivory px-5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none shadow-inner"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button className={chip(!cat)} onClick={() => setCat('')}>
              {lang === 'hi' ? 'सभी सूचनाएँ' : 'All Notices'}
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

        {/* Notices Cards List */}
        {list.length > 0 ? (
          <div className="space-y-4">
            {list.map((n) => (
              <article
                key={n.id}
                className="overflow-hidden rounded-2xl border border-navy/15 bg-pearl p-6 sm:p-7 shadow-md transition hover:shadow-lg hover:border-gold"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-navy/10 pb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/10 px-3 py-1 font-mono text-xs font-bold text-navy">
                    <span>📅</span>
                    <span>{n.date}</span>
                  </span>
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                    {n.cat === 'gramSabha' && '📢 ग्राम सभा बैठक'}
                    {n.cat === 'scheme' && '📋 योजना सर्वेक्षण'}
                    {n.cat === 'development' && '🏗️ विकास कार्य'}
                    {n.cat === 'deadline' && '⏰ समय-सीमा'}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-xl sm:text-2xl font-bold text-navy">
                  {tr(n.title)}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-ink/80 leading-relaxed">
                  {tr(n.text)}
                </p>

                <div className="mt-5 flex items-center justify-between pt-3 border-t border-navy/10 text-xs text-ink/60">
                  <span>📍 स्थल: पंचायत भवन चिलूली</span>
                  <span className="text-emerald-700 font-semibold">● सत्यापित सूचना</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gold/60 bg-pearl p-10 text-center">
            <p className="text-sm sm:text-base text-ink/70">
              {lang === 'hi'
                ? 'खोजे गए शब्दों से संबंधित कोई सूचना नहीं मिली।'
                : 'No notices matched your search query.'}
            </p>
          </div>
        )}

        {/* Gram Sabha Guideline Card */}
        <section className="rounded-3xl border border-gold/30 bg-pearl p-6 sm:p-8 shadow-lg">
          <div className="flex items-center gap-2.5 mb-3">
            <Building className="h-5 w-5 text-gold" />
            <h3 className="font-serif text-xl font-bold text-navy">
              {lang === 'hi' ? 'ग्राम सभा में नागरिक सहभागिता के नियम' : 'Gram Sabha Citizen Participation Guidelines'}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
            {lang === 'hi'
              ? 'ग्राम पंचायत चिलूली के प्रत्येक 18 वर्ष या उससे अधिक आयु के पंजीकृत मतदाता को ग्राम सभा की खुली बैठक में भाग लेने, अपने विचार रखने और विकास कार्यों पर प्रश्न पूछने का संवैधानिक अधिकार है। बैठकों का आयोजन पूर्व सूचना देकर पंचायत भवन पर किया जाता है।'
              : 'Every registered voter aged 18 or above has the democratic right to attend open Gram Sabha proceedings, present viewpoints, and participate in developmental resolutions.'}
          </p>
        </section>
      </main>
    </div>
  );
}
