import { useLang } from '../../context/LangContext.jsx';
import Reveal from '../ui/Reveal.jsx';
import { Insta, Fb, Ext, Sparkles } from '../ui/Icons.jsx';
import { site } from '../../data/content.js';

export default function Social() {
  const { lang } = useLang();

  const cards = [
    {
      name: 'Instagram',
      handle: '@chiluli_tiloi_amethi_2022',
      url: site.instagram,
      icon: <Insta className="h-5 w-5 sm:h-6 sm:w-6" />,
      tag: lang === 'hi' ? 'फ़ोटो व रील्स' : 'Photos & Updates',
    },
    {
      name: 'Facebook',
      handle: 'Gram Panchayat Chiluli',
      url: site.facebook,
      icon: <Fb className="h-5 w-5 sm:h-6 sm:w-6" />,
      tag: lang === 'hi' ? 'सामुदायिक संवाद' : 'Community Page',
    }
  ];

  return (
    <section className="relative w-full max-w-full overflow-hidden bg-navy py-16 sm:py-24 md:py-28 text-ivory">
      {/* Background with blur */}
      <img
        src="/images/gram-sabha-program.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-15"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy" />

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="w-full min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Connect & Follow</span>
          </div>
          <h2 className="mt-3 font-serif text-2xl sm:text-4xl md:text-5xl font-medium leading-tight">
            {lang === 'hi' ? 'गाँव के साथ ऑनलाइन जुड़ें' : 'Stay Close to Chiluli Village'}
          </h2>
          <p className="mt-2 text-xs sm:text-base text-ivory/70 max-w-xl leading-relaxed">
            {lang === 'hi'
              ? 'ग्राम पंचायत चिलूली के आधिकारिक सोशल मीडिया पेज पर गाँव की ताज़ा गतिविधियाँ, कार्यक्रम एवं उत्सव देखें।'
              : 'Catch the latest village events, celebrations, and developmental updates directly on our community channels.'}
          </p>
        </Reveal>

        <div className="mt-8 sm:mt-10 grid w-full min-w-0 gap-4 sm:gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <Reveal key={card.name} className="w-full min-w-0">
              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${card.name}: ${card.handle}`}
                className="group block w-full min-w-0 overflow-hidden rounded-2xl border border-gold/40 bg-white/5 p-4 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-white/10 hover:shadow-xl active:scale-[0.99]"
              >
                {/* Header row: Icon, Name/Handle, Arrow Action */}
                <div className="flex w-full min-w-0 items-center justify-between gap-3">
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold transition duration-300 group-hover:scale-105 group-hover:bg-gold group-hover:text-navy">
                      {card.icon}
                    </div>
                    <div className="min-w-0 flex-1 overflow-hidden">
                      <h3 className="truncate font-serif text-xl sm:text-2xl font-medium text-ivory">
                        {card.name}
                      </h3>
                      <p
                        className="truncate text-[11px] sm:text-xs text-gold/90 font-mono tracking-tight"
                        title={card.handle}
                      >
                        {card.handle}
                      </p>
                    </div>
                  </div>

                  <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-gold group-hover:text-navy">
                    <Ext className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                </div>

                {/* Footer row: Tag & Action CTA */}
                <div className="mt-4 sm:mt-5 flex w-full min-w-0 items-center justify-between gap-2 border-t border-white/10 pt-3 sm:pt-4 text-xs">
                  <span className="truncate text-ivory/60 text-[11px] sm:text-xs">
                    {card.tag}
                  </span>
                  <span className="shrink-0 font-semibold text-gold transition group-hover:underline flex items-center gap-1">
                    <span>{lang === 'hi' ? 'पेज देखें' : 'Visit Page'}</span>
                    <span>→</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
