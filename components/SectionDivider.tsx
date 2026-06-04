'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';

export default function SectionDivider() {
  return (
    <ScrollReveal className="flex items-center justify-center gap-4 py-2" variant="fade">
      <motion.span
        className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span
        className="w-2 h-2 rounded-full bg-gold"
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <motion.span
        className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </ScrollReveal>
  );
}
