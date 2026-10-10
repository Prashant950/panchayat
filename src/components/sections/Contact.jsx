import { useState } from 'react';
import { useLang } from '../../context/LangContext.jsx';
import Heading from '../ui/Heading.jsx';
import { site } from '../../data/content.js';
import { MapPin, Phone, Building, Sparkles } from '../ui/Icons.jsx';

const cats = [
  ['Suggestion', 'सुझाव'],
  ['Complaint', 'शिकायत / समस्या'],
  ['Scheme query', 'सरकारी योजना संबंधी प्रश्न'],
  ['Other', 'अन्य विषय']
];

export default function Contact() {
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
      ? 'ऑनलाइन फ़ॉर्म वर्तमान में सक्रिय नहीं है। कृपया ग्राम पंचायत से सीधे अथवा इंस्टाग्राम/फ़ेसबुक के माध्यम से संपर्क करें।'
      : 'The online form is temporarily in maintenance mode. Please reach out via our official social pages or visit the Panchayat Bhawan.',
    ok: hi ? 'धन्यवाद! आपका संदेश सफलतापूर्वक दर्ज कर लिया गया है।' : 'Thank you! Your message has been submitted.',
    fail: hi ? 'संदेश भेजने में त्रुटि हुई। कृपया पुनः प्रयास करें।' : 'Failed to send. Please try again.'
  };

  const inpClass =
    'mt-1.5 w-full rounded-xl border border-navy/20 bg-ivory px-4 py-2.5 text-sm text-ink transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30';

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 items-start">
        {/* Contact Info Column */}
        <div>
          <Heading
            eyebrow="Citizen Dialogue & Reach"
            title="Your Voice Matters."
            sub="गाँव के विकास में आपकी भागीदारी हमारी सबसे बड़ी पूँजी है।"
          />

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3.5 rounded-2xl border border-navy/10 bg-pearl p-5 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {hi ? 'कार्यालय का पता' : 'Panchayat Address'}
                </dt>
                <dd className="mt-1 text-sm sm:text-base font-medium text-navy leading-relaxed">
                  {tr(site.address)}
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-3.5 rounded-2xl border border-navy/10 bg-pearl p-5 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/10 text-navy">
                <Building className="h-5 w-5" />
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {hi ? 'कार्यालय समय व ग्राम प्रधान' : 'Office & Leadership'}
                </dt>
                <dd className="mt-1 text-sm text-ink/80 leading-relaxed">
                  {hi
                    ? 'ग्राम प्रधान: श्री विष्णु प्रताप सिंह · कार्य दिवसों में पंचायत भवन पर संपर्क कर सकते हैं।'
                    : 'Gram Pradhan: Vishnu Pratap Singh · Villagers may visit the Panchayat Bhawan on working days.'}
                </dd>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-navy/15 shadow-md">
            <img
              src="/images/panchayat-bhawan.jpg"
              alt="Panchayat Bhawan Chiluli"
              className="aspect-[16/9] w-full object-cover"
              loading="lazy"
            />
            <div className="bg-pearl p-3 text-center text-xs text-ink/70 font-medium">
              📍 {hi ? 'पंचायत भवन चिलूली, विकास खंड सिंहपुर (अमेठी)' : 'Panchayat Bhawan Chiluli, Block Singhpur (Amethi)'}
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="rounded-2xl border border-navy/15 bg-pearl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-2 border-b border-navy/10 pb-4">
            <Sparkles className="h-4 w-4 text-gold" />
            <h3 className="font-serif text-2xl font-medium text-navy">
              {hi ? 'सुझाव एवं संवाद फ़ॉर्म' : 'Feedback & Inquiry Form'}
            </h3>
          </div>

          <form onSubmit={submit} noValidate className="mt-6 space-y-4">
            {/* Category */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink/70">
                {hi ? 'विषय चुनें' : 'Select Category'}
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

            {/* Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink/70">
                {hi ? 'आपका नाम' : 'Your Name'} <span className="text-terra">*</span>
              </label>
              <input
                maxLength={120}
                placeholder={hi ? 'पूरा नाम दर्ज करें' : 'Enter full name'}
                className={inpClass}
                value={f.name}
                onChange={set('name')}
                aria-invalid={!!err.name}
              />
              {err.name && <span role="alert" className="mt-1 block text-xs text-terra font-medium">{err.name}</span>}
            </div>

            {/* Contact / Mobile */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink/70">
                {hi ? 'मोबाइल नंबर / संपर्क (वैकल्पिक)' : 'Contact Number (Optional)'}
              </label>
              <input
                maxLength={40}
                placeholder={hi ? '10 अंकों का मोबाइल नंबर' : 'Phone or WhatsApp number'}
                className={inpClass}
                value={f.contact}
                onChange={set('contact')}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink/70">
                {hi ? 'संदेश / विवरण' : 'Message'} <span className="text-terra">*</span>
              </label>
              <textarea
                rows={4}
                maxLength={1000}
                placeholder={hi ? 'अपना सुझाव, समस्या या विचार यहाँ लिखें...' : 'Type your suggestion or inquiry here...'}
                className={inpClass}
                value={f.message}
                onChange={set('message')}
                aria-invalid={!!err.message}
              />
              {err.message && <span role="alert" className="mt-1 block text-xs text-terra font-medium">{err.message}</span>}
            </div>

            {/* Honeypot field */}
            <input
              className="absolute -left-[9999px]"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={f.website}
              onChange={set('website')}
            />

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={st === 'sending'}
                className="w-full sm:w-auto rounded-full bg-navy px-8 py-3 text-sm font-semibold text-ivory shadow-md transition duration-300 hover:bg-gold hover:text-navy active:scale-95 disabled:opacity-60"
              >
                {st === 'sending'
                  ? (hi ? 'संदेश भेजा जा रहा है…' : 'Sending…')
                  : (hi ? 'संदेश भेजें' : 'Send Message')}
              </button>
            </div>

            {/* Status Feedback */}
            {st && (
              <div
                role="status"
                className={`rounded-xl p-3 text-xs sm:text-sm font-medium ${
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
    </section>
  );
}
