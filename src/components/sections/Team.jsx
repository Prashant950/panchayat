import { useLang } from '../../context/LangContext.jsx';
import Heading from '../ui/Heading.jsx';
import Reveal from '../ui/Reveal.jsx';
import { team } from '../../data/content.js';
import { Building, ShieldCheck, Users, Phone } from '../ui/Icons.jsx';

export default function Team() {
  const { lang, tr } = useLang();

  const roleIcons = [Building, ShieldCheck, Users, Users];

  return (
    <section className="bg-sand/60 py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Heading
          eyebrow="Gram Panchayat Leadership"
          title="Working Together for Chiluli."
          sub="जनभागीदारी और समर्पित नेतृत्व से सशक्त ग्राम पंचायत।"
        />

        <div className="mt-12 space-y-4">
          {team.map(([role, name, note, phone, category, status, image], i) => {
            const IconComp = roleIcons[i] || Users;
            const isPradhan = i === 0;

            return (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className={`overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                    isPradhan
                      ? 'border-gold bg-pearl shadow-lg'
                      : 'border-navy/15 bg-white/60 hover:bg-pearl/80 hover:border-gold/40 shadow-sm'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-3.5">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl overflow-hidden ${
                          isPradhan
                            ? 'bg-navy text-gold border border-gold/40'
                            : 'bg-navy/10 text-navy'
                        }`}
                      >
                        {image ? (
                          <img src={image} alt={name ? tr(name) : ''} className="h-full w-full object-cover object-top" />
                        ) : (
                          <IconComp className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                            {tr(role)}
                          </span>
                          {isPradhan && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-800">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
                              {lang === 'hi' ? 'सक्रिय पद' : 'Current Term'}
                            </span>
                          )}
                        </div>
                        <h3
                          className={`font-serif text-2xl sm:text-3xl font-medium mt-0.5 ${
                            name ? 'text-navy' : 'text-ink/40'
                          }`}
                        >
                          {name ? tr(name) : (lang === 'hi' ? 'विवरण आधिकारिक सत्यापन उपरांत अद्यतन होगा' : 'Details will be updated post verification')}
                        </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:justify-end shrink-0">
                    {category && (
                      <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold text-navy border border-gold/30">
                        🏷️ {tr(category)}
                      </span>
                    )}
                    {phone && (
                      <a
                        href={`tel:${phone}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3.5 py-1.5 text-xs font-bold text-ivory hover:bg-gold hover:text-navy transition shadow-sm active:scale-95"
                      >
                        <Phone className="h-3 w-3 text-gold" />
                        <span>{phone}</span>
                      </a>
                    )}
                    {isPradhan && (
                      <span className="inline-block rounded-lg border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-navy">
                        ग्राम पंचायत चिलूली (तिलोई)
                      </span>
                    )}
                  </div>
                </div>

                  {note && (
                    <p className="mt-3 text-xs sm:text-sm text-ink/70 sm:ml-14">
                      {tr(note)}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
