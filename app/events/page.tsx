'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ClientLayout from '@/components/ClientLayout';
import PageHero from '@/components/PageHero';
import MarqueeBand from '@/components/MarqueeBand';
import ScrollReveal from '@/components/ScrollReveal';
import StaggerChildren, { StaggerItem } from '@/components/StaggerChildren';
import TiltCard from '@/components/TiltCard';
import MagneticButton from '@/components/MagneticButton';
import SplitText from '@/components/SplitText';
import PageCTA from '@/components/PageCTA';
import { Calendar, Users, BookOpen, Clock, MapPin, Ticket, Sparkles } from 'lucide-react';
import { assetPath } from '@/lib/assetPath';

const upcoming = [
  { date: 'August 10, 2025', time: '7:00 PM', title: 'Worship Night', desc: 'A powerful evening of praise, prophecy, and open heaven. Come expecting an encounter with God\'s presence.', location: 'Main Sanctuary', spots: 'Open to all' },
  { date: 'August 24, 2025', time: '4:00 PM', title: 'Youth Rally', desc: 'An energetic, spirit-filled rally for teens and young adults. Games, worship, guest speakers, and altar ministry.', location: 'Youth Center', spots: 'Ages 13–25' },
  { date: 'September 7, 2025', time: '9:00 AM', title: 'Community Outreach', desc: 'Serve families in need through food distribution, prayer walks, and practical acts of love in Karemo.', location: 'Karemo Community', spots: 'Volunteers needed' },
  { date: 'September 21, 2025', time: '10:00 AM', title: 'Leadership Conference', desc: 'Equipping pastors, elders, and ministry leaders for effective service. Workshops, networking, and anointed teaching.', location: 'Conference Hall', spots: 'Registration required' },
  { date: 'October 5, 2025', time: '6:00 PM', title: 'Women\'s Gala', desc: 'An elegant evening of worship, testimony, and fellowship celebrating women of faith in our church.', location: 'Main Sanctuary', spots: 'Women & guests' },
];

const weekly = [
  { icon: Calendar, title: 'Sunday Worship', time: 'Sundays • 10:00 AM', desc: 'Main service with worship, the Word, prayer, and children\'s ministry.' },
  { icon: Users, title: 'Small Groups', time: 'Weekdays • Various Times', desc: 'Intimate fellowship and Bible study in homes across Siaya and Nairobi.' },
  { icon: BookOpen, title: 'Bible Study', time: 'Wednesdays • 6:30 PM', desc: 'Interactive scripture study with Q&A, prayer, and practical application.' },
  { icon: Clock, title: 'Morning Devotion', time: 'Daily • 6:00 AM', desc: 'Start your day with prayer and the Word — live on YouTube and WhatsApp.' },
];

const eventTips = [
  { icon: Ticket, title: 'Arrive Early', text: 'Doors open 30 minutes before start time for seating and fellowship.' },
  { icon: MapPin, title: 'Parking & Access', text: 'Free parking on-site. Ushers available to assist first-time visitors.' },
  { icon: Sparkles, title: 'Come Expectant', text: 'Bring your Bible, a friend, and a heart ready to encounter God.' },
];

function EventsContent() {
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;
    const length = lineRef.current.getTotalLength();
    lineRef.current.style.strokeDasharray = `${length}`;
    lineRef.current.style.strokeDashoffset = `${length}`;

    const onScroll = () => {
      if (!lineRef.current) return;
      const rect = lineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      lineRef.current.style.strokeDashoffset = `${length * (1 - progress)}`;
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <PageHero
        label="Gatherings"
        title="Church Events"
        subtitle="Celebrate faith, fellowship, and community through worship nights, outreaches, conferences, and weekly rhythms. All are welcome."
      />

      <MarqueeBand
        items={[
          'Worship Night Aug 10',
          'Youth Rally Aug 24',
          'Community Outreach',
          'All Are Welcome',
          'Karemo Siaya',
        ]}
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal variant="blur">
              <span className="section-label">Upcoming</span>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="section-title">
                <SplitText>Upcoming Events</SplitText>
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fade">
              <p className="section-subtitle mx-auto">
                Mark your calendar and invite friends. Registration may be required for select events.
              </p>
            </ScrollReveal>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <svg className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 h-full -translate-x-1/2 overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#c9a227" />
                  <stop offset="100%" stopColor="#a17d1f" />
                </linearGradient>
              </defs>
              <line ref={lineRef} x1="1" y1="0" x2="1" y2="100%" stroke="url(#goldGrad)" strokeWidth="2" fill="none" />
            </svg>

            {upcoming.map((e, i) => (
              <ScrollReveal key={e.title} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`relative w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'} pl-12 md:pl-0 mb-12`}>
                  <div className={`absolute top-6 w-3.5 h-3.5 rounded-full border-[2.5px] border-gold bg-cream shadow-[0_0_0_4px_rgba(201,162,39,0.15)] left-4 md:left-auto ${i % 2 === 0 ? 'md:-right-[7px]' : 'md:-left-[7px]'}`} />
                  <div className="glass-card text-left card-glow">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-gold-pale text-gold-dark text-xs font-semibold">{e.date}</span>
                      <span className="text-xs text-stone-muted flex items-center gap-1"><Clock size={12} /> {e.time}</span>
                    </div>
                    <h4 className="font-display text-xl mb-2">{e.title}</h4>
                    <p className="text-sm text-stone-muted mb-3 leading-relaxed">{e.desc}</p>
                    <div className="flex items-center gap-1 text-xs text-gold-dark mb-1">
                      <MapPin size={12} />
                      {e.location}
                    </div>
                    <p className="text-xs text-stone-muted mb-4">{e.spots}</p>
                    <MagneticButton href="/contact">
                      <span className="btn-outline text-xs py-2 px-4">Register Interest</span>
                    </MagneticButton>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream-warm">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-12" variant="blur">
            <span className="section-label">Plan Your Visit</span>
            <h2 className="font-display text-2xl mb-8">Event Tips for Guests</h2>
          </ScrollReveal>
          <StaggerChildren className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {eventTips.map((t) => (
              <StaggerItem key={t.title}>
                <div className="glass-card text-center card-glow">
                  <t.icon className="mx-auto text-gold-dark mb-3" size={24} />
                  <h4 className="font-display text-lg mb-2">{t.title}</h4>
                  <p className="text-sm text-stone-muted">{t.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <div className="text-center mb-12">
            <ScrollReveal>
              <p className="text-stone-muted mb-2">Weekly Rhythm</p>
              <h2 className="font-display text-3xl mb-4">
                <SplitText>Regular Gatherings</SplitText>
              </h2>
            </ScrollReveal>
          </div>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {weekly.map((w) => (
              <StaggerItem key={w.title}>
                <TiltCard>
                  <div className="glass-card text-center h-full card-glow">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gold-pale flex items-center justify-center text-gold-dark">
                      <w.icon size={24} />
                    </div>
                    <h4 className="font-display text-xl mb-1">{w.title}</h4>
                    <p className="text-sm text-gold-dark font-medium mb-2">{w.time}</p>
                    <p className="text-xs text-stone-muted leading-relaxed">{w.desc}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal variant="blur">
              <span className="section-label">Memories</span>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="section-title">
                <SplitText>Highlights from Past Events</SplitText>
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fade">
              <p className="section-subtitle mx-auto">Moments of worship, fellowship, and impact that define our church family.</p>
            </ScrollReveal>
          </div>
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {[
              { img: '/pics/001.JPG', title: 'Annual Revival Meeting', desc: 'A spirit-filled time of prayer, healing, and renewal that drew hundreds from across the region.', year: '2024' },
              { img: '/pics/016.JPG', title: 'Youth Fellowship', desc: 'Building faith and friendships that last — dynamic worship and relevant teaching for the next generation.', year: '2024' },
              { img: '/pics/073.JPG', title: 'Community Outreach', desc: 'Spreading love and hope through food distribution, prayer walks, and practical service.', year: '2023' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="group relative rounded-3xl overflow-hidden h-80 border border-black/[0.06]">
                  <motion.img
                    src={assetPath(item.img)}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <span className="text-gold text-xs font-semibold mb-1">{item.year}</span>
                    <h4 className="font-display text-lg text-white">{item.title}</h4>
                    <p className="text-white/65 text-sm mt-1 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <PageCTA
        title="Want to Host or Sponsor an Event?"
        description="Partner with us to reach more lives through conferences, outreaches, and community initiatives. Our events team is ready to connect."
        primaryLabel="Contact Events Team"
        primaryHref="/contact"
        secondaryLabel="View Ministries"
        secondaryHref="/ministries"
      />
    </>
  );
}

export default function EventsPage() {
  return (
    <ClientLayout>
      <EventsContent />
    </ClientLayout>
  );
}
