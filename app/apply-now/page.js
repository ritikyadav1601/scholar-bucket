'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

/**
 * Apply Now Page - Admission/Enquiry Form
 * - Comprehensive form for student enquiries
 * - Pre-fills from URL parameters (course, university)
 * - Form validation
 * - Success message on submission
 * - Frontend only (no backend integration)
 */
export default function ApplyNowPage() {
  const searchParams = useSearchParams();
  
  // Form state
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

  // Pre-fill form from URL parameters
  useEffect(() => {
    const course = searchParams.get('course');
    const university = searchParams.get('university');
    
    if (course) {
      setFormData(prev => ({ ...prev, courseInterested: course }));
    }
    if (university) {
      setFormData(prev => ({ ...prev, universityPreference: university }));
    }
  }, [searchParams]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Form validation
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // In production, send data to backend API here
      
      // Scroll to success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to first error
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  // If form is submitted successfully
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Success Message */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Application Submitted Successfully! 🎉
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Thank you, <strong>{formData.fullName}</strong>! Your admission enquiry has been received.
              </p>

              {/* What's Next */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
                <h3 className="font-bold text-blue-800 mb-3">What happens next?</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600 shrink-0">✓</span>
                    <span>Our counsellor will contact you within <strong>24 hours</strong></span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 shrink-0">✓</span>
                    <span>We'll discuss course options and university selection</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 shrink-0">✓</span>
                    <span>Complete documentation support will be provided</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 shrink-0">✓</span>
                    <span>100% admission guarantee</span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="mb-8">
                <p className="text-gray-600 mb-4">Need immediate assistance?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+917027977081" className="btn-primary">
                    📞 Call Now
                  </a>
                  <a href="https://wa.me/+917027977081" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    💬 WhatsApp
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <Link href="/" className="text-blue-600 hover:underline">
                  ← Back to Home
                </Link>
                <Link href="/courses" className="text-blue-600 hover:underline">
                  Browse Courses
                </Link>
                <Link href="/universities" className="text-blue-600 hover:underline">
                  View Universities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main form
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="gradient-bg py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Apply for <span className="text-yellow-300">Admission</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Fill out the form below and our expert counsellors will guide you through the admission process.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
                <div className="badge badge-success">✓ Free Counselling</div>
                <div className="badge badge-info">✓ 100% Admission</div>
                <div className="badge bg-amber-100 text-amber-700">✓ No Hidden Charges</div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="form-label">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`form-input ${errors.fullName ? 'border-red-500' : ''}`}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="form-label">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="form-label">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                        placeholder="10-digit mobile number"
                        maxLength="10"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label className="form-label">WhatsApp Number</label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Same as phone or different"
                        maxLength="10"
                      />
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label className="form-label">Date of Birth</label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="form-label">Gender</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Educational Details */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">
                    Educational Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Current Education */}
                    <div>
                      <label className="form-label">
                        Current Education Level <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        className={`form-input ${errors.education ? 'border-red-500' : ''}`}
                      >
                        <option value="">Select Education Level</option>
                        <option value="9th-pass">9th Pass</option>
                        <option value="10th-pass">10th Pass</option>
                        <option value="12th-pass">12th Pass</option>
                        <option value="graduation">Graduation Completed</option>
                        <option value="post-graduation">Post-Graduation Completed</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education}</p>}
                    </div>

                    {/* Course Interested */}
                    <div>
                      <label className="form-label">
                        Course Interested In <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="courseInterested"
                        value={formData.courseInterested}
                        onChange={handleChange}
                        className={`form-input ${errors.courseInterested ? 'border-red-500' : ''}`}
                        placeholder="e.g., Distance MBA, 12th NIOS, B.Com"
                      />
                      {errors.courseInterested && <p className="text-red-500 text-sm mt-1">{errors.courseInterested}</p>}
                    </div>

                    {/* University Preference */}
                    <div>
                      <label className="form-label">University Preference</label>
                      <input
                        type="text"
                        name="universityPreference"
                        value={formData.universityPreference}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="e.g., IGNOU, NIOS, Any"
                      />
                    </div>

                    {/* Study Mode */}
                    <div>
                      <label className="form-label">Preferred Study Mode</label>
                      <select
                        name="studyMode"
                        value={formData.studyMode}
                        onChange={handleChange}
                        className="form-input"
                      >
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

                {/* Location Details */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">
                    Location Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* City */}
                    <div>
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter your city"
                      />
                    </div>

                    {/* State */}
                    <div>
                      <label className="form-label">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter your state"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="form-label">Additional Message / Questions</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                    rows="4"
                    placeholder="Any specific questions or requirements? (Optional)"
                  ></textarea>
                </div>

                {/* Terms & Conditions */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to receive admission updates via WhatsApp, Email, and SMS. 
                      I understand that Scholar Bucket will assist me with the admission process 
                      and documentation. *
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 btn-primary py-4 text-lg font-bold"
                  >
                    Submit Application →
                  </button>
                  <a
                    href="tel:+917027977081"
                    className="btn-secondary py-4 text-lg text-center"
                  >
                    📞 Call Instead
                  </a>
                </div>

                {/* Help Text */}
                <p className="text-center text-sm text-gray-500">
                  Need help filling the form? 
                  <a href="https://wa.me/+917027977081" className="text-blue-600 hover:underline ml-1">
                    Chat with us on WhatsApp
                  </a>
                </p>
              </form>
            </div>

            {/* Trust Section Below Form */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow">
                <div className="text-3xl mb-2">🔒</div>
                <p className="text-sm font-semibold text-gray-800">100% Secure</p>
                <p className="text-xs text-gray-600">Your data is safe with us</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow">
                <div className="text-3xl mb-2">⚡</div>
                <p className="text-sm font-semibold text-gray-800">Quick Response</p>
                <p className="text-xs text-gray-600">Reply within 24 hours</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow">
                <div className="text-3xl mb-2">✅</div>
                <p className="text-sm font-semibold text-gray-800">Free Counselling</p>
                <p className="text-xs text-gray-600">No consultation fees</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}