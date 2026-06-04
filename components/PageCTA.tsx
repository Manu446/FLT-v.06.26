'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import MagneticButton from '@/components/MagneticButton';
import SplitText from '@/components/SplitText';

type PageCTAProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function PageCTA({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PageCTAProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-gold-pale/40 via-cream to-gold-pale/20"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <div className="container mx-auto px-6 text-center relative z-10">
        <ScrollReveal variant="blur">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            <SplitText>{title}</SplitText>
          </h2>
          <p className="text-stone-muted max-w-xl mx-auto mb-8 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <MagneticButton href={primaryHref}>
              <span className="btn-gold">{primaryLabel}</span>
            </MagneticButton>
            {secondaryLabel && secondaryHref && (
              <MagneticButton href={secondaryHref}>
                <span className="btn-outline">{secondaryLabel}</span>
              </MagneticButton>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
