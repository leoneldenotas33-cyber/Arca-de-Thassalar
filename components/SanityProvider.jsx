'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { sanityManager } from '@/lib/sanity';

export default function SanityProvider({ children }) {
  const [sanity, setSanity] = useState(0);

  useEffect(() => {
    const unsubscribe = sanityManager.subscribe(setSanity);
    setSanity(sanityManager.getSanity());
    return unsubscribe;
  }, []);

  return (
    <div className={sanity > 5 ? 'animate-flicker' : ''}>
      {children}
    </div>
  );
}
