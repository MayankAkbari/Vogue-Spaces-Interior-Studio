"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioProjects } from "../page";
import { 
  ArrowLeft, MapPin, Sparkles, CheckCircle2, Play, Award, 
  Layers, ShieldCheck, Quote, ArrowRight 
} from "lucide-react";

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = portfolioProjects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="font-serif text-3xl font-bold text-white mb-4">Case Study Not Found</h2>
        <Link href="/portfolio" className="px-6 py-3 rounded-full bg-[var(--color-gold)] text-black font-bold text-sm">
          Return To Portfolio
        </Link>
      </div>
    );
  }

  const relatedProjects = portfolioProjects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="relative overflow-hidden py-12">
      {/* Top Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-champagne)] hover:text-[var(--color-gold)] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Master Portfolio
        </Link>
      </div>

      {/* Hero Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-[var(--color-gold)]/40 shadow-[0_30px_90px_rgba(0,0,0,0.95)]">
          <img src={project.image} alt={project.title} className="w-full h-[450px] sm:h-[600px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/40 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 max-w-4xl space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[var(--color-gold)] text-black font-mono text-xs font-bold uppercase">
              {project.category} Showcase
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-mono text-[var(--color-champagne)] pt-2">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[var(--color-gold)]" /> {project.location}</span>
              <span>Floor Plate: {project.size}</span>
              <span>Execution Timeline: {project.duration}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Details Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Story */}
          <div className="lg:col-span-8 space-y-10">
            {/* Client Brief */}
            <div className="rounded-3xl liquid-glass p-8 border border-[var(--color-gold)]/25 space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-gold)]">The Vision</span>
              <h3 className="font-serif text-2xl font-bold text-white">Client Architectural Brief</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{project.brief}</p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-3xl liquid-glass p-8 border border-red-500/30 bg-gradient-to-b from-red-500/5 to-transparent space-y-3">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-red-400">Architectural Challenge</span>
                <h4 className="font-serif text-xl font-bold text-white">Structural Constraints</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{project.challenges}</p>
              </div>

              <div className="rounded-3xl liquid-glass p-8 border border-[var(--color-gold)]/40 bg-gradient-to-b from-[var(--color-gold)]/10 to-transparent space-y-3">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-gold)]">Vogue Innovation</span>
                <h4 className="font-serif text-xl font-bold text-white">Turnkey Solution</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Mood Board & 3D VR Renders Gallery */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-gold)]">Mood Board & Renders</span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-1">Photorealistic 3D Renders vs Final Execution</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.renders.map((rnd, idx) => (
                  <div key={idx} className="relative rounded-2xl overflow-hidden border border-[var(--color-gold)]/30 group">
                    <img src={rnd} alt="3D Render" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-[var(--color-champagne)] border border-[var(--color-gold)]/40">
                      {idx === 0 ? "3D VR Photorealistic Blueprint" : "Finished Turnkey Reality"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Specifications */}
          <div className="lg:col-span-4 space-y-8">
            {/* Materials Used Box */}
            <div className="rounded-3xl liquid-glass p-8 border border-[var(--color-gold)]/30 space-y-5">
              <h4 className="font-serif text-xl font-bold text-white border-b border-[var(--color-gold)]/20 pb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[var(--color-gold)]" /> Materials & Palette
              </h4>
              <ul className="space-y-3">
                {project.materials.map((mat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Video Walkthrough Box */}
            {project.hasVideo && (
              <div className="rounded-3xl liquid-glass p-8 border border-[var(--color-gold)]/30 text-center space-y-4 bg-gradient-to-b from-[var(--color-gold)]/10 to-transparent">
                <div className="w-16 h-16 rounded-full bg-[var(--color-gold)] text-black flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(212,175,55,0.8)] cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-black ml-1" />
                </div>
                <h4 className="font-serif font-bold text-lg text-white">Cinematic 4K Walkthrough</h4>
                <p className="text-xs text-gray-300">Experience lighting acoustics and spatial circulation in dynamic video.</p>
              </div>
            )}

            {/* CTA Box */}
            <div className="rounded-3xl liquid-glass p-8 border border-[var(--color-gold)]/40 text-center space-y-4">
              <h4 className="font-serif font-bold text-xl text-white">Desire A Similar Masterpiece?</h4>
              <p className="text-xs text-gray-300">Schedule a 1-on-1 space consultation to replicate this architectural excellence for your property.</p>
              <button
                onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
                className="w-full py-3.5 rounded-xl bg-[var(--color-gold)] text-black font-bold text-xs uppercase tracking-wider hover:bg-[var(--color-champagne)] transition-colors"
              >
                Book Consultation Session
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--color-gold)]/20 pt-16">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-8">Related Masterworks</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProjects.map((rel) => (
            <Link key={rel.slug} href={`/portfolio/${rel.slug}`} className="group rounded-2xl liquid-glass overflow-hidden border border-[var(--color-gold)]/20 hover:border-[var(--color-gold)]/60 transition-all">
              <img src={rel.image} alt={rel.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-6">
                <span className="text-[10px] font-mono uppercase text-[var(--color-gold)] block mb-1">{rel.category}</span>
                <h4 className="font-serif font-bold text-lg text-white group-hover:text-[var(--color-gold)] transition-colors">{rel.title}</h4>
                <span className="text-xs text-gray-400 block mt-2">&rarr; View Case Study</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
