'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home',               path: '/' },
    { name: 'About',              path: '/about' },
    { name: 'Courses',            path: '/courses' },
    { name: 'Universities',       path: '/universities' },
    { name: 'Distance Education', path: '/distance-education' },
    { name: 'Contact',            path: '/contact' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .sb-nav-wrap {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* Default state (top of page) */
        .sb-nav-wrap:not(.scrolled) {
          background: rgba(12, 31, 63, 0.97);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* Scrolled state */
        .sb-nav-wrap.scrolled {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.6);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }

        .sb-nav-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }

        /* ── Logo ── */
        .sb-logo {
          display: flex;
          align-items: center;
          gap: 11px;
          text-decoration: none;
          transition: transform 0.25s ease;
        }
        .sb-logo:hover { transform: scale(1.03); }

        .sb-logo-dot {
          width: 9px; height: 9px;
          border-radius: 50%;
          background: #e8923a;
          display: inline-block;
          animation: sb-logo-pulse 2.5s ease infinite;
        }
        @keyframes sb-logo-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.6; transform: scale(1.4); }
        }

        .sb-logo-text {
          font-family: 'Playfair Display', serif;
          font-size: 21px;
          font-weight: 700;
          line-height: 1;
          transition: color 0.3s;
        }
        .sb-nav-wrap:not(.scrolled) .sb-logo-text { color: #ffffff; }
        .sb-nav-wrap.scrolled .sb-logo-text        { color: #0c1f3f; }

        .sb-logo-sub {
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.3px;
          margin-top: 2px;
          transition: color 0.3s;
        }
        .sb-nav-wrap:not(.scrolled) .sb-logo-sub { color: rgba(255, 255, 255, 0.5); }
        .sb-nav-wrap.scrolled .sb-logo-sub        { color: #94a3b8; }

        /* ── Nav Links ── */
        .sb-nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .sb-nav-link {
          position: relative;
          font-size: 13.5px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
          padding: 4px 0;
        }
        .sb-nav-wrap:not(.scrolled) .sb-nav-link { color: rgba(255, 255, 255, 0.7); }
        .sb-nav-wrap.scrolled .sb-nav-link        { color: #475569; }

        .sb-nav-link:hover { color: #e8923a !important; }

        .sb-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #e8923a;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .sb-nav-link:hover::after { width: 100%; }

        /* ── CTAs ── */
        .sb-nav-ctas {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sb-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 20px;
          border-radius: 10px;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .sb-nav-wrap:not(.scrolled) .sb-btn-outline {
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          color: rgba(255, 255, 255, 0.9);
        }
        .sb-nav-wrap.scrolled .sb-btn-outline {
          border: 1.5px solid #e2e8f0;
          color: #0c1f3f;
        }
        .sb-btn-outline:hover {
          border-color: #e8923a !important;
          color: #e8923a !important;
          background: rgba(232, 146, 58, 0.06) !important;
        }

        .sb-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #e8923a;
          color: #ffffff;
          padding: 9px 20px;
          border-radius: 10px;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 14px rgba(232, 146, 58, 0.35);
        }
        .sb-btn-primary:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 22px rgba(232, 146, 58, 0.48);
        }

        /* ── Mobile Toggle ── */
        .sb-mobile-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .sb-nav-wrap:not(.scrolled) .sb-mobile-toggle {
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.85);
        }
        .sb-nav-wrap.scrolled .sb-mobile-toggle {
          background: rgba(15, 23, 42, 0.04);
          color: #475569;
        }
        .sb-mobile-toggle:hover {
          background: rgba(232, 146, 58, 0.12) !important;
          color: #e8923a !important;
        }

        /* ── Mobile Menu ── */
        .sb-mobile-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 16px;
          right: 16px;
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          animation: sb-mobile-slide 0.25s ease;
        }
        @keyframes sb-mobile-slide {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .sb-mobile-link {
          display: block;
          padding: 11px 14px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #334155;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .sb-mobile-link:hover {
          background: rgba(232, 146, 58, 0.08);
          color: #e8923a;
        }

        .sb-mobile-ctas {
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 12px;
          border-top: 1px solid #f1f5f9;
        }
        .sb-mobile-btn-outline {
          display: block;
          text-align: center;
          padding: 11px 16px;
          border-radius: 10px;
          font-size: 13.5px;
          font-weight: 700;
          color: #0c1f3f;
          text-decoration: none;
          border: 1.5px solid #e2e8f0;
          transition: all 0.2s ease;
        }
        .sb-mobile-btn-outline:hover {
          border-color: #e8923a;
          color: #e8923a;
          background: rgba(232, 146, 58, 0.06);
        }
        .sb-mobile-btn-primary {
          display: block;
          text-align: center;
          padding: 11px 16px;
          border-radius: 10px;
          font-size: 13.5px;
          font-weight: 700;
          color: #ffffff;
          background: #e8923a;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .sb-mobile-btn-primary:hover {
          background: #d4792a;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .sb-nav-links { display: none !important; }
          .sb-nav-ctas   { display: none !important; }
          .sb-mobile-toggle { display: flex !important; }
        }
        @media (max-width: 640px) {
          .sb-nav-inner { padding: 0 20px; height: 64px; }
          .sb-logo-text { font-size: 19px; }
          .sb-logo-sub  { display: none; }
        }
      `}</style>

      <header className={`sb-nav-wrap ${isScrolled ? 'scrolled' : ''}`}>
        <div className="sb-nav-inner">
          {/* ── Logo ── */}
          <Link href="/" className="sb-logo">
            <span className="sb-logo-dot" />
            <div>
              <div className="sb-logo-text">Scholar Bucket</div>
              <div className="sb-logo-sub">Serving Students Since 2021</div>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="sb-nav-links">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} className="sb-nav-link">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="sb-nav-ctas">
            <Link href="/apply-now" className="sb-btn-outline">
              Apply Now
            </Link>
            <a href="tel:+917027977081" className="sb-btn-primary">
              📞 Call Us
            </a>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sb-mobile-toggle"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {isMenuOpen && (
          <div className="sb-mobile-menu">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="sb-mobile-link"
              >
                {link.name}
              </Link>
            ))}
            <div className="sb-mobile-ctas">
              <Link
                href="/apply-now"
                onClick={() => setIsMenuOpen(false)}
                className="sb-mobile-btn-outline"
              >
                Apply Now
              </Link>
              <a
                href="tel:+917027977081"
                className="sb-mobile-btn-primary"
              >
                📞 Call: +91-70279-77081
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}