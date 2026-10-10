import { useLang } from '../../context/LangContext.jsx';
import Reveal, { Mask } from '../ui/Reveal.jsx';
import { facts, tbu, pending } from '../../data/content.js';
import { MapPin, Building, ShieldCheck, Sparkles } from '../ui/Icons.jsx';

export default function Discover() {
  const { lang, tr } = useLang();

  const p = lang === 'hi'
    ? [
        'चिलूली उत्तर प्रदेश के जनपद अमेठी की तिलोई तहसील में, विकास खंड सिंहपुर के अंतर्गत एक ऐतिहासिक व जीवंत गाँव है। ग्राम पंचायत का भवन — गाँव के दृश्यों से सजी दीवारों और खुले बरामदे के साथ — ग्रामवासियों और पंचायत के बीच विचार-विमर्श व संवाद का प्रमुख केंद्र है।',
        'यह पोर्टल गाँव की पहचान, विकास कार्यों, सरकारी योजनाओं और आवश्यक सार्वजनिक सूचनाओं को एक सुलभ मंच पर लाने का निरंतर सामुदायिक प्रयास है।'
      ]
    : [
        'Chiluli is a vibrant village situated in Tiloi tehsil of Amethi district, Uttar Pradesh, within the Singhpur Development Block. The Gram Panchayat Bhawan — characterized by cultural village wall murals and a spacious verandah — serves as the community hub for civic dialogue and progress.',
        'This community portal brings together authentic village identity, development projects, welfare schemes, and public notices in a single transparent location.'
      ];

  const factIcons = [Building, MapPin, MapPin, ShieldCheck];

  return (
    <>
      <section id="about" className="relative w-full max-w-full overflow-hidden mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 lg:grid-cols-12">
        {/* Text Column */}
        <div className="lg:col-span-5 min-w-0">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Chiluli · Tiloi · Amethi
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.12] text-navy">
              A Village With Roots. A Future With Vision.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 font-serif text-xl sm:text-2xl text-terra font-medium">
              अपना चिलुली, अपनी पहचान।
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-ink/80">
            {p.map((x, i) => (
              <p key={i}>{x}</p>
            ))}
          </Reveal>
          <Reveal delay={0.25} className="mt-7 flex flex-wrap gap-2 text-xs">
            <span className="rounded-lg border border-navy/15 bg-sand/40 px-3 py-1.5 font-medium text-navy">
              📍 ब्लॉक: सिंहपुर
            </span>
            <span className="rounded-lg border border-navy/15 bg-sand/40 px-3 py-1.5 font-medium text-navy">
              🏛️ तहसील: तिलोई
            </span>
            <span className="rounded-lg border border-navy/15 bg-sand/40 px-3 py-1.5 font-medium text-navy">
              🌟 जनपद: अमेठी
            </span>
          </Reveal>
        </div>

        {/* Visual / Image Column */}
        <div className="relative lg:col-span-7 min-w-0">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            {/* Primary Arch Image */}
            <Mask className="overflow-hidden rounded-t-[80px] sm:rounded-t-[120px] rounded-b-2xl border-4 border-pearl shadow-2xl">
              <img
                src="/images/panchayat-bhawan.jpg"
                alt={tr({ en: 'Panchayat Bhawan Chiluli with painted walls', hi: 'चित्रकारी से सजा पंचायत भवन चिलूली' })}
                className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
                loading="lazy"
              />
            </Mask>

            {/* Image Caption Pill */}
            <div className="absolute top-4 right-4 rounded-full bg-navy/85 px-3.5 py-1 text-[11px] font-medium text-ivory backdrop-blur-md border border-gold/40 shadow">
              पंचायत भवन, चिलूली
            </div>

            {/* Overlapping Community Photo */}
            <Reveal delay={0.3} className="relative mt-4 sm:absolute sm:-bottom-8 sm:-left-6 md:-left-10 w-full sm:w-2/3">
              <figure className="overflow-hidden rounded-xl border-4 sm:border-8 border-pearl bg-pearl shadow-xl">
                <img
                  src="/images/gram-sabha-program.jpg"
                  alt={tr({ en: 'Community gathering at Panchayat Bhawan Chiluli', hi: 'पंचायत भवन चिलूली पर ग्रामवासी' })}
                  className="aspect-[16/9] w-full object-cover transition duration-700 hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="bg-pearl px-3 py-2 text-center text-xs font-medium text-ink/70">
                  {lang === 'hi' ? 'सामुदायिक जनसंवाद एवं ग्राम सभा कार्यक्रम' : 'Community Gram Sabha Gathering'}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Highlights Dashboard Grid */}
      <section className="w-full max-w-full overflow-hidden border-y border-gold/30 bg-pearl/90 shadow-sm" aria-label="Village highlights">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Key Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/25">
            {facts.map(([k, v], i) => {
              const IconComp = factIcons[i] || Building;
              return (
                <Reveal key={i} delay={i * 0.08} className="bg-pearl p-4 sm:p-6 md:p-8 transition hover:bg-gold/5 min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-gold mb-1.5 sm:mb-2 min-w-0">
                    <IconComp className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                    <p className="truncate text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                      {tr(k)}
                    </p>
                  </div>
                  <p className="font-serif text-lg sm:text-2xl md:text-3xl font-medium text-navy break-words">
                    {tr(v)}
                  </p>
                </Reveal>
              );
            })}
          </div>

          {/* Pending / Verification Indicators */}
          <div className="border-t border-gold/25 py-4 px-2 sm:px-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-ink/65 min-w-0">
              <span className="flex items-center gap-2 font-medium text-gold shrink-0">
                <Sparkles className="h-4 w-4" />
                <span>{lang === 'hi' ? 'आधिकारिक सांख्यिकी सत्यापन:' : 'Official Stats Verification:'}</span>
              </span>
              <div className="flex flex-wrap gap-2 min-w-0">
                {pending.map((k, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-full border border-navy/10 bg-ivory px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] text-ink/75"
                  >
                    <span>{tr(k)}</span>
                    <span className="text-[10px] text-terra font-medium">({tr(tbu)})</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
