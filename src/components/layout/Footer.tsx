"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Send, Phone, Mail, MapPin, 
  Sparkles, CheckCircle2, ArrowUpRight, ShieldCheck, Clock 
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

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <path d="m10 15 5-3-5-3v6z"/>
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative mt-32 border-t border-[var(--color-gold)]/25 bg-gradient-to-b from-[var(--color-obsidian)] via-[#08090C] to-black overflow-hidden">
      {/* Decorative ambient lighting glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-bronze)]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Glass Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[var(--color-gold)]/15">
          
          {/* Column 1: Brand & Bio (Col span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full border border-[var(--color-gold)]/50 p-1 bg-black shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                <Image src="/logo/vogue-logo.png" alt="Vogue Spaces Logo" fill className="object-contain p-1" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider gold-gradient-text block">
                  VOGUE SPACES
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-champagne)] font-medium">
                  Interior Studio
                </span>
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed pr-6">
              Vogue Spaces Interior Studio transforms residential apartments, bespoke villas, and corporate offices into timeless, cinematic luxury experiences. Ranked among India&apos;s premier interior architecture houses.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-[var(--color-champagne)]">
              <span className="flex items-center gap-1.5 bg-[var(--color-gold)]/10 px-3 py-1.5 rounded-full border border-[var(--color-gold)]/30">
                <ShieldCheck className="w-4 h-4 text-[var(--color-gold)]" /> ISO 9001:2015 Certified
              </span>
              <span className="flex items-center gap-1.5 bg-[var(--color-gold)]/10 px-3 py-1.5 rounded-full border border-[var(--color-gold)]/30">
                <Clock className="w-4 h-4 text-[var(--color-gold)]" /> 10-Year Warranty
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <SocialLink href="https://instagram.com" icon={InstagramIcon} label="Instagram" />
              <SocialLink href="https://facebook.com" icon={FacebookIcon} label="Facebook" />
              <SocialLink href="https://linkedin.com" icon={LinkedinIcon} label="LinkedIn" />
              <SocialLink href="https://youtube.com" icon={YoutubeIcon} label="YouTube" />
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-[var(--color-gold)] tracking-wide border-l-2 border-[var(--color-gold)] pl-3">
              Luxury Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <FooterLink href="/services#residential">Residential Interiors</FooterLink>
              <FooterLink href="/services#villas">Luxury Villa Design</FooterLink>
              <FooterLink href="/services#kitchen">Haute Modular Kitchens</FooterLink>
              <FooterLink href="/services#office">Executive Headquarters</FooterLink>
              <FooterLink href="/services#turnkey">Turnkey Execution</FooterLink>
              <FooterLink href="/services#renovation">Heritage Renovation</FooterLink>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-[var(--color-gold)] tracking-wide border-l-2 border-[var(--color-gold)] pl-3">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <FooterLink href="/about">About Studio</FooterLink>
              <FooterLink href="/portfolio">Project Portfolio</FooterLink>
              <FooterLink href="/process">Design Process</FooterLink>
              <FooterLink href="/reviews">Client Reviews</FooterLink>
              <FooterLink href="/blog">Design Trends Blog</FooterLink>
              <FooterLink href="/gallery">360° Virtual Tours</FooterLink>
            </ul>
          </div>

          {/* Column 4: Newsletter & Direct Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-[var(--color-gold)] tracking-wide border-l-2 border-[var(--color-gold)] pl-3">
              VIP Newsletter
            </h4>
            <p className="text-xs text-gray-400">
              Subscribe for exclusive design lookbooks and private invitation previews.
            </p>

            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                required
                placeholder="Enter VIP email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[var(--color-gold)]/30 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-gold)] pr-12"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-[var(--color-gold)] text-black hover:bg-[var(--color-champagne)] transition-colors flex items-center justify-center"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Welcome to the Vogue Spaces VIP circle!
              </p>
            )}

            <div className="pt-4 space-y-2 text-xs text-gray-300">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[var(--color-gold)]" /> +91 98765 43210 (VIP Desk)
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[var(--color-gold)]" /> design@voguespaces.in
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" /> 402, Luxury Horizon Tower, Bandra West / Cyber City, India
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Sitemap */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Vogue Spaces Interior Studio. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-[var(--color-gold)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--color-gold)] transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-[var(--color-gold)] transition-colors">XML Sitemap</Link>
            <Link href="/admin" className="text-[var(--color-gold)] font-mono hover:underline">Studio Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="hover:text-[var(--color-gold)] transition-all flex items-center gap-1 group">
        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-gold)]" />
        <span>{children}</span>
      </Link>
    </li>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full border border-[var(--color-gold)]/30 bg-black/40 flex items-center justify-center text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black transition-all duration-300 shadow-md"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
