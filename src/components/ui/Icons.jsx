const p = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, className: 'h-5 w-5' };

export const Arrow = ({ className = 'h-5 w-5' }) => (
  <svg {...p} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export const Ext = ({ className = 'h-4 w-4' }) => (
  <svg {...p} className={className}><path d="M14 4h6v6M20 4l-9 9M18 14v5H5V6h5" /></svg>
);

export const Insta = ({ className = 'h-5 w-5' }) => (
  <svg {...p} className={className}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg>
);

export const Fb = ({ className = 'h-5 w-5' }) => (
  <svg {...p} className={className}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" /></svg>
);

export const Plus = ({ className = 'h-5 w-5' }) => (
  <svg {...p} className={className}><path d="M12 5v14M5 12h14" /></svg>
);

export const Close = ({ className = 'h-5 w-5' }) => (
  <svg {...p} className={className}><path d="M6 6l12 12M18 6L6 18" /></svg>
);

export const Menu = ({ className = 'h-5 w-5' }) => (
  <svg {...p} className={className}><path d="M4 8h16M4 16h16" /></svg>
);

export const Phone = ({ className = 'h-5 w-5' }) => (
  <svg {...p} className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

export const MapPin = ({ className = 'h-5 w-5' }) => (
  <svg {...p} className={className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);

export const Building = ({ className = 'h-5 w-5' }) => (
  <svg {...p} className={className}><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" /></svg>
);

export const ShieldCheck = ({ className = 'h-5 w-5' }) => (
  <svg {...p} className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
);

export const CheckCircle = ({ className = 'h-5 w-5' }) => (
  <svg {...p} className={className}><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
);

export const Sun = ({ className = 'h-5 w-5' }) => (
  <svg {...p} className={className}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
);

export const Droplets = ({ className = 'h-5 w-5' }) => (
  <svg {...p} className={className}><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
);

export const Lightbulb = ({ className = 'h-5 w-5' }) => (
  <svg {...p} className={className}><path d="M9 18h6M10 22h4M15 9a3 3 0 1 0-6 0c0 2 1.5 3 2 4h2c.5-1 2-2 2-4z" /></svg>
);

export const Users = ({ className = 'h-5 w-5' }) => (
  <svg {...p} className={className}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);

export const FileText = ({ className = 'h-5 w-5' }) => (
  <svg {...p} className={className}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
);

export const Sparkles = ({ className = 'h-5 w-5' }) => (
  <svg {...p} className={className}><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" /></svg>
);

export const Calendar = ({ className = 'h-5 w-5' }) => (
  <svg {...p} className={className}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
);

export const Emblem = ({ className = 'h-6 w-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v5M12 16v5M3 12h5M16 12h5M5.64 5.64l3.53 3.53M14.83 14.83l3.53 3.53M5.64 18.36l3.53-3.53M14.83 9.17l3.53-3.53" />
  </svg>
);
