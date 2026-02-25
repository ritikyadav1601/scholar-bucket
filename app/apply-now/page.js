'use client';

import { useState, Suspense, useCallback } from 'react';
import Link from 'next/link';
import SearchParamsReader from './SearchParamsReader';

function ApplyNowPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    dateOfBirth: '',
    gender: '',
    education: '',
    courseInterested: '',
    universityPreference: '',
    studyMode: '',
    city: '',
    state: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Called by SearchParamsReader once params are available
  const handleParams = useCallback(({ course, university }) => {
    setFormData(prev => ({
      ...prev,
      ...(course ? { courseInterested: course } : {}),
      ...(university ? { universityPreference: university } : {}),
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    if (!formData.education) newErrors.education = 'Please select your education level';
    if (!formData.courseInterested.trim()) newErrors.courseInterested = 'Please specify course';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    import('@emailjs/browser').then((emailjs) => {
      emailjs.send(
        'service_dh94mr9',
        'template_12auxmf',
        formData,
        'kx2OiU7qpMSTRdWqQ'
      )
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      })
      .catch((error) => {
        console.error('Email error:', error);
      });
    });
  };

  if (isSubmitted) {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
          :root { --navy:#0c1f3f; --accent:#e8923a; --gold:#f5c842; --green:#4caf82; }
          .success-page { font-family: 'Plus Jakarta Sans', sans-serif; min-height: 100vh; background: #f8faff; padding: 96px 32px; }
          .success-inner { max-width: 680px; margin: 0 auto; background: #fff; border-radius: 24px; box-shadow: 0 8px 32px rgba(0,0,0,.08); padding: 56px 48px; text-align: center; }
          .success-icon { width: 80px; height: 80px; border-radius: 50%; background: rgba(76,175,130,.12); border: 3px solid rgba(76,175,130,.3); display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; }
          .success-title { font-family: 'Playfair Display', serif; font-size: clamp(28px,4vw,38px); font-weight: 700; color: var(--navy); line-height: 1.2; margin-bottom: 14px; }
          .success-desc { font-size: 16px; color: #64748b; line-height: 1.7; margin-bottom: 32px; }
          .success-desc strong { font-weight: 700; color: var(--navy); }
          .success-box { background: rgba(76,175,130,.06); border: 1px solid rgba(76,175,130,.2); border-radius: 16px; padding: 24px; margin-bottom: 32px; text-align: left; }
          .success-box-title { font-weight: 700; font-size: 15px; color: var(--green); margin-bottom: 16px; }
          .success-list { display: flex; flex-direction: column; gap: 12px; }
          .success-list-item { display: flex; gap: 10px; align-items: flex-start; font-size: 14px; color: #334155; }
          .success-check { color: var(--green); flex-shrink: 0; font-weight: 700; }
          .success-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 28px; }
          .btn-success-primary { display: inline-flex; align-items: center; gap: 8px; background: var(--accent); color: #fff; font-weight: 700; font-size: 14.5px; padding: 13px 26px; border-radius: 12px; text-decoration: none; transition: all .3s; box-shadow: 0 6px 20px rgba(232,146,58,.35); }
          .btn-success-secondary { display: inline-flex; align-items: center; gap: 8px; background: rgba(15,23,42,.04); border: 1.5px solid #e2e8f0; color: var(--navy); font-weight: 700; font-size: 14.5px; padding: 13px 26px; border-radius: 12px; text-decoration: none; }
          .success-links { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; font-size: 13.5px; }
          .success-link { color: #2563c4; text-decoration: none; font-weight: 600; }
          @media(max-width:600px) { .success-page { padding: 64px 20px; } .success-inner { padding: 40px 28px; } }
        `}</style>
        <div className="success-page">
          <div className="success-inner">
            <div className="success-icon">
              <svg style={{ width: 42, height: 42, color: '#4caf82' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="success-title">Application Submitted Successfully! 🎉</h1>
            <p className="success-desc">
              Thank you, <strong>{formData.fullName}</strong>! Your admission enquiry has been received.
              Our expert counsellors will contact you shortly.
            </p>
            <div className="success-box">
              <div className="success-box-title">What happens next?</div>
              <div className="success-list">
                {[
                  'Our counsellor will contact you within 24 hours',
                  "We'll discuss course options and university selection",
                  'Complete documentation support will be provided',
                  '100% admission guarantee with no hidden charges',
                ].map((item, i) => (
                  <div key={i} className="success-list-item">
                    <span className="success-check">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: 14, color: '#64748b', marginBottom: 20 }}>Need immediate assistance?</p>
            <div className="success-btns">
              <a href="tel:+917027977081" className="btn-success-primary">📞 Call Now</a>
              <a href="https://wa.me/917027977081" target="_blank" rel="noopener noreferrer" className="btn-success-secondary">💬 WhatsApp</a>
            </div>
            <div className="success-links">
              <Link href="/" className="success-link">← Back to Home</Link>
              <Link href="/courses" className="success-link">Browse Courses</Link>
              <Link href="/universities" className="success-link">View Universities</Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        :root { --navy:#0c1f3f; --blue:#1a4a8a; --mid:#2563c4; --accent:#e8923a; --gold:#f5c842; --border:#e2e8f0; }
        .apply-page { font-family: 'Plus Jakarta Sans', sans-serif; }
        .apply-page * { box-sizing: border-box; }
        @keyframes popPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.5)} }
        .apply-hero { position: relative; min-height: 45vh; display: flex; align-items: center; overflow: hidden; background: var(--navy); padding-top: 68px; }
        .apply-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 70% 50% at 60% 40%, rgba(37,99,196,.28) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 20% 80%, rgba(232,146,58,.12) 0%, transparent 60%); }
        .apply-hero::after { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px); background-size: 60px 60px; }
        .apply-hero-content { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; padding: 60px 32px; text-align: center; }
        .apply-hero-eyebrow { display: inline-flex; align-items: center; gap: 8px; background: rgba(232,146,58,.15); border: 1px solid rgba(232,146,58,.3); border-radius: 99px; padding: 5px 14px; font-size: 12px; font-weight: 700; color: var(--gold); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 22px; }
        .apply-hero-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); animation: popPulse 2s ease infinite; }
        .apply-hero-h1 { font-family: 'Playfair Display', serif; font-size: clamp(32px,5vw,48px); font-weight: 700; color: #fff; line-height: 1.15; margin-bottom: 16px; }
        .apply-hero-h1 em { font-style: italic; color: var(--gold); }
        .apply-hero-p { font-size: 16px; color: rgba(255,255,255,.65); line-height: 1.7; max-width: 560px; margin: 0 auto; }
        .apply-section { padding: 64px 32px; background: #f8faff; }
        .apply-inner { max-width: 900px; margin: 0 auto; }
        .apply-card { background: #fff; border: 1px solid var(--border); border-radius: 24px; padding: 48px; box-shadow: 0 4px 20px rgba(0,0,0,.04); }
        .apply-badges { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 36px; }
        .apply-badge { padding: 6px 16px; border-radius: 99px; font-size: 12px; font-weight: 700; display: flex; align-items: center; gap: 6px; }
        .badge-green { background: rgba(76,175,130,.12); color: #1b5e20; border: 1px solid rgba(76,175,130,.25); }
        .badge-blue { background: rgba(37,99,196,.12); color: #1a4a8a; border: 1px solid rgba(37,99,196,.25); }
        .badge-gold { background: rgba(232,146,58,.12); color: #b5541e; border: 1px solid rgba(232,146,58,.25); }
        .apply-section-title { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; color: var(--navy); margin-bottom: 20px; padding-bottom: 14px; border-bottom: 2px solid var(--border); }
        .apply-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .apply-form-group { margin-bottom: 20px; }
        .apply-label { display: block; font-size: 13.5px; font-weight: 600; color: var(--navy); margin-bottom: 8px; }
        .apply-required { color: #dc2626; }
        .apply-input { width: 100%; padding: 13px 16px; border-radius: 12px; border: 1.5px solid var(--border); background: #fff; font-size: 14px; font-family: 'Plus Jakarta Sans', sans-serif; color: #1e293b; outline: none; transition: all .25s ease; }
        .apply-input::placeholder { color: rgba(100,116,139,.4); }
        .apply-input:focus { border-color: var(--mid); background: #f0f5ff; box-shadow: 0 0 0 3px rgba(37,99,196,.08); }
        .apply-input.error { border-color: #dc2626; }
        .apply-error { font-size: 12.5px; color: #dc2626; margin-top: 6px; }
        .apply-textarea { width: 100%; padding: 13px 16px; border-radius: 12px; border: 1.5px solid var(--border); background: #fff; font-size: 14px; font-family: 'Plus Jakarta Sans', sans-serif; color: #1e293b; outline: none; transition: all .25s ease; resize: vertical; min-height: 100px; }
        .apply-textarea:focus { border-color: var(--mid); background: #f0f5ff; box-shadow: 0 0 0 3px rgba(37,99,196,.08); }
        .apply-terms { background: #f8faff; border: 1px solid var(--border); border-radius: 14px; padding: 18px; margin-bottom: 24px; }
        .apply-terms-label { display: flex; align-items: flex-start; gap: 12px; cursor: pointer; }
        .apply-checkbox { width: 18px; height: 18px; margin-top: 2px; cursor: pointer; }
        .apply-terms-text { font-size: 13px; color: #475569; line-height: 1.6; }
        .apply-submit-row { display: flex; gap: 14px; }
        .apply-submit { flex: 1; padding: 15px 28px; border-radius: 12px; background: var(--accent); color: #fff; font-weight: 700; font-size: 15px; border: none; cursor: pointer; font-family: 'Plus Jakarta Sans', sans-serif; transition: all .3s cubic-bezier(.34,1.56,.64,1); box-shadow: 0 6px 20px rgba(232,146,58,.35); }
        .apply-submit:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 10px 28px rgba(232,146,58,.48); }
        .apply-call-btn { padding: 15px 28px; border-radius: 12px; background: rgba(15,23,42,.04); border: 1.5px solid var(--border); color: var(--navy); font-weight: 700; font-size: 15px; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 6px; transition: all .25s ease; white-space: nowrap; }
        .apply-call-btn:hover { border-color: var(--mid); color: var(--mid); }
        .apply-help { text-align: center; font-size: 13px; color: #64748b; margin-top: 20px; }
        .apply-help a { color: var(--mid); text-decoration: none; font-weight: 600; }
        .apply-trust-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 32px; }
        .apply-trust-card { background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 20px; text-align: center; }
        .apply-trust-emoji { font-size: 32px; margin-bottom: 10px; }
        .apply-trust-title { font-weight: 700; font-size: 14px; color: var(--navy); margin-bottom: 4px; }
        .apply-trust-desc { font-size: 12px; color: #64748b; }
        @media(max-width:768px) {
          .apply-section { padding: 48px 20px; }
          .apply-card { padding: 32px 24px; }
          .apply-form-row { grid-template-columns: 1fr; }
          .apply-submit-row { flex-direction: column; }
          .apply-trust-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="apply-page">
        {/* Reads ?course= and ?university= from URL, sets formData, renders nothing */}
        <Suspense fallback={null}>
          <SearchParamsReader onParams={handleParams} />
        </Suspense>

        <section className="apply-hero">
          <div className="apply-hero-content">
            <div className="apply-hero-eyebrow">
              <span className="apply-hero-dot" />
              Start Your Journey
            </div>
            <h1 className="apply-hero-h1">Apply for <em>Admission</em></h1>
            <p className="apply-hero-p">
              Fill out the form below and our expert counsellors will guide you through the entire admission process — completely free.
            </p>
          </div>
        </section>

        <section className="apply-section">
          <div className="apply-inner">
            <div className="apply-card">
              <div className="apply-badges">
                <div className="apply-badge badge-green">✓ Free Counselling</div>
                <div className="apply-badge badge-blue">✓ 100% Admission</div>
                <div className="apply-badge badge-gold">✓ No Hidden Charges</div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Personal Information */}
                <div style={{ marginBottom: 32 }}>
                  <div className="apply-section-title">Personal Information</div>
                  <div className="apply-form-row">
                    <div>
                      <label className="apply-label">Full Name <span className="apply-required">*</span></label>
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={`apply-input ${errors.fullName ? 'error' : ''}`} placeholder="Enter your full name" />
                      {errors.fullName && <div className="apply-error">{errors.fullName}</div>}
                    </div>
                    <div>
                      <label className="apply-label">Email Address <span className="apply-required">*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className={`apply-input ${errors.email ? 'error' : ''}`} placeholder="your.email@example.com" />
                      {errors.email && <div className="apply-error">{errors.email}</div>}
                    </div>
                  </div>
                  <div className="apply-form-row">
                    <div>
                      <label className="apply-label">Phone Number <span className="apply-required">*</span></label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`apply-input ${errors.phone ? 'error' : ''}`} placeholder="10-digit mobile number" maxLength="10" />
                      {errors.phone && <div className="apply-error">{errors.phone}</div>}
                    </div>
                    <div>
                      <label className="apply-label">WhatsApp Number</label>
                      <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="apply-input" placeholder="Same as phone or different" maxLength="10" />
                    </div>
                  </div>
                  <div className="apply-form-row">
                    <div>
                      <label className="apply-label">Date of Birth</label>
                      <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="apply-input" />
                    </div>
                    <div>
                      <label className="apply-label">Gender</label>
                      <select name="gender" value={formData.gender} onChange={handleChange} className="apply-input">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Educational Details */}
                <div style={{ marginBottom: 32 }}>
                  <div className="apply-section-title">Educational Details</div>
                  <div className="apply-form-row">
                    <div>
                      <label className="apply-label">Current Education Level <span className="apply-required">*</span></label>
                      <select name="education" value={formData.education} onChange={handleChange} className={`apply-input ${errors.education ? 'error' : ''}`}>
                        <option value="">Select Education Level</option>
                        <option value="9th-pass">9th Pass</option>
                        <option value="10th-pass">10th Pass</option>
                        <option value="12th-pass">12th Pass</option>
                        <option value="graduation">Graduation Completed</option>
                        <option value="post-graduation">Post-Graduation Completed</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.education && <div className="apply-error">{errors.education}</div>}
                    </div>
                    <div>
                      <label className="apply-label">Course Interested In <span className="apply-required">*</span></label>
                      <input type="text" name="courseInterested" value={formData.courseInterested} onChange={handleChange} className={`apply-input ${errors.courseInterested ? 'error' : ''}`} placeholder="e.g., Distance MBA, 12th NIOS, B.Com" />
                      {errors.courseInterested && <div className="apply-error">{errors.courseInterested}</div>}
                    </div>
                  </div>
                  <div className="apply-form-row">
                    <div>
                      <label className="apply-label">University Preference</label>
                      <input type="text" name="universityPreference" value={formData.universityPreference} onChange={handleChange} className="apply-input" placeholder="e.g., IGNOU, NIOS, Any" />
                    </div>
                    <div>
                      <label className="apply-label">Preferred Study Mode</label>
                      <select name="studyMode" value={formData.studyMode} onChange={handleChange} className="apply-input">
                        <option value="">Select Study Mode</option>
                        <option value="regular">Regular / On-Campus</option>
                        <option value="distance">Distance Learning</option>
                        <option value="online">Online</option>
                        <option value="open">Open Schooling</option>
                        <option value="any">Any Mode</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div style={{ marginBottom: 32 }}>
                  <div className="apply-section-title">Location Details</div>
                  <div className="apply-form-row">
                    <div>
                      <label className="apply-label">City</label>
                      <input type="text" name="city" value={formData.city} onChange={handleChange} className="apply-input" placeholder="Enter your city" />
                    </div>
                    <div>
                      <label className="apply-label">State</label>
                      <input type="text" name="state" value={formData.state} onChange={handleChange} className="apply-input" placeholder="Enter your state" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="apply-form-group">
                  <label className="apply-label">Additional Message / Questions</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} className="apply-textarea" placeholder="Any specific questions or requirements? (Optional)" />
                </div>

                {/* Terms */}
                <div className="apply-terms">
                  <label className="apply-terms-label">
                    <input type="checkbox" required className="apply-checkbox" />
                    <span className="apply-terms-text">
                      I agree to receive admission updates via WhatsApp, Email, and SMS.
                      I understand that Scholar Bucket will assist me with the admission process and documentation. *
                    </span>
                  </label>
                </div>

                <div className="apply-submit-row">
                  <button type="submit" className="apply-submit">Submit Application →</button>
                  <a href="tel:+917027977081" className="apply-call-btn">📞 Call Instead</a>
                </div>

                <p className="apply-help">
                  Need help filling the form?{' '}
                  <a href="https://wa.me/917027977081">Chat with us on WhatsApp</a>
                </p>
              </form>
            </div>

            <div className="apply-trust-grid">
              <div className="apply-trust-card">
                <div className="apply-trust-emoji">🔒</div>
                <div className="apply-trust-title">100% Secure</div>
                <div className="apply-trust-desc">Your data is safe with us</div>
              </div>
              <div className="apply-trust-card">
                <div className="apply-trust-emoji">⚡</div>
                <div className="apply-trust-title">Quick Response</div>
                <div className="apply-trust-desc">Reply within 24 hours</div>
              </div>
              <div className="apply-trust-card">
                <div className="apply-trust-emoji">✅</div>
                <div className="apply-trust-title">Free Counselling</div>
                <div className="apply-trust-desc">No consultation fees</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ApplyNowPage;