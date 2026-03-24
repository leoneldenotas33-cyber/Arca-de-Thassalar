'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SanityProvider from './SanityProvider';

export default function PostCard({ post, onReaction, onComment }) {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [reactions, setReactions] = useState(post.reactions);

  const handleReaction = (type) => {
    setReactions({
      ...reactions,
      [type]: (reactions[type] || 0) + 1,
    });
    onReaction && onReaction(post.id, type);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      onComment && onComment(post.id, newComment);
      setNewComment('');
    }
  };

  return (
    <SanityProvider>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-darkGray border border-gold/30 p-6 rounded-lg mb-4 hover:border-gold/60 hover:shadow-glow transition-all'
      >
        <div className='flex items-start justify-between mb-3'>
          <div>
            <h3 className='text-gold font-bold'>{post.author}</h3>
            <p className='text-gray-400 text-sm'>{post.date}</p>
          </div>
        </div>

        <p className='text-gray-200 mb-4'>{post.content}</p>

        <div className='flex gap-4 mb-4'>
          {['🔥', '🧠', '👁️', '💀'].map((emoji) => (
            <motion.button
              key={emoji}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleReaction(emoji)}
              className='px-3 py-1 bg-blood/30 hover:bg-blood/60 rounded text-sm transition-colors'
            >
              {emoji} {reactions[emoji] || 0}
            </motion.button>
          ))}
        </div>

        <button
          onClick={() => setShowComments(!showComments)}
          className='text-gold text-sm hover:text-yellow-300 transition-colors'
        >
          💬 {post.comments?.length || 0} Comentários
        </button>

        {showComments && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className='mt-4 pt-4 border-t border-gold/30'
          >
            {post.comments?.map((comment, idx) => (
              <div key={idx} className='text-sm text-gray-300 mb-2 pl-4 border-l border-gold/30'>
                <span className='text-gold font-semibold'>{comment.author}:</span> {comment.text}
              </div>
            ))}

            <div className='flex gap-2 mt-3'>
              <input
                type='text'
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
                placeholder='Comentar...'
                className='flex-1 bg-dark/50 px-3 py-1 rounded text-sm border border-gold/30 focus:border-gold outline-none text-white'
              />
              <button
                onClick={handleAddComment}
                className='px-3 py-1 bg-gold/20 hover:bg-gold/40 rounded text-sm transition-colors'
              >
                Enviar
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </SanityProvider>
  );
}
