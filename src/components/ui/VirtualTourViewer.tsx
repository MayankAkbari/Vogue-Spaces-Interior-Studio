"use client";

import React, { useState } from "react";
import { Eye, Sun, Moon, Sparkles, Compass, Maximize2, Info } from "lucide-react";

interface RoomPreset {
  id: string;
  name: string;
  category: string;
  image: string;
  hotspots: { x: number; y: number; title: string; desc: string }[];
}

const roomPresets: RoomPreset[] = [
  {
    id: "lounge",
    name: "Presidential Penthouse Lounge",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop",
    hotspots: [
      { x: 30, y: 45, title: "Custom Fluted Teak Wall", desc: "Acoustic wood paneling with hidden LED brass trim." },
      { x: 65, y: 60, title: "Imported Calacatta Marble Table", desc: "Handcrafted center table with brushed gold base." },
      { x: 80, y: 30, title: "Venetian Chandelier", desc: "Dimmable 2700K ambient mood lighting array." }
    ]
  },
  {
    id: "kitchen",
    name: "Haute Obsidian Island Kitchen",
    category: "Modular Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1400&auto=format&fit=crop",
    hotspots: [
      { x: 40, y: 55, title: "Seamless Quartz Island", desc: "Heat-resistant monolithic countertop with built-in induction." },
      { x: 75, y: 40, title: "Motorized Tall Units", desc: "Soft-close German Blum hinges with integrated climate storage." }
    ]
  },
  {
    id: "suite",
    name: "Royal Master Sanctuary",
    category: "Bedroom Suite",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1400&auto=format&fit=crop",
    hotspots: [
      { x: 45, y: 50, title: "Upholstered Leather Headboard", desc: "Custom saddle leather stitching with reading sconces." },
      { x: 20, y: 65, title: "Walk-in Glass Wardrobe", desc: "Bronze tinted glass sliding doors with automatic wardrobe lighting." }
    ]
  }
];

export default function VirtualTourViewer() {
  const [activePreset, setActivePreset] = useState<RoomPreset>(roomPresets[0]);
  const [lightingMood, setLightingMood] = useState<"day" | "gold" | "night">("gold");
  const [activeHotspot, setActiveHotspot] = useState<{ title: string; desc: string } | null>(null);

  const filterStyles = {
    day: "brightness-105 contrast-100 saturate-100",
    gold: "brightness-95 contrast-110 sepia-[0.25] hue-rotate-[-10deg]",
    night: "brightness-75 contrast-125 saturate-110 hue-rotate-[20deg]"
  };

  return (
    <div className="w-full rounded-3xl liquid-glass p-6 sm:p-8 border border-[var(--color-gold)]/35 shadow-[0_20px_70px_rgba(0,0,0,0.9)]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-gold)] flex items-center gap-1.5 mb-1">
            <Compass className="w-4 h-4 animate-spin" style={{ animationDuration: "12s" }} /> Interactive 360° Space Experience
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Interactive Room Walkthrough Simulator
          </h3>
        </div>

        {/* Room Presets Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {roomPresets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => {
                setActivePreset(preset);
                setActiveHotspot(null);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                activePreset.id === preset.id
                  ? "bg-[var(--color-gold)] text-black border-[var(--color-gold)] shadow-md"
                  : "bg-black/50 text-gray-300 border-white/10 hover:border-[var(--color-gold)]/40"
              }`}
            >
              {preset.category}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative w-full h-[420px] sm:h-[540px] rounded-2xl overflow-hidden border border-[var(--color-gold)]/25 shadow-2xl group bg-black">
        {/* Background Room Image with Lighting Filters */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-700 transform scale-105 group-hover:scale-100 ${filterStyles[lightingMood]}`}
          style={{ backgroundImage: `url('${activePreset.image}')` }}
        />

        {/* Top Control Bar overlay */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <div className="px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-[var(--color-gold)]/30 text-xs text-white font-serif tracking-wide pointer-events-auto">
            Viewing: <span className="text-[var(--color-gold)] font-bold">{activePreset.name}</span>
          </div>

          {/* Lighting Mood Controls */}
          <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md p-1.5 rounded-full border border-white/15 pointer-events-auto shadow-lg">
            <button
              onClick={() => setLightingMood("day")}
              className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 transition-all ${
                lightingMood === "day" ? "bg-white text-black font-bold" : "text-gray-300 hover:text-white"
              }`}
            >
              <Sun className="w-3.5 h-3.5" /> Daylight
            </button>
            <button
              onClick={() => setLightingMood("gold")}
              className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 transition-all ${
                lightingMood === "gold" ? "bg-[var(--color-gold)] text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.6)]" : "text-gray-300 hover:text-white"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" /> Golden Sunset
            </button>
            <button
              onClick={() => setLightingMood("night")}
              className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 transition-all ${
                lightingMood === "night" ? "bg-indigo-600 text-white font-bold" : "text-gray-300 hover:text-white"
              }`}
            >
              <Moon className="w-3.5 h-3.5" /> Midnight Glow
            </button>
          </div>
        </div>

        {/* Hotspots */}
        {activePreset.hotspots.map((hs, idx) => (
          <div
            key={idx}
            style={{ top: `${hs.y}%`, left: `${hs.x}%` }}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
          >
            <button
              onClick={() => setActiveHotspot(activeHotspot?.title === hs.title ? null : hs)}
              className="relative group/btn w-10 h-10 rounded-full bg-black/80 border-2 border-[var(--color-gold)] flex items-center justify-center text-[var(--color-gold)] shadow-[0_0_20px_rgba(212,175,55,0.8)] hover:scale-125 transition-transform"
            >
              <span className="absolute -inset-1 rounded-full bg-[var(--color-gold)]/30 animate-ping pointer-events-none" />
              <Info className="w-5 h-5" />
            </button>

            {/* Hotspot Popup Card */}
            {activeHotspot?.title === hs.title && (
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 p-4 rounded-2xl liquid-glass border border-[var(--color-gold)]/50 shadow-2xl text-left z-30 animate-fadeIn">
                <h5 className="font-serif font-bold text-sm text-[var(--color-gold)]">{hs.title}</h5>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">{hs.desc}</p>
              </div>
            )}
          </div>
        ))}

        {/* Bottom instructions */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-[var(--color-gold)]/20 text-xs text-gray-300 text-center font-mono shadow-md">
          Click glowing <span className="text-[var(--color-gold)] font-bold">i</span> badges to inspect luxury material specifications
        </div>
      </div>
    </div>
  );
}
