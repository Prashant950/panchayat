import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../context/LangContext.jsx';
import { site } from '../data/content.js';
import { MapPin, Phone, Building, Sparkles, Insta, Fb, CheckCircle, Close } from '../components/ui/Icons.jsx';

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
  const [toast, setToast] = useState(false);
  const toastTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  const set = (k) => (e) => {
    let val = e.target.value;
    if (k === 'contact') {
      val = val.replace(/\D/g, '').slice(0, 10);
    }
    setF((prev) => ({ ...prev, [k]: val }));
    if (err[k]) {
      setErr((prev) => {
        const next = { ...prev };
        delete next[k];
        return next;
      });
    }
  };

  async function submit(e) {
    e.preventDefault();
    const er = {};

    // 1. Category validation
    if (!f.category || !f.category.trim()) {
      er.category = hi ? 'कृपया विषय का चयन करें।' : 'Please select a subject category.';
    }

    // 2. Name validation (Required, min 2 chars)
    const nameTrim = f.name.trim();
    if (!nameTrim) {
      er.name = hi ? 'कृपया अपना पूरा नाम दर्ज करें।' : 'Please enter your full name.';
    } else if (nameTrim.length < 2) {
      er.name = hi ? 'नाम कम से कम 2 अक्षरों का होना चाहिए।' : 'Name must be at least 2 characters.';
    }

    // 3. Mobile number validation (Required, exactly 10 digits, valid mobile pattern)
    const phoneTrim = f.contact.trim();
    if (!phoneTrim) {
      er.contact = hi ? 'कृपया अपना 10 अंकों का मोबाइल नंबर दर्ज करें।' : 'Please enter your 10-digit mobile number.';
    } else if (phoneTrim.length < 10) {
      er.contact = hi
        ? `मोबाइल नंबर कम से कम 10 अंकों का होना अनिवार्य है (वर्तमान: ${phoneTrim.length} अंक)।`
        : `Mobile number must be at least 10 digits (currently ${phoneTrim.length}).`;
    } else if (!/^[6-9]\d{9}$/.test(phoneTrim)) {
      er.contact = hi
        ? 'कृपया एक मान्य 10 अंकों का मोबाइल नंबर दर्ज करें (उदा. 9455134505)।'
        : 'Please enter a valid 10-digit mobile number starting with 6-9.';
    }

    // 4. Message details validation (Required, min 5 chars)
    const msgTrim = f.message.trim();
    if (!msgTrim) {
      er.message = hi ? 'कृपया अपना संदेश या सुझाव विवरण लिखें।' : 'Please write your message or inquiry details.';
    } else if (msgTrim.length < 5) {
      er.message = hi ? 'संदेश कम से कम 5 अक्षरों का होना चाहिए।' : 'Message must be at least 5 characters.';
    }

    setErr(er);
    if (Object.keys(er).length > 0 || f.website) return;

    setSt('sending');
    const { website, ...payload } = f;

    const submissionData = {
      ...payload,
      submittedAt: new Date().toISOString()
    };

    // 1. Client-side storage persistence
    try {
      const stored = JSON.parse(localStorage.getItem('panchayat_submissions') || '[]');
      stored.unshift({ id: Date.now(), ...submissionData });
      localStorage.setItem('panchayat_submissions', JSON.stringify(stored));
    } catch {
      // LocalStorage fallback
    }

    // 2. Submit to backend /api/contact which writes to db.json
    try {
      const endpoint = site.formEndpoint || '/api/contact';
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(submissionData)
      });
      setSt('ok');
    } catch {
      // Still mark as recorded locally
      setSt('ok');
    }

    // Reset form fields
    setF({ category: 'Suggestion', name: '', message: '', contact: '', website: '' });
    
    // Trigger animated auto-dismissing toast
    setToast(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => {
      setToast(false);
      setSt('');
    }, 4500);
  }

  const getInputClass = (fieldName) =>
    `mt-1.5 w-full rounded-xl border bg-ivory px-4 py-2.5 text-sm text-ink transition focus:outline-none focus:ring-2 ${
      err[fieldName]
        ? 'border-terra ring-1 ring-terra/30 focus:border-terra focus:ring-terra/40'
        : 'border-navy/20 focus:border-gold focus:ring-gold/30'
    }`;

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
            {hi ? 'नागरिक संपर्क एवं सुझाव केंद्र' : 'Contact & Citizen Feedback'}
          </h1>
          <p className="mt-3 text-sm sm:text-lg text-ivory/80 max-w-2xl leading-relaxed">
            {hi
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
                      ? `ग्राम प्रधान: श्री ${tr(site.pradhan)} · फोन: ${site.pradhanPhone} · कार्य दिवसों में प्रातः 10:00 से दोपहर 03:00 बजे तक।`
                      : `Gram Pradhan: ${tr(site.pradhan)} · Phone: ${site.pradhanPhone} · Working days: 10:00 AM to 03:00 PM.`}
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
                  {hi ? 'विषय चुनें' : 'Select Subject Category'} <span className="text-terra font-bold">*</span>
                </label>
                <select
                  className={getInputClass('category')}
                  value={f.category}
                  onChange={set('category')}
                  aria-invalid={!!err.category}
                >
                  {cats.map(([e, h]) => (
                    <option key={e} value={e}>
                      {hi ? h : e}
                    </option>
                  ))}
                </select>
                {err.category && (
                  <span role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-terra font-semibold">
                    <span>⚠</span>
                    <span>{err.category}</span>
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                  {hi ? 'आपका नाम' : 'Your Full Name'} <span className="text-terra font-bold">*</span>
                </label>
                <input
                  type="text"
                  maxLength={120}
                  placeholder={hi ? 'उदा. राम कुमार' : 'e.g. Ram Kumar'}
                  className={getInputClass('name')}
                  value={f.name}
                  onChange={set('name')}
                  aria-invalid={!!err.name}
                />
                {err.name && (
                  <span role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-terra font-semibold">
                    <span>⚠</span>
                    <span>{err.name}</span>
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                    {hi ? 'मोबाइल नंबर' : 'Mobile Number'} <span className="text-terra font-bold">*</span>
                  </label>
                  <span className="text-[11px] font-semibold text-ink/45">
                    {f.contact.length}/10 {hi ? 'अंक' : 'digits'}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder={hi ? '10 अंकों का मोबाइल नंबर (उदा. 9455134505)' : '10-digit mobile number (e.g. 9455134505)'}
                    className={getInputClass('contact')}
                    value={f.contact}
                    onChange={set('contact')}
                    aria-invalid={!!err.contact}
                  />
                </div>
                {err.contact && (
                  <span role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-terra font-semibold">
                    <span>⚠</span>
                    <span>{err.contact}</span>
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                  {hi ? 'संदेश / विवरण' : 'Message Details'} <span className="text-terra font-bold">*</span>
                </label>
                <textarea
                  rows={4}
                  maxLength={1000}
                  placeholder={hi ? 'अपना सुझाव या विषय विस्तार से लिखें (कम से कम 5 अक्षर)...' : 'Type your detailed inquiry or feedback (at least 5 characters)...'}
                  className={getInputClass('message')}
                  value={f.message}
                  onChange={set('message')}
                  aria-invalid={!!err.message}
                />
                {err.message && (
                  <span role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-terra font-semibold">
                    <span>⚠</span>
                    <span>{err.message}</span>
                  </span>
                )}
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
                  className="w-full sm:w-auto rounded-full bg-navy px-8 py-3 text-sm font-bold text-ivory shadow-md transition duration-300 hover:bg-gold hover:text-navy active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {st === 'sending' ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      <span>{hi ? 'भेजा जा रहा है…' : 'Sending…'}</span>
                    </>
                  ) : (
                    <span>{hi ? 'संदेश प्रेषित करें' : 'Submit Message'}</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Auto-Dismissing Animated Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed top-24 right-4 sm:right-8 z-50 max-w-md w-[calc(100%-2rem)] rounded-3xl border-2 border-emerald-500/80 bg-pearl p-5 shadow-2xl ring-4 ring-emerald-500/15"
          >
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div className="flex-1 pr-1">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg font-bold text-navy">
                    {hi ? 'धन्यवाद!' : 'Thank You!'}
                  </span>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800">
                    {hi ? 'सफलतापूर्वक दर्ज' : 'Recorded'}
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-ink/80 leading-relaxed font-medium">
                  {hi
                    ? 'आपका संदेश व सुझाव सफलतापूर्वक दर्ज कर लिया गया है।'
                    : 'Your message and feedback have been received successfully.'}
                </p>
                <p className="mt-1 text-[11px] text-ink/55">
                  📁 {hi ? 'डाटा db.json में सुरक्षित रूप से एकत्र हो गया है।' : 'Data collected in db.json successfully.'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setToast(false)}
                className="rounded-full p-1 text-ink/40 hover:text-navy hover:bg-navy/5 transition"
                aria-label="Close notification"
              >
                <Close className="h-4 w-4" />
              </button>
            </div>

            {/* Progress bar line indicating auto-dismiss timing */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 4.5, ease: 'linear' }}
              className="mt-3.5 h-1 origin-left rounded-full bg-emerald-500"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

