'use client';

import Hero from '@/components/Hero';
import CourseCard from '@/components/CourseCard';
import UniversityCard from '@/components/UniversityCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import Link from 'next/link';
import { getPopularCourses } from '@/data/courses';
import { getFeaturedUniversities } from '@/data/universities';
import { getFeaturedTestimonials } from '@/data/testimonials';

export default function HomePage() {
  const popularCourses      = getPopularCourses();
  const featuredUniversities = getFeaturedUniversities();
  const featuredTestimonials = getFeaturedTestimonials();

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

        .sb-page * { box-sizing: border-box; }
        .sb-page { font-family: 'Plus Jakarta Sans', sans-serif; }

        /* ── Animations ── */
        @keyframes sb-fadeUp   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes sb-popPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.5)} }
        @keyframes sb-glow     { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:.9;transform:scale(1.06)} }
        @keyframes sb-ticker   { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes sb-shimmer  { 0%{background-position:-200% 0} 100%{background-position:200% 0} }

        .sb-anim-1 { animation: sb-fadeUp .65s .05s ease both; }
        .sb-anim-2 { animation: sb-fadeUp .65s .15s ease both; }
        .sb-anim-3 { animation: sb-fadeUp .65s .25s ease both; }
        .sb-anim-4 { animation: sb-fadeUp .65s .35s ease both; }
        .sb-anim-5 { animation: sb-fadeUp .65s .45s ease both; }

        /* ── Section label pill ── */
        .sb-label {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 11px; font-weight: 800; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--mid);
          background: rgba(37,99,196,.08); border: 1px solid rgba(37,99,196,.18);
          padding: 4px 14px; border-radius: 99px; margin-bottom: 14px;
        }
        .sb-label-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); animation: sb-popPulse 2s ease infinite;
        }

        /* ── Section heading ── */
        .sb-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px,4vw,44px); font-weight: 700;
          color: var(--navy); line-height: 1.18; margin-bottom: 12px;
        }
        .sb-heading em { font-style: italic; color: var(--mid); }
        .sb-heading-white { color: #fff; }
        .sb-heading-white em { color: var(--gold); }

        .sb-sub {
          font-size: 16px; color: var(--muted);
          line-height: 1.7; max-width: 580px;
        }
        .sb-sub-white { color: rgba(255,255,255,.65); }

        /* ── Buttons ── */
        .sb-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--accent); color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700; font-size: 14.5px;
          padding: 13px 26px; border-radius: 12px;
          text-decoration: none; border: none; cursor: pointer;
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          box-shadow: 0 6px 20px rgba(232,146,58,.35);
        }
        .sb-btn-primary:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 10px 28px rgba(232,146,58,.5); }

        .sb-btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--navy);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700; font-size: 14.5px;
          padding: 12px 24px; border-radius: 12px;
          text-decoration: none; cursor: pointer;
          border: 2px solid var(--border);
          transition: all .25s ease;
        }
        .sb-btn-outline:hover { border-color: var(--mid); color: var(--mid); background: rgba(37,99,196,.04); }

        .sb-btn-navy {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--navy); color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700; font-size: 14.5px;
          padding: 13px 26px; border-radius: 12px;
          text-decoration: none; border: none; cursor: pointer;
          transition: all .25s ease;
        }
        .sb-btn-navy:hover { background: var(--blue); transform: translateY(-2px); }

        /* ── Feature card ── */
        .sb-feature-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px; padding: 28px 24px;
          display: flex; flex-direction: column; gap: 12px;
          transition: all .35s cubic-bezier(.34,1.56,.64,1);
          cursor: default; position: relative; overflow: hidden;
        }
        .sb-feature-card::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(37,99,196,.04), transparent);
          opacity: 0; transition: opacity .3s;
        }
        .sb-feature-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,.08); border-color: rgba(37,99,196,.25); }
        .sb-feature-card:hover::before { opacity: 1; }
        .sb-feature-icon {
          width: 56px; height: 56px; border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; flex-shrink: 0;
        }
        .sb-feature-title { font-weight: 700; font-size: 16px; color: var(--navy); }
        .sb-feature-desc  { font-size: 13.5px; color: var(--muted); line-height: 1.65; }
        .sb-feature-link  {
          font-size: 12.5px; font-weight: 700; color: var(--mid);
          text-decoration: none; display: inline-flex; align-items: center; gap: 4px;
          margin-top: 4px;
        }
        .sb-feature-link:hover { gap: 8px; }

        /* ── Stats band ── */
        .sb-stats-band {
          background: linear-gradient(135deg, var(--navy), var(--blue));
          padding: 64px 32px; position: relative; overflow: hidden;
        }
        .sb-stats-band::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(rgba(255,255,255,.035) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .sb-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px,5vw,52px); font-weight: 700;
          color: var(--gold); line-height: 1; display: block;
        }
        .sb-stat-bar {
          width: 32px; height: 3px; background: var(--accent);
          border-radius: 99px; margin: 10px auto 8px;
        }
        .sb-stat-label {
          font-size: 13px; font-weight: 500;
          color: rgba(255,255,255,.65);
        }

        /* ── Ticker ── */
        .sb-ticker-wrap {
          background: var(--navy); overflow: hidden;
          padding: 14px 0; border-top: 1px solid rgba(255,255,255,.06);
          border-bottom: 1px solid rgba(255,255,255,.06);
        }
        .sb-ticker-track {
          display: flex; gap: 0; width: max-content;
          animation: sb-ticker 28s linear infinite;
        }
        .sb-ticker-item {
          display: inline-flex; align-items: center; gap: 12px;
          padding: 0 32px; white-space: nowrap;
          font-size: 12.5px; font-weight: 600;
          color: rgba(255,255,255,.55); letter-spacing: .3px;
        }
        .sb-ticker-sep {
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--accent); flex-shrink: 0;
        }

        /* ── How it works steps ── */
        .sb-step-num {
          width: 64px; height: 64px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700;
          margin: 0 auto 20px; position: relative; z-index: 1;
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          box-shadow: 0 4px 16px rgba(37,99,196,.18);
        }
        .sb-step-wrap:hover .sb-step-num { transform: scale(1.12); }

        /* ── FAQ accordion ── */
        .sb-faq-item {
          border: 1px solid var(--border);
          border-radius: 14px; overflow: hidden;
          background: #f8faff;
          transition: border-color .2s, background .2s;
        }
        .sb-faq-item[open] {
          border-color: var(--mid);
          background: var(--white);
          box-shadow: 0 4px 16px rgba(37,99,196,.08);
        }
        .sb-faq-summary {
          padding: 18px 22px;
          display: flex; align-items: center;
          justify-content: space-between; cursor: pointer;
          font-weight: 600; font-size: 14.5px;
          color: var(--navy); list-style: none;
          gap: 12px; user-select: none;
        }
        .sb-faq-summary::-webkit-details-marker { display: none; }
        .sb-faq-chevron {
          width: 30px; height: 30px; border-radius: 50%;
          background: var(--light); border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; color: var(--mid); font-size: 14px;
          transition: all .3s ease;
        }
        .sb-faq-item[open] .sb-faq-chevron {
          background: var(--navy); color: #fff;
          border-color: var(--navy); transform: rotate(45deg);
        }
        .sb-faq-body {
          padding: 0 22px 18px;
          font-size: 13.5px; color: var(--muted); line-height: 1.75;
        }

        /* ── Testimonial band ── */
        .sb-testi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
          gap: 20px;
        }

        /* ── Section wrapper ── */
        .sb-section { padding: 96px 32px; }
        .sb-section-inner { max-width: 1200px; margin: 0 auto; }
        .sb-center { text-align: center; display: flex; flex-direction: column; align-items: center; }

        /* ── Divider ── */
        .sb-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, var(--border), transparent);
          max-width: 1200px; margin: 0 auto;
        }

        /* ── CTA Section  ── */
        .sb-cta-band {
          background: linear-gradient(135deg, var(--navy) 0%, var(--blue) 55%, #1d5fb8 100%);
          padding: 88px 32px; position: relative; overflow: hidden;
          text-align: center;
        }
        .sb-cta-band::before {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 80% at 50% 110%, rgba(232,146,58,.18) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 10% 10%,  rgba(37,99,196,.25) 0%, transparent 60%);
        }
        .sb-cta-band::after {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        /* ── Responsive ── */
        @media(max-width:900px) {
          .sb-features-grid { grid-template-columns: repeat(2,1fr) !important; }
          .sb-stats-grid    { grid-template-columns: repeat(2,1fr) !important; }
          .sb-steps-grid    { grid-template-columns: repeat(2,1fr) !important; }
          .sb-faq-grid      { grid-template-columns: 1fr !important; }
          .sb-step-connector{ display: none !important; }
        }
        @media(max-width:600px) {
          .sb-section       { padding: 64px 20px !important; }
          .sb-features-grid { grid-template-columns: 1fr !important; }
          .sb-stats-grid    { grid-template-columns: repeat(2,1fr) !important; }
          .sb-steps-grid    { grid-template-columns: repeat(2,1fr) !important; }
          .sb-cta-btn-row   { flex-direction: column !important; align-items: center !important; }
        }
      `}</style>

      <div className="sb-page">

        {/* ── HERO (existing component) ── */}
        <Hero />

        {/* ── TICKER BAND ── */}
        <div className="sb-ticker-wrap">
          <div className="sb-ticker-track">
            {[...Array(2)].map((_, pass) => (
              ['UGC-DEB Approved Programs', 'Free Career Counselling', '9+ Partner Universities',
               'Distance • Online • Regular', 'NAAC Accredited Universities', 'B.Ed • M.Ed • MBA • BCA • B.Com',
               '100% Admission Support', 'Haryana • Rajasthan • Gujarat • MP • Sikkim'
              ].map((item, i) => (
                <span key={`${pass}-${i}`} className="sb-ticker-item">
                  <span className="sb-ticker-sep" />
                  {item}
                </span>
              ))
            ))}
          </div>
        </div>

        {/* ── WHY CHOOSE US ── */}
        <section className="sb-section" style={{ background: '#fff' }}>
          <div className="sb-section-inner">
            <div className="sb-center sb-anim-1" style={{ marginBottom: 56 }}>
              <div className="sb-label">
                <span className="sb-label-dot" />
                Our Promise
              </div>
              <h2 className="sb-heading">
                Why Choose <em>Scholar Bucket</em>?
              </h2>
              <p className="sb-sub" style={{ textAlign: 'center' }}>
                We are committed to making quality education accessible to everyone.
                Here's what makes us the trusted choice for thousands of students.
              </p>
            </div>

            <div
              className="sb-features-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}
            >
              {[
                { icon: '🎓', bg: '#e8f4fc', title: 'Expert Counselling',   desc: 'Free personalized career guidance from experienced education counsellors who understand your goals.',      link: 'Talk to a counsellor' },
                { icon: '✅', bg: '#e8f6ee', title: '100% Admission',       desc: 'Guaranteed admission support with complete documentation assistance — we handle every step for you.',      link: 'See how it works'    },
                { icon: '🏆', bg: '#fff8e1', title: 'Top Universities',      desc: 'Partnerships with UGC approved and NAAC A+ accredited institutions across India.',                          link: 'View universities'   },
                { icon: '💼', bg: '#f0e8fc', title: 'Flexible Options',      desc: 'Regular, Distance, Online, and Open education modes so you can learn without pausing your life or work.',   link: 'Explore courses'     },
              ].map((f) => (
                <div key={f.title} className="sb-feature-card">
                  <div className="sb-feature-icon" style={{ background: f.bg }}>{f.icon}</div>
                  <div className="sb-feature-title">{f.title}</div>
                  <div className="sb-feature-desc">{f.desc}</div>
                  <a href="#" className="sb-feature-link">{f.link} →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS BAND ── */}
        <div className="sb-stats-band">
          <div
            className="sb-stats-grid"
            style={{
              maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1,
              display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32,
            }}
          >
            {[
              ['1000+', 'Students Enrolled'],
              ['9+',    'University Partners'],
              ['100%',  'Admission Success'],
              ['3+',    'Years of Excellence'],
            ].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <span className="sb-stat-num">{num}</span>
                <div className="sb-stat-bar" />
                <div className="sb-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sb-divider" />

        {/* ── POPULAR COURSES ── */}
        <section className="sb-section" style={{ background: '#f8faff' }}>
          <div className="sb-section-inner">
            <div
              style={{
                display: 'flex', alignItems: 'flex-end',
                justifyContent: 'space-between', flexWrap: 'wrap',
                gap: 20, marginBottom: 48,
              }}
            >
              <div>
                <div className="sb-label">
                  <span className="sb-label-dot" />
                  Trending Now
                </div>
                <h2 className="sb-heading">
                  Popular <em>Courses</em>
                </h2>
                <p className="sb-sub">
                  Our most sought-after programs — chosen by thousands of students.
                </p>
              </div>
              <Link href="/courses" className="sb-btn-outline">
                All Courses →
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 20, marginBottom: 8 }}>
              {popularCourses.slice(10, 16).map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        <div className="sb-divider" />

        {/* ── FEATURED UNIVERSITIES ── */}
        <section className="sb-section" style={{ background: '#fff' }}>
          <div className="sb-section-inner">
            <div
              style={{
                display: 'flex', alignItems: 'flex-end',
                justifyContent: 'space-between', flexWrap: 'wrap',
                gap: 20, marginBottom: 48,
              }}
            >
              <div>
                <div className="sb-label">
                  <span className="sb-label-dot" />
                  Verified Partners
                </div>
                <h2 className="sb-heading">
                  Our <em>Partner Universities</em>
                </h2>
                <p className="sb-sub">
                  Every institution we work with is UGC approved and NAAC accredited.
                </p>
              </div>
              <Link href="/universities" className="sb-btn-outline">
                All Universities →
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 20 }}>
              {featuredUniversities.slice(0, 6).map((university) => (
                <UniversityCard key={university.id} university={university} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BAND 1 ── */}
        <div className="sb-cta-band">
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(232,146,58,.15)', border: '1px solid rgba(232,146,58,.3)',
                borderRadius: 99, padding: '5px 14px',
                fontSize: 12, fontWeight: 700, color: '#f5c842',
                letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#e8923a', animation: 'sb-popPulse 2s ease infinite' }} />
              Admissions Open Now
            </div>
            <h2 className="sb-heading sb-heading-white" style={{ textAlign: 'center' }}>
              Ready to Start Your<br /><em>Education Journey?</em>
            </h2>
            <p className="sb-sub sb-sub-white" style={{ textAlign: 'center', margin: '14px auto 36px' }}>
              Get free expert counselling and find the perfect course + university match for your career goals.
            </p>
            <div
              className="sb-cta-btn-row"
              style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <Link href="/apply-now" className="sb-btn-primary">⚡ Apply Now — Free</Link>
              <Link href="/courses" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,.1)', backdropFilter: 'blur(8px)',
                border: '1.5px solid rgba(255,255,255,.2)',
                color: '#fff', fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700, fontSize: 14.5, padding: '13px 26px',
                borderRadius: 12, textDecoration: 'none', transition: 'all .25s ease',
              }}>
                📚 Browse Courses
              </Link>
            </div>
          </div>
        </div>

        {/* ── TESTIMONIALS ── */}
        <section className="sb-section" style={{ background: '#f8faff' }}>
          <div className="sb-section-inner">
            <div className="sb-center" style={{ marginBottom: 48 }}>
              <div className="sb-label">
                <span className="sb-label-dot" />
                Student Stories
              </div>
              <h2 className="sb-heading">
                What Our <em>Students Say</em>
              </h2>
              <p className="sb-sub" style={{ textAlign: 'center' }}>
                Don't just take our word for it — hear from students who've transformed their careers.
              </p>
            </div>
            <div className="sb-testi-grid">
              {featuredTestimonials.slice(0, 6).map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        <div className="sb-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="sb-section" style={{ background: '#fff' }}>
          <div className="sb-section-inner">
            <div className="sb-center" style={{ marginBottom: 64 }}>
              <div className="sb-label">
                <span className="sb-label-dot" />
                Our Process
              </div>
              <h2 className="sb-heading">
                How <em>Scholar Bucket Works</em>
              </h2>
              <p className="sb-sub" style={{ textAlign: 'center' }}>
                Our simple 4-step process ensures a smooth admission journey for every student.
              </p>
            </div>

            <div
              style={{ position: 'relative' }}
            >
              {/* Connector line */}
              <div
                className="sb-step-connector"
                style={{
                  position: 'absolute', top: 31,
                  left: 'calc(12.5% + 2px)', right: 'calc(12.5% + 2px)',
                  height: 2,
                  background: 'linear-gradient(to right, #2563c4, #e8923a)',
                  zIndex: 0,
                }}
              />
              <div
                className="sb-steps-grid"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}
              >
                {[
                  { num: '1', emoji: '📞', color: '#2563c4', bg: '#e8f4fc', title: 'Contact Us',      desc: 'Call, WhatsApp, or visit our office for a free counselling session.'  },
                  { num: '2', emoji: '🎯', color: '#1a4731', bg: '#e8f6ee', title: 'Choose Course',   desc: 'Get expert guidance to select the right course and university for you.' },
                  { num: '3', emoji: '📋', color: '#5c2a0a', bg: '#fdf0e8', title: 'Documentation',  desc: 'We handle all paperwork and admission formalities on your behalf.'       },
                  { num: '4', emoji: '✅', color: '#0c1f3f', bg: '#e8f4fc', title: 'Get Admitted',    desc: 'Receive confirmation and start your educational journey with confidence.'},
                ].map((step, i) => (
                  <div
                    key={i}
                    className="sb-step-wrap"
                    style={{
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', textAlign: 'center',
                      padding: '0 20px', position: 'relative', zIndex: 1, cursor: 'default',
                    }}
                  >
                    <div
                      className="sb-step-num"
                      style={{
                        background: step.bg,
                        border: `3px solid ${step.color}`,
                        color: step.color,
                        fontSize: 22,
                      }}
                    >
                      {step.emoji}
                    </div>
                    {/* Step number badge */}
                    <div style={{
                      position: 'absolute', top: -6, left: '50%',
                      transform: 'translateX(calc(-50% + 22px))',
                      width: 20, height: 20, borderRadius: '50%',
                      background: step.color, color: '#fff',
                      fontSize: 10, fontWeight: 800,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      zIndex: 2, boxShadow: '0 2px 8px rgba(0,0,0,.2)',
                    }}>
                      {step.num}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: '#0c1f3f', marginBottom: 8 }}>
                      {step.title}
                    </div>
                    <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65 }}>
                      {step.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: 52 }}>
              <Link href="/apply-now" className="sb-btn-primary">
                Start My Admission Journey →
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA BAND 2 (secondary) ── */}
        <CTASection variant="secondary" />

        {/* ── FAQ ── */}
        <section className="sb-section" style={{ background: '#f8faff' }}>
          <div className="sb-section-inner">
            <div
              style={{
                display: 'flex', alignItems: 'flex-end',
                justifyContent: 'space-between', flexWrap: 'wrap',
                gap: 20, marginBottom: 48,
              }}
            >
              <div>
                <div className="sb-label">
                  <span className="sb-label-dot" />
                  FAQ
                </div>
                <h2 className="sb-heading">
                  Frequently Asked <em>Questions</em>
                </h2>
                <p className="sb-sub">
                  Quick answers to the most common questions about admissions and our services.
                </p>
              </div>
              <Link href="/faq" className="sb-btn-outline">View All FAQs →</Link>
            </div>

            <div
              className="sb-faq-grid"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}
            >
              {[
                {
                  q: 'Is distance education valid for government jobs?',
                  a: 'Yes! UGC-DEB approved distance education degrees are equally valid for government jobs, higher studies, and private sector employment — just like a regular degree.',
                },
                {
                  q: 'What documents are required for admission?',
                  a: 'Generally: previous academic certificates, Aadhaar card, passport-size photos, and migration certificate if applicable. We provide a complete personalised checklist.',
                },
                {
                  q: 'Do you charge for counselling services?',
                  a: 'Our career counselling and admission guidance are completely FREE. We only collect the university tuition fee for admission processing — no hidden charges.',
                },
                {
                  q: 'Can I work full-time while doing a distance degree?',
                  a: 'Absolutely. Distance programs are designed for working professionals. No fixed attendance. Study at your own pace and appear for exams at nearby centres.',
                },
                {
                  q: 'How long does the admission process take?',
                  a: 'With Scholar Bucket\'s guidance, admission is usually completed in 5–10 working days once all documents are in order. We track everything for you.',
                },
                {
                  q: 'Which programs are the most popular?',
                  a: 'Distance MBA, Distance B.Com, Distance BA, Distance B.Ed, and Distance M.Ed are consistently the most enrolled programs, especially among working students.',
                },
              ].map((faq, i) => (
                <details key={i} className="sb-faq-item">
                  <summary className="sb-faq-summary">
                    <span>{faq.q}</span>
                    <span className="sb-faq-chevron">+</span>
                  </summary>
                  <div className="sb-faq-body">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST FOOTER STRIP ── */}
        <div style={{
          background: '#0c1f3f', padding: '28px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexWrap: 'wrap', gap: 32, fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          {[
            { icon: '🔒', text: 'Secure Admission Process' },
            { icon: '🏛️', text: 'UGC-DEB Verified Universities' },
            { icon: '📞', text: 'Free Counselling, Always' },
            { icon: '⚡', text: 'Fast 5–10 Day Admission' },
          ].map(({ icon, text }) => (
            <div key={text} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.65)',
            }}>
              <span style={{ fontSize: 16 }}>{icon}</span>
              {text}
            </div>
          ))}
        </div>

      </div>
    </>
  );
}