'use client';

import { useState } from 'react';
import Link from 'next/link';

// ─── DATA ────────────────────────────────────────────────────────────────────

const programs = [
  {
    id: 1, title: 'Distance MBA', level: 'pg', duration: '2 Years',
    mode: 'Distance / Online', eligibility: 'Graduation (Any Stream)',
    description: 'Most popular distance program. UGC & AICTE approved management degree for working professionals.',
    icon: '🎓', color: { from: '#3d1a6e', to: '#6a35b5' }, popular: true,
  },
  {
    id: 2, title: 'Distance MCA', level: 'pg', duration: '2 Years',
    mode: 'Distance Learning', eligibility: 'BCA / B.Sc CS / Graduation with Maths',
    description: 'Advanced computer applications for IT professionals seeking higher credentials without leaving work.',
    icon: '💻', color: { from: '#1a4731', to: '#2d7a52' }, popular: false,
  },
  {
    id: 3, title: 'Distance M.Com', level: 'pg', duration: '2 Years',
    mode: 'Distance Learning', eligibility: 'B.Com / BBA',
    description: 'Advanced commerce education in accounting, financial management, and business economics.',
    icon: '📊', color: { from: '#5c2a0a', to: '#b5541e' }, popular: false,
  },
  {
    id: 4, title: 'Distance MA', level: 'pg', duration: '2 Years',
    mode: 'Distance / Open', eligibility: 'BA (Relevant Subject)',
    description: 'Available in English, Hindi, History, Political Science, Sociology, Psychology, and more.',
    icon: '📖', color: { from: '#1e3a5f', to: '#2d6a9f' }, popular: false,
  },
  {
    id: 5, title: 'Distance M.Ed', level: 'education', duration: '2 Years',
    mode: 'Distance Learning', eligibility: 'B.Ed',
    description: 'Advanced teacher education for senior teaching roles, principal positions, and UGC NET eligibility.',
    icon: '🏫', color: { from: '#1a3d5c', to: '#2d6b8f' }, popular: true,
  },
  {
    id: 6, title: 'Distance B.Com', level: 'ug', duration: '3 Years',
    mode: 'Distance Learning', eligibility: '12th Pass',
    description: 'UGC-DEB approved B.Com for working professionals seeking a flexible commerce degree.',
    icon: '💼', color: { from: '#1a4731', to: '#2d7a52' }, popular: true,
  },
  {
    id: 7, title: 'Distance BBA', level: 'ug', duration: '3 Years',
    mode: 'Distance Learning', eligibility: '12th Pass (Any Stream)',
    description: 'Business administration degree with flexible learning for aspiring managers and entrepreneurs.',
    icon: '📈', color: { from: '#5c2a0a', to: '#b5541e' }, popular: false,
  },
  {
    id: 8, title: 'Distance BA', level: 'ug', duration: '3 Years',
    mode: 'Distance / Open', eligibility: '12th Pass (Any Stream)',
    description: 'Arts and humanities graduation in multiple subjects. Ideal for UPSC aspirants and working students.',
    icon: '🎨', color: { from: '#3d1a6e', to: '#6a35b5' }, popular: true,
  },
  {
    id: 9, title: 'Distance BCA', level: 'ug', duration: '3 Years',
    mode: 'Distance Learning', eligibility: '12th Pass (Any Stream)',
    description: 'Computer applications degree for aspiring IT professionals who want to earn while they learn.',
    icon: '🖥️', color: { from: '#1e3a5f', to: '#2d6a9f' }, popular: false,
  },
  {
    id: 10, title: 'Distance B.Ed', level: 'education', duration: '2 Years',
    mode: 'Distance Learning', eligibility: 'Graduation (Any Stream)',
    description: 'NCTE approved B.Ed for government and private school teacher recruitment eligibility.',
    icon: '✏️', color: { from: '#1a4731', to: '#2d7a52' }, popular: true,
  },
];

const universities = [
  { name: 'Partap University',            shortName: 'PU', location: 'Rajasthan',       naac: 'A',  admissionOpen: true  },
  { name: 'CTU University',               shortName: 'CT', location: 'Gujarat',          naac: 'A',  admissionOpen: true  },
  { name: 'ISBM University',              shortName: 'IS', location: 'Chhattisgarh',     naac: 'A',  admissionOpen: true  },
  { name: 'Himalayan Garhwal University', shortName: 'HG', location: 'Uttarakhand',      naac: 'A',  admissionOpen: true  },
  { name: 'Sikkim Alpine University',     shortName: 'SA', location: 'Sikkim',           naac: 'A',  admissionOpen: false },
  { name: 'Mahakoshal University',        shortName: 'MK', location: 'Madhya Pradesh',   naac: 'A',  admissionOpen: true  },
  { name: 'Indira Gandhi University',     shortName: 'IG', location: 'Meerpur, Haryana', naac: 'A',  admissionOpen: true  },
  { name: 'MDU Rohtak',                   shortName: 'MD', location: 'Rohtak, Haryana',  naac: 'A+', admissionOpen: true  },
  { name: 'GJU Hisar',                    shortName: 'GJ', location: 'Hisar, Haryana',   naac: 'A+', admissionOpen: true  },
];

const faqs = [
  { q: 'Is a distance degree valid for government jobs?', a: 'Yes. UGC-DEB approved distance degrees are fully valid for government job applications, UPSC, state PSC exams, and all central government recruitment — exactly like regular degrees.' },
  { q: 'Can I do a distance degree while working full-time?', a: 'Absolutely. There are no mandatory attendance requirements. You study via self-paced materials, and exams are held 1–2 times a year at nearby centres.' },
  { q: 'What is UGC-DEB approval?', a: 'UGC-DEB (Distance Education Bureau) is the regulatory body under UGC that approves and monitors distance education programs in India. Only UGC-DEB approved programs are nationally recognised.' },
  { q: 'How long does admission take?', a: 'With Scholar Bucket\'s guided process, admission is typically completed within 5–10 working days once all documents are submitted. We track your application end to end.' },
  { q: 'Which programs are most popular?', a: 'Distance MBA, Distance B.Com, Distance BA, Distance B.Ed, and Distance M.Ed are among the most enrolled programs, especially for working professionals.' },
  { q: 'Do I need to attend any classes physically?', a: 'Most distance programs require no physical attendance. Some universities may require you to appear for examinations at designated nearby centres.' },
  { q: 'What documents are required for admission?', a: '10th & 12th marksheets, graduation certificate (for PG), Aadhaar card, passport-size photos, and migration certificate if applicable. We provide a complete checklist.' },
  { q: 'Is the fee structure affordable?', a: 'Yes. Distance programs typically cost ₹8,000–₹40,000 per year depending on the program and university — significantly lower than regular college fees.' },
];

const filterTabs = [
  { id: 'all',       label: 'All Programs'         },
  { id: 'ug',        label: 'Undergraduate (UG)'   },
  { id: 'pg',        label: 'Postgraduate (PG)'     },
  { id: 'education', label: 'Education (B.Ed / M.Ed)' },
];

const whyFeatures = [
  { icon: '📅', bg: '#e8f4fc', title: 'Flexible Schedule',      desc: 'Study at your own pace — mornings, evenings, or weekends. No fixed class timings.' },
  { icon: '💼', bg: '#e8f6ee', title: 'Work While You Study',   desc: 'Keep your job or business running while earning a nationally recognised degree.' },
  { icon: '💰', bg: '#fdf0e8', title: 'Affordable Fees',        desc: 'Distance programs cost a fraction of regular college fees with no hostel or commute costs.' },
  { icon: '🎓', bg: '#f0e8fc', title: 'Equal Value as Regular', desc: 'UGC-DEB approved degrees are recognised by all employers, government bodies, and universities.' },
];

const checklist = [
  'Free career counselling & program matching',
  'End-to-end admission assistance',
  'UGC & NAAC-accredited universities only',
  'Study material & online resource support',
  'Exam preparation guidance',
  'Post-admission support throughout the course',
  'Document verification & enrollment tracking',
];

const howSteps = [
  { emoji: '🎯', title: 'Choose Your Program',  desc: 'Browse courses and tell us your educational background and career goal.' },
  { emoji: '📞', title: 'Free Counselling',      desc: 'Our experts match you with the right university and program for your profile.' },
  { emoji: '📋', title: 'Submit Documents',      desc: 'We guide you on required documents and fill your application on your behalf.' },
  { emoji: '✅', title: 'Get Enrolled',          desc: 'Receive your enrollment confirmation, student ID, and study materials.' },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function ProgramCard({ program }) {
  const { from, to } = program.color;
  return (
    <div style={{
      background: '#fff',
      borderRadius: 18,
      border: '1px solid #e2e8f0',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease',
    }}
      className="prog-card"
    >
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
        padding: '20px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }} />
        {program.popular && (
          <div style={{
            position: 'absolute', top: 12, right: 12, zIndex: 2,
            background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.3)', borderRadius: 99,
            padding: '2px 10px', fontSize: 10, fontWeight: 700, color: '#fff',
            display: 'flex', alignItems: 'center', gap: 4,
          }}>
            <span style={{
              width: 5, height: 5, borderRadius: '50%', background: '#ffd700',
              animation: 'popPulse 2s ease infinite',
            }} />
            Popular
          </div>
        )}
        <div style={{
          position: 'relative', zIndex: 1,
          width: 46, height: 46, borderRadius: 12,
          background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(6px)',
          border: '1.5px solid rgba(255,255,255,0.28)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 22, marginBottom: 12,
        }}>
          {program.icon}
        </div>
        <div style={{
          position: 'relative', zIndex: 1,
          fontFamily: "'Playfair Display', serif",
          fontSize: 15, fontWeight: 600, color: '#fff', lineHeight: 1.3,
        }}>
          {program.title}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '16px 20px 20px', display: 'flex', flexDirection: 'column', flex: 1, gap: 10 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {[`⏱ ${program.duration}`, `📡 ${program.mode}`].map((chip, i) => (
            <span key={i} style={{
              display: 'flex', alignItems: 'center', gap: 4,
              fontSize: 11, fontWeight: 500, padding: '3px 9px',
              borderRadius: 6, background: '#f0f5ff', border: '1px solid #e2e8f0', color: '#64748b',
            }}>{chip}</span>
          ))}
        </div>
        <p style={{ fontSize: 12.5, color: '#64748b', lineHeight: 1.6, margin: 0,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {program.description}
        </p>
        <div style={{
          fontSize: 11.5, fontWeight: 500, color: '#0f2644',
          background: '#f0f5ff', border: '1px solid rgba(37,99,196,0.15)',
          padding: '5px 10px', borderRadius: 7,
          display: 'flex', alignItems: 'center', gap: 5,
        }}>
          👤 {program.eligibility}
        </div>
        <Link
          href={`/apply-now?course=${encodeURIComponent(program.title)}`}
          style={{
            marginTop: 'auto',
            display: 'block', textAlign: 'center',
            background: `linear-gradient(135deg, ${from}, ${to})`,
            color: '#fff', fontWeight: 700, fontSize: 13,
            padding: '10px 14px', borderRadius: 10, textDecoration: 'none',
            transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
            boxShadow: '0 3px 10px rgba(0,0,0,0.12)',
          }}
        >
          Apply Now →
        </Link>
      </div>
    </div>
  );
}

function UniCard({ uni }) {
  const naacStyle = uni.naac === 'A+'
    ? { bg: '#f3e5f5', color: '#6a1b9a', border: '#ab47bc' }
    : { bg: '#e8f5e9', color: '#1b5e20', border: '#66bb6a' };
  return (
    <div style={{
      padding: 22, borderRadius: 16,
      border: '1px solid #e2e8f0', background: '#f8faff',
      display: 'flex', flexDirection: 'column', gap: 12,
      transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
    }}
      className="uni-mini-card"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12, flexShrink: 0,
          background: 'linear-gradient(135deg, #0f2644, #1a4a8a)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#fff',
        }}>
          {uni.shortName}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: '#0f2644', lineHeight: 1.3 }}>{uni.name}</div>
          <div style={{ fontSize: 11.5, color: '#64748b', display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}>
            📍 {uni.location}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
        <span style={{ fontSize: 10.5, fontWeight: 600, padding: '2px 9px', borderRadius: 99, background: '#e8f4fc', color: '#1a4a6e', border: '1px solid #b8d9f0' }}>
          UGC Approved
        </span>
        <span style={{ fontSize: 10.5, fontWeight: 600, padding: '2px 9px', borderRadius: 99, background: naacStyle.bg, color: naacStyle.color, border: `1px solid ${naacStyle.border}` }}>
          NAAC {uni.naac}
        </span>
        {uni.admissionOpen && (
          <span style={{ fontSize: 10.5, fontWeight: 600, padding: '2px 9px', borderRadius: 99, background: '#fff8e1', color: '#e65100', border: '1px solid #ffcc02' }}>
            ● Admissions Open
          </span>
        )}
      </div>
      <Link
        href={`/apply-now?university=${encodeURIComponent(uni.name)}`}
        style={{
          display: 'block', textAlign: 'center',
          background: '#0f2644', color: '#fff',
          fontWeight: 600, fontSize: 12.5, padding: '9px 12px',
          borderRadius: 9, textDecoration: 'none',
          transition: 'background 0.25s ease',
        }}
      >
        Enquire Now →
      </Link>
    </div>
  );
}

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div style={{
      border: `1px solid ${isOpen ? '#2563c4' : '#e2e8f0'}`,
      borderRadius: 14, overflow: 'hidden',
      background: isOpen ? '#fff' : '#f8faff',
      transition: 'border-color 0.2s, background 0.2s',
    }}>
      <div
        onClick={onToggle}
        style={{
          padding: '18px 22px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', cursor: 'pointer',
          fontWeight: 600, fontSize: 14, color: '#0f2644', gap: 12, userSelect: 'none',
        }}
      >
        <span>{faq.q}</span>
        <span style={{
          width: 28, height: 28, borderRadius: '50%',
          background: isOpen ? '#0f2644' : '#f0f5ff',
          border: `1px solid ${isOpen ? '#0f2644' : '#e2e8f0'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, fontSize: 16, color: isOpen ? '#fff' : '#2563c4',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: 'all 0.3s ease',
        }}>+</span>
      </div>
      <div style={{
        maxHeight: isOpen ? 200 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.3s ease',
      }}>
        <div style={{ padding: '0 22px 18px', fontSize: 13.5, color: '#64748b', lineHeight: 1.7 }}>
          {faq.a}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────

export default function DistanceEducationPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [openFaq, setOpenFaq]           = useState(null);
  const [phone, setPhone]               = useState('');

  const filteredPrograms = activeFilter === 'all'
    ? programs
    : programs.filter(p => p.level === activeFilter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; background: #f8faff; color: #1e293b; overflow-x: hidden; }

        @keyframes popPulse   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.5)} }
        @keyframes glowPulse  { 0%,100%{opacity:.6;transform:translateY(-50%) scale(1)} 50%{opacity:1;transform:translateY(-50%) scale(1.08)} }
        @keyframes fadeUp     { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }

        .anim-1 { animation: fadeUp 0.6s 0.0s ease both; }
        .anim-2 { animation: fadeUp 0.6s 0.1s ease both; }
        .anim-3 { animation: fadeUp 0.6s 0.2s ease both; }
        .anim-4 { animation: fadeUp 0.6s 0.3s ease both; }
        .anim-5 { animation: fadeUp 0.6s 0.4s ease both; }

        .prog-card:hover  { transform: translateY(-5px) !important; box-shadow: 0 16px 40px rgba(0,0,0,0.1) !important; border-color: transparent !important; }
        .uni-mini-card:hover { border-color: #2563c4 !important; background: #fff !important; box-shadow: 0 8px 28px rgba(37,99,196,0.1) !important; transform: translateY(-4px) !important; }
        .why-feature:hover { border-color: #2563c4 !important; background: #fff !important; box-shadow: 0 8px 24px rgba(37,99,196,0.1) !important; transform: translateX(6px) !important; }
        .how-step:hover .step-circle { background: #0f2644 !important; color: #f5c842 !important; border-color: #0f2644 !important; transform: scale(1.1) !important; }
        .btn-hover:hover { transform: translateY(-3px) scale(1.03) !important; }
        .prog-btn-hover:hover { filter: brightness(1.1); transform: translateY(-2px) !important; }

        @media(max-width:900px) {
          .hero-grid-layout { grid-template-columns: 1fr !important; }
          .hero-visual-panel { display: none !important; }
          .why-two-col { grid-template-columns: 1fr !important; }
          .faq-two-col { grid-template-columns: 1fr !important; }
          .stats-four { grid-template-columns: repeat(2,1fr) !important; }
          .nav-links-desktop { display: none !important; }
          .how-connector { display: none !important; }
        }
        @media(max-width:600px) {
          .cta-row-flex { flex-direction: column !important; }
          .hero-stats-row { gap: 20px !important; }
        }
      `}</style>

 

      {/* ── HERO ── */}
      <section style={{
        position: 'relative', minHeight: '100vh', display: 'flex',
        alignItems: 'center', overflow: 'hidden',
        background: '#0f2644', paddingTop: 64,
      }}>
        {/* bg layers */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(37,99,196,0.25) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(232,146,58,0.12) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div style={{
          position: 'absolute', width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,196,0.2) 0%, transparent 70%)',
          top: '50%', right: '5%', transform: 'translateY(-50%)',
          animation: 'glowPulse 4s ease-in-out infinite',
        }} />

        <div className="hero-grid-layout" style={{
          position: 'relative', zIndex: 2, maxWidth: 1200,
          margin: '0 auto', padding: '80px 32px',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'center', width: '100%',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          {/* Left */}
          <div>
            <div className="anim-1" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(232,146,58,0.15)', border: '1px solid rgba(232,146,58,0.3)',
              borderRadius: 99, padding: '5px 14px',
              fontSize: 12, fontWeight: 700, color: '#f5c842',
              letterSpacing: 1, textTransform: 'uppercase', marginBottom: 24,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#e8923a', animation: 'popPulse 2s ease infinite' }} />
              UGC-DEB Approved Programs
            </div>
            <h1 className="anim-2" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700,
              color: '#fff', lineHeight: 1.15, marginBottom: 20,
            }}>
              Learn on Your<br />
              <em style={{ fontStyle: 'italic', color: '#f5c842' }}>Own Terms.</em><br />
              Earn a Real Degree.
            </h1>
            <p className="anim-3" style={{
              fontSize: 17, color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.7, marginBottom: 36, maxWidth: 480,
            }}>
              India's most trusted distance education consultancy. We connect you to UGC-approved universities, handle your admission, and support you throughout your academic journey.
            </p>
            <div className="anim-4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="#cta" className="btn-hover" style={{
                background: '#e8923a', color: '#fff', padding: '14px 28px',
                borderRadius: 12, fontWeight: 700, fontSize: 15, textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                boxShadow: '0 8px 24px rgba(232,146,58,0.35)',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                ⚡ Apply Now — Free
              </Link>
              <Link href="#programs" style={{
                background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.2)',
                color: '#fff', padding: '14px 28px', borderRadius: 12,
                fontWeight: 600, fontSize: 15, textDecoration: 'none',
                transition: 'all 0.25s ease', display: 'flex', alignItems: 'center', gap: 8,
              }}>
                📚 Explore Programs
              </Link>
            </div>
            <div className="anim-5 hero-stats-row" style={{ display: 'flex', gap: 32, marginTop: 48 }}>
              {[['9+', 'Partner Universities'], ['10+', 'Distance Programs'], ['100%', 'UGC Approved']].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#f5c842', lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 4, fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Floating preview cards */}
          <div className="hero-visual-panel" style={{ position: 'relative', height: 420 }}>
            {/* Main card */}
            <div style={{
              position: 'absolute', top: 20, left: 0, right: 0,
              background: 'linear-gradient(135deg, rgba(26,74,138,0.6), rgba(37,99,196,0.4))',
              backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: 16, padding: 28, color: '#fff',
            }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, marginBottom: 16 }}>
                Popular Distance Programs
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  ['Distance MBA',   'Most Popular', '#f5c842', 'rgba(245,200,66,0.2)',   'rgba(245,200,66,0.3)'],
                  ['Distance B.Com', 'Open Now',     '#6dffb0', 'rgba(76,175,130,0.2)',   'rgba(76,175,130,0.3)'],
                  ['Distance BCA',   '3 Years',      '#f5c842', 'rgba(245,200,66,0.2)',   'rgba(245,200,66,0.3)'],
                  ['Distance B.Ed',  'Open Now',     '#6dffb0', 'rgba(76,175,130,0.2)',   'rgba(76,175,130,0.3)'],
                  ['Distance M.Ed',  'Popular',      '#f5c842', 'rgba(245,200,66,0.2)',   'rgba(245,200,66,0.3)'],
                ].map(([title, badge, badgeColor, badgeBg, badgeBorder]) => (
                  <div key={title} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '10px 14px', borderRadius: 10,
                    background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)',
                    fontSize: 13, fontWeight: 500,
                  }}>
                    <span>{title}</span>
                    <span style={{
                      fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99,
                      background: badgeBg, color: badgeColor, border: `1px solid ${badgeBorder}`,
                    }}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Bottom-left card */}
            <div style={{
              position: 'absolute', bottom: 20, left: 0, width: 180,
              background: 'rgba(232,146,58,0.15)', border: '1px solid rgba(232,146,58,0.3)',
              borderRadius: 16, padding: 20, color: '#fff',
            }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#f5c842' }}>₹ Low</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 3 }}>Affordable Fee Structure</div>
            </div>
            {/* Bottom-right card */}
            <div style={{
              position: 'absolute', bottom: 20, right: 0, width: 180,
              background: 'rgba(37,99,196,0.2)', border: '1px solid rgba(37,99,196,0.3)',
              borderRadius: 16, padding: 20, color: '#fff',
            }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#f5c842' }}>Work+</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 3 }}>Study simultaneously</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY DISTANCE EDUCATION ── */}
      <section style={{ padding: '96px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionLabel>Why Distance Education?</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: '#0f2644', lineHeight: 1.2, marginBottom: 12 }}>
            The Smart Way to <em style={{ fontStyle: 'italic', color: '#2563c4' }}>Earn Your Degree</em>
          </h2>
          <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7, maxWidth: 600, marginBottom: 56 }}>
            Distance education gives you a UGC-recognised degree with the freedom to learn around your life — not the other way around.
          </p>
          <div className="why-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            {/* Features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {whyFeatures.map((f) => (
                <div key={f.title} className="why-feature" style={{
                  display: 'flex', gap: 16, padding: 20,
                  borderRadius: 16, border: '1px solid #e2e8f0',
                  background: '#f8faff', transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                  cursor: 'default',
                }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 12, background: f.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20, flexShrink: 0,
                  }}>{f.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: '#0f2644', marginBottom: 4 }}>{f.title}</div>
                    <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Checklist panel */}
            <div style={{
              background: 'linear-gradient(135deg, #0f2644, #1a4a8a)',
              borderRadius: 24, padding: 40, overflow: 'hidden', position: 'relative',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }} />
              <div style={{ position: 'relative', zIndex: 1, fontFamily: "'Playfair Display', serif", fontSize: 22, color: '#fff', marginBottom: 28 }}>
                What You Get with Scholar Bucket
              </div>
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {checklist.map((item) => (
                  <div key={item} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '11px 16px',
                    background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 10, fontSize: 13.5, fontWeight: 500, color: 'rgba(255,255,255,0.9)',
                  }}>
                    <span style={{
                      width: 22, height: 22, borderRadius: '50%',
                      background: 'rgba(109,255,176,0.2)', border: '1px solid rgba(109,255,176,0.4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, fontSize: 11, color: '#6dffb0',
                    }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <div style={{
        background: 'linear-gradient(135deg, #0f2644, #1a4a8a)',
        padding: '64px 32px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        <div className="stats-four" style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          gap: 32, position: 'relative', zIndex: 1,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          {[['9+','Partnered Universities'], ['10+','Distance Programs'], ['100%','UGC-DEB Approved'], ['Free','Admission Counselling']].map(([num, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 700, color: '#f5c842', lineHeight: 1, display: 'block' }}>{num}</span>
              <div style={{ width: 32, height: 2, background: '#e8923a', margin: '10px auto 8px', borderRadius: 99 }} />
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROGRAMS ── */}
      <section id="programs" style={{ padding: '96px 32px', background: '#f8faff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionLabel>Distance Programs</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: '#0f2644', lineHeight: 1.2, marginBottom: 12 }}>
            Browse All <em style={{ fontStyle: 'italic', color: '#2563c4' }}>Distance Courses</em>
          </h2>
          <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7, maxWidth: 600 }}>
            All programs are UGC-DEB approved and equivalent to regular degree programs.
          </p>
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '32px 0 40px' }}>
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                style={{
                  padding: '8px 20px', borderRadius: 99,
                  border: `1.5px solid ${activeFilter === tab.id ? '#0f2644' : '#e2e8f0'}`,
                  background: activeFilter === tab.id ? '#0f2644' : '#fff',
                  color: activeFilter === tab.id ? '#fff' : '#64748b',
                  fontSize: 13, fontWeight: 600, cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {filteredPrograms.map(prog => <ProgramCard key={prog.id} program={prog} />)}
          </div>
        </div>
      </section>

      {/* ── UNIVERSITIES ── */}
      <section style={{ padding: '96px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionLabel>Partner Universities</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: '#0f2644', lineHeight: 1.2, marginBottom: 12 }}>
            9 Trusted <em style={{ fontStyle: 'italic', color: '#2563c4' }}>Institutions</em>
          </h2>
          <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7, maxWidth: 600, marginBottom: 48 }}>
            Every university we work with is UGC approved. We verify accreditation, NAAC rating, and program recognition before partnering.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 20 }}>
            {universities.map(uni => <UniCard key={uni.name} uni={uni} />)}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: '96px 32px', background: '#f8faff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionLabel>Our Process</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: '#0f2644', lineHeight: 1.2, marginBottom: 12 }}>
            Get Admitted in <em style={{ fontStyle: 'italic', color: '#2563c4' }}>4 Simple Steps</em>
          </h2>
          <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7, maxWidth: 600, marginBottom: 56 }}>
            We handle the complexity so you don't have to. From choosing a program to receiving your enrollment kit.
          </p>
          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
            <div className="how-connector" style={{
              position: 'absolute', top: 35, left: 'calc(12.5% + 4px)', right: 'calc(12.5% + 4px)',
              height: 2, background: 'linear-gradient(to right, #2563c4, #e8923a)', zIndex: 0,
            }} />
            {howSteps.map((step, i) => (
              <div key={i} className="how-step" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 16px', position: 'relative', zIndex: 1 }}>
                <div className="step-circle" style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: '#fff', border: '3px solid #2563c4',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 26, marginBottom: 20,
                  boxShadow: '0 4px 16px rgba(37,99,196,0.15)',
                  transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                }}>
                  {step.emoji}
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#0f2644', marginBottom: 8 }}>{step.title}</div>
                <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '96px 32px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionLabel>FAQ</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: '#0f2644', lineHeight: 1.2, marginBottom: 12 }}>
            Common <em style={{ fontStyle: 'italic', color: '#2563c4' }}>Questions</em>
          </h2>
          <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.7, maxWidth: 600, marginBottom: 48 }}>
            Everything you need to know about distance education and admissions.
          </p>
          <div className="faq-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" style={{
        background: 'linear-gradient(135deg, #0f2644 0%, #1a4a8a 60%, #2563c4 100%)',
        padding: '100px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 80% at 50% 100%, rgba(232,146,58,0.15) 0%, transparent 60%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 680, margin: '0 auto', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(232,146,58,0.15)', border: '1px solid rgba(232,146,58,0.3)',
            borderRadius: 99, padding: '5px 14px',
            fontSize: 12, fontWeight: 700, color: '#f5c842',
            letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#e8923a', animation: 'popPulse 2s ease infinite' }} />
            Admissions Open Now
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(30px,4vw,46px)', fontWeight: 700,
            color: '#fff', lineHeight: 1.2, marginBottom: 16,
          }}>
            Start Your Distance<br />
            <em style={{ fontStyle: 'italic', color: '#f5c842' }}>Education Journey Today</em>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 40 }}>
            Enter your number below and our counsellor will call you back within 30 minutes — completely free.
          </p>
          <div className="cta-row-flex" style={{ display: 'flex', gap: 12, maxWidth: 500, margin: '0 auto 16px' }}>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              style={{
                flex: 1, padding: '14px 18px', borderRadius: 12,
                border: '1.5px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
                color: '#fff', fontSize: 14, outline: 'none',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            />
            <button
              style={{
                background: '#e8923a', color: '#fff', fontWeight: 700, fontSize: 14,
                padding: '14px 24px', borderRadius: 12, border: 'none', cursor: 'pointer',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                boxShadow: '0 6px 20px rgba(232,146,58,0.4)', whiteSpace: 'nowrap',
              }}
            >
              Get Free Counselling →
            </button>
          </div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
            🔒 No spam. We only call once to help you choose the right program.
          </p>
        </div>
      </section>

      {/* ── FOOTER STRIP ── */}
      <div style={{
        background: '#080f1a', padding: '24px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12, fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: 'rgba(255,255,255,0.7)' }}>Scholar Bucket</span>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
          © 2025 Scholar Bucket. All rights reserved. | Shahpur Doyam, Narnaul, Haryana 123001
        </span>
      </div>
    </>
  );
}

// ─── HELPER ──────────────────────────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontSize: 11, fontWeight: 800, letterSpacing: 1.5,
      textTransform: 'uppercase', color: '#2563c4',
      background: 'rgba(37,99,196,0.08)', border: '1px solid rgba(37,99,196,0.15)',
      padding: '4px 14px', borderRadius: 99, marginBottom: 14,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      {children}
    </div>
  );
}