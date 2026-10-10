import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext.jsx';
import Hero from '../components/sections/Hero.jsx';
import Discover from '../components/sections/Discover.jsx';
import Social from '../components/sections/Social.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import { Arrow, Sparkles, Building, ShieldCheck, Phone, CheckCircle } from '../components/ui/Icons.jsx';
import { gallery, projects, notices, schemes, site } from '../data/content.js';

export default function HomePage() {
  const { lang, tr } = useLang();
  const recentPhotos = gallery.slice(0, 3);
  const featuredProject = projects[0];

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Brief About Chiluli & Dashboard */}
      <Discover />

      {/* 3. Featured Project & Development Teaser */}
      <section className="bg-navy py-20 sm:py-24 text-ivory relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                {lang === 'hi' ? 'ग्राम विकास कार्य' : 'Rural Development'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium mt-1">
                {lang === 'hi' ? 'विकास की पहल, बेहतर कल की ओर' : 'Progress That Makes a Difference'}
              </h2>
            </div>
            <Link
              to="/development"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gold hover:text-ivory transition"
            >
              <span>{lang === 'hi' ? 'सभी परियोजनाएँ देखें' : 'View All Projects'}</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              {/* White Framed Photo */}
              <div className="overflow-hidden rounded-2xl border-4 sm:border-8 border-pearl bg-pearl shadow-2xl">
                <img
                  src={featuredProject.img}
                  alt={tr(featuredProject.title)}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <span className="rounded-full bg-saffron px-3 py-1 text-xs font-bold text-navy shadow inline-block">
                {tr(featuredProject.status)}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory">
                {tr(featuredProject.title)}
              </h3>
              <p className="text-sm sm:text-base text-ivory/80 leading-relaxed">
                {tr(featuredProject.desc)}
              </p>
              <div className="pt-2">
                <Link
                  to="/development"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-xs sm:text-sm font-bold text-navy hover:brightness-110 transition shadow-lg"
                >
                  <span>{lang === 'hi' ? 'परियोजना विस्तार से जानें' : 'Read Project Details'}</span>
                  <Arrow className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Photo Gallery Preview with Framed White/Pearl Border */}
      <section className="py-20 sm:py-24 bg-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                {lang === 'hi' ? 'गाँव की झलकियाँ' : 'Authentic Gallery'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mt-1">
                {lang === 'hi' ? 'चिलूली — जनसेवा एवं सांस्कृतिक स्मृतियाँ' : 'Chiluli — Welfare & Community Life'}
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2 text-xs sm:text-sm font-semibold text-ivory hover:bg-gold hover:text-navy transition shadow"
            >
              <span>{lang === 'hi' ? `पूरी गैलरी देखें (${gallery.length} तस्वीरें)` : `View Full Gallery (${gallery.length} Photos)`}</span>
              <span>→</span>
            </Link>
          </div>

          {/* 3 Recent Photos with Framed White/Pearl Borders */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPhotos.map((g, idx) => (
              <figure
                key={g.id}
                className="overflow-hidden rounded-2xl border-4 sm:border-8 border-pearl bg-pearl shadow-xl hover:shadow-2xl transition duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={g.src}
                    alt={tr(g.alt)}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4 bg-pearl">
                  <p className="font-serif text-sm sm:text-base font-bold text-navy line-clamp-2">
                    {tr(g.alt)}
                  </p>
                  <p className="mt-1 text-xs text-gold font-medium">
                    {g.cat === 'welfare' && '🤝 जनकल्याण व सहायता वितरण'}
                    {g.cat === 'infra' && '🏛️ पंचायत अवसंरचना'}
                    {g.cat === 'community' && '👥 ग्राम सभा व समुदाय'}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Citizen Welfare & Schemes Quick Hub */}
      <section className="py-20 bg-sand/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-navy/15 bg-pearl p-6 sm:p-10 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy/10 pb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  {lang === 'hi' ? 'नागरिक अधिकार व सेवाएँ' : 'Public Services'}
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-navy mt-1">
                  {lang === 'hi' ? 'सरकारी योजनाएँ एवं 24x7 हेल्पलाइन' : 'Government Welfare Schemes & 24x7 Helplines'}
                </h3>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-2.5 text-xs sm:text-sm font-semibold text-ivory hover:bg-gold hover:text-navy transition shadow"
              >
                <span>{lang === 'hi' ? 'सभी योजनाएँ व पोर्टल' : 'All Schemes & Portals'}</span>
                <span>→</span>
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-navy/10 bg-ivory p-4">
                <span className="text-xs font-bold text-terra uppercase">PM Awas Yojana</span>
                <p className="font-serif text-lg font-bold text-navy mt-1">ग्रामीण आवास योजना</p>
                <p className="text-xs text-ink/70 mt-1">पक्का मकान निर्माण सहायता</p>
              </div>
              <div className="rounded-2xl border border-navy/10 bg-ivory p-4">
                <span className="text-xs font-bold text-terra uppercase">MGNREGA</span>
                <p className="font-serif text-lg font-bold text-navy mt-1">मनरेगा रोज़गार गारंटी</p>
                <p className="text-xs text-ink/70 mt-1">100 दिन का कार्य अधिकार</p>
              </div>
              <div className="rounded-2xl border border-navy/10 bg-ivory p-4">
                <span className="text-xs font-bold text-terra uppercase">Jal Jeevan Mission</span>
                <p className="font-serif text-lg font-bold text-navy mt-1">हर घर नल से जल</p>
                <p className="text-xs text-ink/70 mt-1">शुद्ध पेयजल आपूर्ति</p>
              </div>
              <div className="rounded-2xl border border-navy/10 bg-ivory p-4">
                <span className="text-xs font-bold text-terra uppercase">Pensions</span>
                <p className="font-serif text-lg font-bold text-navy mt-1">वृद्धा / विधवा / दिव्यांग</p>
                <p className="text-xs text-ink/70 mt-1">मासिक आर्थिक सहायता</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-ink/70 pt-4 border-t border-navy/10">
              <span className="font-semibold text-navy">
                🚨 आपातकालीन सहायता: 112 (आपातकाल) · 1076 (मुख्यमंत्री हेल्पलाइन) · 181 (महिला सुरक्षा)
              </span>
              <Link to="/services" className="font-bold text-gold hover:underline">
                विस्तृत सूची देखें →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Social Connect Section (Responsive) */}
      <Social />

      {/* 7. Quick Contact CTA */}
      <section className="bg-sand/60 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">
            {lang === 'hi' ? 'गाँव के विकास में अपने सुझाव साझा करें' : 'Share Your Suggestions for Chiluli'}
          </h2>
          <p className="mt-2 text-xs sm:text-base text-ink/75 max-w-xl mx-auto">
            {lang === 'hi'
              ? 'आपकी सहभागिता और सुझाव हमारे गाँव को और अधिक सशक्त बनाते हैं।'
              : 'Your voice and active civic participation strengthen our village governance.'}
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-navy px-8 py-3 text-xs sm:text-sm font-bold text-ivory hover:bg-gold hover:text-navy transition shadow-lg"
            >
              {lang === 'hi' ? 'सुझाव व संपर्क फ़ॉर्म' : 'Contact & Feedback Form'}
            </Link>
            <Link
              to="/notices"
              className="rounded-full border border-navy/20 bg-pearl px-6 py-3 text-xs sm:text-sm font-bold text-navy hover:border-gold hover:bg-gold/10 transition"
            >
              {lang === 'hi' ? 'सूचना पटल' : 'Notice Board'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
