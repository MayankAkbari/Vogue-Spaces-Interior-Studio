"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Award, ShieldCheck, Heart, Compass, Users, Clock, CheckCircle2, Quote } from "lucide-react";

export default function AboutPage() {
  const timelineEvents = [
    { year: "2012", title: "The Foundation", desc: "Established in Mumbai with a singular mission: bringing haute couture Italian aesthetic discipline to Indian luxury residences." },
    { year: "2016", title: "Architectural Recognition", desc: "Awarded 'Best Residential Studio' for our landmark 8,000 sq.ft duplex project in Bandra West." },
    { year: "2020", title: "Turnkey Engineering Division", desc: "Integrated in-house MEP engineering, lighting design, and custom woodwork factories to ensure 100% turnkey quality control." },
    { year: "2024", title: "International Pan-India Expansion", desc: "Delivered over 450+ bespoke properties across Mumbai, Bengaluru, Delhi NCR, and Hyderabad." },
    { year: "2026", title: "Spatial AI & VR Studio", desc: "Pioneering real-time photorealistic 3D VR simulation technology allowing clients to walk inside their unbuilt spaces." }
  ];

  const teamMembers = [
    { name: "Ar. Raghavendra Singhania", role: "Founder & Principal Architect", bio: "Alumnus of Politecnico di Milano with 18+ years designing royal villas and luxury hospitality projects across Europe and Asia.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop" },
    { name: "Elena Rossi", role: "Creative Director — Material & Color", bio: "Former Milan Design Week curator specializing in rare Italian marble veneers, saddle leather craftsmanship, and bespoke brass metallurgy.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" },
    { name: "Kabir Malhotra", role: "Head of Turnkey Engineering", bio: "Oversees structural integrity, acoustic soundproofing, HVAC ergonomics, and German smart home automation deployments.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" },
    { name: "Sanya Verma", role: "Senior Luxury Styling Lead", bio: "Curates original contemporary art collections, rare antiquities, and custom botanical integrations for our white-glove handover.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <div className="relative overflow-hidden py-12">
      {/* Page Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10 pb-16 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-gold)] block mb-3">
          Our Heritage & Identity
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-wide">
          The Art of <span className="gold-gradient-text">Bespoke Living</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-lg max-w-3xl mx-auto mt-4 leading-relaxed font-light">
          Vogue Spaces Interior Studio is more than an interior design firm; we are curators of lifestyle and architects of human emotion.
        </p>
      </section>

      {/* Company Story & Philosophy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--color-gold)]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-[var(--color-gold)]/30 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop" 
              alt="Vogue Spaces Design Studio" 
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl liquid-glass border border-[var(--color-gold)]/40">
              <span className="font-serif text-lg font-bold text-[var(--color-gold)] block">&ldquo;Every room has a soul waiting to be awakened.&rdquo;</span>
              <span className="text-xs text-gray-300 block mt-1 font-mono">&mdash; Ar. Raghavendra Singhania, Founder</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-gold)]">
              Our Company Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              Crafting Landmarks That Transcend Trends
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Founded over a decade ago with a defiant ambition to redefine luxury living in India, Vogue Spaces was born out of dissatisfaction with mass-produced decor. We noticed high-net-worth homeowners were forced to choose between rigid foreign design agencies or unstructured local contractors.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We built Vogue Spaces to bridge that divide—combining European architectural rigor and Italian material sensibility with robust Indian execution capabilities and complete turnkey transparency.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl liquid-glass border border-[var(--color-gold)]/20">
                <h4 className="font-serif font-bold text-lg text-[var(--color-gold)]">100% Turnkey</h4>
                <p className="text-xs text-gray-400 mt-1">Single point of accountability from civil drawings to artwork placement.</p>
              </div>
              <div className="p-4 rounded-2xl liquid-glass border border-[var(--color-gold)]/20">
                <h4 className="font-serif font-bold text-lg text-[var(--color-gold)]">Bespoke First</h4>
                <p className="text-xs text-gray-400 mt-1">Zero catalog repetition. Every furniture item is tailor-engineered.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-3xl liquid-glass p-8 border border-[var(--color-gold)]/25 hover:border-[var(--color-gold)]/60 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[var(--color-gold)]/15 flex items-center justify-center text-[var(--color-gold)] mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              To transform ordinary physical structures into deeply personal, sensory-rich luxury sanctuaries that elevate our clients&apos; daily well-being, prestige, and family legacies.
            </p>
          </div>

          <div className="rounded-3xl liquid-glass p-8 border border-[var(--color-gold)]/25 hover:border-[var(--color-gold)]/60 transition-all bg-gradient-to-b from-[var(--color-gold)]/10 to-transparent">
            <div className="w-12 h-12 rounded-2xl bg-[var(--color-gold)]/15 flex items-center justify-center text-[var(--color-gold)] mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              To stand as Asia&apos;s most revered luxury interior architecture house, benchmarked globally alongside world-renowned Italian and Swiss design institutions.
            </p>
          </div>

          <div className="rounded-3xl liquid-glass p-8 border border-[var(--color-gold)]/25 hover:border-[var(--color-gold)]/60 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[var(--color-gold)]/15 flex items-center justify-center text-[var(--color-gold)] mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-3">Uncompromising Values</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Radical transparency in pricing, uncompromising structural acoustics, sustainable ethical sourcing, and white-glove confidentiality for our elite clientele.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--color-gold)]/15">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Timeline of Excellence
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Our Evolutionary <span className="gold-gradient-text">Milestones</span>
          </h2>
        </div>

        <div className="relative border-l border-[var(--color-gold)]/30 ml-4 sm:ml-32 space-y-12">
          {timelineEvents.map((evt, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-12 group">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[var(--color-obsidian)] border-2 border-[var(--color-gold)] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.8)] group-hover:scale-125 transition-transform" />
              <span className="font-mono text-xs sm:text-sm font-bold text-[var(--color-gold)] block mb-1">
                {evt.year}
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                {evt.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 max-w-2xl leading-relaxed">
                {evt.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Master Architects Showcase */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--color-gold)]/15">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-gold)]">
            The Creative Minds
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Meet Our <span className="gold-gradient-text">Principal Architects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="rounded-3xl liquid-glass overflow-hidden border border-[var(--color-gold)]/20 hover:border-[var(--color-gold)]/60 transition-all duration-300 flex flex-col justify-between group">
              <div className="relative h-72 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent" />
              </div>
              <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-[var(--color-gold)] transition-colors">{member.name}</h4>
                  <span className="text-xs text-[var(--color-champagne)] block font-mono">{member.role}</span>
                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="rounded-3xl liquid-glass p-10 border border-[var(--color-gold)]/40 shadow-2xl space-y-6">
          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white">
            Ready To Begin Your Architectural Journey?
          </h3>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Book a private 1-on-1 consultation session with our Principal Architect to discuss your property blueprint.
          </p>
          <button
            onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-champagne)] text-black font-bold text-sm tracking-wider uppercase shadow-lg hover:scale-105 transition-transform"
          >
            Schedule VIP Consultation Session
          </button>
        </div>
      </section>
    </div>
  );
}
