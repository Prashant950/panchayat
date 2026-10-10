import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../context/LangContext.jsx';
import { Plus, Ext, Phone, FileText, CheckCircle, ShieldCheck, Sparkles } from '../components/ui/Icons.jsx';
import { schemes, portals, helplines, docsNote } from '../data/content.js';
import CyberAlert from '../components/common/CyberAlert.jsx';

export default function ServicesPage() {
  const { lang, tr } = useLang();
  const [open, setOpen] = useState('pmayg');

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-navy py-14 sm:py-20 text-ivory relative overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-4">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Citizen Rights & Schemes</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium leading-tight text-ivory">
            {lang === 'hi' ? 'जन सेवाएँ, योजनाएँ एवं हेल्पलाइन' : 'Citizen Welfare, Schemes & Helplines'}
          </h1>
          <p className="mt-3 text-sm sm:text-lg text-ivory/80 max-w-2xl leading-relaxed">
            {lang === 'hi'
              ? 'आवास, मनरेगा, पेयजल, पेंशन व खाद्य सुरक्षा योजनाओं की विस्तृत जानकारी, आधिकारिक पोर्टल एवं 24x7 हेल्पलाइन।'
              : 'Complete guidance on housing, employment, tap water, pensions, and food security schemes with official direct portal access.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 space-y-16">
        {/* Urgent Cyber Crime Warning */}
        <CyberAlert />

        {/* Helplines Grid - Top Priority for Citizens */}
        <section className="rounded-3xl border border-navy/15 bg-pearl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-navy/10 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                {lang === 'hi' ? 'आपातकालीन सहायता' : 'Emergency & Citizen Help'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mt-1">
                {lang === 'hi' ? 'महत्वपूर्ण हेल्पलाइन नंबर (एक टैप में कॉल करें)' : 'Essential Citizen Helplines'}
              </h2>
            </div>
            <span className="self-start sm:self-auto rounded-full bg-terra/15 px-3 py-1 text-xs font-bold text-terra">
              24x7 Toll-Free
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {helplines.map(([n, l]) => {
              const isCyber = n === '1930';
              return (
                <a
                  key={n}
                  href={`tel:${n}`}
                  className={`group flex flex-col justify-between rounded-2xl p-4 transition-all hover:shadow-lg hover:-translate-y-1 ${
                    isCyber
                      ? 'border-2 border-red-500 bg-red-50/80 shadow-md ring-2 ring-red-400/30'
                      : 'border border-navy/10 bg-ivory hover:border-gold'
                  }`}
                  title={`Call ${n}`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-serif text-2xl sm:text-3xl font-bold transition ${
                      isCyber ? 'text-red-700' : 'text-navy group-hover:text-gold'
                    }`}>
                      {n}
                    </span>
                    <Phone className={`h-4 w-4 ${isCyber ? 'text-red-600 animate-bounce' : 'text-gold'}`} />
                  </div>
                  <span className={`mt-2 text-xs font-semibold leading-tight ${
                    isCyber ? 'text-red-800' : 'text-ink/75'
                  }`}>
                    {tr(l)} {isCyber && '🚨'}
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        {/* Schemes Accordion Section */}
        <section className="grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                {lang === 'hi' ? 'कल्याणकारी योजनाएँ' : 'Welfare Schemes'}
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy mt-1">
                {lang === 'hi' ? 'प्रमुख शासकीय योजनाएँ एवं पात्रता' : 'Government Welfare Schemes & Eligibility'}
              </h2>
            </div>

            <div className="pt-4 space-y-4">
              {schemes.map((s) => {
                const on = open === s.id;
                return (
                  <div
                    key={s.id}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      on
                        ? 'border-gold bg-pearl shadow-lg'
                        : 'border-navy/15 bg-white/60 hover:border-gold/50 hover:bg-pearl/80'
                    }`}
                  >
                    <button
                      className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                      aria-expanded={on}
                      onClick={() => setOpen(on ? '' : s.id)}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                          on ? 'bg-navy text-gold' : 'bg-sand text-navy'
                        }`}>
                          <ShieldCheck className="h-4 w-4" />
                        </span>
                        <span className="font-serif text-lg sm:text-xl text-navy font-bold">
                          {tr(s.n)}
                        </span>
                      </div>
                      <motion.span
                        animate={{ rotate: on ? 45 : 0 }}
                        className={`shrink-0 ml-2 rounded-full p-1.5 ${on ? 'bg-gold/20 text-gold' : 'text-navy/50'}`}
                      >
                        <Plus className="h-5 w-5" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {on && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-gold/20 px-5 sm:px-6 pb-6 pt-4 space-y-4">
                            <p className="text-sm sm:text-base leading-relaxed text-ink/80">
                              {tr(s.a)}
                            </p>

                            {/* Eligibility Box */}
                            {s.eligibility && (
                              <div className="rounded-xl border border-navy/15 bg-sand/30 p-3.5 text-xs sm:text-sm text-ink/80">
                                <b className="text-navy">{lang === 'hi' ? 'पात्रता मानदंड: ' : 'Eligibility Criteria: '}</b>
                                <span>{tr(s.eligibility)}</span>
                              </div>
                            )}

                            {/* Documents Guide */}
                            <div className="rounded-xl border border-gold/30 bg-gold/10 p-4">
                              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy">
                                <FileText className="h-4 w-4 text-gold" />
                                <span>{lang === 'hi' ? 'सामान्य आवश्यक दस्तावेज़' : 'Standard Documents'}</span>
                              </div>
                              <p className="mt-1 text-xs sm:text-sm text-ink/75 leading-relaxed">
                                {tr(docsNote)}
                              </p>
                            </div>

                            {/* Portal Button */}
                            <div className="pt-1">
                              <a
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-xs sm:text-sm font-semibold text-ivory hover:bg-gold hover:text-navy transition shadow"
                              >
                                <span>{lang === 'hi' ? 'आधिकारिक पोर्टल पर जाएँ' : 'Visit Official Portal'}</span>
                                <Ext className="h-4 w-4" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Official Portals Directory */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-navy/15 bg-pearl p-6 sm:p-8 shadow-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                {lang === 'hi' ? 'डिजिटल भारत व उ.प्र. पोर्टल' : 'Government Portals'}
              </span>
              <h3 className="font-serif text-2xl font-bold text-navy mt-1 border-b border-navy/10 pb-4">
                {lang === 'hi' ? 'सीधे आधिकारिक सरकारी लिंक' : 'Direct Official Web Portals'}
              </h3>

              <ul className="mt-4 divide-y divide-navy/10">
                {portals.map(([n, u]) => (
                  <li key={u}>
                    <a
                      href={u}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-3.5 text-sm sm:text-base font-semibold text-navy hover:text-terra transition"
                    >
                      <span className="flex items-center gap-2.5">
                        <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                        <span>{tr(n)}</span>
                      </span>
                      <span className="text-gold group-hover:translate-x-1 transition">
                        <Ext className="h-4 w-4" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-gold/30 bg-gold/10 p-3.5 text-xs text-ink/75">
                <p>
                  {lang === 'hi'
                    ? '💡 राशन कार्ड, खतौनी अथवा किसी भी समस्या हेतु जनसुनवाई IGRS पोर्टल पर ऑनलाइन शिकायत दर्ज की जा सकती है।'
                    : '💡 Online grievances related to rations, land records, or civic amenities can be registered on Jansunwai IGRS.'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
