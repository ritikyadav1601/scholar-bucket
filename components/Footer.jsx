'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Universities', path: '/universities' },
    { name: 'Apply Now', path: '/apply-now' },
    { name: 'Contact', path: '/contact' },
  ];

  const popularCourses = [
    { name: '10th & 12th Admission', path: '/admission-10-12' },
    { name: 'Distance MBA', path: '/courses' },
    { name: 'Distance B.Com', path: '/courses' },
    { name: 'NIOS Admission', path: '/distance-education' },
    { name: 'Regular Graduation', path: '/courses' },
  ];

  const resources = [
    { name: 'Blog & Updates', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Career Counselling', path: '/contact' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .sb-footer {
          background: linear-gradient(135deg, #0c1f3f 0%, #1a4a8a 100%);
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .sb-footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        .sb-footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 32px 0;
          position: relative;
          z-index: 1;
        }

        /* ── Logo Section ── */
        .sb-footer-logo-wrap {
          margin-bottom: 60px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .sb-footer-logo {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 16px;
        }
        .sb-footer-logo-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #e8923a;
          animation: sb-footer-pulse 2.5s ease infinite;
        }
        @keyframes sb-footer-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.6; transform: scale(1.4); }
        }
        .sb-footer-logo-text {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          line-height: 1;
        }
        .sb-footer-tagline {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.7;
          max-width: 480px;
          margin-bottom: 20px;
        }
        .sb-footer-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .sb-footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 12px;
          border-radius: 99px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.3px;
        }
        .badge-green {
          background: rgba(76, 175, 130, 0.18);
          color: #6dffb0;
          border: 1px solid rgba(76, 175, 130, 0.3);
        }
        .badge-blue {
          background: rgba(37, 99, 196, 0.18);
          color: #6db5ff;
          border: 1px solid rgba(37, 99, 196, 0.3);
        }
        .badge-gold {
          background: rgba(245, 200, 66, 0.18);
          color: #f5c842;
          border: 1px solid rgba(245, 200, 66, 0.3);
        }

        /* ── Grid Columns ── */
        .sb-footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 48px;
          margin-bottom: 56px;
        }
        .sb-footer-col-title {
          font-weight: 700;
          font-size: 15px;
          color: #fff;
          margin-bottom: 18px;
          letter-spacing: 0.3px;
        }
        .sb-footer-link-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .sb-footer-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .sb-footer-link:hover {
          color: #e8923a;
          transform: translateX(4px);
        }
        .sb-footer-link-arrow {
          font-size: 10px;
          transition: transform 0.25s ease;
        }
        .sb-footer-link:hover .sb-footer-link-arrow {
          transform: translateX(3px);
        }

        /* ── Contact Info ── */
        .sb-footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 24px;
        }
        .sb-footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
        }
        .sb-footer-contact-icon {
          font-size: 16px;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .sb-footer-contact-item a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .sb-footer-contact-item a:hover {
          color: #e8923a;
        }

        /* ── Social Media ── */
        .sb-footer-social-title {
          font-weight: 600;
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 12px;
        }
        .sb-footer-social-icons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .sb-footer-social-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .sb-footer-social-icon:hover {
          transform: translateY(-3px) scale(1.08);
        }
        .social-fb {
          background: rgba(59, 89, 152, 0.25);
          border: 1px solid rgba(59, 89, 152, 0.4);
          color: #8ab4f8;
        }
        .social-fb:hover {
          background: #3b5998;
          border-color: #3b5998;
          color: #fff;
        }
        .social-ig {
          background: linear-gradient(135deg, rgba(131, 58, 180, 0.25), rgba(253, 29, 29, 0.25));
          border: 1px solid rgba(193, 53, 132, 0.4);
          color: #f5c842;
        }
        .social-ig:hover {
          background: linear-gradient(135deg, #833ab4, #fd1d1d);
          border-color: transparent;
          color: #fff;
        }
        .social-li {
          background: rgba(0, 119, 181, 0.25);
          border: 1px solid rgba(0, 119, 181, 0.4);
          color: #6db5ff;
        }
        .social-li:hover {
          background: #0077b5;
          border-color: #0077b5;
          color: #fff;
        }
        .social-wa {
          background: rgba(37, 211, 102, 0.25);
          border: 1px solid rgba(37, 211, 102, 0.4);
          color: #6dffb0;
        }
        .social-wa:hover {
          background: #25d366;
          border-color: #25d366;
          color: #fff;
        }

        /* ── Newsletter ── */
        .sb-footer-newsletter {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 56px;
          text-align: center;
        }
        .sb-footer-newsletter-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .sb-footer-newsletter-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.6;
          max-width: 480px;
          margin: 0 auto 24px;
        }
        .sb-footer-newsletter-form {
          display: flex;
          gap: 10px;
          max-width: 480px;
          margin: 0 auto;
        }
        .sb-footer-newsletter-input {
          flex: 1;
          padding: 13px 18px;
          border-radius: 12px;
          border: 1.5px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.06);
          color: #fff;
          font-size: 14px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          outline: none;
          transition: all 0.25s ease;
        }
        .sb-footer-newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.35);
        }
        .sb-footer-newsletter-input:focus {
          border-color: #e8923a;
          background: rgba(255, 255, 255, 0.09);
        }
        .sb-footer-newsletter-btn {
          padding: 13px 24px;
          border-radius: 12px;
          background: #e8923a;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 14px rgba(232, 146, 58, 0.4);
          white-space: nowrap;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .sb-footer-newsletter-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 22px rgba(232, 146, 58, 0.5);
        }

        /* ── Bottom Bar ── */
        .sb-footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 28px 0;
        }
        .sb-footer-bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .sb-footer-copyright {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.4);
        }
        .sb-footer-legal-links {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }
        .sb-footer-legal-link {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .sb-footer-legal-link:hover {
          color: #e8923a;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .sb-footer-inner {
            padding: 60px 20px 0;
          }
          .sb-footer-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .sb-footer-newsletter {
            padding: 32px 24px;
          }
          .sb-footer-newsletter-form {
            flex-direction: column;
          }
          .sb-footer-bottom-inner {
            flex-direction: column;
            text-align: center;
          }
          .sb-footer-legal-links {
            justify-content: center;
          }
        }
      `}</style>

      <footer className="sb-footer">
        <div className="sb-footer-inner">
          {/* ── Logo & Tagline ── */}
          <div className="sb-footer-logo-wrap">
            <div className="sb-footer-logo">
              <span className="sb-footer-logo-dot" />
              <div className="sb-footer-logo-text">Scholar Bucket</div>
            </div>
            <p className="sb-footer-tagline">
              Your trusted education consultancy for admissions in 10th, 12th, Graduation, Post-Graduation, 
              Distance & Open Education across India. Serving students since 2021.
            </p>
            <div className="sb-footer-badges">
              <span className="sb-footer-badge badge-green">✓ UGC Approved</span>
              <span className="sb-footer-badge badge-blue">✓ ISO Certified</span>
              <span className="sb-footer-badge badge-gold">✓ 1000+ Students</span>
            </div>
          </div>

          {/* ── Grid Columns ── */}
          <div className="sb-footer-grid">
            {/* Quick Links */}
            <div>
              <div className="sb-footer-col-title">Quick Links</div>
              <div className="sb-footer-link-list">
                {quickLinks.map((link) => (
                  <Link key={link.path} href={link.path} className="sb-footer-link">
                    <span className="sb-footer-link-arrow">→</span>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Courses */}
            <div>
              <div className="sb-footer-col-title">Popular Courses</div>
              <div className="sb-footer-link-list">
                {popularCourses.map((course, i) => (
                  <Link key={i} href={course.path} className="sb-footer-link">
                    <span className="sb-footer-link-arrow">→</span>
                    {course.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <div className="sb-footer-col-title">Resources</div>
              <div className="sb-footer-link-list">
                {resources.map((res, i) => (
                  <Link key={i} href={res.path} className="sb-footer-link">
                    <span className="sb-footer-link-arrow">→</span>
                    {res.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <div className="sb-footer-col-title">Contact Us</div>
              <div className="sb-footer-contact-list">
                <div className="sb-footer-contact-item">
                  <span className="sb-footer-contact-icon">📍</span>
                  <span>Shahpur Doyam, Narnaul, Haryana 123001</span>
                </div>
                <div className="sb-footer-contact-item">
                  <span className="sb-footer-contact-icon">📞</span>
                  <a href="tel:+917027977081">+91-70279-77081</a>
                </div>
                <div className="sb-footer-contact-item">
                  <span className="sb-footer-contact-icon">✉️</span>
                  <a href="mailto:scholarbucket@outlook.com">scholarbucket@outlook.com</a>
                </div>
                <div className="sb-footer-contact-item">
                  <span className="sb-footer-contact-icon">⏰</span>
                  <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                </div>
              </div>

              <div className="sb-footer-social-title">Follow Us</div>
              <div className="sb-footer-social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sb-footer-social-icon social-fb"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="https://www.instagram.com/scholar_bucket?igsh=MThlN3g1MmRlMjEwZQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sb-footer-social-icon social-ig"
                  aria-label="Instagram"
                >
                  📷
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sb-footer-social-icon social-li"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a
                  href="https://wa.me/917027977081"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sb-footer-social-icon social-wa"
                  aria-label="WhatsApp"
                >
                  💬
                </a>
              </div>
            </div>
          </div>

         
        </div>

        {/* ── Bottom Bar ── */}
        <div className="sb-footer-bottom">
          <div className="sb-footer-bottom-inner">
            <p className="sb-footer-copyright">
              © {currentYear} Scholar Bucket Education Consultancy. All rights reserved.
            </p>
            <div className="sb-footer-legal-links">
              <Link href="/privacy-policy" className="sb-footer-legal-link">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="sb-footer-legal-link">
                Terms & Conditions
              </Link>
              <Link href="/refund-policy" className="sb-footer-legal-link">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}