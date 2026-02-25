'use client';

import { useState } from 'react';
import UniversityCard from '@/components/UniversityCard';
import CTASection from '@/components/CTASection';
import { universities, universityTypes, getFeaturedUniversities } from '@/data/universities';

export default function UniversitiesPage() {
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter universities
  const filteredUniversities = universities.filter(uni => {
    const matchesType = selectedType === 'all' || uni.type === selectedType;
    const matchesSearch = !searchQuery || 
      uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.programs.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesSearch;
  });

  return (
    <>
      {/* Header */}
      <section className="gradient-bg py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-yellow-300">Partner Universities</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            50+ UGC-DEB approved and NAAC accredited universities across India
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-8 border-b">
        <div className="container-custom">
          {/* Search */}
          <div className="mb-6">
            <div className="relative max-w-md mx-auto md:mx-0">
              <input
                type="text"
                placeholder="Search universities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input w-full pl-12"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Type Filters */}
          <div className="flex flex-wrap gap-3">
            {universityTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedType === type.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <p className="text-gray-600 mb-8">
            Showing <span className="font-bold text-blue-600">{filteredUniversities.length}</span> universities
          </p>

          {filteredUniversities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUniversities.map((university) => (
                <UniversityCard key={university.id} university={university} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No universities found</h3>
              <button
                onClick={() => { setSelectedType('all'); setSearchQuery(''); }}
                className="btn-primary mt-4"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection variant="primary" />
    </>
  );
}