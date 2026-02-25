'use client';

import { useState, useEffect } from 'react';
import CourseCard from '@/components/CourseCard';
import CTASection from '@/components/CTASection';
import { courses, courseCategories, getCoursesByCategory } from '@/data/courses';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);

  useEffect(() => {
    let result = getCoursesByCategory(selectedCategory);

    if (searchQuery.trim()) {
      result = result.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredCourses(result);
  }, [selectedCategory, searchQuery]);

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

        .courses-page { font-family: 'Plus Jakarta Sans', sans-serif; }
        .courses-page * { box-sizing: border-box; }

        /* Animations */
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes popPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.5)} }

        /* Section utils */
        .courses-section { padding: 96px 32px; }
        .courses-inner { max-width: 1200px; margin: 0 auto; }

        .courses-label {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 11px; font-weight: 800; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--mid);
          background: rgba(37,99,196,.08); border: 1px solid rgba(37,99,196,.18);
          padding: 4px 14px; border-radius: 99px; margin-bottom: 14px;
        }
        .courses-label-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); animation: popPulse 2s ease infinite;
        }

        .courses-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px,4vw,44px); font-weight: 700;
          color: var(--navy); line-height: 1.18; margin-bottom: 12px;
        }
        .courses-heading em { font-style: italic; color: var(--mid); }
        .courses-heading-white { color: #fff; }
        .courses-heading-white em { color: var(--gold); }

        .courses-sub {
          font-size: 16px; color: var(--muted);
          line-height: 1.7; max-width: 600px;
        }
        .courses-sub-white { color: rgba(255,255,255,.65); }

        /* Hero */
        .courses-hero {
          position: relative; min-height: 55vh;
          display: flex; align-items: center;
          overflow: hidden; background: var(--navy);
          padding-top: 68px;
        }
        .courses-hero::before {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 60% 40%, rgba(37,99,196,.28) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 20% 80%, rgba(232,146,58,.12) 0%, transparent 60%);
        }
        .courses-hero::after {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .courses-hero-content {
          position: relative; z-index: 2;
          max-width: 900px; margin: 0 auto;
          padding: 80px 32px; text-align: center;
        }
        .courses-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(232,146,58,.15); border: 1px solid rgba(232,146,58,.3);
          border-radius: 99px; padding: 5px 14px;
          font-size: 12px; font-weight: 700; color: var(--gold);
          letter-spacing: 1px; text-transform: uppercase; margin-bottom: 22px;
        }
        .courses-hero-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); animation: popPulse 2s ease infinite;
        }
        .courses-hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px,5vw,56px); font-weight: 700;
          color: #fff; line-height: 1.15; margin-bottom: 20px;
        }
        .courses-hero-h1 em { font-style: italic; color: var(--gold); }
        .courses-hero-p {
          font-size: 17px; color: rgba(255,255,255,.65);
          line-height: 1.7; max-width: 640px; margin: 0 auto;
        }

        /* Search & Filter bar */
        .courses-filter-bar {
          background: var(--white);
          border-bottom: 1px solid var(--border);
          padding: 32px;
          top: 68px;
          z-index: 50;
          box-shadow: 0 2px 12px rgba(0,0,0,.02);
        }
        .courses-filter-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Search input */
        .courses-search-wrap {
          position: relative;
          max-width: 420px;
          margin-bottom: 24px;
        }
        .courses-search-input {
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
        .courses-search-input::placeholder { color: rgba(100,116,139,.4); }
        .courses-search-input:focus {
          border-color: var(--mid);
          background: var(--white);
          box-shadow: 0 0 0 3px rgba(37,99,196,.08);
        }
        .courses-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 18px;
          height: 18px;
          color: var(--muted);
        }

        /* Filter tabs */
        .courses-filter-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .courses-filter-tab {
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
        .courses-filter-tab:hover {
          border-color: var(--mid);
          color: var(--mid);
        }
        .courses-filter-tab.active {
          background: var(--navy);
          border-color: var(--navy);
          color: #fff;
        }
        .courses-filter-count {
          font-size: 11px;
          opacity: 0.7;
        }

        /* Results info */
        .courses-results-info {
          font-size: 14px;
          color: var(--muted);
          margin-bottom: 32px;
        }
        .courses-results-num {
          font-weight: 700;
          color: var(--accent);
        }

        /* Grid */
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        /* No results */
        .courses-no-results {
          text-align: center;
          padding: 80px 32px;
        }
        .courses-no-results-emoji {
          font-size: 72px;
          margin-bottom: 20px;
        }
        .courses-no-results-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 12px;
        }
        .courses-no-results-desc {
          font-size: 15px;
          color: var(--muted);
          margin-bottom: 28px;
        }
        .courses-reset-btn {
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
        .courses-reset-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 22px rgba(232,146,58,.48);
        }

        /* Category overview cards */
        .courses-cat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .courses-cat-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 36px 32px;
          text-align: center;
          transition: all .35s cubic-bezier(.34,1.56,.64,1);
          cursor: pointer;
        }
        .courses-cat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,.08);
          border-color: rgba(37,99,196,.25);
        }
        .courses-cat-emoji {
          font-size: 52px;
          margin-bottom: 20px;
        }
        .courses-cat-title {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 12px;
        }
        .courses-cat-desc {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.65;
          margin-bottom: 24px;
        }
        .courses-cat-btn {
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
        .courses-cat-btn:hover {
          border-color: var(--mid);
          color: var(--mid);
          background: rgba(37,99,196,.04);
        }

        /* Benefits */
        .courses-benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
        }
        .courses-benefit-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 20px;
          border-radius: 14px;
          border: 1px solid var(--border);
          background: var(--white);
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
        }
        .courses-benefit-item:hover {
          border-color: var(--mid);
          background: var(--light);
          box-shadow: 0 8px 24px rgba(37,99,196,.08);
          transform: translateX(4px);
        }
        .courses-benefit-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }
        .courses-benefit-title {
          font-weight: 700;
          font-size: 15px;
          color: var(--navy);
          margin-bottom: 6px;
        }
        .courses-benefit-desc {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.65;
        }

        /* Responsive */
        @media(max-width:900px) {
          .courses-cat-grid { grid-template-columns: 1fr; }
          .courses-benefits-grid { grid-template-columns: 1fr; }
        }
        @media(max-width:768px) {
          .courses-section { padding: 64px 20px; }
          .courses-filter-bar { padding: 24px 20px; top: 64px; }
          .courses-search-wrap { max-width: 100%; }
        }
      `}</style>

      <div className="courses-page">
        {/* ── HERO ── */}
        <section className="courses-hero">
          <div className="courses-hero-content">
            <div className="courses-hero-eyebrow">
              <span className="courses-hero-dot" />
              100+ Programs Available
            </div>
            <h1 className="courses-hero-h1">
              Explore Our <em>Courses</em>
            </h1>
            <p className="courses-hero-p">
              Choose from a wide range of programs in 10th, 12th, Graduation, Post-Graduation, 
              and Distance Education from top UGC-approved universities.
            </p>
          </div>
        </section>

        {/* ── FILTER BAR ── */}
        <div className="courses-filter-bar">
          <div className="courses-filter-inner">
            {/* Search */}
            <div className="courses-search-wrap">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="courses-search-input"
              />
              <svg
                className="courses-search-icon"
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

            {/* Category tabs */}
            <div className="courses-filter-tabs">
              {courseCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`courses-filter-tab ${selectedCategory === category.id ? 'active' : ''}`}
                >
                  {category.name}
                  <span className="courses-filter-count">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── COURSES GRID ── */}
        <section className="courses-section" style={{ background: '#f8faff', paddingTop: 64 }}>
          <div className="courses-inner">
            {/* Results info */}
            <div className="courses-results-info">
              Showing <span className="courses-results-num">{filteredCourses.length}</span> course
              {filteredCourses.length !== 1 ? 's' : ''}
              {selectedCategory !== 'all' && (
                <span> in <strong>{courseCategories.find(c => c.id === selectedCategory)?.name}</strong></span>
              )}
              {searchQuery && (
                <span> matching "<strong>{searchQuery}</strong>"</span>
              )}
            </div>

            {/* Grid or No Results */}
            {filteredCourses.length > 0 ? (
              <div className="courses-grid">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="courses-no-results">
                <div className="courses-no-results-emoji">🔍</div>
                <h3 className="courses-no-results-title">No courses found</h3>
                <p className="courses-no-results-desc">
                  Try adjusting your filters or search query to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="courses-reset-btn"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ── CATEGORY OVERVIEW ── */}
        <section className="courses-section" style={{ background: '#fff' }}>
          <div className="courses-inner">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="courses-label" style={{ display: 'inline-flex' }}>
                <span className="courses-label-dot" />
                Programs We Offer
              </div>
              <h2 className="courses-heading" style={{ textAlign: 'center' }}>
                Course <em>Categories</em>
              </h2>
              <p className="courses-sub" style={{ textAlign: 'center', margin: '0 auto' }}>
                We offer comprehensive education programs across multiple levels and modes.
              </p>
            </div>

            <div className="courses-cat-grid">
              {/* 10th & 12th */}
              <div className="courses-cat-card" onClick={() => setSelectedCategory('10th-12th')}>
                <div className="courses-cat-emoji">📚</div>
                <div className="courses-cat-title">10th & 12th</div>
                <p className="courses-cat-desc">
                  Complete your secondary education through CBSE, State Board, or NIOS
                </p>
                <button className="courses-cat-btn">
                  View Courses →
                </button>
              </div>

              {/* Graduation */}
              <div className="courses-cat-card" onClick={() => setSelectedCategory('graduation')}>
                <div className="courses-cat-emoji">🎓</div>
                <div className="courses-cat-title">Graduation</div>
                <p className="courses-cat-desc">
                  Bachelor's degrees in Commerce, Arts, Science, Engineering, and Management
                </p>
                <button className="courses-cat-btn">
                  View Courses →
                </button>
              </div>

              {/* Post-Graduation */}
              <div className="courses-cat-card" onClick={() => setSelectedCategory('post-graduation')}>
                <div className="courses-cat-emoji">👨‍🎓</div>
                <div className="courses-cat-title">Post-Graduation</div>
                <p className="courses-cat-desc">
                  Master's degrees including MBA, M.Com, MCA, and specialized programs
                </p>
                <button className="courses-cat-btn">
                  View Courses →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection variant="primary" />

        {/* ── BENEFITS ── */}
        <section className="courses-section" style={{ background: '#f8faff' }}>
          <div className="courses-inner">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="courses-label" style={{ display: 'inline-flex' }}>
                <span className="courses-label-dot" />
                Why Choose Us
              </div>
              <h2 className="courses-heading" style={{ textAlign: 'center' }}>
                Why Study With Our <em>Partner Universities?</em>
              </h2>
            </div>

            <div className="courses-benefits-grid">
              {[
                { icon: '✓', bg: '#e8f4fc', title: 'UGC-DEB Approved',      desc: 'All distance programs approved by UGC Distance Education Bureau' },
                { icon: '✓', bg: '#e8f6ee', title: 'Industry Recognition',  desc: 'Degrees accepted by employers across India and globally' },
                { icon: '✓', bg: '#fff8e1', title: 'Flexible Learning',     desc: 'Study at your own pace with online support and resources' },
                { icon: '✓', bg: '#f0e8fc', title: 'Affordable Education',  desc: 'Quality education at reasonable fees with EMI options' },
              ].map((benefit, i) => (
                <div key={i} className="courses-benefit-item">
                  <div className="courses-benefit-icon" style={{ background: benefit.bg }}>
                    {benefit.icon}
                  </div>
                  <div>
                    <div className="courses-benefit-title">{benefit.title}</div>
                    <div className="courses-benefit-desc">{benefit.desc}</div>
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