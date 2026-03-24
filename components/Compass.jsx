'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const islands = [
  {
    id: 1,
    name: 'Leitura',
    description: 'A Biblioteca do Conhecimento',
    link: '#',
    position: { top: '20%', left: '20%' },
  },
  {
    id: 2,
    name: 'Taverna',
    description: 'Núcleo da Verdade',
    link: '/taverna',
    position: { top: '50%', left: '50%' },
  },
  {
    id: 3,
    name: 'Núcleo',
    description: 'Câmara do Administrador',
    link: '/admin',
    position: { top: '70%', left: '75%' },
  },
];

export default function Compass() {
  const [hoveredIsland, setHoveredIsland] = useState(null);
  const [rotation, setRotation] = useState(0);

  return (
    <div className='relative w-full h-screen bg-black overflow-hidden'>
      {/* Fog effect */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black pointer-events-none' />

      {/* Compass - central rotation */}
      <motion.div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <svg width='120' height='120' viewBox='0 0 120 120' className='drop-shadow-lg'>
          <circle cx='60' cy='60' r='55' fill='none' stroke='#D4AF37' strokeWidth='2' opacity='0.6' />
          <circle cx='60' cy='60' r='50' fill='none' stroke='#D4AF37' strokeWidth='1' opacity='0.3' />
          
          {/* Cardinal directions */}
          <text x='60' y='15' textAnchor='middle' fill='#D4AF37' fontSize='12' fontWeight='bold'>
            N
          </text>
          <text x='105' y='65' textAnchor='middle' fill='#D4AF37' fontSize='12' fontWeight='bold'>
            E
          </text>
          <text x='60' y='110' textAnchor='middle' fill='#D4AF37' fontSize='12' fontWeight='bold'>
            S
          </text>
          <text x='15' y='65' textAnchor='middle' fill='#D4AF37' fontSize='12' fontWeight='bold'>
            W
          </text>

          {/* Center star */}
          <circle cx='60' cy='60' r='5' fill='#D4AF37' />
          <polygon points='60,55 65,60 60,65 55,60' fill='#8B0000' opacity='0.7' />
        </svg>
      </motion.div>

      {/* Islands */}
      {islands.map((island) => (
        <motion.div
          key={island.id}
          className='absolute'
          style={island.position}
          onHoverStart={() => setHoveredIsland(island.id)}
          onHoverEnd={() => setHoveredIsland(null)}
        >
          <Link href={island.link}>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative cursor-pointer group ${
                hoveredIsland === island.id ? 'shadow-glow-strong' : 'shadow-glow'
              }`}
            >
              {/* Island glow */}
              <motion.div
                animate={hoveredIsland === island.id ? { scale: 1.5, opacity: 0.8 } : { scale: 1, opacity: 0.5 }}
                className='w-20 h-20 rounded-full bg-gold/30 absolute -inset-2'
              />

              {/* Island circle */}
              <div className='relative w-16 h-16 rounded-full bg-gradient-to-b from-gold/50 to-gold/20 border-2 border-gold flex items-center justify-center group-hover:border-blood transition-colors'>
                <div className='text-2xl'>{island.id === 1 ? '📚' : island.id === 2 ? '🍺' : '👑'}</div>
              </div>

              {/* Label */}
              <motion.div
                animate={hoveredIsland === island.id ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className='absolute top-full mt-2 left-1/2 -translate-x-1/2 text-center whitespace-nowrap pointer-events-none'
              >
                <div className='text-gold font-bold text-sm'>{island.name}</div>
                <div className='text-gray-300 text-xs'>{island.description}</div>
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      ))}

      {/* Legend */}
      <div className='absolute bottom-8 left-8 text-gold/60 text-xs space-y-1'>
        <div>🧭 Mapa do Reino</div>
        <div>Sobrevoo para detalhes</div>
        <div>Clique para explorar</div>
      </div>
    </div>
  );
}
