'use client';

import { motion } from 'framer-motion';
import ClientLayout from '@/components/ClientLayout';
import PageHero from '@/components/PageHero';
import MarqueeBand from '@/components/MarqueeBand';
import SectionDivider from '@/components/SectionDivider';
import ScrollReveal from '@/components/ScrollReveal';
import StaggerChildren, { StaggerItem } from '@/components/StaggerChildren';
import MagneticButton from '@/components/MagneticButton';
import TiltCard from '@/components/TiltCard';
import SplitText from '@/components/SplitText';
import PageCTA from '@/components/PageCTA';
import { Youtube, Apple, Music, BookOpen, Download, Headphones, Play, Radio } from 'lucide-react';
import { assetPath } from '@/lib/assetPath';

const archive = [
  { img: '/pics/sermon1.jpg', title: 'Overcoming Fear', speaker: 'Pastor Jane Doe', date: 'Feb 25, 2025', scripture: '2 Timothy 1:7', duration: '45 min', topic: 'Faith' },
  { img: '/pics/sermon2.jpg', title: 'The Power of Prayer', speaker: 'Pastor Mike', date: 'Feb 18, 2025', scripture: 'James 5:16', duration: '38 min', topic: 'Prayer' },
  { img: '/pics/sermon3.jpg', title: 'Faith & Works', speaker: 'Pastor Sarah', date: 'Feb 11, 2025', scripture: 'James 2:14-26', duration: '42 min', topic: 'Discipleship' },
  { img: '/pics/016.JPG', title: 'Walking in Authority', speaker: 'Bishop Isaac Obure', date: 'Feb 4, 2025', scripture: 'Luke 10:19', duration: '55 min', topic: 'Spiritual Warfare' },
  { img: '/pics/073.JPG', title: 'The Father\'s Heart', speaker: 'Bishop Isaac Obure', date: 'Jan 28, 2025', scripture: 'Luke 15:11-32', duration: '48 min', topic: 'Identity' },
  { img: '/pics/youth.jpg', title: 'Bold for Christ', speaker: 'Pastor Michael Brown', date: 'Jan 21, 2025', scripture: 'Acts 4:13', duration: '35 min', topic: 'Youth' },
];

const teachings = [
  { title: 'Understanding the Book of Romans', desc: 'A deep dive into Paul\'s teachings on grace, justification, and living by the Spirit. Ideal for new believers and mature disciples alike.', parts: 12, level: 'Intermediate' },
  { title: 'The Parables of Jesus', desc: 'Exploring the wisdom in Christ\'s parables and their powerful application for modern life, relationships, and stewardship.', parts: 8, level: 'All Levels' },
  { title: 'Spiritual Warfare', desc: 'Understanding your authority in Christ, recognizing spiritual opposition, and standing firm in prayer and the Word.', parts: 6, level: 'Advanced' },
  { title: 'The Fruit of the Spirit', desc: 'Cultivating love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control in daily life.', parts: 9, level: 'All Levels' },
];

const topics = [
  { icon: Headphones, label: 'Faith & Trust' },
  { icon: BookOpen, label: 'Bible Study' },
  { icon: Radio, label: 'Prayer & Intercession' },
  { icon: Play, label: 'Family & Relationships' },
];

function SermonsContent() {
  return (
    <>
      <PageHero
        label="The Word"
        title="Sermons & Teachings"
        subtitle="Watch, listen, and grow through anointed messages from our pastors. Never miss a word that God is speaking to His people."
      />

      <MarqueeBand
        items={[
          'New Sermons Weekly',
          'Subscribe on YouTube',
          'Bible Teaching Series',
          'Walking in Faith',
          'Bishop Isaac Obure',
        ]}
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal variant="scale">
            <div className="grid lg:grid-cols-5 gap-10 items-start">
              <motion.div
                className="lg:col-span-3 rounded-3xl overflow-hidden shadow-xl border border-black/[0.06]"
                whileHover={{ y: -4 }}
              >
                <div className="aspect-video">
                  <iframe src="https://www.youtube.com/embed/SIlRWAZ9P7M?si=6fQ_1ZvyoJSzxgHD" title="Latest Sermon" allowFullScreen className="w-full h-full" />
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
                <h2 className="font-display text-4xl mb-4">
                  <SplitText>Walking in Faith</SplitText>
                </h2>
                <p className="text-stone-muted text-sm mb-6 leading-relaxed">
                  Discover how to walk confidently in God&apos;s promises through worship, obedience, and community. A spirit-filled message for every season of life.
                </p>
                <p className="text-sm text-stone-muted mb-1"><strong>Speaker:</strong> Pastor Joe Jessie</p>
                <p className="text-sm text-stone-muted mb-1"><strong>Date:</strong> March 2, 2025</p>
                <p className="text-sm text-stone-muted mb-1"><strong>Scripture:</strong> Habakkuk 3:2, 1 John 1:3</p>
                <p className="text-sm text-stone-muted mb-6"><strong>Duration:</strong> 52 minutes</p>
                <MagneticButton href="https://www.youtube.com/@bishopisaacobure" target="_blank" rel="noopener noreferrer">
                  <span className="btn-gold text-sm"><Youtube size={16} /> Subscribe on YouTube</span>
                </MagneticButton>
                <div className="mt-6 p-5 rounded-2xl bg-white border border-black/[0.06] card-glow">
                  <p className="text-xs font-semibold text-stone-text mb-3">Listen on the go</p>
                  <div className="flex flex-wrap gap-2">
                    <button type="button" className="btn-outline text-xs py-2 px-4"><Apple size={14} /> Apple Podcasts</button>
                    <button type="button" className="btn-outline text-xs py-2 px-4"><Music size={14} /> Spotify</button>
                  </div>
                  <p className="text-xs text-stone-muted mt-3">Podcast feed coming soon — subscribe on YouTube for instant updates.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-cream-warm">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-10" variant="blur">
            <span className="section-label">Browse</span>
            <h2 className="font-display text-2xl">Sermon Topics</h2>
          </ScrollReveal>
          <StaggerChildren className="flex flex-wrap justify-center gap-4">
            {topics.map((t) => (
              <StaggerItem key={t.label}>
                <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-black/[0.06] shadow-sm hover:border-gold/30 transition-colors">
                  <t.icon size={18} className="text-gold-dark" />
                  <span className="text-sm font-medium">{t.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal className="mb-10" variant="blur">
            <span className="section-label">Library</span>
            <h2 className="font-display text-3xl">
              <SplitText>Sermon Archive</SplitText>
            </h2>
            <p className="text-stone-muted mt-3 max-w-xl">Browse recent messages from our pastors and guest speakers.</p>
          </ScrollReveal>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {archive.map((s) => (
              <StaggerItem key={s.title}>
                <TiltCard>
                  <div className="glass-card card-glow h-full">
                    <div className="rounded-2xl overflow-hidden mb-4 relative group">
                      <motion.img
                        src={assetPath(s.img)}
                        alt={s.title}
                        className="w-full h-52 object-cover"
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className="absolute top-2 left-2 px-2 py-1 bg-gold/90 text-white text-xs rounded-lg font-medium">
                        {s.topic}
                      </div>
                      <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 text-white text-xs rounded-lg backdrop-blur">
                        {s.duration}
                      </div>
                    </div>
                    <h5 className="font-display text-xl mb-1">{s.title}</h5>
                    <p className="text-sm text-stone-muted mb-1">{s.speaker} • {s.date}</p>
                    <p className="text-xs text-gold-dark mb-4">{s.scripture}</p>
                    <MagneticButton href="https://www.youtube.com/@bishopisaacobure" target="_blank" rel="noopener noreferrer">
                      <span className="btn-outline text-xs py-2 px-4"><Youtube size={14} /> Watch</span>
                    </MagneticButton>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-24 bg-cream-warm">
        <div className="container mx-auto px-6">
          <ScrollReveal className="mb-10" variant="blur">
            <span className="section-label">Deep Study</span>
            <h2 className="font-display text-3xl">
              <SplitText>Bible Teaching Series</SplitText>
            </h2>
            <p className="text-stone-muted mt-3 max-w-xl">Multi-part studies for personal growth, small groups, and discipleship.</p>
          </ScrollReveal>
          <StaggerChildren className="grid md:grid-cols-2 gap-6">
            {teachings.map((t) => (
              <StaggerItem key={t.title}>
                <TiltCard>
                  <div className="glass-card flex items-center gap-6 card-glow h-full">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white shadow-lg">
                      <BookOpen size={28} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gold-pale text-gold-dark font-medium">{t.level}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-cream-warm text-stone-muted">{t.parts} parts</span>
                      </div>
                      <h4 className="font-display text-xl mb-1">{t.title}</h4>
                      <p className="text-sm text-stone-muted mb-3 leading-relaxed">{t.desc}</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <MagneticButton><span className="btn-gold text-xs py-2 px-4">Start Series</span></MagneticButton>
                        <MagneticButton><span className="btn-outline text-xs py-2 px-4"><Download size={14} /> Study Guide</span></MagneticButton>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal variant="blur">
            <div className="glass-card text-center card-glow p-10">
              <Headphones className="mx-auto text-gold-dark mb-4" size={40} />
              <h3 className="font-display text-2xl mb-4">How to Get the Most from Each Message</h3>
              <ol className="text-left text-sm text-stone-muted space-y-3 max-w-md mx-auto">
                <li><strong className="text-stone-text">1. Pray before you listen</strong> — Ask the Holy Spirit to speak to your heart.</li>
                <li><strong className="text-stone-text">2. Take notes</strong> — Write down scriptures, declarations, and action steps.</li>
                <li><strong className="text-stone-text">3. Discuss in community</strong> — Share insights in a small group or with family.</li>
                <li><strong className="text-stone-text">4. Apply and obey</strong> — Faith grows when the Word is lived, not only heard.</li>
              </ol>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <PageCTA
        title="Stay Connected to the Word"
        description="Subscribe for weekly sermon alerts, teaching notes, and exclusive Bible study resources delivered to your inbox."
        primaryLabel="Subscribe on YouTube"
        primaryHref="https://www.youtube.com/@bishopisaacobure"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}

export default function SermonsPage() {
  return (
    <ClientLayout>
      <SermonsContent />
    </ClientLayout>
  );
}
