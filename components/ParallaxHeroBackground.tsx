'use client';

import Image from 'next/image';
import type { RefObject } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';

const HERO_IMAGE = '/images/hero-church.png';

type ParallaxHeroBackgroundProps = {
  sectionRef: RefObject<HTMLElement | null>;
  className?: string;
};

export default function ParallaxHeroBackground({
  sectionRef,
  className = '',
}: ParallaxHeroBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.45, 0.62, 0.78]);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden>
      <motion.div
        className="absolute -inset-[12%] will-change-transform"
        style={
          prefersReducedMotion
            ? undefined
            : { y: imageY, scale: imageScale }
        }
      >
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-cream/55 via-cream/72 to-cream"
        style={prefersReducedMotion ? undefined : { opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/20" />
    </div>
  );
}
