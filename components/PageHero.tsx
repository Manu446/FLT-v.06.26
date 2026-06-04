'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import SplitText from '@/components/SplitText';

type PageHeroProps = {
  label: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function PageHero({
  label,
  title,
  titleAccent,
  subtitle,
  children,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-cream-warm">
      <motion.div
        aria-hidden
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-gold-pale/60 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#a17d1f_1px,transparent_0)] bg-[length:24px_24px]" aria-hidden />

      <div className="container mx-auto px-6 text-center relative z-10">
        <ScrollReveal variant="blur">
          <span className="section-label">{label}</span>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h1 className="font-display text-5xl md:text-7xl mb-6 leading-tight">
            <SplitText>{title}</SplitText>
            {titleAccent && (
              <>
                <br />
                <em className="text-gold-dark not-italic">
                  <SplitText delay={0.2}>{titleAccent}</SplitText>
                </em>
              </>
            )}
          </h1>
        </ScrollReveal>
        {subtitle && (
          <ScrollReveal delay={0.15} variant="fade">
            <p className="text-stone-muted max-w-2xl mx-auto text-lg leading-relaxed">
              {subtitle}
            </p>
          </ScrollReveal>
        )}
        {children}
      </div>
    </section>
  );
}
