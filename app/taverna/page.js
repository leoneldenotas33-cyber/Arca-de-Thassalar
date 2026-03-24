'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import WorldMap from '@/components/WorldMap';

export default function TavernaPage() {
  return (
    <div className='w-full min-h-screen bg-black p-8'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-darkGray/30 via-black to-black pointer-events-none' />

      <div className='relative z-10 max-w-4xl mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='mb-8 flex items-center justify-between'
        >
          <div>
            <h1 className='text-4xl font-bold text-gold mb-2'>🍺 Taverna</h1>
            <p className='text-gray-400'>Lugar de histórias, sussurros e verdades perdidas</p>
          </div>
          <Link href='/map' className='text-gold hover:text-yellow-300 transition-colors'>
            ← Mapa
          </Link>
        </motion.div>

        {/* Warning/Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className='mb-8 p-4 border-l-4 border-blood bg-blood/10 rounded'
        >
          <p className='text-gray-300 text-sm'>
            ⚠️ <span className='text-gold'>Aviso:</span> As crônicas aqui registradas podem conter verdades incômodas. Quem lê além deste ponto não poderá fingir ignorância.
          </p>
        </motion.div>

        {/* Feed */}
        <WorldMap />
      </div>
    </div>
  );
}
