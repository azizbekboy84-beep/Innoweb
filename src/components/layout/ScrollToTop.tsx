'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Darhol yuqoriga scroll qilish
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' } as ScrollToOptions);
    
    // Yana bir marta ishonch hosil qilish uchun
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' } as ScrollToOptions);
    }, 0);
  }, [pathname]);

  // Component yuklanganda ham scroll qilish
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' } as ScrollToOptions);
  }, []);

  return null;
}
