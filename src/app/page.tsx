"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Sparkles, ArrowRight, ShieldCheck, Award, Star, CheckCircle2, 
  Play, Compass, LayoutGrid, Building2, Home as HomeIcon, Briefcase, 
  ChefHat, Layers, Users, Trophy, ChevronRight, PhoneCall 
} from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import CostEstimatorModal from "@/components/ui/CostEstimatorModal";

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rohan & Ananya Singhania",
      role: "Owners, 7,000 sq.ft Sea-Facing Penthouse, Mumbai",
      quote: "Vogue Spaces turned our raw concrete duplex into a cinematic masterpiece. The liquid brass accents, bespoke Italian marble flooring, and smart automation exceeded everything we saw in Milan architecture magazines.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
    },
    {
      name: "Vikramaditya Kapoor",
      role: "Managing Director, Apex Global VC Fund HQ",
      quote: "Our new executive headquarters designed by Vogue Spaces commands instant respect from international partners. Their turnkey execution delivered 45 days ahead of schedule with immaculate attention to acoustics.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
    },
    {
      name: "Dr. Meera Nambiar",
      role: "Bespoke Villa Owner, Bengaluru",
      quote: "The modular obsidian kitchen and spatial flow of our living room are simply breathtaking. Every single guest who visits pauses in awe at the lighting design and handcrafted teak furniture.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* =========================================================================
          HERO SECTION (Full Screen Cinematic Experience)
      ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Background Cinematic Visual */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/80" />

        {/* Ambient Gold Floating Spheres */}
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[var(--color-gold)]/15 blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[var(--color-champagne)]/10 blur-[140px] pointer-events-none" />

        {/* Glass Morphism Content Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-5xl mx-auto text-center rounded-3xl liquid-glass p-8 sm:p-12 md:p-16 border border-[var(--color-gold)]/40 shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-gold)]/15 border border-[var(--color-gold)]/40 text-[var(--color-champagne)] text-xs font-mono tracking-[0.25em] uppercase mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)]" /> Premier Luxury Interior Studio
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Transforming Spaces Into <span className="gold-gradient-text block mt-1">Luxurious Experiences</span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
            We create timeless, elegant and bespoke interiors that reflect your lifestyle, personality and aspirations. From architectural residential penthouses to executive corporate sanctuaries.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-champagne)] to-[var(--color-gold)] text-black font-bold text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 fill-black" /> Schedule Consultation
            </button>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-full liquid-glass border border-[var(--color-gold)]/50 text-white font-semibold text-sm tracking-wide hover:bg-[var(--color-gold)]/20 transition-all flex items-center justify-center gap-2"
            >
              Explore Portfolio <ArrowRight className="w-4 h-4 text-[var(--color-gold)]" />
            </Link>
          </div>

          {/* Floating Luxury Badges below CTA */}
          <div className="mt-12 pt-8 border-t border-[var(--color-gold)]/20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-extrabold gold-gradient-text block">14+</span>
              <span className="text-[11px] uppercase tracking-wider text-gray-400">Years Excellence</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-extrabold gold-gradient-text block">500+</span>
              <span className="text-[11px] uppercase tracking-wider text-gray-400">Projects Completed</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-extrabold gold-gradient-text block">480+</span>
              <span className="text-[11px] uppercase tracking-wider text-gray-400">Delighted Families</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-extrabold gold-gradient-text block">12+</span>
              <span className="text-[11px] uppercase tracking-wider text-gray-400">Metros Served</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =========================================================================
          WHY CHOOSE US & BRAND POSITIONING
      ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-gold)]">
              The Vogue Distinction
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Where Haute Couture Meets <span className="gold-gradient-text">Architectural Mastery</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Unlike traditional interior decorators, Vogue Spaces operates at the intersection of precision engineering and cinematic emotional styling. We source custom Italian marbles, German motion hardware, and handcrafted brass fittings exclusively for each client.
            </p>
            <ul className="space-y-3.5 text-sm text-gray-200">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <span><strong>Zero Compromise Turnkey Delivery:</strong> From raw brickwork to designer curtains.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <span><strong>3D VR Photorealistic Previews:</strong> See exactly what gets built before execution starts.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <span><strong>10-Year Studio Craftsmanship Warranty:</strong> Peace of mind backed by certified audits.</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-gold)] hover:underline">
                Discover Our Design Philosophy &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="rounded-3xl liquid-glass p-6 border border-[var(--color-gold)]/25">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-gold)]/15 flex items-center justify-center text-[var(--color-gold)] mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">Award-Winning Aesthetics</h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Recognized by architectural boards for balancing minimalist luxury with ergonomic Indian lifestyle requirements.
                </p>
              </div>
              <div className="rounded-3xl liquid-glass p-6 border border-[var(--color-gold)]/25 bg-gradient-to-br from-[var(--color-gold)]/10 to-transparent">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-gold)]/15 flex items-center justify-center text-[var(--color-gold)] mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">Transparent Fixed Pricing</h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Detailed BOQs (Bill of Quantities) with zero hidden escalation clauses during construction execution.
                </p>
              </div>
            </div>

            <div className="space-y-6 sm:mt-8">
              <div className="rounded-3xl liquid-glass p-6 border border-[var(--color-gold)]/25">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-gold)]/15 flex items-center justify-center text-[var(--color-gold)] mb-4">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">Bespoke Space Planning</h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Maximizing natural lighting, Vastu compliance harmony, and fluid circulation pathways across every room.
                </p>
              </div>
              <div className="rounded-3xl liquid-glass p-6 border border-[var(--color-gold)]/25">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-gold)]/15 flex items-center justify-center text-[var(--color-gold)] mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">Dedicated Project Managers</h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Single point of contact providing weekly video progress updates and quality control inspections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LUXURY SERVICES CARDS SHOWCASE
      ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-[var(--color-gold)]/15">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Our Architectural Expertise
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wide">
            Haute Couture <span className="gold-gradient-text">Interior Offerings</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Comprehensive turnkey solutions crafted to elevate residential and corporate environments into world-class landmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Luxury Residential Interiors",
              category: "3BHK, 4BHK & Penthouses",
              icon: HomeIcon,
              image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
              desc: "Bespoke living lounges, Italian marble dining suites, and private master sanctuaries tailored to high-net-worth families.",
              href: "/services#residential"
            },
            {
              title: "Premium Villa Architecture",
              category: "Independent Bungalows & Mansions",
              icon: Building2,
              image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
              desc: "Grand double-height foyers, landscaped courtyard integrations, private pools, and multi-level spatial harmony.",
              href: "/services#villas"
            },
            {
              title: "Corporate & Office Design",
              category: "Executive Suites & HQs",
              icon: Briefcase,
              image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
              desc: "Ergonomic workstations, soundproof boardrooms, and prestigious client reception lounges that boost brand equity.",
              href: "/services#commercial"
            },
            {
              title: "Haute Modular Kitchens",
              category: "Precision Culinary Studios",
              icon: ChefHat,
              image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
              desc: "Engineered with German Blum hardware, monolithic quartz islands, and concealed spice ergonomics for effortless cooking.",
              href: "/services#kitchen"
            },
            {
              title: "Turnkey Execution Solutions",
              category: "End-to-End Delivery",
              icon: Layers,
              image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
              desc: "Complete civil engineering, MEP electrical wiring, false ceiling lighting, carpentry, and final art styling under one roof.",
              href: "/services#turnkey"
            },
            {
              title: "Custom Bespoke Furniture",
              category: "Master Artisans",
              icon: Sparkles,
              image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop",
              desc: "One-of-a-kind dining tables, brass fluted consoles, and custom plush seating built in our dedicated luxury workshop.",
              href: "/services#bespoke"
            }
          ].map((srv, idx) => (
            <Link
              key={idx}
              href={srv.href}
              className="group rounded-3xl liquid-glass overflow-hidden border border-[var(--color-gold)]/20 hover:border-[var(--color-gold)]/60 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${srv.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/40 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[var(--color-gold)]/40 text-[10px] uppercase font-mono text-[var(--color-champagne)]">
                  {srv.category}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[var(--color-gold)] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between border-t border-[var(--color-gold)]/15 text-xs font-semibold text-[var(--color-gold)]">
                  <span>Explore Specification & Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full liquid-glass border border-[var(--color-gold)]/50 text-[var(--color-champagne)] font-bold text-sm hover:bg-[var(--color-gold)] hover:text-black transition-all shadow-lg"
          >
            View All 9 Luxury Interior Services &rarr;
          </Link>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE BEFORE & AFTER SLIDER SHOWCASE
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <BeforeAfterSlider />
      </section>

      {/* =========================================================================
          INSTANT LUXURY COST ESTIMATOR
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <CostEstimatorModal />
      </section>

      {/* =========================================================================
          ARCHITECTURAL DESIGN PROCESS (6-STEP TIMELINE)
      ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-[var(--color-gold)]/15">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Flawless Execution
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-wide">
            Our 6-Stage <span className="gold-gradient-text">Design Process</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            A structured, collaborative roadmap designed to ensure seamless communication and on-time project completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { step: "01", title: "VIP Consultation & Discovery", desc: "Understanding your lifestyle desires, functional wishlist, spatial Vastu guidelines, and investment parameters." },
            { step: "02", title: "Concept & Spatial Planning", desc: "Crafting mood boards, material palettes, and 2D CAD furniture layouts optimizing room flow and sunlight." },
            { step: "03", title: "Photorealistic 3D Renders", desc: "Cinematic VR walkthrough renders showing lighting reflections, Italian textures, and custom cabinetry in 4K." },
            { step: "04", title: "Detailed BOQ & Material Selection", desc: "Itemized transparent quotations accompanied by private visits to luxury marble yards and hardware boutiques." },
            { step: "05", title: "Turnkey Site Execution", desc: "Skilled master craftsmen execute civil, MEP, false ceiling, and factory carpentry under rigorous QA supervision." },
            { step: "06", title: "White-Glove Styling & Handover", desc: "Curating artwork, luxury rugs, indoor botanicals, and professional sanitization for your grand housewarming." },
          ].map((st, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl liquid-glass p-8 border border-[var(--color-gold)]/25 hover:border-[var(--color-gold)]/60 transition-all duration-300 group"
            >
              <div className="absolute top-6 right-6 font-serif text-4xl sm:text-5xl font-black text-white/5 group-hover:text-[var(--color-gold)]/15 transition-colors">
                {st.step}
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-gold)]/20 text-[var(--color-gold)] font-mono text-xs font-bold mb-4">
                Stage {st.step}
              </span>
              <h3 className="font-serif text-xl font-bold text-white group-hover:text-[var(--color-gold)] transition-colors mb-3">
                {st.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          CLIENT TESTIMONIALS & REVIEWS CAROUSEL
      ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-[var(--color-gold)]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-gold)]">
              Client Praises
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Stories From Our <span className="gold-gradient-text">Delighted Patrons</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover why discerning homeowners, industrialists, and celebrities trust Vogue Spaces with their most personal environments.
            </p>
            <div className="flex items-center gap-2 pt-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeTestimonial === idx ? "w-10 bg-[var(--color-gold)]" : "w-2.5 bg-white/20"
                  }`}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <div className="pt-4">
              <Link href="/reviews" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-gold)] hover:underline">
                Read All 248+ Verified Client Reviews &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl liquid-glass p-8 sm:p-12 border border-[var(--color-gold)]/40 shadow-2xl relative"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                ))}
              </div>

              <p className="font-serif text-lg sm:text-2xl italic text-gray-200 leading-relaxed mb-8">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-[var(--color-gold)]/20">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[var(--color-gold)]"
                />
                <div>
                  <h4 className="font-serif font-bold text-white text-base">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <span className="text-xs text-[var(--color-champagne)] block mt-0.5 font-mono">
                    {testimonials[activeTestimonial].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          AWARDS & CERTIFICATIONS SHOWCASE
      ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-y border-[var(--color-gold)]/20 bg-black/40">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center">
          <div className="space-y-2 p-4">
            <Trophy className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-2" />
            <h5 className="font-serif font-bold text-white text-sm sm:text-base">Awwwards Nominee</h5>
            <span className="text-[11px] text-gray-400 block">Excellence in Architectural Web Design</span>
          </div>
          <div className="space-y-2 p-4">
            <Award className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-2" />
            <h5 className="font-serif font-bold text-white text-sm sm:text-base">ISO 9001:2015 Certified</h5>
            <span className="text-[11px] text-gray-400 block">Quality Management Systems</span>
          </div>
          <div className="space-y-2 p-4">
            <ShieldCheck className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-2" />
            <h5 className="font-serif font-bold text-white text-sm sm:text-base">Top 25 Luxury Studios</h5>
            <span className="text-[11px] text-gray-400 block">Design Digest India Awards</span>
          </div>
          <div className="space-y-2 p-4">
            <Sparkles className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-2" />
            <h5 className="font-serif font-bold text-white text-sm sm:text-base">10-Year Craftsmanship</h5>
            <span className="text-[11px] text-gray-400 block">Guaranteed Structural Assurance</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INSTAGRAM LIVE REELS PREVIEW
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-gold)] flex items-center gap-1.5">
              <InstagramIcon className="w-4 h-4" /> @VogueSpacesStudio
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Follow Our Daily Studio Chronicles
            </h3>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full liquid-glass border border-[var(--color-gold)]/40 text-xs font-bold text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black transition-all flex items-center gap-2"
          >
            Explore On Instagram &rarr;
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop",
          ].map((img, idx) => (
            <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden group border border-[var(--color-gold)]/20">
              <img src={img} alt="Instagram reel preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 text-[var(--color-gold)]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          GRAND CALL TO ACTION SECTION
      ========================================================================= */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center relative">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--color-gold)]/15 via-black to-[var(--color-champagne)]/15 blur-2xl pointer-events-none" />
        <div className="relative z-10 rounded-3xl liquid-glass p-10 sm:p-16 border-2 border-[var(--color-gold)]/60 shadow-[0_30px_90px_rgba(0,0,0,0.95)]">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-gold)] block mb-3">
            Your Dream Home Awaits
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide leading-tight mb-6">
            Let&apos;s Design Your <span className="gold-gradient-text">Dream Space</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Take the first step toward an elevated lifestyle. Schedule a private architectural consultation with our Principal Designer today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-champagne)] to-[var(--color-gold)] text-black font-extrabold text-base uppercase tracking-wider shadow-[0_0_40px_rgba(212,175,55,0.7)] hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 fill-black" /> Schedule VIP Consultation
            </button>
            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto px-8 py-5 rounded-full liquid-glass border border-[var(--color-gold)]/50 text-white font-bold text-sm tracking-wide hover:bg-[var(--color-gold)]/20 transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[var(--color-gold)]" /> Direct Call: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
