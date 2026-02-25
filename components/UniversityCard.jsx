'use client';

import Link from 'next/link';

/**
 * University Card Component — Premium Redesign
 * Rich visual hierarchy, animated interactions, editorial aesthetic
 */

// Color palette per university type
const typeConfig = {
  'Open University':     { from: '#1e3a5f', to: '#2d6a9f', accent: '#4fa3d1', badge: '#e8f4fc', badgeText: '#1e3a5f' },
  'Distance Learning':   { from: '#1a4731', to: '#2d7a52', accent: '#4caf82', badge: '#e8f6ee', badgeText: '#1a4731' },
  'Online University':   { from: '#3d1a6e', to: '#6a35b5', accent: '#9b6fd4', badge: '#f0e8fc', badgeText: '#3d1a6e' },
  'Distance Education':  { from: '#5c2a0a', to: '#b5541e', accent: '#e07a45', badge: '#fdf0e8', badgeText: '#5c2a0a' },
  'Open Schooling':      { from: '#1a3d5c', to: '#2d6b8f', accent: '#4fa3c8', badge: '#e8f4fc', badgeText: '#1a3d5c' },
};

const naacColors = {
  'A+': { bg: '#fff8e1', text: '#e65100', border: '#ffcc02' },
  'A+':  { bg: '#f3e5f5', text: '#6a1b9a', border: '#ab47bc' },
  'A':   { bg: '#e8f5e9', text: '#1b5e20', border: '#66bb6a' },
};

export default function UniversityCard({ university }) {
  const theme = typeConfig[university.type] || typeConfig['Distance Education'];
  const naac = naacColors[university.naacRating] || naacColors['A'];
  const initials = university.shortName.substring(0, 2).toUpperCase();

  return (
    <div className="university-card group">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        .university-card {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease;
        }
        .university-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05);
        }

        .card-header {
          position: relative;
          padding: 28px 24px 20px;
          overflow: hidden;
        }
        .card-header::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--grad-from), var(--grad-to));
          opacity: 1;
        }
        .card-header::after {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .logo-ring {
          position: relative;
          z-index: 1;
          width: 62px;
          height: 62px;
          border-radius: 16px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border: 2px solid rgba(255,255,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Serif Display', serif;
          font-size: 22px;
          font-weight: 400;
          color: #ffffff;
          letter-spacing: 0.5px;
          flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }
        .university-card:hover .logo-ring {
          transform: rotate(-3deg) scale(1.05);
        }

        .uni-name {
          font-family: 'DM Serif Display', serif;
          font-size: 17px;
          line-height: 1.3;
          color: #ffffff;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          position: relative;
          z-index: 1;
          margin: 0 0 4px;
        }
        .uni-location {
          position: relative;
          z-index: 1;
          color: rgba(255,255,255,0.75);
          font-size: 12.5px;
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .open-pill {
          position: absolute;
          z-index: 2;
          top: 16px;
          right: 16px;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 99px;
          padding: 3px 10px;
          font-size: 11px;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: 0.3px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .open-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6dffb0;
          animation: pulse-dot 2s ease infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }

        .card-body {
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 16px;
        }

        .badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .badge {
          font-size: 11px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 99px;
          letter-spacing: 0.2px;
        }
        .badge-ugc {
          background: #e8f4fc;
          color: #1a4a6e;
          border: 1px solid #b8d9f0;
        }
        .badge-featured {
          background: #fffbeb;
          color: #92400e;
          border: 1px solid #fcd34d;
        }

        .description {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.65;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin: 0;
        }

        .section-label {
          font-size: 10.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #9ca3af;
          margin-bottom: 8px;
        }

        .program-chip {
          font-size: 11.5px;
          padding: 4px 10px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          color: #374151;
          background: #f9fafb;
          transition: all 0.2s ease;
          cursor: default;
        }
        .program-chip:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--badge-bg);
        }
        .program-more {
          font-size: 11.5px;
          padding: 4px 10px;
          border-radius: 8px;
          background: #f3f4f6;
          color: #6b7280;
          font-weight: 600;
        }

        .spec-chip {
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 99px;
          background: var(--badge-bg);
          color: var(--badge-text);
          font-weight: 500;
          border: 1px solid transparent;
        }

        .divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #e5e7eb, transparent);
        }

        .footer-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
        }
        .est-badge {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #6b7280;
          font-weight: 500;
        }
        .type-badge {
          font-size: 11px;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 99px;
          background: var(--badge-bg);
          color: var(--badge-text);
        }

        .cta-row {
          display: flex;
          gap: 10px;
          margin-top: auto;
        }
        .btn-primary {
          flex: 1;
          background: linear-gradient(135deg, var(--grad-from), var(--grad-to));
          color: white;
          font-weight: 600;
          font-size: 13.5px;
          padding: 11px 16px;
          border-radius: 12px;
          text-align: center;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          display: block;
        }
        .btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          filter: brightness(1.1);
        }
        .btn-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          border: 1.5px solid #e5e7eb;
          background: #fff;
          color: #6b7280;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .btn-icon:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--badge-bg);
          transform: rotate(5deg) scale(1.08);
        }

        .naac-pill {
          font-size: 11px;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 99px;
          letter-spacing: 0.3px;
        }
      `}</style>

      {/* CSS Variables injected inline */}
      <div
        style={{
          '--grad-from': theme.from,
          '--grad-to': theme.to,
          '--accent': theme.accent,
          '--badge-bg': theme.badge,
          '--badge-text': theme.badgeText,
          display: 'contents'
        }}
      >
        {/* ── Header ── */}
        <div className="card-header" style={{ '--grad-from': theme.from, '--grad-to': theme.to }}>
          {university.admissionOpen && (
            <div className="open-pill">
              <span className="open-dot" />
              Admissions Open
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', position: 'relative', zIndex: 1 }}>
            <div className="logo-ring">{initials}</div>
            <div style={{ flex: 1, minWidth: 0, paddingTop: '20px' }}>
              <h3 className="uni-name">{university.name}</h3>
              <p className="uni-location">
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {university.location}
              </p>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="card-body" style={{
          '--grad-from': theme.from, '--grad-to': theme.to,
          '--accent': theme.accent, '--badge-bg': theme.badge, '--badge-text': theme.badgeText
        }}>

          {/* Badges */}
          <div className="badge-row">
            {university.ugcApproved && (
              <span className="badge badge-ugc">✓ UGC Approved</span>
            )}
            {university.naacRating && (
              <span
                className="badge naac-pill"
                style={{ background: naac.bg, color: naac.text, border: `1px solid ${naac.border}` }}
              >
                NAAC {university.naacRating}
              </span>
            )}
            {university.featured && (
              <span className="badge badge-featured">★ Featured</span>
            )}
          </div>

          {/* Description */}
          <p className="description">{university.description}</p>

          {/* Programs */}
          <div>
            <p className="section-label">Programs ({university.programs.length})</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {university.programs.slice(0, 4).map((prog, i) => (
                <span key={i} className="program-chip">{prog}</span>
              ))}
              {university.programs.length > 4 && (
                <span className="program-more">+{university.programs.length - 4} more</span>
              )}
            </div>
          </div>

          {/* Specializations */}
          {university.specialization?.length > 0 && (
            <div>
              <p className="section-label">Specializations</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {university.specialization.map((s, i) => (
                  <span key={i} className="spec-chip">{s}</span>
                ))}
              </div>
            </div>
          )}

          {/* Divider + Meta */}
          <div>
            <div className="divider" style={{ marginBottom: '12px' }} />
            <div className="footer-meta">
              <span className="est-badge">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Est. {university.established}
              </span>
              <span className="type-badge">{university.type}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-row">
            <Link
              href={`/apply-now?university=${encodeURIComponent(university.name)}`}
              className="btn-primary"
            >
              Get Admission →
            </Link>
            {university.website && (
              <a
                href={university.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="Visit website"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}