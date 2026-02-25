'use client';

import Link from 'next/link';

/**
 * Hero Section Component — Premium Redesign
 * - Editorial serif + modern sans pairing
 * - Animated gradient background with texture overlay
 * - Staggered fade-up animations
 * - Floating preview card (right side)
 * - Inline stats with Playfair numbers
 * - No generic emoji or wave decorations
 */
export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        .hero-main {
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0c1f3f;
        }

        /* ── Background layers ── */
        .hero-bg-grad {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 70% 50%, rgba(37,99,196,0.28) 0%, transparent 70%),
                      radial-gradient(ellipse 50% 50% at 15% 80%, rgba(232,146,58,0.13) 0%, transparent 60%);
        }
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .hero-glow {
          position: absolute;
          width: 560px;
          height: 560px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,196,0.22) 0%, transparent 70%);
          top: 50%;
          right: 6%;
          transform: translateY(-50%);
          animation: hero-glow-pulse 4s ease-in-out infinite;
        }
        @keyframes hero-glow-pulse {
          0%, 100% { opacity: 0.5; transform: translateY(-50%) scale(1); }
          50%      { opacity: 0.9; transform: translateY(-50%) scale(1.06); }
        }

        /* ── Animations ── */
        @keyframes hero-fadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-popPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(1.5); }
        }

        .hero-anim-1 { animation: hero-fadeUp 0.65s 0.05s ease both; }
        .hero-anim-2 { animation: hero-fadeUp 0.65s 0.15s ease both; }
        .hero-anim-3 { animation: hero-fadeUp 0.65s 0.25s ease both; }
        .hero-anim-4 { animation: hero-fadeUp 0.65s 0.35s ease both; }
        .hero-anim-5 { animation: hero-fadeUp 0.65s 0.45s ease both; }

        /* ── Content ── */
        .hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
          width: 100%;
        }

        /* Eyebrow pill */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(232,146,58,0.15);
          border: 1px solid rgba(232,146,58,0.3);
          border-radius: 99px;
          padding: 5px 14px;
          font-size: 12px;
          font-weight: 700;
          color: #f5c842;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        .hero-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #e8923a;
          animation: hero-popPulse 2s ease infinite;
        }

        /* Heading */
        .hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 5vw, 64px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.13;
          margin-bottom: 20px;
        }
        .hero-h1 em {
          font-style: italic;
          color: #f5c842;
        }

        /* Subtext */
        .hero-p {
          font-size: 17px;
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
          margin-bottom: 34px;
          max-width: 480px;
        }

        /* Buttons */
        .hero-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .hero-btn-accent {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #e8923a;
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          padding: 14px 28px;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          box-shadow: 0 8px 24px rgba(232,146,58,0.38);
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .hero-btn-accent:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 12px 32px rgba(232,146,58,0.52);
        }
        .hero-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.09);
          backdrop-filter: blur(8px);
          border: 1.5px solid rgba(255,255,255,0.2);
          color: #fff;
          font-weight: 600;
          font-size: 15px;
          padding: 14px 26px;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.25s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .hero-btn-ghost:hover {
          background: rgba(255,255,255,0.14);
          border-color: rgba(255,255,255,0.35);
        }

        /* Inline stats */
        .hero-stats {
          display: flex;
          gap: 32px;
          margin-top: 44px;
        }
        .hero-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: #f5c842;
          line-height: 1;
        }
        .hero-stat-label {
          font-size: 11.5px;
          color: rgba(255,255,255,0.52);
          margin-top: 4px;
          font-weight: 500;
        }

        /* ── Right panel (floating preview card) ── */
        .hero-panel {
          background: linear-gradient(135deg, rgba(26,74,138,0.6), rgba(37,99,196,0.38));
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 20px;
          padding: 28px;
          color: #fff;
        }
        .panel-title {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          margin-bottom: 16px;
        }
        .panel-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 10px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .panel-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 9px;
          border-radius: 99px;
        }
        .pb-gold {
          background: rgba(245,200,66,0.2);
          color: #f5c842;
          border: 1px solid rgba(245,200,66,0.3);
        }
        .pb-green {
          background: rgba(109,255,176,0.18);
          color: #6dffb0;
          border: 1px solid rgba(109,255,176,0.3);
        }

        .panel-mini-row {
          display: flex;
          gap: 12px;
          margin-top: 12px;
        }
        .panel-mini {
          flex: 1;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 14px;
          text-align: center;
        }
        .pm-num {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: #f5c842;
        }
        .pm-label {
          font-size: 10.5px;
          color: rgba(255,255,255,0.55);
          margin-top: 3px;
        }

        /* Trust indicators (bottom row) */
        .hero-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 36px;
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.6);
        }
        .trust-check {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(109,255,176,0.2);
          border: 1px solid rgba(109,255,176,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 9px;
          color: #6dffb0;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .hero-panel {
            display: none;
          }
          .hero-stats {
            gap: 20px !important;
          }
        }
        @media (max-width: 600px) {
          .hero-btns {
            flex-direction: column;
            width: 100%;
          }
          .hero-btn-accent,
          .hero-btn-ghost {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <section className="hero-main">
        {/* Background layers */}
        <div className="hero-bg-grad" />
        <div className="hero-grid" />
        <div className="hero-glow" />

        {/* Content */}
        <div className="hero-inner">
          {/* Left: Main content */}
          <div>
            <div className="hero-eyebrow hero-anim-1">
              <span className="hero-dot" />
              Serving Students Since 2021
            </div>

            <h1 className="hero-h1 hero-anim-2">
              Your Gateway to<br />
              <em>Quality Education</em>
            </h1>

            <p className="hero-p hero-anim-3">
              Expert guidance for admissions in 10th, 12th, Graduation, Post-Graduation, Distance & Open Education from India's top UGC-approved universities.
            </p>

            <div className="hero-btns hero-anim-4">
              <Link href="/apply-now" className="hero-btn-accent">
                ⚡ Apply Now — Free
              </Link>
              <Link href="/courses" className="hero-btn-ghost">
                📚 Browse Courses
              </Link>
            </div>

            <div className="hero-stats hero-anim-5">
              <div>
                <div className="hero-stat-num">1000+</div>
                <div className="hero-stat-label">Students Enrolled</div>
              </div>
              <div>
                <div className="hero-stat-num">9+</div>
                <div className="hero-stat-label">Partner Universities</div>
              </div>
              <div>
                <div className="hero-stat-num">100%</div>
                <div className="hero-stat-label">UGC Approved</div>
              </div>
            </div>

            <div className="hero-trust hero-anim-5">
              <div className="trust-item">
                <span className="trust-check">✓</span>
                100% Admission Guarantee
              </div>
              <div className="trust-item">
                <span className="trust-check">✓</span>
                Expert Counselling Team
              </div>
              <div className="trust-item">
                <span className="trust-check">✓</span>
                Trusted by Thousands
              </div>
            </div>
          </div>

          {/* Right: Floating preview card */}
          <div className="hero-panel hero-anim-3">
            <div className="panel-title">
              Popular Programs This Session
            </div>

            <div className="panel-row">
              <span>Distance MBA</span>
              <span className="panel-badge pb-gold">Most Popular</span>
            </div>
            <div className="panel-row">
              <span>Distance B.Com</span>
              <span className="panel-badge pb-green">Open Now</span>
            </div>
            <div className="panel-row">
              <span>Distance B.Ed</span>
              <span className="panel-badge pb-green">Open Now</span>
            </div>
            <div className="panel-row">
              <span>Distance M.Ed</span>
              <span className="panel-badge pb-gold">Popular</span>
            </div>
            <div className="panel-row">
              <span>Distance BCA</span>
              <span className="panel-badge pb-gold">3 Years</span>
            </div>

            <div className="panel-mini-row">
              <div className="panel-mini">
                <div className="pm-num">Free</div>
                <div className="pm-label">Counselling</div>
              </div>
              <div className="panel-mini">
                <div className="pm-num">5–10d</div>
                <div className="pm-label">Admission</div>
              </div>
              <div className="panel-mini">
                <div className="pm-num">100%</div>
                <div className="pm-label">UGC Approved</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}