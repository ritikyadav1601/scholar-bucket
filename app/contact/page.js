'use client';

import { useState } from 'react';
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.send(
      "service_dh94mr9",
      "template_12auxmf",
      formData,
      "kx2OiU7qpMSTRdWqQ"
    )
    .then(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    })
    .catch((error) => {
      console.error("Email error:", error);
    });
  };

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

        .contact-page { font-family: 'Plus Jakarta Sans', sans-serif; }
        .contact-page * { box-sizing: border-box; }

        /* Animations */
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes popPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.5)} }

        /* Section utils */
        .contact-section { padding: 96px 32px; }
        .contact-inner { max-width: 1200px; margin: 0 auto; }

        .contact-label {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 11px; font-weight: 800; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--mid);
          background: rgba(37,99,196,.08); border: 1px solid rgba(37,99,196,.18);
          padding: 4px 14px; border-radius: 99px; margin-bottom: 14px;
        }
        .contact-label-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); animation: popPulse 2s ease infinite;
        }

        .contact-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px,4vw,44px); font-weight: 700;
          color: var(--navy); line-height: 1.18; margin-bottom: 12px;
        }
        .contact-heading em { font-style: italic; color: var(--mid); }
        .contact-heading-white { color: #fff; }
        .contact-heading-white em { color: var(--gold); }

        .contact-sub {
          font-size: 16px; color: var(--muted);
          line-height: 1.7; max-width: 600px;
        }
        .contact-sub-white { color: rgba(255,255,255,.65); }

        /* Hero */
        .contact-hero {
          position: relative; min-height: 50vh;
          display: flex; align-items: center;
          overflow: hidden; background: var(--navy);
          padding-top: 68px;
        }
        .contact-hero::before {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 60% 40%, rgba(37,99,196,.28) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 20% 80%, rgba(232,146,58,.12) 0%, transparent 60%);
        }
        .contact-hero::after {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .contact-hero-content {
          position: relative; z-index: 2;
          max-width: 800px; margin: 0 auto;
          padding: 80px 32px; text-align: center;
        }
        .contact-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(232,146,58,.15); border: 1px solid rgba(232,146,58,.3);
          border-radius: 99px; padding: 5px 14px;
          font-size: 12px; font-weight: 700; color: var(--gold);
          letter-spacing: 1px; text-transform: uppercase; margin-bottom: 22px;
        }
        .contact-hero-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); animation: popPulse 2s ease infinite;
        }
        .contact-hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px,5vw,52px); font-weight: 700;
          color: #fff; line-height: 1.15; margin-bottom: 20px;
        }
        .contact-hero-h1 em { font-style: italic; color: var(--gold); }
        .contact-hero-p {
          font-size: 17px; color: rgba(255,255,255,.65);
          line-height: 1.7; max-width: 580px; margin: 0 auto;
        }

        /* Grid layout */
        .contact-grid {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 32px;
        }

        /* Info cards */
        .contact-info-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px; padding: 24px;
          margin-bottom: 20px;
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
        }
        .contact-info-card:hover {
          border-color: var(--mid);
          box-shadow: 0 8px 24px rgba(37,99,196,.08);
          transform: translateY(-2px);
        }
        .contact-info-top {
          display: flex; align-items: flex-start; gap: 14px;
        }
        .contact-info-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; font-size: 20px;
        }
        .contact-info-title {
          font-weight: 700; font-size: 15px;
          color: var(--navy); margin-bottom: 8px;
        }
        .contact-info-text {
          font-size: 13.5px; color: var(--muted);
          line-height: 1.65;
        }
        .contact-info-text a {
          color: var(--mid);
          text-decoration: none;
          transition: color .2s;
        }
        .contact-info-text a:hover { color: var(--accent); }

        /* Social */
        .contact-social-title {
          font-weight: 700; font-size: 15px;
          color: var(--navy); margin-bottom: 14px;
        }
        .contact-social-icons {
          display: flex; gap: 10px; flex-wrap: wrap;
        }
        .contact-social-icon {
          width: 42px; height: 42px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; text-decoration: none;
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
        }
        .contact-social-icon:hover {
          transform: translateY(-3px) scale(1.08);
        }
        .social-fb {
          background: rgba(59,89,152,.12);
          border: 1px solid rgba(59,89,152,.25);
          color: #3b5998;
        }
        .social-fb:hover {
          background: #3b5998; color: #fff;
          border-color: #3b5998;
        }
        .social-ig {
          background: linear-gradient(135deg, rgba(131,58,180,.12), rgba(253,29,29,.12));
          border: 1px solid rgba(193,53,132,.25);
          color: #c13584;
        }
        .social-ig:hover {
          background: linear-gradient(135deg, #833ab4, #fd1d1d);
          color: #fff; border-color: transparent;
        }
        .social-li {
          background: rgba(0,119,181,.12);
          border: 1px solid rgba(0,119,181,.25);
          color: #0077b5;
        }
        .social-li:hover {
          background: #0077b5; color: #fff;
          border-color: #0077b5;
        }
        .social-wa {
          background: rgba(37,211,102,.12);
          border: 1px solid rgba(37,211,102,.25);
          color: #25d366;
        }
        .social-wa:hover {
          background: #25d366; color: #fff;
          border-color: #25d366;
        }

        /* Form card */
        .contact-form-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px; padding: 40px;
        }
        .contact-form-title {
          font-family: 'Playfair Display', serif;
          font-size: 26px; font-weight: 700;
          color: var(--navy); margin-bottom: 8px;
        }
        .contact-form-desc {
          font-size: 14px; color: var(--muted);
          line-height: 1.6; margin-bottom: 28px;
        }

        /* Success message */
        .contact-success {
          background: rgba(76,175,130,.1);
          border: 1px solid rgba(76,175,130,.3);
          color: #1b5e20;
          padding: 14px 18px; border-radius: 12px;
          font-size: 14px; font-weight: 600;
          margin-bottom: 24px;
          display: flex; align-items: center; gap: 10px;
        }

        /* Form elements */
        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px; margin-bottom: 20px;
        }
        .contact-form-group { margin-bottom: 20px; }
        .contact-form-label {
          display: block;
          font-size: 13.5px; font-weight: 600;
          color: var(--navy); margin-bottom: 8px;
        }
        .contact-form-input {
          width: 100%; padding: 13px 16px;
          border-radius: 12px;
          border: 1.5px solid var(--border);
          background: var(--white);
          font-size: 14px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: var(--text);
          outline: none;
          transition: all .25s ease;
        }
        .contact-form-input::placeholder { color: rgba(100,116,139,.4); }
        .contact-form-input:focus {
          border-color: var(--mid);
          background: var(--light);
          box-shadow: 0 0 0 3px rgba(37,99,196,.08);
        }
        .contact-form-textarea {
          width: 100%; padding: 13px 16px;
          border-radius: 12px;
          border: 1.5px solid var(--border);
          background: var(--white);
          font-size: 14px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: var(--text);
          outline: none;
          transition: all .25s ease;
          resize: vertical;
          min-height: 140px;
        }
        .contact-form-textarea::placeholder { color: rgba(100,116,139,.4); }
        .contact-form-textarea:focus {
          border-color: var(--mid);
          background: var(--light);
          box-shadow: 0 0 0 3px rgba(37,99,196,.08);
        }

        .contact-form-submit {
          width: 100%;
          padding: 14px 24px;
          border-radius: 12px;
          background: var(--accent);
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          border: none;
          cursor: pointer;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          box-shadow: 0 6px 20px rgba(232,146,58,.35);
        }
        .contact-form-submit:hover {
          transform: translateY(-2px) scale(1.01);
          box-shadow: 0 10px 28px rgba(232,146,58,.48);
        }

        /* Map */
        .contact-map-wrap {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 4px 16px rgba(0,0,0,.06);
        }
        .contact-map-frame {
          width: 100%; height: 450px;
          border: 0; display: block;
        }

        /* Quick CTA */
        .contact-quick-cta {
          background: linear-gradient(135deg, var(--navy), var(--blue));
          padding: 80px 32px; text-align: center;
          position: relative; overflow: hidden;
        }
        .contact-quick-cta::before {
          content: ''; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 80% at 50% 110%, rgba(232,146,58,.18) 0%, transparent 60%);
        }
        .contact-quick-cta::after {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .contact-quick-inner {
          position: relative; z-index: 1;
          max-width: 700px; margin: 0 auto;
        }
        .contact-quick-btns {
          display: flex; gap: 14px;
          justify-content: center; flex-wrap: wrap;
          margin-top: 32px;
        }
        .btn-cta-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,.1);
          backdrop-filter: blur(8px);
          border: 1.5px solid rgba(255,255,255,.2);
          color: #fff; font-weight: 700; font-size: 15px;
          padding: 14px 28px; border-radius: 12px;
          text-decoration: none;
          transition: all .25s ease;
        }
        .btn-cta-outline:hover {
          background: rgba(255,255,255,.16);
          border-color: rgba(255,255,255,.35);
        }
        .btn-cta-green {
          display: inline-flex; align-items: center; gap: 8px;
          background: #25d366;
          color: #fff; font-weight: 700; font-size: 15px;
          padding: 14px 28px; border-radius: 12px;
          text-decoration: none;
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          box-shadow: 0 6px 20px rgba(37,211,102,.4);
        }
        .btn-cta-green:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 10px 28px rgba(37,211,102,.52);
        }

        /* Responsive */
        @media(max-width:1024px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
        @media(max-width:768px) {
          .contact-section { padding: 64px 20px; }
          .contact-form-card { padding: 28px 24px; }
          .contact-form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="contact-page">
        {/* ── HERO ── */}
        <section className="contact-hero">
          <div className="contact-hero-content">
            <div className="contact-hero-eyebrow">
              <span className="contact-hero-dot" />
              We're Here to Help
            </div>
            <h1 className="contact-hero-h1">
              Get in <em>Touch</em>
            </h1>
            <p className="contact-hero-p">
              Have questions about admissions? Our expert counsellors are here to help you 
              navigate your educational journey with confidence.
            </p>
          </div>
        </section>

        {/* ── CONTACT SECTION ── */}
        <section className="contact-section" style={{ background: '#f8faff' }}>
          <div className="contact-inner">
            <div className="contact-grid">
              {/* Left: Contact Info */}
              <div>
                {/* Office Address */}
                <div className="contact-info-card">
                  <div className="contact-info-top">
                    <div className="contact-info-icon" style={{ background: '#e8f4fc' }}>
                      📍
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="contact-info-title">Office Address</div>
                      <div className="contact-info-text">
                        Shahpur Doyam<br />
                        Narnaul, Mahendragarh<br />
                        Haryana - 123001<br />
                        India
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-info-card">
                  <div className="contact-info-top">
                    <div className="contact-info-icon" style={{ background: '#e8f6ee' }}>
                      📞
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="contact-info-title">Phone</div>
                      <div className="contact-info-text">
                        <a href="tel:+917027977081">+91-70279-77081</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-info-card">
                  <div className="contact-info-top">
                    <div className="contact-info-icon" style={{ background: '#fff8e1' }}>
                      ✉️
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="contact-info-title">Email</div>
                      <div className="contact-info-text">
                        <a href="mailto:scholarbucket@outlook.com">scholarbucket@outlook.com</a><br />
                        <a href="mailto:"></a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="contact-info-card">
                  <div className="contact-info-top">
                    <div className="contact-info-icon" style={{ background: '#f0e8fc' }}>
                      ⏰
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="contact-info-title">Office Hours</div>
                      <div className="contact-info-text">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="contact-info-card">
                  <div className="contact-social-title">Follow Us</div>
                  <div className="contact-social-icons">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-icon social-fb"
                      aria-label="Facebook"
                    >
                      f
                    </a>
                    <a
                      href="https://www.instagram.com/scholar_bucket?igsh=MThlN3g1MmRlMjEwZQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-icon social-ig"
                      aria-label="Instagram"
                    >
                      📷
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-icon social-li"
                      aria-label="LinkedIn"
                    >
                      in
                    </a>
                    <a
                      href="https://wa.me/917027977081"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-icon social-wa"
                      aria-label="WhatsApp"
                    >
                      💬
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div>
                <div className="contact-form-card">
                  <h2 className="contact-form-title">Send us a Message</h2>
                  <p className="contact-form-desc">
                    Fill out the form below and we'll get back to you within 24 hours. 
                    Our counsellors are ready to answer all your questions.
                  </p>

                  {isSubmitted && (
                    <div className="contact-success">
                      <span style={{ fontSize: 18 }}>✓</span>
                      Thank you! Your message has been sent successfully. We'll contact you soon.
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="contact-form-row">
                      <div>
                        <label className="contact-form-label">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="contact-form-input"
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="contact-form-label">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="contact-form-input"
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="contact-form-row">
                      <div>
                        <label className="contact-form-label">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="contact-form-input"
                          required
                          placeholder="10-digit mobile number"
                        />
                      </div>
                      <div>
                        <label className="contact-form-label">Subject</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="contact-form-input"
                        >
                          <option value="">Select Subject</option>
                          <option value="admission">Admission Enquiry</option>
                          <option value="course">Course Information</option>
                          <option value="university">University Information</option>
                          <option value="counselling">Career Counselling</option>
                          <option value="documentation">Documentation Help</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="contact-form-group">
                      <label className="contact-form-label">Your Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="contact-form-textarea"
                        required
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button type="submit" className="contact-form-submit">
                      Send Message →
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MAP SECTION ── */}
        <section className="contact-section" style={{ background: '#fff', paddingTop: 48, paddingBottom: 48 }}>
          <div className="contact-inner">
            <div className="contact-map-wrap">
              <iframe
                title="Shahpur Doyam, Narnaul Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.0!2d76.1075!3d28.0450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39128c5b6e7a4a2b%3A0x1234567890abcdef!2sShahpur+Doyam%2C+Narnaul%2C+Haryana+123001%2C+India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="contact-map-frame"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* ── QUICK CONTACT CTA ── */}
        <section className="contact-quick-cta">
          <div className="contact-quick-inner">
            <h2 className="contact-heading contact-heading-white" style={{ textAlign: 'center' }}>
              Need Immediate <em>Assistance?</em>
            </h2>
            <p className="contact-sub contact-sub-white" style={{ textAlign: 'center', margin: '14px auto 0' }}>
              Call us now or chat with our counsellors on WhatsApp for instant support.
            </p>
            <div className="contact-quick-btns">
              <a href="tel:+917027977081" className="btn-cta-outline">
                📞 Call: +91-70279-77081
              </a>
              <a
                href="https://wa.me/917027977081"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-green"
              >
                💬 WhatsApp Chat
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}