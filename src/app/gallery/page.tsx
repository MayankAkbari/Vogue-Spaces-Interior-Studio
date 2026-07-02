"use client";

import React, { useState } from "react";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import VirtualTourViewer from "@/components/ui/VirtualTourViewer";
import { Sparkles, Play, Eye, Video, Layers, Camera } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function GalleryPage() {
  const [activeSubTab, setActiveSubTab] = useState<"beforeAfter" | "virtualTours" | "reels">("beforeAfter");

  const reelsData = [
    {
      title: "6,800 sq.ft Duplex Reveal Reel",
      views: "142K Views",
      duration: "0:45",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Installing Motorized Blum Kitchen Island",
      views: "89K Views",
      duration: "0:30",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Fluted Teak & Brass Staircase Acoustics",
      views: "210K Views",
      duration: "0:58",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Presidential Walk-In Leather Wardrobe Tour",
      views: "115K Views",
      duration: "0:40",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="relative overflow-hidden py-12">
      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10 pb-12 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-gold)] block mb-3">
          Sensory Showcase
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-wide">
          Interactive <span className="gold-gradient-text">Visual Gallery</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-lg max-w-3xl mx-auto mt-4 font-light">
          Experience our spatial engineering through interactive Before & After comparisons, 360° VR room simulators, and cinematic design reels.
        </p>

        {/* Navigation Selector */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
          <button
            onClick={() => setActiveSubTab("beforeAfter")}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
              activeSubTab === "beforeAfter"
                ? "bg-[var(--color-gold)] text-black border-[var(--color-gold)] shadow-[0_0_20px_rgba(212,175,55,0.6)] scale-105"
                : "bg-black/50 text-gray-300 border-white/10 hover:border-[var(--color-gold)]/40"
            }`}
          >
            <Layers className="w-4 h-4" /> Before vs After Transformations
          </button>

          <button
            onClick={() => setActiveSubTab("virtualTours")}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
              activeSubTab === "virtualTours"
                ? "bg-[var(--color-gold)] text-black border-[var(--color-gold)] shadow-[0_0_20px_rgba(212,175,55,0.6)] scale-105"
                : "bg-black/50 text-gray-300 border-white/10 hover:border-[var(--color-gold)]/40"
            }`}
          >
            <Eye className="w-4 h-4" /> 360° VR Room Walkthroughs
          </button>

          <button
            onClick={() => setActiveSubTab("reels")}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
              activeSubTab === "reels"
                ? "bg-[var(--color-gold)] text-black border-[var(--color-gold)] shadow-[0_0_20px_rgba(212,175,55,0.6)] scale-105"
                : "bg-black/50 text-gray-300 border-white/10 hover:border-[var(--color-gold)]/40"
            }`}
          >
            <Video className="w-4 h-4" /> Architectural Reels & Shorts
          </button>
        </div>
      </section>

      {/* Dynamic Content Panel */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {activeSubTab === "beforeAfter" && (
          <div className="space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">Slide To Reveal Metamorphosis</h3>
              <p className="text-xs sm:text-sm text-gray-400">Drag the central brass handle across raw masonry shells to witness our finished turnkey luxury execution.</p>
            </div>
            <BeforeAfterSlider />
          </div>
        )}

        {activeSubTab === "virtualTours" && (
          <div className="space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">Real-Time Spatial Simulation</h3>
              <p className="text-xs sm:text-sm text-gray-400">Choose a suite below to simulate standing inside our unbuilt architectural blueprints.</p>
            </div>
            <VirtualTourViewer />
          </div>
        )}

        {activeSubTab === "reels" && (
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-2">
                <InstagramIcon className="w-6 h-6 text-pink-400" /> Viral Design Reels Showcase
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">Bite-sized cinematic walkthroughs of our most celebrated architectural features.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reelsData.map((reel, idx) => (
                <div key={idx} className="group relative rounded-3xl overflow-hidden border border-[var(--color-gold)]/30 h-[420px] bg-black/80 shadow-2xl flex flex-col justify-end">
                  <img src={reel.image} alt={reel.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-gold)]/90 text-black flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.8)] group-hover:scale-125 transition-transform">
                      <Play className="w-6 h-6 fill-black ml-0.5" />
                    </div>
                  </div>

                  <div className="relative z-10 p-5 space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-champagne)]">
                      <span>{reel.views}</span>
                      <span>{reel.duration}</span>
                    </div>
                    <h4 className="font-serif font-bold text-base text-white group-hover:text-[var(--color-gold)] transition-colors">
                      {reel.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
