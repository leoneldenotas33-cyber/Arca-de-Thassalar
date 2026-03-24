'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [chapters, setChapters] = useState([
    { id: 1, title: 'A Fundação', date: '2026-03-01' },
    { id: 2, title: 'Os Sussurros', date: '2026-03-10' },
  ]);
  const [newChapterTitle, setNewChapterTitle] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (password === '828282') {
      setIsAuthenticated(true);
      setError('');
      setPassword('');
    } else {
      setError('Senha incorreta. Acesso negado.');
      setPassword('');
    }
  };

  const handleAddChapter = () => {
    if (newChapterTitle.trim()) {
      setChapters([
        ...chapters,
        {
          id: chapters.length + 1,
          title: newChapterTitle,
          date: new Date().toISOString().split('T')[0],
        },
      ]);
      setNewChapterTitle('');
    }
  };

  const handleDeleteChapter = (id) => {
    setChapters(chapters.filter(ch => ch.id !== id));
  };

  return (
    <div className='w-full min-h-screen bg-black p-8'>
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-b from-blood/20 via-black to-black pointer-events-none' />

      <div className='relative z-10 max-w-2xl mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='mb-8 flex items-center justify-between'
        >
          <div>
            <h1 className='text-4xl font-bold text-blood mb-2'>👑 Núcleo</h1>
            <p className='text-gray-400'>Câmara de Administração - Acesso Restrito</p>
          </div>
          <Link href='/map' className='text-gold hover:text-yellow-300 transition-colors'>
            ← Mapa
          </Link>
        </motion.div>

        {/* Not authenticated view */}
        {!isAuthenticated ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className='bg-darkGray border-2 border-blood p-8 rounded-lg max-w-md mx-auto'
          >
            <h2 className='text-blood font-bold text-2xl mb-6 text-center'>Autenticação Necessária</h2>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className='mb-4 p-3 bg-blood/30 border border-blood/50 rounded text-blood text-sm'
              >
                {error}
              </motion.div>
            )}

            <div className='space-y-4'>
              <div>
                <label className='block text-gold text-sm font-semibold mb-2'>Senha de Acesso:</label>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  placeholder='••••••'
                  className='w-full bg-black border border-gold/30 text-gold px-4 py-2 rounded focus:border-gold outline-none'
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogin}
                className='w-full px-4 py-2 bg-blood/30 border border-blood hover:bg-blood/60 text-blood font-bold rounded transition-all'
              >
                Acessar
              </motion.button>
            </div>

            <p className='text-gray-400 text-xs text-center mt-6'>
              Acesso restrito a administradores<br />
              Todas as tentativas são registradas.
            </p>
          </motion.div>
        ) : (
          /* Authenticated view - Dashboard */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='space-y-6'
          >
            {/* Create Chapter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='bg-darkGray border border-gold/50 p-6 rounded-lg'
            >
              <h3 className='text-gold font-bold text-lg mb-4'>Criar Capítulo</h3>
              <div className='flex gap-2'>
                <input
                  type='text'
                  value={newChapterTitle}
                  onChange={(e) => setNewChapterTitle(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddChapter()}
                  placeholder='Título do novo capítulo...'
                  className='flex-1 bg-black border border-gold/30 text-gold px-4 py-2 rounded focus:border-gold outline-none'
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddChapter}
                  className='px-6 py-2 bg-gold/20 border border-gold hover:bg-gold/40 text-gold font-bold rounded transition-all'
                >
                  + Criar
                </motion.button>
              </div>
            </motion.div>

            {/* Chapters List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className='bg-darkGray border border-gold/50 p-6 rounded-lg'
            >
              <h3 className='text-gold font-bold text-lg mb-4'>Capítulos do Arca ({chapters.length})</h3>

              <div className='space-y-2'>
                {chapters.map((chapter, idx) => (
                  <motion.div
                    key={chapter.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className='flex items-center justify-between bg-black/50 p-3 rounded border border-gold/30 hover:border-gold/60 transition-colors'
                  >
                    <div>
                      <p className='text-gold font-semibold'>{chapter.title}</p>
                      <p className='text-gray-400 text-xs'>{chapter.date}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDeleteChapter(chapter.id)}
                      className='px-3 py-1 bg-blood/30 hover:bg-blood/60 text-blood rounded text-sm transition-all'
                    >
                      ✕ Deletar
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Logout */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAuthenticated(false)}
              className='w-full px-4 py-2 bg-gold/10 border border-gold/30 hover:bg-gold/20 text-gold rounded transition-all'
            >
              Sair
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
