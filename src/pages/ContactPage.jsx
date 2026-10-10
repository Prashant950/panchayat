import { useState } from 'react';
import { useLang } from '../context/LangContext.jsx';
import { site, helplines } from '../data/content.js';
import { MapPin, Phone, Building, Sparkles, Insta, Fb, Ext } from '../components/ui/Icons.jsx';

const cats = [
  ['Suggestion', 'सुझाव (Suggestion)'],
  ['Complaint', 'शिकायत व समस्या (Grievance)'],
  ['Scheme query', 'सरकारी योजना संबंधी प्रश्न (Scheme Query)'],
  ['Other', 'अन्य विषय (Other)']
];

export default function ContactPage() {
  const { lang, tr } = useLang();
  const hi = lang === 'hi';
  const [f, setF] = useState({ category: 'Suggestion', name: '', message: '', contact: '', website: '' });
  const [err, setErr] = useState({});
  const [st, setSt] = useState('');

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    const er = {};
    ['name', 'message'].forEach((k) => {
      if (!f[k].trim()) er[k] = hi ? 'यह फ़ील्ड आवश्यक है।' : 'This field is required.';
    });
    setErr(er);
    if (Object.keys(er).length || f.website) return;

    if (!site.formEndpoint) return setSt('off');
    setSt('sending');
    try {
      const { website, ...body } = f;
      const r = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body)
      });
      setSt(r.ok ? 'ok' : 'fail');
      if (r.ok) setF({ category: 'Suggestion', name: '', message: '', contact: '', website: '' });
    } catch {
      setSt('fail');
    }
  }

  const msgs = {
    off: hi
      ? 'ऑनलाइन फ़ॉर्म वर्तमान में सक्रिय नहीं है। कृपया पंचायत भवन पर सीधे संपर्क करें अथवा इंस्टाग्राम/फ़ेसबुक पर संदेश भेजें।'
      : 'The online form is temporarily in maintenance mode. Please visit Panchayat Bhawan or reach out via official social media.',
    ok: hi ? 'धन्यवाद! आपका संदेश सफलतापूर्वक दर्ज कर लिया गया है।' : 'Thank you! Your message has been submitted.',
    fail: hi ? 'संदेश भेजने में त्रुटि हुई। कृपया पुनः प्रयास करें।' : 'Failed to send. Please try again.'
  };

  const inpClass =
    'mt-1.5 w-full rounded-xl border border-navy/20 bg-ivory px-4 py-2.5 text-sm text-ink transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30';

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-navy py-14 sm:py-20 text-ivory relative overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Citizen Reach & Office</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium leading-tight text-ivory">
            {lang === 'hi' ? 'नागरिक संपर्क एवं सुझाव केंद्र' : 'Contact & Citizen Feedback'}
          </h1>
          <p className="mt-3 text-sm sm:text-lg text-ivory/80 max-w-2xl leading-relaxed">
            {lang === 'hi'
              ? 'गाँव के विकास, नागरिक सुविधाओं या किसी भी प्रश्न हेतु पंचायत भवन पर संपर्क करें अथवा डिजिटल माध्यम से सुझाव भेजें।'
              : 'Direct communication channels for citizen dialogue, suggestions, and assistance at Gram Panchayat Chiluli.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Address & Office Column */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                {hi ? 'कार्यालय विवरण' : 'Office Details'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mt-1">
                {hi ? 'पंचायत भवन चिलूली' : 'Panchayat Bhawan Chiluli'}
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-navy/15 bg-pearl p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-gold">
                    {hi ? 'डाक का पता' : 'Postal Address'}
                  </dt>
                  <dd className="mt-1 text-sm sm:text-base font-semibold text-navy leading-relaxed">
                    {tr(site.address)}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-navy/15 bg-pearl p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/10 text-navy">
                  <Building className="h-6 w-6" />
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-gold">
                    {hi ? 'कार्यालय समय व नेतृत्व' : 'Office Hours & Pradhan'}
                  </dt>
                  <dd className="mt-1 text-sm text-ink/80 leading-relaxed">
                    {hi
                      ? 'ग्राम प्रधान: श्री विष्णु प्रताप सिंह · कार्य दिवसों में प्रातः 10:00 से दोपहर 03:00 बजे तक।'
                      : 'Gram Pradhan: Vishnu Pratap Singh · Working days: 10:00 AM to 03:00 PM.'}
                  </dd>
                </div>
              </div>
            </div>

            {/* Framed Photo with White Frame */}
            <div className="overflow-hidden rounded-2xl border-4 sm:border-8 border-pearl bg-pearl shadow-xl">
              <img
                src="/images/panchayat-bhawan.jpg"
                alt="Panchayat Bhawan Chiluli"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-3 text-center text-xs font-semibold text-ink/75 bg-pearl">
                📍 {hi ? 'पंचायत भवन चिलूली, विकास खंड सिंहपुर, अमेठी (उ.प्र.)' : 'Panchayat Bhawan Chiluli, Block Singhpur, Amethi (UP)'}
              </div>
            </div>

            {/* Social channels preview */}
            <div className="rounded-2xl border border-gold/30 bg-pearl p-5 shadow-md flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gold">
                  {hi ? 'सोशल मीडिया' : 'Social Channels'}
                </p>
                <p className="font-serif text-lg font-bold text-navy">
                  {hi ? 'ऑनलाइन संदेश भेजें' : 'Send Direct Message'}
                </p>
              </div>
              <div className="flex gap-2.5">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/40 bg-navy text-gold hover:bg-gold hover:text-navy transition shadow"
                  aria-label="Instagram"
                >
                  <Insta className="h-5 w-5" />
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/40 bg-navy text-gold hover:bg-gold hover:text-navy transition shadow"
                  aria-label="Facebook"
                >
                  <Fb className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="rounded-3xl border border-navy/15 bg-pearl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-navy/10 pb-4">
              <Sparkles className="h-5 w-5 text-gold" />
              <h3 className="font-serif text-2xl font-bold text-navy">
                {hi ? 'नागरिक संवाद व सुझाव फ़ॉर्म' : 'Citizen Inquiry Form'}
              </h3>
            </div>

            <form onSubmit={submit} noValidate className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                  {hi ? 'विषय चुनें' : 'Select Subject Category'}
                </label>
                <select
                  className={inpClass}
                  value={f.category}
                  onChange={set('category')}
                >
                  {cats.map(([e, h]) => (
                    <option key={e} value={e}>
                      {hi ? h : e}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                  {hi ? 'आपका नाम' : 'Your Full Name'} <span className="text-terra">*</span>
                </label>
                <input
                  maxLength={120}
                  placeholder={hi ? 'उदा. राम कुमार' : 'e.g. John Doe'}
                  className={inpClass}
                  value={f.name}
                  onChange={set('name')}
                  aria-invalid={!!err.name}
                />
                {err.name && <span role="alert" className="mt-1 block text-xs text-terra font-semibold">{err.name}</span>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                  {hi ? 'मोबाइल नंबर (वैकल्पिक)' : 'Contact Phone (Optional)'}
                </label>
                <input
                  maxLength={40}
                  placeholder={hi ? '10 अंकों का मोबाइल नंबर' : '10 digit mobile number'}
                  className={inpClass}
                  value={f.contact}
                  onChange={set('contact')}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                  {hi ? 'संदेश / विवरण' : 'Message Details'} <span className="text-terra">*</span>
                </label>
                <textarea
                  rows={4}
                  maxLength={1000}
                  placeholder={hi ? 'अपना सुझाव या विषय विस्तार से लिखें...' : 'Type your detailed inquiry or feedback...'}
                  className={inpClass}
                  value={f.message}
                  onChange={set('message')}
                  aria-invalid={!!err.message}
                />
                {err.message && <span role="alert" className="mt-1 block text-xs text-terra font-semibold">{err.message}</span>}
              </div>

              <input
                className="absolute -left-[9999px]"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={f.website}
                onChange={set('website')}
              />

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={st === 'sending'}
                  className="w-full sm:w-auto rounded-full bg-navy px-8 py-3 text-sm font-bold text-ivory shadow-md transition duration-300 hover:bg-gold hover:text-navy active:scale-95 disabled:opacity-60"
                >
                  {st === 'sending'
                    ? (hi ? 'भेजा जा रहा है…' : 'Sending…')
                    : (hi ? 'संदेश प्रेषित करें' : 'Submit Message')}
                </button>
              </div>

              {st && (
                <div
                  role="status"
                  className={`rounded-xl p-3.5 text-xs sm:text-sm font-semibold ${
                    st === 'ok'
                      ? 'border border-emerald-400 bg-emerald-50 text-emerald-900'
                      : 'border border-gold/40 bg-gold/10 text-navy'
                  }`}
                >
                  {msgs[st]}
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
