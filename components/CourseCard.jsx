'use client';

import Link from 'next/link';

/**
 * Course Card Component — Premium Redesign
 * Matches the University Card aesthetic:
 * - Gradient header per category
 * - DM Serif Display + DM Sans typography
 * - Frosted-glass icon ring
 * - Pulsing "Popular" pill
 * - Hover lift & micro-interactions
 */

// Category-based color themes (mirrors university card logic)
const categoryTheme = {
  '10th-12th':       { from: '#1a3d5c', to: '#2d6b8f', accent: '#4fa3c8', bg: '#e8f4fc', text: '#1a3d5c', icon: '🎓', label: '10th & 12th' },
  'graduation':      { from: '#1a4731', to: '#2d7a52', accent: '#4caf82', bg: '#e8f6ee', text: '#1a4731', icon: '🏛️', label: 'Graduation' },
  'post-graduation': { from: '#3d1a6e', to: '#6a35b5', accent: '#9b6fd4', bg: '#f0e8fc', text: '#3d1a6e', icon: '📚', label: 'Post-Graduation' },
  'diploma':         { from: '#5c2a0a', to: '#b5541e', accent: '#e07a45', bg: '#fdf0e8', text: '#5c2a0a', icon: '📜', label: 'Diploma' },
  'distance':        { from: '#1e3a5f', to: '#2d6a9f', accent: '#4fa3d1', bg: '#e8f4fc', text: '#1e3a5f', icon: '🌐', label: 'Distance / Open' },
};

const levelColors = {
  'Undergraduate':              { bg: '#e8f5e9', text: '#1b5e20', border: '#66bb6a' },
  'Postgraduate':               { bg: '#f3e5f5', text: '#6a1b9a', border: '#ab47bc' },
  'Secondary':                  { bg: '#e3f2fd', text: '#0d47a1', border: '#42a5f5' },
  'Senior Secondary':           { bg: '#fff8e1', text: '#e65100', border: '#ffca28' },
  'Secondary / Senior Secondary': { bg: '#fff8e1', text: '#e65100', border: '#ffca28' },
  'Diploma':                    { bg: '#fce4ec', text: '#880e4f', border: '#f48fb1' },
  'PG Diploma':                 { bg: '#e8eaf6', text: '#1a237e', border: '#7986cb' },
};

export default function CourseCard({ course }) {
  const theme = categoryTheme[course.category] || categoryTheme['graduation'];
  const lvl   = levelColors[course.level]     || levelColors['Undergraduate'];

  return (
    <div className="course-card group">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        .course-card {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease;
        }
        .course-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05);
        }

        /* ── Header ── */
        .cc-header {
          position: relative;
          padding: 26px 22px 18px;
          overflow: hidden;
        }
        .cc-header::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--grad-from), var(--grad-to));
        }
        .cc-header::after {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .cc-header-inner {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          gap: 13px;
        }

        /* Icon ring */
        .cc-icon-ring {
          width: 56px; height: 56px;
          border-radius: 14px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border: 2px solid rgba(255,255,255,0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }
        .course-card:hover .cc-icon-ring { transform: rotate(-4deg) scale(1.07); }

        .cc-title {
          font-family: 'DM Serif Display', serif;
          font-size: 16.5px;
          line-height: 1.3;
          color: #fff;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin: 0 0 5px;
        }
        .cc-category-label {
          color: rgba(255,255,255,0.72);
          font-size: 11.5px;
          font-weight: 500;
          letter-spacing: 0.3px;
        }

        /* Popular pill */
        .cc-popular-pill {
          position: absolute;
          z-index: 2;
          top: 14px; right: 14px;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 99px;
          padding: 3px 10px;
          font-size: 10.5px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.3px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .cc-pop-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #ffd700;
          animation: pop-pulse 2s ease infinite;
        }
        @keyframes pop-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(1.4); }
        }

        /* ── Body ── */
        .cc-body {
          padding: 18px 22px 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 13px;
        }

        /* Level badge */
        .cc-level-badge {
          display: inline-flex;
          align-items: center;
          font-size: 11px;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 99px;
          letter-spacing: 0.2px;
        }

        /* Meta row */
        .cc-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 7px;
        }
        .cc-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 10px;
          border-radius: 10px;
          background: #f8f9fa;
          border: 1px solid #eef0f2;
          font-size: 11.5px;
          color: #374151;
          transition: background 0.2s, border-color 0.2s;
        }
        .cc-meta-item:hover {
          background: var(--badge-bg);
          border-color: var(--accent);
        }
        .cc-meta-icon {
          color: var(--accent);
          flex-shrink: 0;
        }
        .cc-meta-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #9ca3af;
          display: block;
          line-height: 1;
          margin-bottom: 2px;
        }
        .cc-meta-value {
          font-size: 11.5px;
          font-weight: 500;
          color: #1f2937;
          line-height: 1.2;
        }
        .cc-meta-item.full-width {
          grid-column: 1 / -1;
        }

        /* Description */
        .cc-description {
          font-size: 12.5px;
          color: #6b7280;
          line-height: 1.65;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin: 0;
        }

        /* Highlights */
        .cc-section-label {
          font-size: 10.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #9ca3af;
          margin-bottom: 7px;
        }
        .cc-highlight-chip {
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 8px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          color: #374151;
          transition: all 0.2s;
          cursor: default;
        }
        .cc-highlight-chip:hover {
          background: var(--badge-bg);
          border-color: var(--accent);
          color: var(--accent);
        }

        /* Divider */
        .cc-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #e5e7eb, transparent);
        }

        /* CTA */
        .cc-cta-row { display: flex; gap: 10px; }
        .cc-btn-primary {
          flex: 1;
          background: linear-gradient(135deg, var(--grad-from), var(--grad-to));
          color: #fff;
          font-weight: 600;
          font-size: 13px;
          padding: 11px 14px;
          border-radius: 12px;
          text-align: center;
          text-decoration: none;
          display: block;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.14);
        }
        .cc-btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          filter: brightness(1.1);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        .cc-btn-secondary {
          flex: 1;
          background: #fff;
          color: var(--grad-to);
          font-weight: 600;
          font-size: 13px;
          padding: 11px 14px;
          border-radius: 12px;
          text-align: center;
          text-decoration: none;
          display: block;
          border: 1.5px solid var(--accent);
          transition: all 0.25s ease;
        }
        .cc-btn-secondary:hover {
          background: var(--badge-bg);
          transform: translateY(-2px);
        }
      `}</style>

      <div style={{
        '--grad-from': theme.from,
        '--grad-to':   theme.to,
        '--accent':    theme.accent,
        '--badge-bg':  theme.bg,
        '--badge-text': theme.text,
        display: 'contents'
      }}>

        {/* ── Header ── */}
        <div className="cc-header" style={{ '--grad-from': theme.from, '--grad-to': theme.to }}>
          {course.popular && (
            <div className="cc-popular-pill">
              <span className="cc-pop-dot" />
              Popular
            </div>
          )}
          <div className="cc-header-inner">
            <div className="cc-icon-ring">{theme.icon}</div>
            <div style={{ flex: 1, minWidth: 0, paddingTop: '20px' }}>
              <h3 className="cc-title">{course.title}</h3>
              <span className="cc-category-label">{theme.label}</span>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div
          className="cc-body"
          style={{
            '--grad-from': theme.from, '--grad-to': theme.to,
            '--accent': theme.accent, '--badge-bg': theme.bg, '--badge-text': theme.text
          }}
        >
          {/* Level badge */}
          <div>
            <span
              className="cc-level-badge"
              style={{ background: lvl.bg, color: lvl.text, border: `1px solid ${lvl.border}` }}
            >
              {course.level}
            </span>
          </div>

          {/* Meta grid */}
          <div className="cc-meta-grid">
            <div className="cc-meta-item">
              <svg className="cc-meta-icon" width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <div>
                <span className="cc-meta-label">Duration</span>
                <span className="cc-meta-value">{course.duration}</span>
              </div>
            </div>
            <div className="cc-meta-item">
              <svg className="cc-meta-icon" width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <div>
                <span className="cc-meta-label">Mode</span>
                <span className="cc-meta-value">{course.mode}</span>
              </div>
            </div>
            <div className="cc-meta-item full-width">
              <svg className="cc-meta-icon" width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <div>
                <span className="cc-meta-label">Eligibility</span>
                <span className="cc-meta-value">{course.eligibility}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="cc-description">{course.description}</p>

          {/* Highlights */}
          {course.highlights?.length > 0 && (
            <div>
              <p className="cc-section-label">Key Highlights</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {course.highlights.slice(0, 4).map((h, i) => (
                  <span key={i} className="cc-highlight-chip">{h}</span>
                ))}
              </div>
            </div>
          )}

          {/* Divider + CTA */}
          <div style={{ marginTop: 'auto' }}>
            <div className="cc-divider" style={{ marginBottom: '14px' }} />
            <div className="cc-cta-row">
              <Link
                href={`/apply-now?course=${encodeURIComponent(course.title)}`}
                className="cc-btn-primary"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}