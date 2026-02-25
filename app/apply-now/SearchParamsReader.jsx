'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function SearchParamsReader({ onParams }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const course = searchParams.get('course');
    const university = searchParams.get('university');
    onParams({ course, university });
  }, [searchParams, onParams]);

  return null;
}