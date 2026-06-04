'use client';

import { motion } from 'framer-motion';
import ClientLayout from '@/components/ClientLayout';
import PageHero from '@/components/PageHero';
import MarqueeBand from '@/components/MarqueeBand';
import SectionDivider from '@/components/SectionDivider';
import ScrollReveal from '@/components/ScrollReveal';
import StaggerChildren, { StaggerItem } from '@/components/StaggerChildren';
import MagneticButton from '@/components/MagneticButton';
import SplitText from '@/components/SplitText';
import TiltCard from '@/components/TiltCard';
import PageCTA from '@/components/PageCTA';
import { Users, Heart, Shield, Baby, Music, Globe, ClipboardList, Handshake, Sparkles } from 'lucide-react';
import { assetPath } from '@/lib/assetPath';

const ministries = [
  {
    img: '/pics/youth.jpg',
    title: 'Youth Ministry',
    desc: 'Empowering young believers to live boldly for Christ through faith, fellowship, and growth.',
    details: 'Our youth ministry creates a safe, fun environment where teenagers and young adults explore faith, build lasting friendships, and discover God-given purpose through weekly meetings, retreats, and outreach.',
    icon: Users,
    meeting: 'Saturdays • 2:00 PM',
    leader: 'Pastor Michael Brown',
    ages: 'Ages 13–25',
  },
  {
    img: '/pics/049.JPG',
    title: "Women's Ministry",
    desc: 'Encouraging women to grow spiritually and strengthen their bond through prayer and community.',
    details: 'Bible studies, prayer groups, mentorship, and fellowship events help women of all ages find support, encouragement, and spiritual empowerment in every season of life.',
    icon: Heart,
    meeting: 'Tuesdays • 5:30 PM',
    leader: 'Pastor Jane Smith',
    ages: 'All women welcome',
  },
  {
    img: '/pics/men.jpg',
    title: "Men's Fellowship",
    desc: 'Building men of faith to lead their homes and communities with wisdom and strength.',
    details: 'Mentorship, accountability groups, and practical teaching equip men to live with integrity, lead their families, and serve their communities as kingdom ambassadors.',
    icon: Shield,
    meeting: 'Thursdays • 6:00 PM',
    leader: 'Men\'s Leadership Team',
    ages: 'Adult men',
  },
  {
    img: '/pics/kids.jpg',
    title: "Children's Ministry",
    desc: 'Teaching the little ones the love of Jesus through joyful stories, songs, and fun learning.',
    details: 'Age-appropriate Bible stories, worship, crafts, and games plant seeds of faith in a safe, engaging environment staffed by trained, caring volunteers.',
    icon: Baby,
    meeting: 'Sundays • 10:00 AM',
    leader: 'Children\'s Ministry Team',
    ages: 'Ages 3–12',
  },
  {
    img: '/pics/016.JPG',
    title: 'Music & Worship',
    desc: 'Leading God\'s people into His presence through heartfelt praise and anointed worship.',
    details: 'Musicians, vocalists, and technical teams create an atmosphere where heaven touches earth — from contemporary praise to hymns, with weekly rehearsals and ongoing training.',
    icon: Music,
    meeting: 'Rehearsals: Wednesdays • 5:00 PM',
    leader: 'Worship Director',
    ages: 'Audition required',
  },
  {
    img: '/pics/073.JPG',
    title: 'Evangelism & Outreach',
    desc: 'Spreading the Gospel with love, compassion, and outreach programs that transform lives.',
    details: 'Street evangelism, hospital visits, prison ministry, food distribution, and community service demonstrate Christ\'s love in practical, measurable ways.',
    icon: Globe,
    meeting: 'Monthly Outreaches',
    leader: 'Outreach Coordinator',
    ages: 'All members',
  },
];

const joinSteps = [
  { icon: ClipboardList, step: '01', title: 'Discover', text: 'Browse ministries and attend a meeting or Sunday service to see where you connect.' },
  { icon: Handshake, step: '02', title: 'Connect', text: 'Speak with a ministry leader after service or submit a contact form online.' },
  { icon: Sparkles, step: '03', title: 'Serve', text: 'Complete orientation, join a team, and begin serving with training and mentorship.' },
];

function MinistriesContent() {
  return (
    <>
      <PageHero
        label="Discover Our Work"
        title="Our Ministries"
        subtitle="Find where God is calling you to serve, grow, and belong. Every gift, age, and season has a place in the body of Christ."
      />

      <MarqueeBand
        items={[
          'Youth • Women • Men • Children',
          'Worship • Outreach • Discipleship',
          'Serve With Purpose',
          'Karemo Siaya Kenya',
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <ScrollReveal variant="blur">
            <span className="section-label">Overview</span>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              <SplitText>Serving Together in Love</SplitText>
            </h2>
            <p className="text-stone-muted leading-relaxed">
              Ministries are the hands and feet of our church. Each team exists to disciple believers, reach the lost, and build a culture of worship, prayer, and excellence. Whether you are gifted in teaching, music, administration, or compassion — there is a place for you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 bg-cream-warm">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16" variant="blur">
            <span className="section-label">All Ministries</span>
            <h2 className="section-title">
              <SplitText>Find Your Place</SplitText>
            </h2>
          </ScrollReveal>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((m) => (
              <StaggerItem key={m.title}>
                <TiltCard>
                  <div className="group relative rounded-3xl overflow-hidden h-[520px] border border-black/[0.06] bg-white">
                    <motion.img
                      src={assetPath(m.img)}
                      alt={m.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10 flex flex-col justify-end p-8">
                      <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-gold/90 text-white text-xs font-semibold">
                        {m.ages}
                      </span>
                      <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-10 h-10 rounded-xl bg-gold/20 backdrop-blur flex items-center justify-center text-gold mb-3">
                          <m.icon size={20} />
                        </div>
                        <h4 className="font-display text-2xl text-white mb-2">{m.title}</h4>
                        <p className="text-white/70 text-sm mb-2">{m.desc}</p>
                        <p className="text-white/50 text-xs mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                          {m.details}
                        </p>
                        <p className="text-white/40 text-xs mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Leader: {m.leader}
                        </p>
                        <div className="flex items-center gap-2 text-gold text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          {m.meeting}
                        </div>
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
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16" variant="blur">
            <span className="section-label">Get Started</span>
            <h2 className="section-title">
              <SplitText>How to Join a Ministry</SplitText>
            </h2>
            <p className="section-subtitle mx-auto">
              Serving is a joy and a privilege. Follow these simple steps to get connected.
            </p>
          </ScrollReveal>
          <StaggerChildren className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {joinSteps.map((s) => (
              <StaggerItem key={s.step}>
                <TiltCard>
                  <div className="glass-card text-center card-glow h-full">
                    <span className="font-display text-4xl text-gold/25 block mb-2">{s.step}</span>
                    <s.icon className="mx-auto text-gold-dark mb-4" size={28} />
                    <h4 className="font-display text-xl mb-2">{s.title}</h4>
                    <p className="text-sm text-stone-muted leading-relaxed">{s.text}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-24 bg-cream-warm">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" variant="scale">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <motion.img
                  src={assetPath("/pics/073.JPG")}
                  alt="Serving together"
                  className="w-full h-[380px] object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7 }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <span className="section-label">Volunteer</span>
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                <SplitText>Not Sure Where to Start?</SplitText>
              </h2>
              <p className="text-stone-muted leading-relaxed mb-6">
                Our pastoral team will help you discover your spiritual gifts and match you with a ministry that fits your passion, schedule, and season of life. Many volunteers begin with a three-month trial period and ongoing mentorship.
              </p>
              <ul className="space-y-3 text-sm text-stone-muted mb-8">
                <li className="flex gap-2"><span className="text-gold">✓</span> Background check for children&apos;s ministry</li>
                <li className="flex gap-2"><span className="text-gold">✓</span> Orientation and safety training provided</li>
                <li className="flex gap-2"><span className="text-gold">✓</span> Flexible schedules for working professionals</li>
              </ul>
              <MagneticButton href="/contact">
                <span className="btn-gold">Talk to a Leader</span>
              </MagneticButton>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to Serve?"
        description="Every gift and talent has a place in God's house. Step into your calling and make an eternal difference in our community."
        primaryLabel="Get Connected"
        primaryHref="/contact"
        secondaryLabel="Submit Prayer Request"
        secondaryHref="/prayer"
      />
    </>
  );
}

export default function MinistriesPage() {
  return (
    <ClientLayout>
      <MinistriesContent />
    </ClientLayout>
  );
}
