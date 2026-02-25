'use client';

import Link from 'next/link';
import CTASection from '@/components/CTASection';

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        :root {
          --navy:   #0c1f3f;
          --blue:   #1a4a8a;
          --mid:    #2563c4;
          --accent: #e8923a;
          --gold:   #f5c842;
          --light:  #f0f5ff;
          --white:  #ffffff;
          --text:   #1e293b;
          --muted:  #64748b;
          --border: #e2e8f0;
        }

        .about-page { font-family: 'Plus Jakarta Sans', sans-serif; }
        .about-page * { box-sizing: border-box; }

        /* Animations */
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes popPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.5)} }

        /* Section utils */
        .about-section { padding: 96px 32px; }
        .about-inner { max-width: 1200px; margin: 0 auto; }
        .about-center { text-align: center; display: flex; flex-direction: column; align-items: center; }

        .about-label {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 11px; font-weight: 800; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--mid);
          background: rgba(37,99,196,.08); border: 1px solid rgba(37,99,196,.18);
          padding: 4px 14px; border-radius: 99px; margin-bottom: 14px;
        }
        .about-label-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); animation: popPulse 2s ease infinite;
        }

        .about-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px,4vw,44px); font-weight: 700;
          color: var(--navy); line-height: 1.18; margin-bottom: 12px;
        }
        .about-heading em { font-style: italic; color: var(--mid); }
        .about-heading-white { color: #fff; }
        .about-heading-white em { color: var(--gold); }

        .about-sub {
          font-size: 16px; color: var(--muted);
          line-height: 1.7; max-width: 600px;
        }
        .about-sub-white { color: rgba(255,255,255,.65); }

        /* Hero */
        .about-hero {
          position: relative; min-height: 65vh;
          display: flex; align-items: center;
          overflow: hidden; background: var(--navy);
          padding-top: 68px;
        }
        .about-hero::before {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 60% 40%, rgba(37,99,196,.28) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 20% 80%, rgba(232,146,58,.12) 0%, transparent 60%);
        }
        .about-hero::after {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .about-hero-content {
          position: relative; z-index: 2;
          max-width: 900px; margin: 0 auto;
          padding: 80px 32px; text-align: center;
        }
        .about-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(232,146,58,.15); border: 1px solid rgba(232,146,58,.3);
          border-radius: 99px; padding: 5px 14px;
          font-size: 12px; font-weight: 700; color: var(--gold);
          letter-spacing: 1px; text-transform: uppercase; margin-bottom: 22px;
        }
        .about-hero-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); animation: popPulse 2s ease infinite;
        }
        .about-hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px,5vw,56px); font-weight: 700;
          color: #fff; line-height: 1.15; margin-bottom: 20px;
        }
        .about-hero-h1 em { font-style: italic; color: var(--gold); }
        .about-hero-p {
          font-size: 17px; color: rgba(255,255,255,.65);
          line-height: 1.7; max-width: 620px; margin: 0 auto;
        }

        /* Stats */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 32px; margin-top: 48px;
        }
        .about-stat {
          padding: 24px; border-radius: 16px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.1);
          text-align: center;
        }
        .about-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px,4vw,42px); font-weight: 700;
          color: var(--gold); line-height: 1;
        }
        .about-stat-label {
          font-size: 13px; color: rgba(255,255,255,.55);
          margin-top: 8px; font-weight: 500;
        }

        /* Story prose */
        .about-prose {
          max-width: 800px; margin: 0 auto;
          font-size: 15.5px; color: var(--text);
          line-height: 1.8;
        }
        .about-prose p { margin-bottom: 18px; }
        .about-prose strong { font-weight: 700; color: var(--navy); }

        /* Mission/Vision cards */
        .about-mv-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 24px; max-width: 1000px; margin: 0 auto;
        }
        .about-mv-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px; padding: 36px 32px;
          transition: all .35s cubic-bezier(.34,1.56,.64,1);
          cursor: default;
        }
        .about-mv-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,.08);
          border-color: rgba(37,99,196,.25);
        }
        .about-mv-icon {
          width: 64px; height: 64px; border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 28px; margin-bottom: 20px;
        }
        .about-mv-title {
          font-family: 'Playfair Display', serif;
          font-size: 24px; font-weight: 700;
          color: var(--navy); margin-bottom: 14px;
        }
        .about-mv-desc {
          font-size: 14.5px; color: var(--muted); line-height: 1.7;
        }

        /* Why choose cards */
        .about-why-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px; max-width: 1100px; margin: 0 auto;
        }
        .about-why-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 18px; padding: 28px 24px;
          display: flex; flex-direction: column; gap: 14px;
          transition: all .35s cubic-bezier(.34,1.56,.64,1);
          cursor: default;
        }
        .about-why-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 32px rgba(0,0,0,.08);
          border-color: rgba(232,146,58,.35);
        }
        .about-why-emoji { font-size: 36px; }
        .about-why-title {
          font-weight: 700; font-size: 16.5px; color: var(--navy);
        }
        .about-why-desc {
          font-size: 13.5px; color: var(--muted); line-height: 1.65;
        }

        /* Values */
        .about-values-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 20px; max-width: 1100px; margin: 0 auto;
        }
        .about-value-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px; padding: 28px 20px;
          text-align: center;
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          cursor: default;
        }
        .about-value-card:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 12px 28px rgba(0,0,0,.08);
          border-color: rgba(37,99,196,.25);
        }
        .about-value-emoji { font-size: 44px; margin-bottom: 14px; }
        .about-value-title {
          font-weight: 700; font-size: 15.5px;
          color: var(--navy); margin-bottom: 8px;
        }
        .about-value-desc {
          font-size: 12.5px; color: var(--muted); line-height: 1.6;
        }

        /* Offerings */
        .about-offer-grid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 20px; max-width: 900px; margin: 0 auto;
        }
        .about-offer-item {
          display: flex; gap: 16px; align-items: flex-start;
          padding: 20px; border-radius: 14px;
          border: 1px solid var(--border);
          background: var(--white);
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
        }
        .about-offer-item:hover {
          border-color: var(--mid);
          background: var(--light);
          box-shadow: 0 8px 24px rgba(37,99,196,.08);
          transform: translateX(4px);
        }
        .about-offer-icon {
          width: 48px; height: 48px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; flex-shrink: 0;
        }
        .about-offer-title {
          font-weight: 700; font-size: 15px;
          color: var(--navy); margin-bottom: 6px;
        }
        .about-offer-desc {
          font-size: 13px; color: var(--muted); line-height: 1.65;
        }

        /* Contact CTA */
        .about-cta-section {
          background: linear-gradient(135deg, var(--navy), var(--blue));
          padding: 88px 32px; text-align: center;
          position: relative; overflow: hidden;
        }
        .about-cta-section::before {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 80% at 50% 110%, rgba(232,146,58,.18) 0%, transparent 60%);
        }
        .about-cta-section::after {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .about-cta-inner {
          position: relative; z-index: 1;
          max-width: 700px; margin: 0 auto;
        }
        .about-cta-btns {
          display: flex; gap: 14px;
          justify-content: center; flex-wrap: wrap; margin-top: 32px;
        }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--accent); color: #fff;
          font-weight: 700; font-size: 14.5px;
          padding: 13px 26px; border-radius: 12px;
          text-decoration: none;
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          box-shadow: 0 6px 20px rgba(232,146,58,.4);
        }
        .btn-primary:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 10px 28px rgba(232,146,58,.52);
        }
        .btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,.1);
          backdrop-filter: blur(8px);
          border: 1.5px solid rgba(255,255,255,.2);
          color: #fff; font-weight: 700; font-size: 14.5px;
          padding: 13px 26px; border-radius: 12px;
          text-decoration: none;
          transition: all .25s ease;
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,.16);
        }

        /* Responsive */
        @media(max-width:900px) {
          .about-stats { grid-template-columns: repeat(2,1fr); }
          .about-mv-grid { grid-template-columns: 1fr; }
          .about-why-grid { grid-template-columns: repeat(2,1fr); }
          .about-values-grid { grid-template-columns: repeat(2,1fr); }
          .about-offer-grid { grid-template-columns: 1fr; }
        }
        @media(max-width:600px) {
          .about-section { padding: 64px 20px; }
          .about-why-grid { grid-template-columns: 1fr; }
          .about-values-grid { grid-template-columns: 1fr; }
          .about-stats { grid-template-columns: repeat(2,1fr); gap: 16px; }
        }
      `}</style>

      <div className="about-page">
        {/* ── HERO ── */}
        <section className="about-hero">
          <div className="about-hero-content">
            <div className="about-hero-eyebrow">
              <span className="about-hero-dot" />
              Trusted Since 2021
            </div>
            <h1 className="about-hero-h1">
              About <em>Scholar Bucket</em>
            </h1>
            <p className="about-hero-p">
              Your trusted partner in education, helping thousands of students achieve their 
              academic dreams across India's top UGC-approved universities.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-num">2021</div>
                <div className="about-stat-label">Established</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">1000+</div>
                <div className="about-stat-label">Students Helped</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">9+</div>
                <div className="about-stat-label">Partner Universities</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">100%</div>
                <div className="about-stat-label">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── OUR STORY ── */}
        <section className="about-section" style={{ background: '#fff' }}>
          <div className="about-inner">
            <div className="about-center" style={{ marginBottom: 56 }}>
              <div className="about-label">
                <span className="about-label-dot" />
                Our Journey
              </div>
              <h2 className="about-heading">
                Our <em>Story</em>
              </h2>
              <p className="about-sub" style={{ textAlign: 'center' }}>
                How we became India's trusted education consultancy partner.
              </p>
            </div>

            <div className="about-prose">
              <p>
                Founded in <strong>2021</strong>, Scholar Bucket Education Consultancy was born out of a simple yet 
                powerful vision: to make quality education accessible to every student, regardless of 
                their background or circumstances.
              </p>
              <p>
                We recognized that many students face challenges in navigating the complex admission 
                processes, choosing the right courses, and finding universities that match their needs. 
                This gap in educational guidance inspired us to create a platform that would bridge 
                students and quality education opportunities.
              </p>
              <p>
                Today, we're proud to have helped over <strong>1,000+ students</strong> secure admissions 
                in their dream courses across India's top universities. Our commitment remains the same: 
                providing honest, transparent, and expert guidance to every student who walks through 
                our doors.
              </p>
              <p>
                Based in <strong>Shahpur Doyam, Narnaul, Haryana</strong>, we serve students across 
                India through our comprehensive admission services, expert counselling, and ongoing 
                support throughout their educational journey.
              </p>
            </div>
          </div>
        </section>

        {/* ── MISSION & VISION ── */}
        <section className="about-section" style={{ background: '#f8faff' }}>
          <div className="about-inner">
            <div className="about-center" style={{ marginBottom: 56 }}>
              <div className="about-label">
                <span className="about-label-dot" />
                What Drives Us
              </div>
              <h2 className="about-heading">
                Mission & <em>Vision</em>
              </h2>
            </div>

            <div className="about-mv-grid">
              <div className="about-mv-card">
                <div className="about-mv-icon" style={{ background: '#e8f4fc' }}>🎯</div>
                <div className="about-mv-title">Our Mission</div>
                <p className="about-mv-desc">
                  To democratize access to quality education by providing comprehensive admission 
                  guidance and support services. We strive to ensure that every student, regardless 
                  of their location or background, can pursue their educational aspirations with 
                  confidence and clarity.
                </p>
              </div>

              <div className="about-mv-card">
                <div className="about-mv-icon" style={{ background: '#e8f6ee' }}>👁️</div>
                <div className="about-mv-title">Our Vision</div>
                <p className="about-mv-desc">
                  To become India's most trusted education consultancy, known for transparency, 
                  integrity, and student-first approach. We envision a future where every student 
                  has access to expert guidance and can make informed decisions about their 
                  educational journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="about-section" style={{ background: '#fff' }}>
          <div className="about-inner">
            <div className="about-center" style={{ marginBottom: 56 }}>
              <div className="about-label">
                <span className="about-label-dot" />
                Our Advantage
              </div>
              <h2 className="about-heading">
                Why Students <em>Choose Us</em>
              </h2>
              <p className="about-sub" style={{ textAlign: 'center' }}>
                We're not just consultants — we're your partners in education.
              </p>
            </div>

            <div className="about-why-grid">
              {[
                { emoji: '🎓', title: 'Expert Counsellors',      desc: 'Our team has years of experience in education counselling and understands the nuances of different courses and universities.' },
                { emoji: '💯', title: '100% Transparency',       desc: 'No hidden charges, no false promises. We believe in complete transparency in fees, processes, and expectations.' },
                { emoji: '🤝', title: 'End-to-End Support',      desc: 'From course selection to admission confirmation, we handle everything so you can focus on your preparation.' },
                { emoji: '🏆', title: 'UGC Approved Partners',   desc: 'We only work with UGC-DEB approved and NAAC accredited universities to ensure quality education.' },
                { emoji: '⚡', title: 'Quick Processing',         desc: 'We understand the value of time. Our streamlined processes ensure fast admission confirmations.' },
                { emoji: '📞', title: 'Post-Admission Support',  desc: 'Our relationship doesn\'t end at admission. We provide ongoing support throughout your academic journey.' },
              ].map((item, i) => (
                <div key={i} className="about-why-card">
                  <div className="about-why-emoji">{item.emoji}</div>
                  <div className="about-why-title">{item.title}</div>
                  <div className="about-why-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ── */}
        <section className="about-section" style={{ background: 'linear-gradient(135deg, #f8faff, #f0f5ff)' }}>
          <div className="about-inner">
            <div className="about-center" style={{ marginBottom: 56 }}>
              <div className="about-label">
                <span className="about-label-dot" />
                What We Stand For
              </div>
              <h2 className="about-heading">
                Our Core <em>Values</em>
              </h2>
              <p className="about-sub" style={{ textAlign: 'center' }}>
                These principles guide every decision we make and every service we provide.
              </p>
            </div>

            <div className="about-values-grid">
              {[
                { emoji: '🎯', title: 'Integrity',      desc: 'Honest and ethical practices in all our interactions' },
                { emoji: '💙', title: 'Student-First',  desc: 'Every decision prioritizes student welfare and success' },
                { emoji: '🌟', title: 'Excellence',     desc: 'Commitment to delivering the highest quality service' },
                { emoji: '🤝', title: 'Partnership',    desc: 'Building lasting relationships with students and universities' },
              ].map((val, i) => (
                <div key={i} className="about-value-card">
                  <div className="about-value-emoji">{val.emoji}</div>
                  <div className="about-value-title">{val.title}</div>
                  <div className="about-value-desc">{val.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT WE OFFER ── */}
        <section className="about-section" style={{ background: '#fff' }}>
          <div className="about-inner">
            <div className="about-center" style={{ marginBottom: 56 }}>
              <div className="about-label">
                <span className="about-label-dot" />
                Our Services
              </div>
              <h2 className="about-heading">
                What We <em>Offer</em>
              </h2>
            </div>

            <div className="about-offer-grid">
              {[
                { icon: '📋', bg: '#e8f4fc', title: 'Free Career Counselling',    desc: 'Expert guidance to help you choose the right course and career path' },
                { icon: '🎓', bg: '#e8f6ee', title: 'Admission Assistance',       desc: 'Complete support for 10th, 12th, Graduation, Post-Graduation admissions' },
                { icon: '📄', bg: '#fff8e1', title: 'Documentation Support',      desc: 'We handle all paperwork, certificates, and admission formalities' },
                { icon: '🏫', bg: '#f0e8fc', title: 'University Selection',       desc: 'Help choosing from 9+ UGC approved and NAAC accredited universities' },
                { icon: '💰', bg: '#ffe8f0', title: 'Scholarship Information',    desc: 'Guidance on available scholarships and financial aid options' },
                { icon: '📞', bg: '#ffe8e8', title: 'Ongoing Support',            desc: 'Continuous assistance even after admission confirmation' },
              ].map((offer, i) => (
                <div key={i} className="about-offer-item">
                  <div className="about-offer-icon" style={{ background: offer.bg }}>
                    {offer.icon}
                  </div>
                  <div>
                    <div className="about-offer-title">{offer.title}</div>
                    <div className="about-offer-desc">{offer.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA COMPONENT ── */}
        <CTASection variant="primary" />

        {/* ── CONTACT CTA ── */}
        <section className="about-cta-section">
          <div className="about-cta-inner">
            <h2 className="about-heading about-heading-white" style={{ textAlign: 'center' }}>
              Ready to Start Your<br /><em>Educational Journey?</em>
            </h2>
            <p className="about-sub about-sub-white" style={{ textAlign: 'center', margin: '14px auto 0' }}>
              Visit our office or get in touch with our counsellors today!
            </p>
            <div className="about-cta-btns">
              <Link href="/contact" className="btn-primary">
                📍 Contact Us
              </Link>
              <Link href="/apply-now" className="btn-secondary">
                ⚡ Apply Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}