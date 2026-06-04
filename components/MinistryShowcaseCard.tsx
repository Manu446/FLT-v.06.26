'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type MinistryShowcaseCardProps = {
  img: string;
  title: string;
  desc: string;
  tag?: string;
  href?: string;
};

export default function MinistryShowcaseCard({
  img,
  title,
  desc,
  tag,
  href = '/ministries',
}: MinistryShowcaseCardProps) {
  return (
    <Link href={href} className="group block relative rounded-3xl overflow-hidden h-[420px] border border-black/[0.06]">
      <motion.img
        src={img}
        alt={title}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.12 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />
      {tag && (
        <motion.span
          className="absolute top-5 left-5 px-3 py-1 rounded-full bg-gold/90 text-white text-xs font-semibold"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {tag}
        </motion.span>
      )}
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <motion.h4
          className="font-display text-2xl text-white mb-2"
          initial={false}
          whileHover={{ x: 4 }}
        >
          {title}
        </motion.h4>
        <p className="text-white/75 text-sm mb-4 max-w-sm translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 leading-relaxed">
          {desc}
        </p>
        <span className="inline-flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Explore ministry <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}
