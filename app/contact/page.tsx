'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ClientLayout from '@/components/ClientLayout';
import PageHero from '@/components/PageHero';
import MarqueeBand from '@/components/MarqueeBand';
import SectionDivider from '@/components/SectionDivider';
import ScrollReveal from '@/components/ScrollReveal';
import StaggerChildren, { StaggerItem } from '@/components/StaggerChildren';
import TiltCard from '@/components/TiltCard';
import MagneticButton from '@/components/MagneticButton';
import SplitText from '@/components/SplitText';
import PageCTA from '@/components/PageCTA';
import FAQAccordion from '@/components/FAQAccordion';
import Counter from '@/components/Counter';
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Youtube,
  Instagram,
  MessageCircle,
  Banknote,
  Smartphone,
  Globe,
  Check,
  Clock,
  Send,
  Car,
  Accessibility,
} from 'lucide-react';

const givingOptions = [
  {
    icon: Banknote,
    title: 'Bank Transfer',
    lines: ['Account Name: Future Life Tabernacle', 'Bank: Equity Bank Kenya', 'Account No: 1234567890', 'Branch: Siaya Town', 'SWIFT: EQBLKENA'],
  },
  {
    icon: Smartphone,
    title: 'M-Pesa',
    lines: ['Paybill Number: 400200', 'Account: Future Life Tabernacle', 'Confirmation SMS: +254740485416', 'Available 24/7'],
  },
  {
    icon: Globe,
    title: 'Online Giving',
    lines: ['Secure card or PayPal donation', 'Tax-deductible receipts available', 'One-time or monthly recurring gifts'],
    cta: 'Donate Now',
  },
];

const campuses = [
  { name: 'Karemo Main Campus', address: 'Karemo, Siaya, Kenya', time: 'Sundays • 10:00 AM', phone: '+254740485416', note: 'Headquarters & main sanctuary' },
  { name: 'Nairobi Campus', address: 'Nairobi — Grace Hall, Westlands', time: 'Sundays • 10:00 AM', phone: '+254700000001', note: 'Growing congregation' },
  { name: 'London Campus', address: 'Central London Hall, UK', time: 'Saturdays • 6:00 PM GMT', phone: '+44000000000', note: 'Diaspora fellowship' },
  { name: 'Online Campus', address: 'Join from anywhere worldwide', time: 'Live stream • 10:00 AM EAT', phone: 'YouTube & Zoom', note: 'Interactive chat & prayer' },
];

const departments = [
  { title: 'General Inquiries', email: 'info@futurelifetabernacle.com', desc: 'Questions about services, visiting, or membership.' },
  { title: 'Prayer & Counseling', email: 'prayer@futurelifetabernacle.com', desc: 'Prayer requests and pastoral care appointments.' },
  { title: 'Media & Events', email: 'media@futurelifetabernacle.com', desc: 'Press, partnerships, and event coordination.' },
  { title: 'Giving & Finance', email: 'giving@futurelifetabernacle.com', desc: 'Donations, receipts, and financial questions.' },
];

const faqs = [
  { question: 'What should I wear to church?', answer: 'Come as you are — we welcome casual and formal attire. Most members dress modestly and comfortably. The focus is on worship, not dress codes.' },
  { question: 'Is there parking available?', answer: 'Yes, free on-site parking is available at the Karemo main campus. Ushers will direct you on busy Sundays and event days.' },
  { question: 'Do you have programs for children?', answer: 'Absolutely. Children\'s ministry runs during Sunday service for ages 3–12 in a safe, engaging environment with trained volunteers.' },
  { question: 'How can I become a member?', answer: 'Attend our New Members Class held monthly after service. Speak with an usher or visit the welcome desk to get connected.' },
  { question: 'Can I request a pastoral visit?', answer: 'Yes. Contact us by phone, WhatsApp, or the form below. Our pastoral team schedules home and hospital visits weekly.' },
];

const visitTips = [
  { icon: Car, title: 'Getting Here', text: 'Located in Karemo, Siaya County. Accessible by matatu, boda, or private vehicle. GPS pin available on the map.' },
  { icon: Clock, title: 'Best Time to Visit', text: 'Sunday 9:30 AM for fellowship before 10:00 AM service. Midweek Bible study Wednesdays 6:30 PM.' },
  { icon: Accessibility, title: 'Accessibility', text: 'Wheelchair-accessible entrance and seating. Sign language assistance available on request — contact us in advance.' },
];

function ContactContent() {
  const [subscribed, setSubscribed] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [contactSent, setContactSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setTimeout(() => {
      setContactSent(false);
      setContactForm({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <PageHero
        label="Connect"
        title="Contact & Giving"
        subtitle="We'd love to hear from you. Reach out for prayer, pastoral care, ministry questions, events, or to support our mission financially."
      />

      <MarqueeBand
        items={[
          'Karemo Siaya Kenya',
          'Sunday 10AM',
          'WhatsApp +254740485416',
          'Partner With Us',
          'You Are Welcome',
        ]}
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <ScrollReveal variant="blur">
                <TiltCard>
                  <div className="glass-card h-full card-glow">
                    <h3 className="font-display text-2xl mb-6">Get in Touch</h3>
                    <div className="space-y-5">
                      {[
                        { icon: MapPin, title: 'Address', value: 'Karemo, Siaya County, Kenya' },
                        { icon: Mail, title: 'Email', value: 'info@futurelifetabernacle.com' },
                        { icon: Phone, title: 'Phone / WhatsApp', value: '+254 740 485 416' },
                        { icon: Clock, title: 'Office Hours', value: 'Mon–Fri • 8:00 AM – 5:00 PM EAT' },
                      ].map((item) => (
                        <div key={item.title} className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-gold-pale flex items-center justify-center text-gold-dark flex-shrink-0">
                            <item.icon size={20} />
                          </div>
                          <div>
                            <h6 className="text-sm font-semibold mb-0.5">{item.title}</h6>
                            <p className="text-sm text-stone-muted">{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-6">
                      {[
                        { href: 'https://www.facebook.com/bishopisaacobure', icon: Facebook },
                        { href: 'https://www.youtube.com/@bishopisaacobure', icon: Youtube },
                        { href: 'https://www.instagram.com/bishop_isaac_obure/', icon: Instagram },
                        { href: 'https://wa.me/254740485416', icon: MessageCircle },
                      ].map(({ href, icon: Icon }) => (
                        <motion.a
                          key={href}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline p-2.5"
                          whileHover={{ y: -3 }}
                        >
                          <Icon size={16} />
                        </motion.a>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-black/[0.06]">
                      <h6 className="text-sm font-semibold mb-3">Weekly Newsletter</h6>
                      <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="flex gap-2">
                        <input type="email" required placeholder="Your email" className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-black/[0.06] focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none text-sm" />
                        <button type="submit" className="btn-gold text-xs py-2.5 px-4">{subscribed ? <Check size={14} /> : 'Join'}</button>
                      </form>
                      <p className="text-xs text-stone-muted mt-2">Sermon alerts, event updates, and devotionals.</p>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-3">
              <ScrollReveal variant="scale">
                <motion.div className="rounded-3xl overflow-hidden shadow-xl border border-black/[0.06] h-full min-h-[420px]" whileHover={{ y: -4 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817353138534!2d34.320956509403764!3d0.03989516438776499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177fe331bae546d5%3A0x77d91a01b10f5c7d!2sFuture%20Life%20Christian%20Ministries%20Karemo!5e0!3m2!1sen!2ske!4v1740912436319!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '100%', filter: 'sepia(0.1) saturate(0.8)' }}
                    allowFullScreen
                    loading="lazy"
                    title="Future Life Tabernacle location"
                  />
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-warm">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-12" variant="blur">
            <span className="section-label">First Visit</span>
            <h2 className="section-title">
              <SplitText>Plan Your Visit</SplitText>
            </h2>
          </ScrollReveal>
          <StaggerChildren className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {visitTips.map((t) => (
              <StaggerItem key={t.title}>
                <div className="glass-card text-center card-glow">
                  <t.icon className="mx-auto text-gold-dark mb-3" size={28} />
                  <h4 className="font-display text-lg mb-2">{t.title}</h4>
                  <p className="text-sm text-stone-muted leading-relaxed">{t.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal variant="blur">
              <span className="section-label">Locations</span>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="section-title">
                <SplitText>Our Campuses</SplitText>
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fade">
              <p className="section-subtitle mx-auto">One family, multiple locations — worship with us in person or online.</p>
            </ScrollReveal>
          </div>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campuses.map((c) => (
              <StaggerItem key={c.name}>
                <TiltCard>
                  <div className="glass-card text-center h-full card-glow">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gold-pale flex items-center justify-center text-gold-dark">
                      <MapPin size={20} />
                    </div>
                    <h4 className="font-display text-lg mb-1">{c.name}</h4>
                    <p className="text-xs text-stone-muted mb-2 leading-relaxed">{c.address}</p>
                    <p className="text-xs text-gold-dark font-medium mb-1">{c.time}</p>
                    <p className="text-xs text-stone-muted mb-2">{c.phone}</p>
                    <p className="text-xs text-gold-dark/80 italic">{c.note}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24 bg-cream-warm">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-12" variant="blur">
            <span className="section-label">Departments</span>
            <h2 className="section-title">
              <SplitText>Who to Contact</SplitText>
            </h2>
          </ScrollReveal>
          <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {departments.map((d) => (
              <StaggerItem key={d.title}>
                <div className="glass-card card-glow">
                  <h4 className="font-display text-lg mb-1">{d.title}</h4>
                  <a href={`mailto:${d.email}`} className="text-sm text-gold-dark font-medium hover:text-gold transition-colors">
                    {d.email}
                  </a>
                  <p className="text-sm text-stone-muted mt-2">{d.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <ScrollReveal variant="blur">
                <span className="section-label">Reach Out</span>
              </ScrollReveal>
              <ScrollReveal>
                <h2 className="section-title">
                  <SplitText>Send Us a Message</SplitText>
                </h2>
              </ScrollReveal>
              <ScrollReveal variant="fade">
                <p className="text-stone-muted text-sm mt-3">We typically respond within 1–2 business days.</p>
              </ScrollReveal>
            </div>
            <ScrollReveal variant="scale">
              <div className="glass-card card-glow">
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input type="text" required value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white border border-black/[0.06] focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition-all" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input type="email" required value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white border border-black/[0.06] focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition-all" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input type="tel" value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white border border-black/[0.06] focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition-all" placeholder="+254..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <input type="text" value={contactForm.subject} onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white border border-black/[0.06] focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition-all" placeholder="Prayer, Visit, Giving..." />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea required rows={5} value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} className="w-full px-4 py-3 rounded-2xl bg-white border border-black/[0.06] focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition-all resize-none" placeholder="How can we help you?" />
                  </div>
                  <div className="text-center">
                    <MagneticButton>
                      <button type="submit" className="btn-gold px-10" disabled={contactSent}>
                        {contactSent ? <><Check size={18} /> Message Sent!</> : <><Send size={16} /> Send Message</>}
                      </button>
                    </MagneticButton>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream-warm">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-12" variant="blur">
            <span className="section-label">Questions</span>
            <h2 className="section-title">
              <SplitText>Frequently Asked</SplitText>
            </h2>
          </ScrollReveal>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section id="giving" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <ScrollReveal variant="blur">
              <span className="section-label">Support</span>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="section-title">
                <SplitText>Support Our Mission</SplitText>
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fade">
              <p className="section-subtitle mx-auto">
                Your generous donations fuel worship, outreach, discipleship, and community transformation across Kenya and beyond.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
            {[
              { value: 120, label: 'Outreaches Yearly', suffix: '+' },
              { value: 500, label: 'Families Served', suffix: '+' },
              { value: 100, label: 'Volunteers', suffix: '+' },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1} variant="scale">
                <div className="text-center">
                  <Counter target={s.value} suffix={s.suffix} className="font-display text-3xl text-gold" />
                  <p className="text-xs text-stone-muted mt-1">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <StaggerChildren className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {givingOptions.map((g) => (
              <StaggerItem key={g.title}>
                <TiltCard>
                  <div className="glass-card text-center h-full relative overflow-hidden group card-glow">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gold-pale flex items-center justify-center text-gold-dark">
                      <g.icon size={24} />
                    </div>
                    <h5 className="font-display text-xl mb-3">{g.title}</h5>
                    {g.lines.map((line) => (
                      <p key={line} className="text-sm text-stone-muted">{line}</p>
                    ))}
                    {g.cta && (
                      <div className="mt-5">
                        <MagneticButton><span className="btn-gold text-xs">{g.cta}</span></MagneticButton>
                      </div>
                    )}
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <PageCTA
        title="We Can't Wait to Meet You"
        description="Join us this Sunday at 10:00 AM in Karemo, or connect online from anywhere in the world. Your story matters to us."
        primaryLabel="Get Directions"
        primaryHref="https://www.google.com/maps/place/Future+Life+Christian+Ministries+Karemo"
        secondaryLabel="Submit Prayer Request"
        secondaryHref="/prayer"
      />
    </>
  );
}

export default function ContactPage() {
  return (
    <ClientLayout>
      <ContactContent />
    </ClientLayout>
  );
}
