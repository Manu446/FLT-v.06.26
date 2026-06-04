'use client';

import { useRef } from 'react';
import ClientLayout from '@/components/ClientLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ParallaxHeroBackground from '@/components/ParallaxHeroBackground';
import {
  ArrowDown,
  Play,
  MapPin,
  Clock,
  Heart,
  BookOpen,
  Globe,
  Users,
  Sparkles,
  HandHeart,
  Mic2,
  Coffee,
} from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import ScrollReveal from '@/components/ScrollReveal';
import MagneticButton from '@/components/MagneticButton';
import TiltCard from '@/components/TiltCard';
import Counter from '@/components/Counter';
import SplitText from '@/components/SplitText';
import MarqueeBand from '@/components/MarqueeBand';
import SectionDivider from '@/components/SectionDivider';
import StaggerChildren, { StaggerItem } from '@/components/StaggerChildren';
import MinistryShowcaseCard from '@/components/MinistryShowcaseCard';

const serviceHighlights = [
  { icon: Clock, label: 'Sunday Worship', time: '10:00 AM' },
  { icon: BookOpen, label: 'Bible Study', time: 'Wed 6:00 PM' },
  { icon: Heart, label: 'Prayer Night', time: 'Fri Monthly' },
  { icon: Users, label: 'Youth Rally', time: 'Sat 2:00 PM' },
];

const milestones = [
  { year: '1995', title: 'Humble Beginnings', text: 'A small prayer gathering under Bishop Isaac Obure plants the seed of Future Life Tabernacle in Karemo.' },
  { year: '2010', title: 'Sanctuary Built', text: 'The congregation moves into a dedicated worship space as membership grows and ministries multiply.' },
  { year: '2020', title: 'Digital Outreach', text: 'Sermons and teachings reach global audiences through livestream and social ministry platforms.' },
  { year: 'Today', title: 'A Thriving Family', text: 'Thousands gather weekly in worship, discipleship, and community impact across Siaya and beyond.' },
];

const sundayFlow = [
  { step: '01', icon: Coffee, title: 'Arrival & Fellowship', text: 'Warm welcomes, prayer partners, and community connection before service begins.' },
  { step: '02', icon: Mic2, title: 'Worship & Praise', text: 'Spirit-led worship that ushers the congregation into God\'s manifest presence.' },
  { step: '03', icon: BookOpen, title: 'The Word', text: 'Biblical, practical teaching from Bishop Obure and anointed guest ministers.' },
  { step: '04', icon: HandHeart, title: 'Altar & Ministry', text: 'Prayer, healing, dedication, and personal ministry for every seeking heart.' },
];

function HomeContent() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream"
      >
        <ParallaxHeroBackground sectionRef={heroRef} />
        <motion.div
          aria-hidden
          className="hero-orb w-72 h-72 bg-gold/20 top-1/4 -left-20 z-[1]"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          aria-hidden
          className="hero-orb w-56 h-56 bg-gold-pale/80 bottom-1/4 right-10 z-[1]"
          animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <ParticleBackground />

        <div className="relative z-[3] text-center max-w-4xl mx-auto px-6 -mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-label justify-center flex items-center gap-3"
          >
            <motion.span
              className="w-8 h-px bg-gold/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            Welcome
            <motion.span
              className="w-8 h-px bg-gold/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-stone-text mb-6"
          >
            <SplitText delay={0.3}>Future Life Tabernacle</SplitText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="text-stone-muted text-lg md:text-xl max-w-xl mx-auto mb-4 leading-relaxed"
          >
            Where Heaven touches Earth — Experience God&apos;s presence, power, and purpose for your life in Karemo, Siaya, Kenya.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="text-sm text-gold-dark font-medium mb-8 flex items-center justify-center gap-2"
          >
            <Sparkles size={14} className="animate-pulse" />
            <span className="text-shimmer">A place of worship • Word • community</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <MagneticButton href="/about">
              <span className="btn-gold">
                <Play size={16} /> Join Us Sunday
              </span>
            </MagneticButton>
            <MagneticButton href="/sermons">
              <span className="btn-outline">Latest Sermon</span>
            </MagneticButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex items-center justify-center gap-6 text-sm text-stone-muted flex-wrap"
          >
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-gold" /> Karemo, Siaya, Kenya
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-gold" /> Sunday 10:00 AM
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2 text-stone-muted text-xs uppercase tracking-widest"
        >
          <span>Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </motion.div>
      </section>

      <MarqueeBand
        items={[
          'Sunday Worship 10AM',
          'Prayer Changes Everything',
          'You Are Welcome Here',
          'Worship • Word • Community',
          'Karemo Siaya Kenya',
        ]}
      />

      {/* Service highlights */}
      <section className="py-16 bg-white border-b border-black/[0.04]">
        <div className="container mx-auto px-6">
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceHighlights.map((s) => (
              <StaggerItem key={s.label}>
                <TiltCard>
                  <div className="card-glow glass-card flex items-center gap-4 h-full">
                    <motion.div
                      className="w-12 h-12 rounded-2xl bg-gold-pale flex items-center justify-center text-gold-dark shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <s.icon size={22} />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-stone-text text-sm">{s.label}</p>
                      <p className="text-gold-dark font-display text-lg">{s.time}</p>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-cream-warm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal variant="blur">
              <span className="section-label">Who We Are</span>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="section-title">
                <SplitText>Our Mission & Vision</SplitText>
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fade">
              <p className="section-subtitle mx-auto">
                Founded in 1995, we exist to lead people to Jesus, equip believers to grow, and empower the church to serve our city and the nations with compassion and bold faith.
              </p>
            </ScrollReveal>
          </div>

          <SectionDivider />

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 mt-16">
            <ScrollReveal direction="left" variant="scale">
              <div className="relative rounded-3xl overflow-hidden shadow-xl group">
                <motion.img
                  src="/pics/004.JPG"
                  alt="Church History"
                  className="w-full h-[400px] object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 p-4 rounded-xl bg-white/90 backdrop-blur border border-black/[0.06]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="font-display text-3xl text-gold">1995</div>
                  <div className="text-xs text-stone-muted">Year Founded</div>
                </motion.div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h3 className="font-display text-3xl md:text-4xl mb-6">
                <SplitText>A Legacy of Faith</SplitText>
              </h3>
              <p className="text-stone-muted leading-relaxed mb-4">
                Future Life Tabernacle began as a small prayer gathering and has flourished into a thriving fellowship rooted in Christ&apos;s teachings. Under Bishop Isaac Obure, we are committed to transforming lives spiritually, emotionally, and socially.
              </p>
              <p className="text-stone-muted leading-relaxed mb-8 text-sm">
                Every Sunday, midweek gatherings, and outreach initiatives reflect our heart: to see families restored, youth empowered, and communities touched by the love of Jesus.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <TiltCard>
                  <div className="glass-card text-center card-glow">
                    <Counter target={5000} className="font-display text-4xl text-gold" />
                    <div className="text-sm text-stone-muted mt-1">Members</div>
                  </div>
                </TiltCard>
                <TiltCard>
                  <div className="glass-card text-center card-glow">
                    <Counter target={31} suffix="+" className="font-display text-4xl text-gold-dark" />
                    <div className="text-sm text-stone-muted mt-1">Years of Ministry</div>
                  </div>
                </TiltCard>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'Worship', text: 'Honoring God through heartfelt worship and encounter that transforms the soul and renews the spirit.' },
              { icon: BookOpen, title: 'The Word', text: 'Biblical teaching that changes lives, builds faith, and strengthens families and communities for generations.' },
              { icon: Globe, title: 'Mission', text: 'Local transformation with global outreach — compassion, evangelism, and practical service for all nations.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} variant="blur">
                <TiltCard>
                  <div className="glass-card text-center h-full card-glow">
                    <motion.div
                      className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gold-pale flex items-center justify-center text-gold-dark"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <item.icon size={24} />
                    </motion.div>
                    <h4 className="font-display text-xl mb-2">{item.title}</h4>
                    <p className="text-sm text-stone-muted leading-relaxed">{item.text}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.06),transparent_70%)]" aria-hidden />
        <div className="container mx-auto px-6 relative">
          <ScrollReveal variant="blur" className="text-center mb-16">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">
              <SplitText>Milestones of Faith</SplitText>
            </h2>
          </ScrollReveal>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m) => (
              <StaggerItem key={m.year}>
                <div className="relative pl-6 border-l-2 border-gold/30 hover:border-gold transition-colors duration-500">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold shadow-lg shadow-gold/30" />
                  <span className="font-display text-3xl text-gold mb-2 block">{m.year}</span>
                  <h4 className="font-display text-lg mb-2 text-stone-text">{m.title}</h4>
                  <p className="text-sm text-stone-muted leading-relaxed">{m.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Sunday experience */}
      <section className="py-24 bg-cream-warm">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16" variant="blur">
            <span className="section-label">Plan Your Visit</span>
            <h2 className="section-title">
              <SplitText>Your Sunday Experience</SplitText>
            </h2>
            <p className="section-subtitle mx-auto">
              From the moment you arrive to altar ministry — here is what awaits you every Sunday at Future Life Tabernacle.
            </p>
          </ScrollReveal>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sundayFlow.map((item) => (
              <StaggerItem key={item.step}>
                <TiltCard>
                  <div className="glass-card h-full card-glow group">
                    <span className="text-5xl font-display text-gold/20 group-hover:text-gold/40 transition-colors">
                      {item.step}
                    </span>
                    <item.icon className="text-gold-dark mt-4 mb-3" size={28} />
                    <h4 className="font-display text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-stone-muted leading-relaxed">{item.text}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal variant="blur">
              <span className="section-label">Get Involved</span>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="section-title">
                <SplitText>Our Ministries</SplitText>
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fade">
              <p className="section-subtitle mx-auto">
                Find where God is calling you to serve, grow, and belong. Every age and season has a place in the body of Christ.
              </p>
            </ScrollReveal>
          </div>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: '/pics/youth.jpg', title: 'Youth Ministry', desc: 'Empowering young believers to live boldly for Christ through faith, fellowship, and dynamic outreach.', tag: 'Ages 13–25' },
              { img: '/pics/049.JPG', title: "Women's Ministry", desc: 'Encouraging women to grow spiritually through prayer, mentorship, and life-giving community.', tag: 'Tuesdays' },
              { img: '/pics/men.jpg', title: "Men's Fellowship", desc: 'Building men of faith to lead their homes and communities with wisdom, integrity, and strength.', tag: 'Thursdays' },
            ].map((m) => (
              <StaggerItem key={m.title}>
                <MinistryShowcaseCard {...m} />
              </StaggerItem>
            ))}
          </StaggerChildren>
          <ScrollReveal className="text-center mt-10">
            <MagneticButton href="/ministries">
              <span className="btn-outline">View All Ministries</span>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      {/* Sermons Preview */}
      <section className="py-24 bg-cream-warm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal variant="blur">
              <span className="section-label">The Word</span>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="section-title">
                <SplitText>Latest Sermon</SplitText>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal variant="scale">
            <div className="grid lg:grid-cols-5 gap-10 items-center">
              <motion.div
                className="lg:col-span-3 rounded-3xl overflow-hidden shadow-xl border border-black/[0.06]"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/SIlRWAZ9P7M"
                    title="Latest Sermon"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
              <div className="lg:col-span-2">
                <motion.span
                  className="inline-block px-4 py-1.5 rounded-full bg-gold-pale text-gold-dark text-xs font-semibold mb-4"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Latest Message
                </motion.span>
                <h3 className="font-display text-3xl mb-4">
                  <SplitText>Walking in Faith</SplitText>
                </h3>
                <p className="text-sm text-stone-muted mb-2 leading-relaxed">
                  Discover how to walk confidently in God&apos;s promises through worship, obedience, and community.
                </p>
                <p className="text-sm text-stone-muted mb-1">
                  <strong>Speaker:</strong> Pastor Joe Jessie
                </p>
                <p className="text-sm text-stone-muted mb-1">
                  <strong>Date:</strong> March 2, 2025
                </p>
                <p className="text-sm text-stone-muted mb-6">
                  <strong>Scripture:</strong> Habakkuk 3:2, 1 John 1:3
                </p>
                <MagneticButton href="/sermons">
                  <span className="btn-gold text-sm">View All Sermons</span>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal variant="blur">
              <span className="section-label">Gatherings</span>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="section-title">
                <SplitText>Upcoming Events</SplitText>
              </h2>
            </ScrollReveal>
          </div>
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {[
              { date: 'August 10, 2025', title: 'Worship Night', desc: 'A powerful evening of praise, prophecy, and open heaven over Karemo.' },
              { date: 'August 24, 2025', title: 'Youth Rally', desc: 'An energetic, spirit-filled rally for teens and young adults — bring a friend.' },
              { date: 'September 7, 2025', title: 'Community Outreach', desc: 'Serve families in need and shine the light of Christ through practical love.' },
            ].map((e) => (
              <StaggerItem key={e.title}>
                <TiltCard>
                  <div className="glass-card card-glow h-full">
                    <span className="inline-block px-3 py-1 rounded-full bg-gold-pale text-gold-dark text-xs font-semibold mb-3">
                      {e.date}
                    </span>
                    <h4 className="font-display text-xl mb-2">{e.title}</h4>
                    <p className="text-sm text-stone-muted mb-4 leading-relaxed">{e.desc}</p>
                    <Link href="/events" className="text-sm font-medium text-gold-dark hover:text-gold transition-colors inline-flex items-center gap-1 group">
                      Learn More
                      <motion.span className="inline-block group-hover:translate-x-1 transition-transform">→</motion.span>
                    </Link>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream-warm">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16" variant="blur">
            <span className="section-label">Stories</span>
            <h2 className="section-title">
              <SplitText>Stories of Transformation</SplitText>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { img: '/pics/person1.jpg', text: 'Attending Future Life changed everything — I encountered God and my family was restored through prayer and faithful teaching.', author: 'Jane K., Member' },
              { img: '/pics/person2.jpg', text: 'The teaching is practical and powerful. I feel equipped to live for Christ daily and serve in ministry with confidence.', author: 'David O., Volunteer' },
            ].map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.12} variant="scale">
                <TiltCard>
                  <div className="glass-card flex gap-5 items-start card-glow">
                    <motion.img
                      src={t.img}
                      alt={t.author}
                      className="w-20 h-20 rounded-2xl object-cover flex-shrink-0 shadow-md"
                      whileHover={{ scale: 1.08 }}
                    />
                    <div>
                      <p className="text-stone-muted italic mb-3 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                      <p className="text-sm font-semibold text-gold-dark">— {t.author}</p>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-gold-pale/50 via-cream to-gold-pale/30"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal variant="blur">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              <SplitText>Need Prayer?</SplitText>
            </h2>
            <p className="text-stone-muted max-w-lg mx-auto mb-4 leading-relaxed">
              Let us stand with you in prayer. Submit your request and our dedicated intercessors will uphold you in faith.
            </p>
            <p className="text-sm text-gold-dark mb-8">Confidential • Compassionate • Spirit-led</p>
            <MagneticButton href="/prayer">
              <span className="btn-gold">Submit Prayer Request</span>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default function HomePage() {
  return (
    <ClientLayout>
      <HomeContent />
    </ClientLayout>
  );
}
