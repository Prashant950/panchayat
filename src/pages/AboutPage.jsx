import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext.jsx';
import Reveal, { Mask } from '../components/ui/Reveal.jsx';
import { facts, tbu, pending, site } from '../data/content.js';
import { MapPin, Building, ShieldCheck, Sparkles, Users, Arrow } from '../components/ui/Icons.jsx';

export default function AboutPage() {
  const { lang, tr } = useLang();

  const factIcons = [Building, MapPin, MapPin, ShieldCheck];

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-navy py-14 sm:py-20 text-ivory relative overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Gram Panchayat Profile</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium leading-tight text-ivory">
            {lang === 'hi' ? 'चिलुली — हमारी मिट्टी, हमारी पहचान' : 'About Chiluli — Our Heritage & Identity'}
          </h1>
          <p className="mt-3 text-sm sm:text-lg text-ivory/80 max-w-2xl leading-relaxed">
            {lang === 'hi'
              ? 'जनपद अमेठी की तिलोई तहसील एवं सिंहपुर विकास खंड में स्थित एक समृद्ध, सांस्कृतिक और विकासोन्मुख ग्राम पंचायत।'
              : 'A culturally vibrant and progressive Gram Panchayat situated in Tiloi Tehsil and Singhpur Block of Amethi District, Uttar Pradesh.'}
          </p>
        </div>
      </section>

      {/* Main Content Details */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 space-y-16">
        {/* Story & Architecture Grid */}
        <section className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              {lang === 'hi' ? 'गाँव की पृष्ठभूमि व स्वरूप' : 'Village Background & Spirit'}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-medium text-navy leading-tight">
              {lang === 'hi'
                ? 'परंपरा और आधुनिकता का सुंदर संगम'
                : 'A Harmony of Rooted Tradition & Modern Civic Growth'}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-ink/80 leading-relaxed">
              <p>
                {lang === 'hi'
                  ? 'चिलुली उत्तर प्रदेश के जनपद अमेठी के विकास खंड सिंहपुर के अंतर्गत एक ऐतिहासिक गाँव है। यहाँ की मिट्टी में आपसी भाईचारा, कृषि संस्कृति और लोक परंपराओं की गहरी जड़ें हैं। गाँव का सामाजिक ढाँचा जनसहभागिता और आपसी सहयोग पर आधारित है।'
                  : 'Chiluli is an authentic rural settlement situated in the Singhpur Development Block of Amethi district, Uttar Pradesh. Rooted in deep agricultural traditions, mutual brotherhood, and rich folk heritage, the village community thrives on collective civic cooperation.'}
              </p>
              <p>
                {lang === 'hi'
                  ? 'गाँव का प्रशासनिक केंद्र यहाँ का नवनिर्मित पंचायत भवन है, जहाँ ग्रामीण संस्कृति को जीवंत करती दीवार चित्रकारी, आधुनिक सौर ऊर्जा संयंत्र और नागरिकों के बैठने हेतु विशाल खुला बरामदा उपलब्ध है। यह भवन न केवल शासकीय कार्यों का स्थल है, बल्कि ग्रामवासियों के सुख-दुख और विकास पर विचार-विमर्श का केंद्र भी है।'
                  : 'The administrative heart of the village is the newly established Panchayat Bhawan, featuring artistic village murals, a modern solar power installation, and a spacious community verandah. It serves as both a civic governance center and a gathering place for shared community dialogue.'}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/development"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-2.5 text-xs sm:text-sm font-semibold text-ivory hover:bg-gold hover:text-navy transition shadow"
              >
                <span>{lang === 'hi' ? 'विकास कार्य देखें' : 'View Development Projects'}</span>
                <Arrow className="h-4 w-4" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-pearl px-6 py-2.5 text-xs sm:text-sm font-semibold text-navy hover:border-gold hover:bg-gold/10 transition"
              >
                <span>{lang === 'hi' ? 'फोटो गैलरी' : 'Photo Gallery'}</span>
              </Link>
            </div>
          </div>

          {/* Photo Showcase with Framed White/Pearl Border */}
          <div className="lg:col-span-6 relative mt-4 sm:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none pb-4 sm:pb-8">
              <Mask className="relative overflow-hidden rounded-2xl sm:rounded-t-[100px] sm:rounded-b-2xl border-4 sm:border-8 border-pearl bg-pearl shadow-xl sm:shadow-2xl">
                <img
                  src="/images/panchayat-bhawan.jpg"
                  alt="Panchayat Bhawan Chiluli"
                  className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10 flex items-center gap-1.5 rounded-full bg-navy/85 px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-gold backdrop-blur-md border border-gold/40 shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                  <span>पंचायत भवन चिलूली</span>
                </div>
              </Mask>

              {/* Overlapping Framed Photo */}
              <div className="relative -mt-10 sm:-mt-0 sm:absolute sm:-bottom-8 sm:-left-6 w-[88%] sm:w-3/5 ml-auto sm:ml-0 z-20">
                <figure className="overflow-hidden rounded-xl sm:rounded-2xl border-4 sm:border-6 border-pearl bg-pearl shadow-2xl transition duration-500 hover:-translate-y-1">
                  <img
                    src="/images/community-welfare-gathering.jpg"
                    alt="Community in Chiluli"
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <figcaption className="bg-pearl px-3.5 py-2 text-center text-xs font-medium text-navy/90">
                    {lang === 'hi' ? 'ग्रामवासी व नेतृत्व एकत्रीकरण' : 'Community & Leadership Meet'}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Administrative Hierarchy Cards */}
        <section className="bg-pearl rounded-3xl border border-navy/15 p-6 sm:p-10 shadow-lg">
          <div className="flex items-center gap-2.5 mb-6">
            <Building className="h-5 w-5 text-gold" />
            <h3 className="font-serif text-2xl font-semibold text-navy">
              {lang === 'hi' ? 'प्रशासनिक स्थिति एवं विवरण' : 'Administrative Jurisdiction & Key Facts'}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="rounded-2xl border border-gold/30 bg-ivory p-4 sm:p-5">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gold">
                {lang === 'hi' ? 'ग्राम प्रधान (वर्तमान)' : 'Present Gram Pradhan'}
              </p>
              <p className="mt-2 font-serif text-lg sm:text-xl font-bold text-navy">
                {tr(site.pradhan)}
              </p>
              <span className="mt-1 inline-block text-[10px] text-emerald-700 font-medium">● निर्वाचित पद</span>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-ivory p-4 sm:p-5">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gold">
                {lang === 'hi' ? 'विकास खंड' : 'Development Block'}
              </p>
              <p className="mt-2 font-serif text-lg sm:text-xl font-bold text-navy">
                सिंहपुर (Singhpur)
              </p>
              <span className="mt-1 inline-block text-[10px] text-ink/60">ब्लॉक कार्यालय</span>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-ivory p-4 sm:p-5">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gold">
                {lang === 'hi' ? 'तहसील' : 'Tehsil'}
              </p>
              <p className="mt-2 font-serif text-lg sm:text-xl font-bold text-navy">
                तिलोई (Tiloi)
              </p>
              <span className="mt-1 inline-block text-[10px] text-ink/60">उप-मंडल</span>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-ivory p-4 sm:p-5">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gold">
                {lang === 'hi' ? 'जनपद व राज्य' : 'District & State'}
              </p>
              <p className="mt-2 font-serif text-lg sm:text-xl font-bold text-navy">
                अमेठी, उत्तर प्रदेश
              </p>
              <span className="mt-1 inline-block text-[10px] text-ink/60">पिन: 229309</span>
            </div>
          </div>
        </section>

        {/* Data Verification & Citizen Note */}
        <section className="rounded-2xl border border-gold/40 bg-sand/30 p-6 sm:p-8">
          <div className="flex items-start gap-3.5">
            <Sparkles className="h-5 w-5 text-gold shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy">
                {lang === 'hi' ? 'सांख्यिकीय आंकड़े एवं अभिलेख सत्यापन' : 'Statistical Records & Verification Notice'}
              </h4>
              <p className="mt-1.5 text-xs sm:text-sm text-ink/75 leading-relaxed">
                {lang === 'hi'
                  ? 'जनगणना आंकड़े, परिवार संख्या और विद्यालय सुविधाओं का आधिकारिक पुनरीक्षण राजस्व व ब्लॉक स्तर पर किया जा रहा है। सत्यापन पूर्ण होते ही विस्तृत डेटा यहाँ प्रदर्शित किया जाएगा।'
                  : 'Official census statistics, household counts, and school infrastructural data are under administrative collation with Block Singhpur records.'}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {pending.map((k, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-pearl px-3 py-1 text-xs text-ink/80"
                  >
                    <span>{tr(k)}</span>
                    <span className="text-terra text-[11px] font-medium">({tr(tbu)})</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
