'use client';

import { motion } from 'framer-motion';

type MarqueeBandProps = {
  items: string[];
  className?: string;
};

export default function MarqueeBand({ items, className = '' }: MarqueeBandProps) {
  const line = [...items, ...items].join('  •  ');

  return (
    <div
      className={`relative overflow-hidden border-y border-gold/15 bg-gradient-to-r from-gold-pale/40 via-white to-gold-pale/40 py-4 ${className}`}
    >
      <motion.div
        className="flex whitespace-nowrap text-sm font-medium tracking-wide text-gold-dark"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        <span className="px-8">{line}</span>
        <span className="px-8" aria-hidden>
          {line}
        </span>
      </motion.div>
    </div>
  );
}
