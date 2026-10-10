import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../../context/LangContext.jsx';
import Heading from '../ui/Heading.jsx';
import Reveal from '../ui/Reveal.jsx';
import { Plus, Ext, Phone, FileText, CheckCircle, ShieldCheck } from '../ui/Icons.jsx';
import { schemes, portals, helplines, docsNote } from '../../data/content.js';

export default function Services() {
  const { lang, tr } = useLang();
  const [open, setOpen] = useState('pmayg');

  return (
    <section id="services" className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24 md:py-32">
      <Heading
        eyebrow="Citizen Welfare & Rights"
        title="Know Your Schemes. Claim Your Rights."
        sub="सरकारी योजनाएँ, आधिकारिक पोर्टल एवं जन सेवाएँ"
      />

      <div className="mt-12 sm:mt-16 grid gap-12 lg:grid-cols-12 items-start">
        {/* Left Column: Schemes Accordion */}
        <div className="lg:col-span-7">
          <div className="space-y-4">
            {schemes.map((s) => {
              const on = open === s.id;
              return (
                <div
                  key={s.id}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    on
                      ? 'border-gold bg-pearl shadow-lg'
                      : 'border-navy/15 bg-white/50 hover:border-gold/50 hover:bg-pearl/80'
                  }`}
                >
                  <button
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                    aria-expanded={on}
                    onClick={() => setOpen(on ? '' : s.id)}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${
                        on ? 'bg-navy text-gold' : 'bg-sand text-navy'
                      }`}>
                        <ShieldCheck className="h-4 w-4" />
                      </span>
                      <span className="font-serif text-lg sm:text-xl text-navy font-medium">
                        {tr(s.n)}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: on ? 45 : 0 }}
                      className={`shrink-0 ml-2 rounded-full p-1 ${on ? 'bg-gold/20 text-gold' : 'text-navy/50'}`}
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

                          {/* Documents box */}
                          <div className="rounded-xl border border-gold/30 bg-gold/10 p-4">
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-navy">
                              <FileText className="h-4 w-4 text-gold" />
                              <span>{lang === 'hi' ? 'आवश्यक दस्तावेज़' : 'Required Documents'}</span>
                            </div>
                            <p className="mt-1 text-xs sm:text-sm text-ink/75 leading-relaxed">
                              {tr(docsNote)}
                            </p>
                          </div>

                          {/* Official Portal Link */}
                          <div className="pt-1">
                            <a
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-xs sm:text-sm font-semibold text-ivory transition hover:bg-gold hover:text-navy"
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

          <p className="mt-6 text-xs sm:text-sm text-ink/60">
            {lang === 'hi'
              ? '⚠️ पात्रता व स्वीकृति शासकीय नियमों पर आधारित है। यह वेबसाइट केवल सूचना प्रदाता है और कोई प्रमाण-पत्र जारी नहीं करती।'
              : '⚠️ Benefit approvals are subject to official government guidelines. This platform serves as a community guide.'}
          </p>
        </div>

        {/* Right Column: Portals & Quick Helplines */}
        <Reveal className="lg:col-span-5 space-y-8">
          {/* Helplines Box */}
          <div className="rounded-2xl border border-navy/15 bg-pearl p-6 shadow-md">
            <div className="flex items-center justify-between border-b border-navy/10 pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                {lang === 'hi' ? 'महत्वपूर्ण हेल्पलाइन नंबर' : 'Emergency & Citizen Helplines'}
              </p>
              <span className="rounded-full bg-terra/15 px-2.5 py-0.5 text-[10px] font-semibold text-terra">
                24x7 Available
              </span>
            </div>

            <ul className="mt-5 grid grid-cols-2 gap-3">
              {helplines.map(([n, l]) => (
                <li
                  key={n}
                  className="rounded-xl border border-navy/10 bg-ivory p-3.5 transition hover:border-gold hover:shadow-sm"
                >
                  <a
                    href={`tel:${n}`}
                    className="group flex flex-col items-start gap-1"
                    title={`Call ${n}`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="font-serif text-xl sm:text-2xl font-semibold text-navy group-hover:text-gold transition">
                        {n}
                      </span>
                      <Phone className="h-4 w-4 text-gold" />
                    </div>
                    <span className="text-xs font-medium text-ink/70">
                      {tr(l)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Portals Box */}
          <div className="rounded-2xl border border-navy/15 bg-pearl p-6 shadow-md">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold border-b border-navy/10 pb-4">
              {lang === 'hi' ? 'उत्तर प्रदेश व केंद्रीय पोर्टल' : 'Official Government Portals'}
            </p>

            <ul className="mt-3 divide-y divide-navy/10">
              {portals.map(([n, u]) => (
                <li key={u}>
                  <a
                    href={u}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-3.5 text-sm sm:text-base font-medium text-navy transition hover:text-terra"
                  >
                    <span className="flex items-center gap-2.5">
                      <CheckCircle className="h-4 w-4 text-gold" />
                      <span>{tr(n)}</span>
                    </span>
                    <span className="text-gold transition group-hover:translate-x-1">
                      <Ext />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
