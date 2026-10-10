import { useLang } from '../../context/LangContext.jsx';
import Heading from '../ui/Heading.jsx';
import Reveal from '../ui/Reveal.jsx';
import { Arrow, Sun, Droplets, Lightbulb, Users, Building, Sparkles } from '../ui/Icons.jsx';
import { projects, projectCats } from '../../data/content.js';

export default function Projects() {
  const { lang, tr } = useLang();
  const p = projects[0];

  const catIcons = [
    Building, // Roads & public infra
    Droplets, // Drinking water & sanitation
    Sparkles, // Cleanliness & environment
    Lightbulb, // Street lighting
    Users, // Community facilities
    Sun, // Education & awareness
  ];

  return (
    <section id="development" className="relative overflow-hidden bg-navy py-20 sm:py-24 md:py-32 text-ivory">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Heading
          light
          eyebrow="Our Village, Our Progress"
          title="Progress That Makes a Difference."
          sub="विकास की हर पहल, बेहतर कल की ओर।"
        />

        <div className="mt-12 sm:mt-16 grid gap-10 lg:grid-cols-12 items-start">
          {/* Featured Project Showcase */}
          <Reveal className="lg:col-span-7 xl:col-span-8">
            <article className="group overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] p-4 sm:p-6 backdrop-blur-sm transition duration-300 hover:border-gold/50 hover:bg-white/[0.07] shadow-xl">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={p.img}
                  alt={tr(p.title)}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron px-3 py-1 text-xs font-semibold text-navy shadow">
                    <span className="h-2 w-2 rounded-full bg-navy"></span>
                    {tr(p.status)}
                  </span>
                  <span className="rounded-full bg-navy/80 px-3 py-1 text-xs font-medium text-gold backdrop-blur-md border border-gold/30">
                    {tr(p.place)}
                  </span>
                </div>
              </div>

              {/* Badges / Key highlights */}
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1 rounded-md border border-gold/30 bg-gold/10 px-2.5 py-1 text-gold">
                  ☀️ सोलर पैनल सक्षम
                </span>
                <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-ivory/80">
                  🎨 ग्रामीण चित्रकारी
                </span>
                <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-ivory/80">
                  🏛️ नागरिक संवाद बरामदा
                </span>
              </div>

              <h3 className="mt-4 flex items-center justify-between font-serif text-2xl sm:text-3xl md:text-4xl text-ivory">
                <span>{tr(p.title)}</span>
                <span className="text-gold transition-transform group-hover:translate-x-2">
                  <Arrow />
                </span>
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-ivory/80">
                {tr(p.desc)}
              </p>
            </article>
          </Reveal>

          {/* Development Focus Areas */}
          <Reveal delay={0.15} className="lg:col-span-5 xl:col-span-4">
            <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-sm shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  {lang === 'hi' ? 'प्रमुख विकास क्षेत्र' : 'Development Focus Areas'}
                </p>
                <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-medium text-gold">
                  6 Priority Sectors
                </span>
              </div>

              <ul className="mt-4 space-y-3">
                {projectCats.map((c, i) => {
                  const CatIcon = catIcons[i] || Building;
                  return (
                    <li
                      key={i}
                      className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 transition hover:border-gold/40 hover:bg-white/[0.08]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/15 text-gold group-hover:bg-gold group-hover:text-navy transition">
                          <CatIcon className="h-4 w-4" />
                        </div>
                        <span className="font-serif text-base text-ivory group-hover:text-gold transition">
                          {tr(c)}
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-ivory/50 group-hover:text-ivory/80">
                        {lang === 'hi' ? 'जल्द विवरण' : 'Details soon'}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 rounded-xl border border-white/10 bg-navy/60 p-3.5 text-xs text-ivory/70">
                <p className="flex items-start gap-2">
                  <span className="text-gold font-bold">ℹ</span>
                  <span>
                    {lang === 'hi'
                      ? 'परियोजनाएँ, पूर्णता तिथियाँ और आधिकारिक दस्तावेज़ सत्यापन उपरांत नियमित जोड़े जा रहे हैं।'
                      : 'Projects, completion timelines, and certified records are updated on verification.'}
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
