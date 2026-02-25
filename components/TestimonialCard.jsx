'use client';

/**
 * Testimonial Card Component
 * - Student review/testimonial display
 * - Star ratings
 * - Student info with course details
 * - Professional design
 * @param {Object} testimonial - Testimonial data object
 */
export default function TestimonialCard({ testimonial }) {
  // Render star rating
  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="card p-6 h-full flex flex-col bg-gradient-to-br from-white to-blue-50">
      {/* Quote Icon */}
      <div className="text-blue-200 mb-4">
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Rating */}
      <div className="mb-4">{renderStars(testimonial.rating)}</div>

      {/* Testimonial Text */}
      <p className="text-gray-700 mb-6 flex-grow italic leading-relaxed">
        "{testimonial.text}"
      </p>

      {/* Student Info */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-center gap-4">
          {/* Avatar Placeholder */}
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
            {testimonial.name.charAt(0)}
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-gray-800 text-lg">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-600">{testimonial.designation}</p>
            <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                </svg>
                {testimonial.course}
              </span>
              <span>•</span>
              <span>{testimonial.university}</span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {testimonial.location}
          </span>
          <span className="text-blue-600 font-semibold">
            Batch {testimonial.year}
          </span>
        </div>
      </div>

      {/* Verified Badge */}
      {testimonial.featured && (
        <div className="mt-3 pt-3 border-t border-gray-200">
          <span className="inline-flex items-center gap-1 text-xs text-green-600 font-semibold">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Verified Student
          </span>
        </div>
      )}
    </div>
  );
}