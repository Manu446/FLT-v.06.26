'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Youtube, Instagram, Phone, MapPin, Mail } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/ministries', label: 'Ministries' },
  { href: '/sermons', label: 'Sermons' },
  { href: '/events', label: 'Events' },
  { href: '/prayer', label: 'Prayer' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="relative bg-stone-text text-white/60 pt-20 pb-10 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14 text-left">
          <ScrollReveal variant="blur">
            <span className="font-display text-2xl text-white block mb-4">
              <span className="text-gold">Future</span> Life Tabernacle
            </span>
            <p className="text-sm leading-relaxed mb-4">
              Transforming lives through worship, the Word, and compassionate service in Karemo, Siaya, and beyond.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2"><MapPin size={14} className="text-gold shrink-0" /> Karemo, Siaya, Kenya</p>
              <p className="flex items-center gap-2"><Mail size={14} className="text-gold shrink-0" /> info@futurelifetabernacle.org</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} variant="fade">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-gold transition-colors inline-block hover:translate-x-1 duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.15} variant="fade">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Service Times</h4>
            <ul className="space-y-3 text-sm">
              <li><span className="text-gold font-medium">Sunday Worship</span><br />10:00 AM – Main Sanctuary</li>
              <li><span className="text-gold font-medium">Midweek Bible Study</span><br />Wednesday 6:00 PM</li>
              <li><span className="text-gold font-medium">Prayer & Fasting</span><br />First Friday monthly</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.2} variant="fade">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4 mb-6">
              {[
                { href: 'https://www.facebook.com/bishopisaacobure', icon: Facebook },
                { href: 'https://www.youtube.com/@bishopisaacobure', icon: Youtube },
                { href: 'https://www.instagram.com/bishop_isaac_obure/', icon: Instagram },
                { href: 'https://wa.me/254740485416', icon: Phone },
              ].map(({ href, icon: Icon }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
            <Link href="/contact#giving" className="btn-gold text-xs">Partner With Us</Link>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fade">
          <p className="text-xs text-white/40 text-center border-t border-white/10 pt-8">
            © 2025 Future Life Tabernacle. All rights reserved. | Designed with faith and excellence.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
