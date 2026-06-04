'use client';

import { useState } from 'react';
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
import { Check, Heart, Shield, Sparkles, Phone, Users, Clock, BookOpen } from 'lucide-react';

const prayerTypes = [
  { icon: Heart, title: 'Healing', desc: 'Physical, emotional, and spiritual healing through faith and intercession.', detail: 'Our prayer team believes God still heals today and will stand with you in faith until breakthrough comes.' },
  { icon: Shield, title: 'Protection', desc: 'Divine covering for you, your family, home, and travels.', detail: 'Psalm 91 promises — we pray declarations of safety, peace, and angelic assignment over your household.' },
  { icon: Sparkles, title: 'Breakthrough', desc: 'Financial, relational, career, and spiritual breakthroughs.', detail: 'When obstacles feel immovable, united prayer releases God\'s power to open doors no man can shut.' },
  { icon: Users, title: 'Family & Marriage', desc: 'Restoration, unity, and blessing over homes and relationships.', detail: 'We intercede for marriages, children, and generational chains to be broken in Jesus\' name.' },
  { icon: BookOpen, title: 'Salvation', desc: 'Prayer for loved ones who do not yet know Christ.', detail: 'We join your faith as you contend for souls — believing for divine appointments and softened hearts.' },
  { icon: Clock, title: 'Urgent Need', desc: 'Immediate intercession for crisis situations.', detail: 'Mark your request urgent and our team will prioritize prayer within 24 hours.' },
];

const prayerProcess = [
  { step: '01', title: 'Submit', text: 'Share your request confidentially through the form below or WhatsApp.' },
  { step: '02', title: 'Intercede', text: 'Our prayer team prays every Wednesday and daily for urgent needs.' },
  { step: '03', title: 'Follow Up', text: 'Optional email updates when you provide contact information.' },
  { step: '04', title: 'Testify', text: 'We celebrate answered prayers and give God all the glory.' },
];

const verses = [
  { text: 'Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours.', ref: 'Mark 11:24' },
  { text: 'The prayer of a righteous person is powerful and effective.', ref: 'James 5:16' },
  { text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.', ref: 'Philippians 4:6' },
];

function PrayerContent() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', urgent: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '', urgent: false });
    }, 3000);
  };

  return (
    <>
      <PageHero
        label="Intercession"
        title="Prayer Request"
        subtitle="You are not alone. Let our prayer warriors stand with you in faith — confidential, compassionate, and spirit-led."
      />

      <MarqueeBand
        items={[
          'We Pray With You',
          'Confidential Requests',
          'Wednesday Prayer Meeting',
          'God Answers Prayer',
          'Mark 11:24',
        ]}
      />

      <section className="py-20 bg-cream-warm">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <ScrollReveal variant="blur">
            <p className="text-stone-muted leading-relaxed">
              Prayer is the foundation of everything we do at Future Life Tabernacle. Whether you need healing, breakthrough, salvation for a loved one, or strength for today — our intercessors are honored to carry your burden to the throne of grace.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-12" variant="blur">
            <span className="section-label">Categories</span>
            <h2 className="font-display text-3xl">
              <SplitText>What Can We Pray For?</SplitText>
            </h2>
          </ScrollReveal>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prayerTypes.map((p) => (
              <StaggerItem key={p.title}>
                <TiltCard>
                  <div className="glass-card card-glow h-full">
                    <div className="w-12 h-12 mb-3 rounded-xl bg-gold-pale flex items-center justify-center text-gold-dark">
                      <p.icon size={22} />
                    </div>
                    <h4 className="font-display text-lg mb-1">{p.title}</h4>
                    <p className="text-xs text-stone-muted mb-3">{p.desc}</p>
                    <p className="text-sm text-stone-muted leading-relaxed">{p.detail}</p>
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
            <span className="section-label">Process</span>
            <h2 className="section-title">
              <SplitText>How It Works</SplitText>
            </h2>
          </ScrollReveal>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {prayerProcess.map((p) => (
              <StaggerItem key={p.step}>
                <div className="text-center">
                  <span className="font-display text-4xl text-gold/30 block mb-2">{p.step}</span>
                  <h4 className="font-display text-lg mb-2">{p.title}</h4>
                  <p className="text-sm text-stone-muted">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            <ScrollReveal className="lg:col-span-2" variant="fade">
              <TiltCard>
                <div className="glass-card card-glow h-full">
                  <Phone className="text-gold-dark mb-4" size={32} />
                  <h3 className="font-display text-2xl mb-4">Prayer Line</h3>
                  <p className="text-sm text-stone-muted mb-6 leading-relaxed">
                    For urgent prayer needs, call or WhatsApp our prayer coordinator. Available during office hours and for emergencies.
                  </p>
                  <a href="https://wa.me/254740485416" target="_blank" rel="noopener noreferrer" className="btn-gold text-sm inline-flex">
                    WhatsApp +254 740 485 416
                  </a>
                  <div className="mt-8 pt-6 border-t border-black/[0.06] space-y-3 text-sm text-stone-muted">
                    <p><strong className="text-stone-text">Prayer Meeting:</strong> Wednesdays 6:00 PM</p>
                    <p><strong className="text-stone-text">Fasting & Prayer:</strong> First Friday monthly</p>
                    <p><strong className="text-stone-text">Team Size:</strong> 40+ trained intercessors</p>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

            <div className="lg:col-span-3">
              <ScrollReveal variant="scale">
                <div className="glass-card card-glow">
                  <h2 className="font-display text-2xl text-center mb-2">Submit Your Prayer Request</h2>
                  <p className="text-center text-stone-muted text-sm mb-8">
                    Fill out the form below. Our prayer team meets every Wednesday to pray over all requests.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-2">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-black/[0.06] focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email (optional)</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-black/[0.06] focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-black/[0.06] focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition-all"
                        placeholder="Healing, Family, Job, Breakthrough..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Prayer Request *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-black/[0.06] focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition-all resize-none"
                        placeholder="Share your prayer request in detail. The more specific, the more targeted our intercession can be..."
                      />
                    </div>
                    <label className="flex items-center gap-3 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.urgent}
                        onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })}
                        className="rounded border-gold text-gold focus:ring-gold"
                      />
                      <span className="text-stone-muted">This is an urgent request (24-hour priority prayer)</span>
                    </label>
                    <div className="text-center pt-2">
                      <MagneticButton>
                        <button type="submit" className="btn-gold px-10" disabled={submitted}>
                          {submitted ? <><Check size={18} /> Request Sent!</> : 'Send Prayer Request'}
                        </button>
                      </MagneticButton>
                      <p className="text-xs text-stone-muted mt-4">Your request is confidential and handled with the utmost care and discretion.</p>
                    </div>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream-warm">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-12" variant="blur">
            <span className="section-label">Scripture</span>
            <h2 className="section-title">
              <SplitText>Promises to Stand On</SplitText>
            </h2>
          </ScrollReveal>
          <StaggerChildren className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {verses.map((v) => (
              <StaggerItem key={v.ref}>
                <div className="glass-card card-glow text-center h-full">
                  <div className="text-gold text-3xl font-display mb-3 opacity-40">&ldquo;</div>
                  <p className="text-stone-muted italic text-sm leading-relaxed mb-4">{v.text}</p>
                  <p className="text-gold-dark font-semibold text-sm">— {v.ref}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <PageCTA
        title="Join Our Prayer Team"
        description="Called to intercede? Serve on our prayer team and stand in the gap for families, nations, and the lost."
        primaryLabel="Contact Us to Serve"
        primaryHref="/contact"
        secondaryLabel="About Our Church"
        secondaryHref="/about"
      />
    </>
  );
}

export default function PrayerPage() {
  return (
    <ClientLayout>
      <PrayerContent />
    </ClientLayout>
  );
}
