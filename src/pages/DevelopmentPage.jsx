import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../context/LangContext.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import { Arrow, Sun, Droplets, Lightbulb, Users, Building, Sparkles, CheckCircle, Close } from '../components/ui/Icons.jsx';
import { projects, projectCats } from '../data/content.js';

export default function DevelopmentPage() {
  const { lang, tr } = useLang();
  const [activeModalImage, setActiveModalImage] = useState(null);

  const catIcons = [
    Building, // Roads & public infra
    Droplets, // Drinking water & sanitation
    Sparkles, // Cleanliness & environment
    Lightbulb, // Street lighting
    Users, // Community facilities
    Sun, // Education & awareness
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Page Header */}
      <section className="bg-navy py-14 sm:py-20 text-ivory relative overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-4">
            <Building className="h-3.5 w-3.5" />
            <span>Rural Infrastructure & Growth</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium leading-tight text-ivory">
            {lang === 'hi' ? 'ग्राम विकास — आत्मनिर्भर और समृद्ध चिलूली' : 'Development & Public Projects in Chiluli'}
          </h1>
          <p className="mt-3 text-sm sm:text-lg text-ivory/80 max-w-2xl leading-relaxed">
            {lang === 'hi'
              ? 'गाँव के बुनियादी ढाँचे, स्वच्छ ऊर्जा, पेयजल, स्वच्छता एवं सार्वजनिक सुविधाओं का पारदर्शी विवरण।'
              : 'Detailed review of completed public infrastructure, solar installations, drinking water pipelines, and civic initiatives.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 space-y-16">
        {/* Projects Breakdown */}
        <section className="space-y-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              {lang === 'hi' ? 'परियोजनाएँ व उपलब्धियाँ' : 'Key Projects & Achievements'}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-navy mt-1">
              {lang === 'hi' ? 'गाँव में पूर्ण व सक्रिय विकास कार्य' : 'Completed & Active Development Works'}
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {projects.map((p, idx) => (
              <Reveal key={p.id} delay={idx * 0.1} className="w-full min-w-0">
                <article className="h-full flex flex-col justify-between overflow-hidden rounded-3xl border border-navy/15 bg-pearl p-6 sm:p-8 shadow-xl transition hover:shadow-2xl">
                  <div>
                    {/* Framed White Photo */}
                    <div className="overflow-hidden rounded-2xl border-4 sm:border-6 border-pearl bg-pearl shadow-lg relative">
                      {p.images && p.images.length > 1 ? (
                        <div className="aspect-[16/10] w-full grid grid-cols-2 grid-rows-2 gap-1 sm:gap-1.5 bg-navy/20 p-1 sm:p-1.5">
                          {p.images.slice(0, 4).map((imgSrc, imgIdx) => (
                            <div
                              key={imgIdx}
                              onClick={() => setActiveModalImage({ src: imgSrc, title: tr(p.title), idx: imgIdx + 1 })}
                              className="relative h-full w-full overflow-hidden rounded-lg cursor-pointer group/subimg bg-navy/40"
                              title={lang === 'hi' ? 'बड़ा देखने के लिए क्लिक करें' : 'Click to zoom'}
                            >
                              <img
                                src={imgSrc}
                                alt={`${tr(p.title)} ${imgIdx + 1}`}
                                className="h-full w-full object-cover transition duration-500 group-hover/subimg:scale-110"
                              />
                              <div className="absolute inset-0 bg-navy/0 group-hover/subimg:bg-navy/30 transition-colors flex items-center justify-center">
                                <span className="opacity-0 group-hover/subimg:opacity-100 transition-opacity bg-navy/90 text-gold text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border border-gold/40 shadow backdrop-blur-sm">
                                  🔍 {lang === 'hi' ? 'बड़ा देखें' : 'Zoom'}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <img
                          src={p.img}
                          alt={tr(p.title)}
                          className="aspect-[16/10] w-full object-cover transition duration-700 hover:scale-105"
                        />
                      )}

                      <div className="absolute top-3 left-3 flex gap-2 pointer-events-none z-10">
                        <span className="rounded-full bg-saffron px-3 py-1 text-xs font-bold text-navy shadow">
                          {tr(p.status)}
                        </span>
                        <span className="rounded-full bg-navy/85 px-3 py-1 text-xs font-medium text-gold backdrop-blur-md border border-gold/30">
                          {tr(p.place)}
                        </span>
                      </div>

                      {p.images && p.images.length > 1 && (
                        <div className="absolute bottom-2.5 right-2.5 pointer-events-none z-10">
                          <span className="rounded-full bg-navy/90 px-2.5 py-1 text-[11px] font-semibold text-gold backdrop-blur-md border border-gold/30 shadow flex items-center gap-1">
                            📷 4 {lang === 'hi' ? 'तस्वीरें' : 'Photos'}
                          </span>
                        </div>
                      )}
                    </div>

                    <h3 className="mt-6 font-serif text-2xl sm:text-3xl font-bold text-navy">
                      {tr(p.title)}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-ink/80 leading-relaxed">
                      {tr(p.desc)}
                    </p>

                    {/* Features list */}
                    {p.features && (
                      <div className="mt-5 space-y-2 border-t border-navy/10 pt-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-gold">
                          {lang === 'hi' ? 'प्रमुख विशेषताएँ:' : 'Key Features:'}
                        </p>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-ink/75">
                          {p.features.map((feat, fidx) => (
                            <li key={fidx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                              <span>{tr(feat)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-navy/10 flex items-center justify-between text-xs text-ink/60">
                    <span>🏛️ ग्राम पंचायत चिलूली</span>
                    <span className="font-semibold text-gold">सत्यापित विकास कार्य</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Priority Focus Sectors */}
        <section className="rounded-3xl border border-navy/15 bg-sand/35 p-6 sm:p-10 shadow-lg">
          <div className="flex items-center justify-between border-b border-navy/10 pb-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                {lang === 'hi' ? 'कार्यक्षेत्र' : 'Sectors'}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy mt-1">
                {lang === 'hi' ? 'ग्राम विकास के 6 प्रमुख स्तंभ' : '6 Core Development Sectors'}
              </h3>
            </div>
            <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold hidden sm:inline-block">
              Priority Sectors
            </span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectCats.map((c, i) => {
              const CatIcon = catIcons[i] || Building;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-navy/10 bg-pearl p-5 shadow-sm transition hover:border-gold hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <CatIcon className="h-5 w-5" />
                    </div>
                    <span className="font-serif text-lg font-semibold text-navy leading-snug">
                      {tr(c)}
                    </span>
                  </div>
                  <p className="text-xs text-ink/65 leading-relaxed">
                    {lang === 'hi'
                      ? 'ग्राम सभा अनुमोदन एवं शासकीय बजट आवंटन के अनुसार कार्य योजना क्रियान्वित की जाती है।'
                      : 'Executions are carried out under Gram Sabha resolutions and state development allocations.'}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Transparency note */}
        <section className="rounded-2xl border border-gold/40 bg-pearl p-6 sm:p-8 flex items-start gap-4 shadow-md">
          <Sparkles className="h-6 w-6 text-gold shrink-0 mt-1" />
          <div className="space-y-1">
            <h4 className="font-serif text-lg font-bold text-navy">
              {lang === 'hi' ? 'पारदर्शिता एवं सामाजिक अंकेक्षण (Social Audit)' : 'Transparency & Public Verification'}
            </h4>
            <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
              {lang === 'hi'
                ? 'ग्राम पंचायत चिलूली में सभी निर्माण व मरम्मत कार्य सार्वजनिक निरीक्षण और नियमानुसार सोशल ऑडिट के अधीन हैं। नागरिक किसी भी कार्य की प्रगति की जानकारी पंचायत भवन में प्राप्त कर सकते हैं।'
                : 'All developmental initiatives in Gram Panchayat Chiluli adhere to statutory social audits and open public inspections at Panchayat Bhawan.'}
            </p>
          </div>
        </section>
      </main>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy/95 p-3 sm:p-6 backdrop-blur-sm"
            onClick={() => setActiveModalImage(null)}
          >
            <button
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-ivory hover:bg-white/30 active:scale-95 transition z-30 shadow-lg"
              aria-label="Close"
              onClick={() => setActiveModalImage(null)}
            >
              <Close className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-3xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full overflow-hidden rounded-2xl border-4 sm:border-6 border-pearl bg-pearl shadow-2xl">
                <img
                  src={activeModalImage.src}
                  alt={activeModalImage.title}
                  className="max-h-[75vh] w-full object-contain bg-navy/95"
                />
                <div className="p-4 bg-pearl flex items-center justify-between border-t border-navy/10 text-xs sm:text-sm">
                  <div className="font-serif font-bold text-navy">
                    {activeModalImage.title} {activeModalImage.idx ? `(${lang === 'hi' ? 'तस्वीर' : 'Photo'} ${activeModalImage.idx}/4)` : ''}
                  </div>
                  <button
                    onClick={() => setActiveModalImage(null)}
                    className="rounded-full bg-navy/10 px-4 py-1.5 font-semibold text-navy hover:bg-navy/20 active:scale-95 transition"
                  >
                    {lang === 'hi' ? 'बंद करें ✕' : 'Close ✕'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
