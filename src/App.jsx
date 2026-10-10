import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { LangProvider } from './context/LangContext.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';

// Dedicated Separate Pages with Clean URLs (No #)
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import DevelopmentPage from './pages/DevelopmentPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import NoticesPage from './pages/NoticesPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function ToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);

  return show ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-navy/90 text-gold shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-gold hover:text-navy hover:scale-110 active:scale-95"
    >
      <span className="font-bold text-lg">↑</span>
    </button>
  ) : null;
}

export default function App() {
  return (
    <BrowserRouter>
      <LangProvider>
        <MotionConfig reducedMotion="user">
          <ScrollToTop />
          <div className="relative w-full max-w-full overflow-x-hidden min-h-screen flex flex-col justify-between bg-ivory text-ink">
            <Navbar />
            <main className="w-full max-w-full overflow-x-hidden flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/development" element={<DevelopmentPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/notices" element={<NoticesPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>
            <Footer />
            <ToTop />
          </div>
        </MotionConfig>
      </LangProvider>
    </BrowserRouter>
  );
}
