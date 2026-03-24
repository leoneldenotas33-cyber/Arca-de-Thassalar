'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Compass from '@/components/Compass';

export default function Home() {
  const [showCompass, setShowCompass] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCompass(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className='w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden'>
      {/* Opening message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='text-center z-10'
      >
        <h1 className='text-4xl md:text-5xl font-bold text-gold mb-4 drop-shadow-lg'>
          Arca de Thassalar
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          className='text-2xl text-gray-300 font-light tracking-wider'
        >
          Se você está aqui... então já está dentro do jogo.
        </motion.p>
      </motion.div>

      {/* Compass appears after delay */}
      {showCompass && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className='absolute inset-0'
        >
          <Compass />
        </motion.div>
      )}

      {/* Decorative elements */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className='absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/30'
      >
        ✦ ✦ ✦
      </motion.div>
    </main>
  );
}
