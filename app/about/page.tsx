'use client';

import { motion } from 'framer-motion';
import ClientLayout from '@/components/ClientLayout';
import PageHero from '@/components/PageHero';
import MarqueeBand from '@/components/MarqueeBand';
import SectionDivider from '@/components/SectionDivider';
import ScrollReveal from '@/components/ScrollReveal';
import StaggerChildren, { StaggerItem } from '@/components/StaggerChildren';
import TiltCard from '@/components/TiltCard';
import Counter from '@/components/Counter';
import SplitText from '@/components/SplitText';
import PageCTA from '@/components/PageCTA';
import MagneticButton from '@/components/MagneticButton';
import { assetPath } from '@/lib/assetPath';
import { Facebook, Instagram, Youtube, Church, HandHeart, Users, Globe2 } from 'lucide-react';

const leaders = [
  {
    name: 'Bishop Isaac Obure',
    role: 'Lead Pastor & Founder',
    img: '/pics/pastor1.jpg',
    bio: 'Bishop Obure founded Future Life Tabernacle in 1995 with a vision to transform lives through the Gospel. A dynamic preacher, spiritual father, and community leader whose ministry has touched thousands across Kenya and beyond.',
    socials: true,
  },
  {
    name: 'Pastor Jane Smith',
    role: 'Associate Pastor',
    img: '/pics/pastor2.jpg',
    bio: 'Pastor Jane oversees women\'s ministry and discipleship programs. Her teaching combines biblical depth with practical wisdom, helping families and individuals grow in Christ-centered living.',
    socials: false,
  },
  {
    name: 'Pastor Michael Brown',
    role: 'Youth Pastor',
    img: '/pics/pastor3.jpg',
    bio: 'Pastor Michael leads the youth with passion and authenticity. He creates environments where young people encounter God, develop leadership skills, and serve their generation with bold faith.',
    socials: false,
  },
];

const beliefs = [
  { title: 'Faith in Christ', text: 'We believe Jesus Christ is the Son of God, the foundation of hope and salvation. Through faith in Him, we receive eternal life, forgiveness, and the power to live victoriously.' },
  { title: 'The Authority of Scripture', text: 'The Bible is the inspired, infallible Word of God — our final authority for faith, doctrine, worship, and daily living. We teach it with clarity and apply it with integrity.' },
  { title: 'The Power of Prayer', text: 'Prayer is our direct line to God and the engine of every ministry. We believe in intercession, healing prayer, and persistent faith that moves mountains.' },
  { title: 'Community & Fellowship', text: 'We are one family united by love. Small groups, ministry teams, and Sunday gatherings ensure no one walks alone in their journey of faith.' },
  { title: 'The Great Commission', text: 'We exist to spread the gospel locally and globally — through evangelism, missions, media, and compassionate service that demonstrates Christ\'s love.' },
  { title: 'The Holy Spirit', text: 'We believe in the present ministry of the Holy Spirit — empowering believers for worship, gifts of the Spirit, holy living, and bold witness.' },
];

const milestones = [
  { year: '1995', title: 'Founded in Karemo', text: 'A small prayer gathering becomes Future Life Tabernacle under Bishop Isaac Obure.' },
  { year: '2010', title: 'Sanctuary Dedicated', text: 'The congregation moves into a permanent worship space as membership grows rapidly.' },
  { year: '2018', title: 'Ministries Multiply', text: 'Youth, women, men, children, and outreach ministries launch across Siaya County.' },
  { year: '2024', title: 'Global Reach', text: 'Livestream, campuses, and digital discipleship connect believers worldwide.' },
];

const coreValues = [
  { icon: Church, title: 'Worship', text: 'Exalting God with excellence and reverence in every gathering.' },
  { icon: HandHeart, title: 'Compassion', text: 'Serving the hurting with practical love and prayer.' },
  { icon: Users, title: 'Community', text: 'Building authentic relationships that reflect the family of God.' },
  { icon: Globe2, title: 'Mission', text: 'Taking the gospel to our city, nation, and the nations.' },
];

const testimonials = [
  { text: 'Since joining Future Life Tabernacle, my life has completely changed. I found hope and purpose again. The community here is genuine and the teaching is life-changing.', author: 'Sarah K., Member' },
  { text: 'This ministry has impacted my entire family. The teachings are deep, real, and spirit-filled. My children have found a spiritual home here.', author: 'Daniel M., Volunteer' },
  { text: 'I experienced healing through prayer here — a true home of love and restoration. The prayer team stood with me until I received my breakthrough.', author: 'Grace L., Visitor' },
];

function AboutContent() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Encounter God."
        titleAccent="Experience Transformation."
        subtitle={`"For where two or three are gathered in My name, there am I in the midst of them." – Matthew 18:20`}
      />

      <MarqueeBand
        items={[
          'Founded 1995',
          'Karemo Siaya Kenya',
          'Worship • Word • Community',
          'Transforming Lives Worldwide',
          'Bishop Isaac Obure',
        ]}
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <ScrollReveal direction="left" variant="scale">
              <div className="relative rounded-3xl overflow-hidden shadow-xl group">
                <motion.img
                  src={assetPath("/pics/004.JPG")}
                  alt="Our History"
                  className="w-full h-[450px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <span className="section-label">Our Story</span>
              <h2 className="font-display text-4xl mb-6">
                <SplitText>Our History</SplitText>
              </h2>
              <p className="text-stone-muted leading-relaxed mb-6">
                Founded in <strong className="text-stone-text">1995</strong>, Future Life Tabernacle began as a small prayer gathering in Karemo, Siaya. What started with a handful of faithful believers has flourished into a thriving fellowship rooted in Christ&apos;s teachings and committed to serving the community.
              </p>
              <p className="text-stone-muted leading-relaxed mb-6">
                From humble beginnings under a tree to our current sanctuary, every step has been marked by God&apos;s faithfulness. We have witnessed countless miracles, healings, deliverances, and transformed lives.
              </p>
              <p className="text-stone-muted leading-relaxed">
                Today we are a global family united by one purpose: to transform lives through the Gospel and demonstrate God&apos;s love in practical, lasting ways.
              </p>
            </ScrollReveal>
          </div>

          <SectionDivider />

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <span className="section-label">Purpose</span>
              <h2 className="font-display text-4xl mb-6">
                <SplitText>Mission & Vision</SplitText>
              </h2>
              <StaggerChildren className="space-y-4">
                <StaggerItem>
                  <div className="p-5 rounded-2xl bg-white border border-black/[0.06] card-glow">
                    <h4 className="font-semibold mb-2 text-stone-text">Our Mission</h4>
                    <p className="text-stone-muted text-sm leading-relaxed">
                      To spread the gospel, raise leaders, and build a Christ-centered community that transforms lives spiritually, emotionally, and socially — one person, one family, one community at a time.
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="p-5 rounded-2xl bg-white border border-black/[0.06] card-glow">
                    <h4 className="font-semibold mb-2 text-stone-text">Our Vision</h4>
                    <p className="text-stone-muted text-sm leading-relaxed">
                      To see believers walking boldly in faith and purpose, impacting their homes, workplaces, communities, and nations for the glory of God.
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="p-5 rounded-2xl bg-gold-pale/50 border border-gold/10">
                    <h4 className="font-semibold mb-2 text-gold-dark">Our Values</h4>
                    <p className="text-stone-muted text-sm leading-relaxed">
                      Worship • The Word • Prayer • Community • Compassion • Excellence • Integrity • Generosity
                    </p>
                  </div>
                </StaggerItem>
              </StaggerChildren>
            </ScrollReveal>
            <ScrollReveal direction="right" className="order-1 lg:order-2" variant="scale">
              <div className="relative rounded-3xl overflow-hidden shadow-xl group">
                <motion.img
                  src={assetPath("/pics/009.JPG")}
                  alt="Mission and Vision"
                  className="w-full h-[450px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream-warm">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-12" variant="blur">
            <span className="section-label">Core Values</span>
            <h2 className="section-title">
              <SplitText>What Guides Us</SplitText>
            </h2>
          </ScrollReveal>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {coreValues.map((v) => (
              <StaggerItem key={v.title}>
                <TiltCard>
                  <div className="glass-card text-center card-glow h-full">
                    <v.icon className="mx-auto text-gold-dark mb-3" size={28} />
                    <h4 className="font-display text-lg mb-2">{v.title}</h4>
                    <p className="text-sm text-stone-muted">{v.text}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <ScrollReveal className="text-center mb-12">
            <span className="section-label">Impact</span>
            <h2 className="section-title">
              <SplitText>By the Numbers</SplitText>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 5000, label: 'Members', suffix: '' },
              { value: 31, label: 'Years of Ministry', suffix: '+' },
              { value: 6, label: 'Active Ministries', suffix: '' },
              { value: 4, label: 'Campus Locations', suffix: '' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1} variant="scale">
                <TiltCard>
                  <div className="glass-card text-center card-glow">
                    <Counter target={stat.value} suffix={stat.suffix} className="font-display text-4xl md:text-5xl text-gold" />
                    <div className="text-sm text-stone-muted mt-2">{stat.label}</div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16" variant="blur">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">
              <SplitText>Milestones of Faith</SplitText>
            </h2>
          </ScrollReveal>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {milestones.map((m) => (
              <StaggerItem key={m.year}>
                <div className="relative pl-6 border-l-2 border-gold/30 h-full">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold" />
                  <span className="font-display text-3xl text-gold block mb-2">{m.year}</span>
                  <h4 className="font-display text-lg mb-2">{m.title}</h4>
                  <p className="text-sm text-stone-muted leading-relaxed">{m.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-24 bg-cream-warm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal variant="blur">
              <span className="section-label">Leadership</span>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="section-title">
                <SplitText>Meet Our Leaders</SplitText>
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fade">
              <p className="section-subtitle mx-auto">
                Dedicated servants called to shepherd, teach, equip, and release the body of Christ for kingdom impact.
              </p>
            </ScrollReveal>
          </div>
          <StaggerChildren className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leaders.map((leader) => (
              <StaggerItem key={leader.name}>
                <TiltCard>
                  <div className="glass-card text-center card-glow h-full">
                    <div className="relative inline-block mb-4">
                      <motion.img
                        src={assetPath(leader.img)}
                        alt={leader.name}
                        className="w-36 h-36 rounded-full object-cover border-[3px] border-gold shadow-md"
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold text-white text-xs font-semibold rounded-full whitespace-nowrap">
                        {leader.role}
                      </div>
                    </div>
                    <h4 className="font-display text-xl mb-2">{leader.name}</h4>
                    <p className="text-sm text-stone-muted mb-4 leading-relaxed">{leader.bio}</p>
                    {leader.socials && (
                      <div className="flex justify-center gap-3">
                        <a href="https://www.facebook.com/bishopisaacobure" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-cream-warm text-stone-muted hover:text-gold-dark hover:bg-gold-pale transition-all"><Facebook size={16} /></a>
                        <a href="https://www.instagram.com/bishop_isaac_obure/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-cream-warm text-stone-muted hover:text-gold-dark hover:bg-gold-pale transition-all"><Instagram size={16} /></a>
                        <a href="https://www.youtube.com/@bishopisaacobure" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-cream-warm text-stone-muted hover:text-gold-dark hover:bg-gold-pale transition-all"><Youtube size={16} /></a>
                      </div>
                    )}
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <ScrollReveal className="text-center mt-10">
            <MagneticButton href="/contact">
              <span className="btn-outline">Contact Leadership</span>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal variant="blur">
              <span className="section-label">Foundation</span>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="section-title">
                <SplitText>What We Believe</SplitText>
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fade">
              <p className="section-subtitle mx-auto">
                Our doctrine is rooted in historic Christian faith, expressed with clarity and lived with passion.
              </p>
            </ScrollReveal>
          </div>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.map((b, i) => (
              <StaggerItem key={b.title}>
                <TiltCard>
                  <div className="glass-card h-full card-glow">
                    <div className="w-10 h-10 rounded-xl bg-gold-pale flex items-center justify-center text-gold-dark font-display font-bold text-lg mb-4">
                      {i + 1}
                    </div>
                    <h4 className="font-display text-xl mb-2">{b.title}</h4>
                    <p className="text-sm text-stone-muted leading-relaxed">{b.text}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-24 bg-cream-warm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal variant="blur">
              <span className="section-label">Stories</span>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="section-title">
                <SplitText>Stories of Transformation</SplitText>
              </h2>
            </ScrollReveal>
          </div>
          <StaggerChildren className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <StaggerItem key={t.author}>
                <TiltCard>
                  <div className="glass-card h-full relative card-glow">
                    <div className="text-gold text-5xl font-display absolute top-4 right-4 opacity-20">&ldquo;</div>
                    <p className="text-stone-muted italic mb-6 leading-relaxed relative z-10">{t.text}</p>
                    <p className="text-sm font-semibold text-gold-dark">— {t.author}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <PageCTA
        title="Become Part of Our Family"
        description="Whether you are exploring faith or ready to serve, there is a place for you at Future Life Tabernacle. Join us this Sunday or connect with a leader today."
        primaryLabel="Plan Your Visit"
        primaryHref="/contact"
        secondaryLabel="Explore Ministries"
        secondaryHref="/ministries"
      />
    </>
  );
}

export default function AboutPage() {
  return (
    <ClientLayout>
      <AboutContent />
    </ClientLayout>
  );
}
