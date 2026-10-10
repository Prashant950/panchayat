import Reveal from './Reveal.jsx';

export default function Heading({ eyebrow, title, sub, light = false, className = '' }) {
  return (
    <Reveal className={className}>
      <div className="mb-3.5 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-0.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        <span>{eyebrow}</span>
      </div>
      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] ${light ? 'text-ivory' : 'text-navy'}`}>
        {title}
      </h2>
      {sub && (
        <p className={`mt-3 font-serif text-lg sm:text-xl md:text-2xl font-medium ${light ? 'text-gold' : 'text-terra'}`}>
          {sub}
        </p>
      )}
    </Reveal>
  );
}
