import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import { team, site } from '../data/content.js';
import { Building, ShieldCheck, Users, Sparkles, MapPin, Phone } from '../components/ui/Icons.jsx';

export default function TeamPage() {
  const { lang, tr } = useLang();

  const roleIcons = [Building, ShieldCheck, Users, Users];

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-navy py-14 sm:py-20 text-ivory relative overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-4">
            <Users className="h-3.5 w-3.5" />
            <span>Panchayat Governance</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium leading-tight text-ivory">
            {lang === 'hi' ? 'ग्राम पंचायत नेतृत्व एवं प्रतिनिधि मंडल' : 'Leadership & Civic Representatives'}
          </h1>
          <p className="mt-3 text-sm sm:text-lg text-ivory/80 max-w-2xl leading-relaxed">
            {lang === 'hi'
              ? 'जनसेवा, पारदर्शी शासन और चिलूली के समग्र विकास हेतु समर्पित निर्वाचित व प्रशासनिक नेतृत्व।'
              : 'Elected leadership and administrative personnel dedicated to transparent governance and welfare in Chiluli.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 space-y-14">
        {/* Pradhan Highlight Showcase Card */}
        <section className="overflow-hidden rounded-3xl border-2 border-gold bg-pearl p-6 sm:p-10 shadow-2xl relative">
          <div className="absolute top-0 right-0 rounded-bl-2xl bg-gold px-4 py-1.5 text-xs font-bold text-navy shadow">
            {lang === 'hi' ? 'वर्तमान ग्राम प्रधान' : 'Present Gram Pradhan'}
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Framed Photo with White Frame */}
            <div className="w-full md:w-5/12 shrink-0">
              <figure className="overflow-hidden rounded-2xl border-4 sm:border-8 border-pearl bg-pearl shadow-xl">
                <img
                  src="/images/ration-distribution-1.jpg"
                  alt="Gram Pradhan distributing aid"
                  className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
                />
                <figcaption className="bg-pearl px-3 py-2 text-center text-xs font-semibold text-ink/75">
                  {lang === 'hi' ? 'जनसेवा व राहत वितरण करते हुए' : 'Serving Citizens in Chiluli'}
                </figcaption>
              </figure>
            </div>

            {/* Pradhan Details */}
            <div className="w-full md:w-7/12 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                {lang === 'hi' ? 'निर्वाचित जन प्रतिनिधि' : 'Elected People’s Representative'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
                {tr(site.pradhan)}
              </h2>
              <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
                {lang === 'hi'
                  ? 'ग्राम पंचायत चिलूली के वर्तमान निर्वाचित ग्राम प्रधान — गाँव के सर्वांगीण विकास, बुनियादी सुविधाओं के विस्तार, सोलर व स्ट्रीट लाइट व्यवस्था, शुद्ध पेयजल तथा जरूरतमंद परिवारों तक शासकीय योजनाओं का सीधा लाभ पहुँचाने हेतु निरंतर तत्पर।'
                  : 'Currently serving as the elected Gram Pradhan of Chiluli. Dedicated to village infrastructure enhancement, rural electrification, clean water accessibility, and direct welfare outreach for every household.'}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-emerald-100 px-3 py-1 font-semibold text-emerald-800 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
                  {lang === 'hi' ? 'सक्रिय कार्यकाल' : 'Active Term'}
                </span>
                <span className="rounded-full bg-sand px-3 py-1 font-medium text-navy">
                  📍 कार्यालय: पंचायत भवन, चिलूली
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Other Leadership & Administrative Roles */}
        <section className="space-y-4">
          <h3 className="font-serif text-2xl font-bold text-navy">
            {lang === 'hi' ? 'प्रशासनिक व सामुदायिक प्रतिनिधि मंडल' : 'Administrative & Ward Representatives'}
          </h3>

          <div className="space-y-4">
            {team.slice(1).map(([role, name, note], i) => {
              const IconComp = roleIcons[i + 1] || Users;
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="rounded-2xl border border-navy/15 bg-pearl p-6 shadow-sm transition hover:shadow-md hover:border-gold">
                    <div className="flex items-start sm:items-center gap-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/10 text-navy">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                          {tr(role)}
                        </span>
                        <h4 className="font-serif text-xl sm:text-2xl font-bold text-navy mt-0.5">
                          {name ? tr(name) : (lang === 'hi' ? 'शासकीय व स्थानीय अभिलेख अनुसार' : 'Official Cadre per Records')}
                        </h4>
                        {note && (
                          <p className="mt-2 text-xs sm:text-sm text-ink/75 leading-relaxed">
                            {tr(note)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Consultation Call to Action */}
        <section className="rounded-3xl border border-gold/40 bg-sand/35 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif text-xl font-bold text-navy">
              {lang === 'hi' ? 'पंचायत भवन पर संवाद व भेंट' : 'Meet the Representatives at Panchayat Bhawan'}
            </h4>
            <p className="text-xs sm:text-sm text-ink/75 max-w-xl">
              {lang === 'hi'
                ? 'गाँव के विकास, व्यक्तिगत समस्याओं या सरकारी योजनाओं के संबंध में कार्य दिवसों पर पंचायत भवन चिलूली में संपर्क किया जा सकता है।'
                : 'Villagers are welcome to visit the Panchayat Bhawan during administrative hours for civic dialogue and welfare assistance.'}
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 rounded-full bg-navy px-6 py-3 text-xs sm:text-sm font-semibold text-ivory hover:bg-gold hover:text-navy transition shadow"
          >
            {lang === 'hi' ? 'संपर्क पृष्ठ देखें' : 'Contact Us'}
          </Link>
        </section>
      </main>
    </div>
  );
}
