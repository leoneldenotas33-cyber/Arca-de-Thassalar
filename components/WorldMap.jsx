'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PostCard from './PostCard';

export default function WorldMap() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Arcanista',
      date: 'Há 2 horas',
      content: 'Encontrei sinais... algo está acordando nas profundezas do Núcleo.',
      reactions: { '🔥': 5, '🧠': 3, '👁️': 7, '💀': 1 },
      comments: [
        { author: 'Guardião', text: 'Acompanho de perto...' },
        { author: 'Sábio', text: 'Cuidado, as camadas antigas despertam.' },
      ],
    },
    {
      id: 2,
      author: 'Viajante',
      date: 'Há 5 horas',
      content: 'A névoa se dissipou por um momento. Vi algo dourado entre as nuvens.',
      reactions: { '🔥': 2, '🧠': 8, '👁️': 4, '💀': 0 },
      comments: [],
    },
    {
      id: 3,
      author: 'Escriba',
      date: 'Há 1 dia',
      content: 'Registros antigos falam de uma chave... um mapa perdido.',
      reactions: { '🔥': 0, '🧠': 12, '👁️': 2, '💀': 0 },
      comments: [
        { author: 'Caçador', text: 'Onde você encontrou isso?' },
      ],
    },
  ]);

  const handleReaction = (postId, type) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, reactions: { ...post.reactions, [type]: (post.reactions[type] || 0) + 1 } }
        : post
    ));
  };

  const handleComment = (postId, comment) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, comments: [...post.comments || [], { author: 'Você', text: comment }] }
        : post
    ));
  };

  return (
    <div className='max-w-2xl mx-auto'>
      <h2 className='text-3xl font-bold text-gold mb-8 text-center'>📜 Taverna - Crônicas do Reino</h2>
      
      <div className='space-y-4'>
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onReaction={handleReaction}
            onComment={handleComment}
          />
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='mt-8 w-full px-6 py-3 bg-gold/20 border border-gold hover:bg-gold/40 text-gold rounded-lg transition-all font-semibold'
      >
        ⬇️ Carregar mais crônicas
      </motion.button>
    </div>
  );
}
