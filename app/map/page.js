'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Compass from '@/components/Compass';

export default function MapPage() {
  return (
    <div className='w-full min-h-screen bg-black relative overflow-hidden'>
      {/* Background fog */}
      <div className='absolute inset-0 bg-gradient-radial from-darkGray/20 via-transparent to-black pointer-events-none' />

      {/* Compass as background */}
      <div className='absolute inset-0 z-0 opacity-60'>
        <Compass />
      </div>

      {/* Top navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className='absolute top-0 left-0 right-0 p-8 z-20'
      >
        <Link href='/' className='text-gold hover:text-yellow-300 transition-colors'>
          ← Voltar
        </Link>
      </motion.div>

      {/* Map overlay content - islands info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='absolute inset-0 z-10 pointer-events-none'
      >
        {/* Legend with instructions */}
        <div className='absolute top-32 right-8 text-right max-w-xs'>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className='bg-darkGray/80 border border-gold/50 p-4 rounded backdrop-blur'
          >
            <h2 className='text-gold font-bold mb-3'>🗺️ Reinos do Arca</h2>
            <div className='space-y-3 text-sm'>
              <div>
                <p className='text-gold font-semibold'>📚 Leitura</p>
                <p className='text-gray-300'>Biblioteca Antiga</p>
              </div>
              <div>
                <p className='text-gold font-semibold'>🍺 Taverna</p>
                <p className='text-gray-300'>Coração da Comunidade</p>
              </div>
              <div>
                <p className='text-gold font-semibold'>👑 Núcleo</p>
                <p className='text-gray-300'>Câmara Administrativa</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sanity meter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className='absolute bottom-8 left-8'
        >
          <div className='text-gold text-sm font-mono'>
            <div>❰ SANIDADE ❱</div>
            <div className='text-xs text-gray-400'>Monitor global activo...</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
