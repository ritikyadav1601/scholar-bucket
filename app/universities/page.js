'use client';

import { useState, useEffect } from 'react';
import UniversityCard from '@/components/UniversityCard';
import CTASection from '@/components/CTASection';
import { universities, universityTypes, getFeaturedUniversities } from '@/data/universities';

export default function UniversitiesPage() {
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUniversities, setFilteredUniversities] = useState(universities);

  useEffect(() => {
    let result = selectedType === 'all'
      ? universities
      : universities.filter(uni => uni.type === selectedType);

    if (searchQuery.trim()) {
      result = result.filter(uni =>
        uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.programs.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredUniversities(result);
  }, [selectedType, searchQuery]);

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

        .universities-page { font-family: 'Plus Jakarta Sans', sans-serif; }
        .universities-page * { box-sizing: border-box; }

        /* Animations */
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes popPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.5)} }

        /* Section utils */
        .uni-section { padding: 96px 32px; }
        .uni-inner { max-width: 1200px; margin: 0 auto; }

        .uni-label {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 11px; font-weight: 800; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--mid);
          background: rgba(37,99,196,.08); border: 1px solid rgba(37,99,196,.18);
          padding: 4px 14px; border-radius: 99px; margin-bottom: 14px;
        }
        .uni-label-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); animation: popPulse 2s ease infinite;
        }

        .uni-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px,4vw,44px); font-weight: 700;
          color: var(--navy); line-height: 1.18; margin-bottom: 12px;
        }
        .uni-heading em { font-style: italic; color: var(--mid); }
        .uni-heading-white { color: #fff; }
        .uni-heading-white em { color: var(--gold); }

        .uni-sub {
          font-size: 16px; color: var(--muted);
          line-height: 1.7; max-width: 600px;
        }
        .uni-sub-white { color: rgba(255,255,255,.65); }

        /* Hero */
        .uni-hero {
          position: relative; min-height: 55vh;
          display: flex; align-items: center;
          overflow: hidden; background: var(--navy);
          padding-top: 68px;
        }
        .uni-hero::before {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 60% 40%, rgba(37,99,196,.28) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 20% 80%, rgba(232,146,58,.12) 0%, transparent 60%);
        }
        .uni-hero::after {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .uni-hero-content {
          position: relative; z-index: 2;
          max-width: 900px; margin: 0 auto;
          padding: 80px 32px; text-align: center;
        }
        .uni-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(232,146,58,.15); border: 1px solid rgba(232,146,58,.3);
          border-radius: 99px; padding: 5px 14px;
          font-size: 12px; font-weight: 700; color: var(--gold);
          letter-spacing: 1px; text-transform: uppercase; margin-bottom: 22px;
        }
        .uni-hero-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); animation: popPulse 2s ease infinite;
        }
        .uni-hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px,5vw,56px); font-weight: 700;
          color: #fff; line-height: 1.15; margin-bottom: 20px;
        }
        .uni-hero-h1 em { font-style: italic; color: var(--gold); }
        .uni-hero-p {
          font-size: 17px; color: rgba(255,255,255,.65);
          line-height: 1.7; max-width: 640px; margin: 0 auto;
        }

        /* Search & Filter bar */
        .uni-filter-bar {
          background: var(--white);
          border-bottom: 1px solid var(--border);
          padding: 32px;
          top: 68px;
          z-index: 50;
          box-shadow: 0 2px 12px rgba(0,0,0,.02);
        }
        .uni-filter-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Search input */
        .uni-search-wrap {
          position: relative;
          max-width: 420px;
          margin-bottom: 24px;
        }
        .uni-search-input {
          width: 100%;
          padding: 13px 16px 13px 44px;
          border-radius: 12px;
          border: 1.5px solid var(--border);
          background: var(--light);
          font-size: 14px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: var(--text);
          outline: none;
          transition: all .25s ease;
        }
        .uni-search-input::placeholder { color: rgba(100,116,139,.4); }
        .uni-search-input:focus {
          border-color: var(--mid);
          background: var(--white);
          box-shadow: 0 0 0 3px rgba(37,99,196,.08);
        }
        .uni-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 18px;
          height: 18px;
          color: var(--muted);
        }

        /* Filter tabs */
        .uni-filter-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .uni-filter-tab {
          padding: 9px 20px;
          border-radius: 10px;
          font-size: 13.5px;
          font-weight: 700;
          border: 1.5px solid var(--border);
          background: var(--white);
          color: var(--muted);
          cursor: pointer;
          transition: all .25s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .uni-filter-tab:hover {
          border-color: var(--mid);
          color: var(--mid);
        }
        .uni-filter-tab.active {
          background: var(--navy);
          border-color: var(--navy);
          color: #fff;
        }
        .uni-filter-count {
          font-size: 11px;
          opacity: 0.7;
        }

        /* Results info */
        .uni-results-info {
          font-size: 14px;
          color: var(--muted);
          margin-bottom: 32px;
        }
        .uni-results-num {
          font-weight: 700;
          color: var(--accent);
        }

        /* Grid */
        .uni-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        /* No results */
        .uni-no-results {
          text-align: center;
          padding: 80px 32px;
        }
        .uni-no-results-emoji {
          font-size: 72px;
          margin-bottom: 20px;
        }
        .uni-no-results-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 12px;
        }
        .uni-no-results-desc {
          font-size: 15px;
          color: var(--muted);
          margin-bottom: 28px;
        }
        .uni-reset-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--accent);
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 24px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          box-shadow: 0 4px 14px rgba(232,146,58,.35);
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .uni-reset-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 22px rgba(232,146,58,.48);
        }

        /* University type overview cards */
        .uni-type-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .uni-type-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 36px 32px;
          text-align: center;
          transition: all .35s cubic-bezier(.34,1.56,.64,1);
          cursor: pointer;
        }
        .uni-type-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,.08);
          border-color: rgba(37,99,196,.25);
        }
        .uni-type-emoji {
          font-size: 52px;
          margin-bottom: 20px;
        }
        .uni-type-title {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 12px;
        }
        .uni-type-desc {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.65;
          margin-bottom: 24px;
        }
        .uni-type-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          color: var(--navy);
          font-weight: 700;
          font-size: 13.5px;
          padding: 10px 20px;
          border-radius: 10px;
          border: 1.5px solid var(--border);
          cursor: pointer;
          transition: all .25s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .uni-type-btn:hover {
          border-color: var(--mid);
          color: var(--mid);
          background: rgba(37,99,196,.04);
        }

        /* Benefits */
        .uni-benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
        }
        .uni-benefit-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 20px;
          border-radius: 14px;
          border: 1px solid var(--border);
          background: var(--white);
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
        }
        .uni-benefit-item:hover {
          border-color: var(--mid);
          background: var(--light);
          box-shadow: 0 8px 24px rgba(37,99,196,.08);
          transform: translateX(4px);
        }
        .uni-benefit-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }
        .uni-benefit-title {
          font-weight: 700;
          font-size: 15px;
          color: var(--navy);
          margin-bottom: 6px;
        }
        .uni-benefit-desc {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.65;
        }

        /* Stats bar */
        .uni-stats-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }
        .uni-stat-item {
          text-align: center;
          padding: 28px 16px;
          background: var(--white);
          border-radius: 16px;
          border: 1px solid var(--border);
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
        }
        .uni-stat-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,.06);
          border-color: rgba(37,99,196,.2);
        }
        .uni-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 700;
          color: var(--mid);
          line-height: 1;
          margin-bottom: 8px;
        }
        .uni-stat-label {
          font-size: 13px;
          color: var(--muted);
          font-weight: 600;
        }

        /* Responsive */
        @media(max-width:900px) {
          .uni-type-grid { grid-template-columns: 1fr; }
          .uni-benefits-grid { grid-template-columns: 1fr; }
          .uni-stats-bar { grid-template-columns: repeat(2, 1fr); }
        }
        @media(max-width:768px) {
          .uni-section { padding: 64px 20px; }
          .uni-filter-bar { padding: 24px 20px; top: 64px; }
          .uni-search-wrap { max-width: 100%; }
        }
      `}</style>

      <div className="universities-page">
        {/* ── HERO ── */}
        <section className="uni-hero">
          <div className="uni-hero-content">
            <div className="uni-hero-eyebrow">
              <span className="uni-hero-dot" />
              50+ Partner Universities
            </div>
            <h1 className="uni-hero-h1">
              Our Partner <em>Universities</em>
            </h1>
            <p className="uni-hero-p">
              Explore 50+ UGC-DEB approved and NAAC accredited universities across India
              offering quality education through regular and distance learning modes.
            </p>
          </div>
        </section>

        {/* ── FILTER BAR ── */}
        <div className="uni-filter-bar">
          <div className="uni-filter-inner">
            {/* Search */}
            <div className="uni-search-wrap">
              <input
                type="text"
                placeholder="Search universities, locations, programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="uni-search-input"
              />
              <svg
                className="uni-search-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Type tabs */}
            <div className="uni-filter-tabs">
              {universityTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`uni-filter-tab ${selectedType === type.id ? 'active' : ''}`}
                >
                  {type.name}
                  <span className="uni-filter-count">
                    ({type.id === 'all'
                      ? universities.length
                      : universities.filter(u => u.type === type.id).length})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── UNIVERSITIES GRID ── */}
        <section className="uni-section" style={{ background: '#f8faff', paddingTop: 64 }}>
          <div className="uni-inner">
            {/* Results info */}
            <div className="uni-results-info">
              Showing <span className="uni-results-num">{filteredUniversities.length}</span> universit
              {filteredUniversities.length !== 1 ? 'ies' : 'y'}
              {selectedType !== 'all' && (
                <span> in <strong>{universityTypes.find(t => t.id === selectedType)?.name}</strong></span>
              )}
              {searchQuery && (
                <span> matching &quot;<strong>{searchQuery}</strong>&quot;</span>
              )}
            </div>

            {/* Grid or No Results */}
            {filteredUniversities.length > 0 ? (
              <div className="uni-grid">
                {filteredUniversities.map((university) => (
                  <UniversityCard key={university.id} university={university} />
                ))}
              </div>
            ) : (
              <div className="uni-no-results">
                <div className="uni-no-results-emoji">🔍</div>
                <h3 className="uni-no-results-title">No universities found</h3>
                <p className="uni-no-results-desc">
                  Try adjusting your filters or search query to find what you&apos;re looking for.
                </p>
                <button
                  onClick={() => {
                    setSelectedType('all');
                    setSearchQuery('');
                  }}
                  className="uni-reset-btn"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section className="uni-section" style={{ background: '#fff' }}>
          <div className="uni-inner">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="uni-label" style={{ display: 'inline-flex' }}>
                <span className="uni-label-dot" />
                Our Network
              </div>
              <h2 className="uni-heading" style={{ textAlign: 'center' }}>
                Trusted by <em>Thousands</em>
              </h2>
              <p className="uni-sub" style={{ textAlign: 'center', margin: '0 auto' }}>
                Our extensive network of partner universities ensures you get the best education.
              </p>
            </div>

            <div className="uni-stats-bar">
              {[
                { num: '50+', label: 'Partner Universities' },
                { num: '100+', label: 'Programs Offered' },
                { num: '10K+', label: 'Students Enrolled' },
                { num: '95%', label: 'Success Rate' },
              ].map((stat, i) => (
                <div key={i} className="uni-stat-item">
                  <div className="uni-stat-num">{stat.num}</div>
                  <div className="uni-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── UNIVERSITY TYPE OVERVIEW ── */}
        <section className="uni-section" style={{ background: '#f8faff' }}>
          <div className="uni-inner">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="uni-label" style={{ display: 'inline-flex' }}>
                <span className="uni-label-dot" />
                University Types
              </div>
              <h2 className="uni-heading" style={{ textAlign: 'center' }}>
                University <em>Categories</em>
              </h2>
              <p className="uni-sub" style={{ textAlign: 'center', margin: '0 auto' }}>
                We partner with a diverse range of universities to give you the best options.
              </p>
            </div>

            <div className="uni-type-grid">
              {/* Government Universities */}
              <div className="uni-type-card" onClick={() => setSelectedType('government')}>
                <div className="uni-type-emoji">🏛️</div>
                <div className="uni-type-title">Government Universities</div>
                <p className="uni-type-desc">
                  Top government-funded universities with excellent infrastructure and recognition across India
                </p>
                <button className="uni-type-btn">
                  View Universities →
                </button>
              </div>

              {/* Private Universities */}
              <div className="uni-type-card" onClick={() => setSelectedType('private')}>
                <div className="uni-type-emoji">🏫</div>
                <div className="uni-type-title">Private Universities</div>
                <p className="uni-type-desc">
                  Leading private universities offering modern curriculum, industry partnerships, and global exposure
                </p>
                <button className="uni-type-btn">
                  View Universities →
                </button>
              </div>

              {/* Deemed Universities */}
              <div className="uni-type-card" onClick={() => setSelectedType('deemed')}>
                <div className="uni-type-emoji">🎓</div>
                <div className="uni-type-title">Deemed Universities</div>
                <p className="uni-type-desc">
                  Prestigious deemed-to-be universities known for research excellence and specialized programs
                </p>
                <button className="uni-type-btn">
                  View Universities →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection variant="primary" />

        {/* ── BENEFITS ── */}
        <section className="uni-section" style={{ background: '#f8faff' }}>
          <div className="uni-inner">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="uni-label" style={{ display: 'inline-flex' }}>
                <span className="uni-label-dot" />
                Why Choose Our Partners
              </div>
              <h2 className="uni-heading" style={{ textAlign: 'center' }}>
                Why Our <em>Partner Universities?</em>
              </h2>
            </div>

            <div className="uni-benefits-grid">
              {[
                { icon: '✓', bg: '#e8f4fc', title: 'UGC-DEB Approved',        desc: 'All universities are approved by UGC and recognized by Distance Education Bureau' },
                { icon: '✓', bg: '#e8f6ee', title: 'NAAC Accredited',          desc: 'Partner universities maintain high standards with NAAC accreditation' },
                { icon: '✓', bg: '#fff8e1', title: 'Flexible Learning Modes',  desc: 'Choose from regular, distance, and online learning modes as per your convenience' },
                { icon: '✓', bg: '#f0e8fc', title: 'Pan-India Presence',       desc: 'Universities spread across India ensuring accessibility from every region' },
                { icon: '✓', bg: '#fce8e8', title: 'Placement Support',        desc: 'Dedicated placement cells and industry connections for career opportunities' },
                { icon: '✓', bg: '#e8fcf0', title: 'Affordable Fee Structure',  desc: 'Competitive fee structures with EMI options and scholarship opportunities' },
              ].map((benefit, i) => (
                <div key={i} className="uni-benefit-item">
                  <div className="uni-benefit-icon" style={{ background: benefit.bg }}>
                    {benefit.icon}
                  </div>
                  <div>
                    <div className="uni-benefit-title">{benefit.title}</div>
                    <div className="uni-benefit-desc">{benefit.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}