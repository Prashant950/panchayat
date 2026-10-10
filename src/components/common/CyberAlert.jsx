import { useLang } from '../../context/LangContext.jsx';
import { ShieldCheck, Phone, Ext } from '../ui/Icons.jsx';

export default function CyberAlert({ className = '' }) {
  const { lang } = useLang();

  return (
    <div
      className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-red-500/60 bg-gradient-to-br from-red-950/90 via-navy to-red-950/90 p-5 sm:p-7 md:p-8 text-ivory shadow-2xl backdrop-blur-md ${className}`}
      role="alert"
      aria-label="Cyber Safety & Helpline 1930 Advisory"
    >
      {/* Decorative ambient emergency glow */}
      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-red-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-gold/15 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Top Eyebrow Badge */}
        <div className="flex flex-wrap items-center gap-2.5 mb-3.5 sm:mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-md animate-pulse">
            <span className="h-2 w-2 rounded-full bg-white" />
            <span>{lang === 'hi' ? 'अति महत्वपूर्ण चेतावनी' : 'URGENT SECURITY ALERT'}</span>
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-[11px] sm:text-xs font-semibold text-gold">
            <ShieldCheck className="h-3.5 w-3.5 text-gold shrink-0" />
            <span>{lang === 'hi' ? 'साइबर अपराध सुरक्षा' : 'National Cyber Safety'}</span>
          </span>
        </div>

        {/* Main Headline */}
        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug tracking-tight">
          {lang === 'hi'
            ? 'फर्जी सोशल अकाउंट एवं ब्लैकमेलिंग से सावधान — तुरंत डायल करें 1930'
            : 'Beware of Fake Social Media Accounts & Blackmail — Call Helpline 1930'}
        </h3>

        {/* Warning Text - Highlighted as requested */}
        <div className="mt-3 sm:mt-4 rounded-xl border border-red-400/30 bg-red-950/40 p-3.5 sm:p-4 text-xs sm:text-sm md:text-base leading-relaxed text-red-100/95">
          <p className="font-medium">
            {lang === 'hi' ? (
              <>
                <strong className="text-gold font-bold">चेतावनी:</strong> यदि कोई व्यक्ति आपका, आपके परिवार अथवा ग्राम पंचायत के किसी भी प्रतिनिधि का <strong className="text-white underline decoration-red-400 underline-offset-2">फर्जी सोशल मीडिया अकाउंट</strong> (Facebook, Instagram आदि) बनाकर किसी से <strong className="text-white underline decoration-red-400 underline-offset-2">पैसे मांगता है</strong> अथवा आपकी <strong className="text-white underline decoration-red-400 underline-offset-2">फोटो का गलत तरीके से दुरुपयोग करके ब्लैकमेल करता है</strong>, तो बिल्कुल न डरें और न ही किसी को पैसे भेजें।
              </>
            ) : (
              <>
                <strong className="text-gold font-bold">ADVISORY:</strong> If anyone creates a <strong className="text-white underline decoration-red-400 underline-offset-2">fake social media account</strong> impersonating you, demands money, or misuses your <strong className="text-white underline decoration-red-400 underline-offset-2">photographs for extortion/blackmail</strong>, do not panic and DO NOT transfer any money.
              </>
            )}
          </p>
          <p className="mt-2 text-xs sm:text-sm text-gold font-semibold">
            {lang === 'hi'
              ? '👉 तुरंत राष्ट्रीय साइबर अपराध हेल्पलाइन नंबर 1930 पर कॉल करें अथवा cybercrime.gov.in पर ऑनलाइन रिपोर्ट दर्ज कराएं।'
              : '👉 Immediately call the National Cyber Crime Helpline 1930 or file an official complaint at cybercrime.gov.in.'}
          </p>
        </div>

        {/* Action Buttons & Helplines */}
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="tel:1930"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-5 sm:px-7 py-3 text-sm sm:text-base font-bold text-white shadow-xl transition-all duration-300 hover:from-red-500 hover:to-rose-500 hover:scale-105 active:scale-95 border border-red-400"
            title="Call Cyber Crime Helpline 1930"
          >
            <Phone className="h-4 w-4 sm:h-5 sm:w-5 animate-bounce" />
            <span>{lang === 'hi' ? 'साइबर हेल्पलाइन: 1930 (कॉल करें)' : 'Cyber Helpline: 1930 (Call Now)'}</span>
          </a>

          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/10 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold hover:text-navy hover:scale-105 active:scale-95 shadow-md"
          >
            <span>cybercrime.gov.in</span>
            <Ext className="h-3.5 w-3.5" />
          </a>

          <span className="text-[11px] sm:text-xs text-ivory/70 italic">
            {lang === 'hi' ? 'गृह मंत्रालय (MHA), भारत सरकार द्वारा संचालित 24x7 निःशुल्क सेवा' : '24x7 Toll-Free Service by Ministry of Home Affairs'}
          </span>
        </div>
      </div>
    </div>
  );
}
