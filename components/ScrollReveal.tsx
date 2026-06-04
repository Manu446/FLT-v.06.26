'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  variant?: 'up' | 'fade' | 'blur' | 'scale';
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8,
  variant = 'up',
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: -50 },
    right: { y: 0, x: 50 },
  };

  const variants = {
    up: { hidden: { opacity: 0, ...directions[direction] }, visible: { opacity: 1, x: 0, y: 0 } },
    fade: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
    blur: {
      hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
      visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.92, y: 20 },
      visible: { opacity: 1, scale: 1, y: 0 },
    },
  };

  const v = variant === 'up' ? variants.up : variants[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={v}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
