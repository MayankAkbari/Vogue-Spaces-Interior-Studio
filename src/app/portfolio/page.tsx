"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, LayoutGrid, Columns, Sparkles, Play, ArrowUpRight, 
  MapPin, CheckCircle2, SlidersHorizontal 
} from "lucide-react";

export interface ProjectItem {
  slug: string;
  title: string;
  category: "Apartments" | "Villas" | "Offices" | "Commercial" | "Kitchens" | "Bedrooms" | "Living Rooms";
  location: string;
  size: string;
  duration: string;
  image: string;
  hasVideo: boolean;
  brief: string;
  challenges: string;
  solution: string;
  materials: string[];
  renders: string[];
}

export const portfolioProjects: ProjectItem[] = [
  {
    slug: "sea-facing-duplex-penthouse-bandra",
    title: "Sea-Facing Duplex Penthouse",
    category: "Apartments",
    location: "Bandra West, Mumbai",
    size: "6,800 sq.ft",
    duration: "90 Days Turnkey",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    hasVideo: true,
    brief: "A high-profile industrialist requested a contemporary residence balancing Italian minimalism with warm acoustic hospitality for hosting 50+ guests.",
    challenges: "Double-height sea breeze wind pressure required specialized German acoustic soundproofing and heavy-duty structural mullions.",
    solution: "Engineered double-glazed thermal windows with motorized drapery, accompanied by a custom fluted brass and Calacatta marble staircase.",
    materials: ["Imported Calacatta Gold Marble", "Custom Fluted Teak Wood", "Brushed Brass Accents", "Saddle Leather Upholstery"],
    renders: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    slug: "royal-palms-bespoke-villa-bengaluru",
    title: "Royal Palms Bespoke Mansion",
    category: "Villas",
    location: "Whitefield, Bengaluru",
    size: "11,500 sq.ft",
    duration: "140 Days Turnkey",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    hasVideo: true,
    brief: "Create a serene indoor-outdoor architectural sanctuary featuring private Zen courtyard water bodies and an obsidian show kitchen.",
    challenges: "High rainfall humidity required zero-dampness epoxy sub-flooring and specialized outdoor teak treatments.",
    solution: "Integrated automated louvers over the courtyard pool and deployed monolithic dark quartz across the culinary island.",
    materials: ["Black Onyx Quartz Stone", "Treated Burmese Teak", "Venetian Plaster", "Automated Glass Louvers"],
    renders: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    slug: "apex-global-venture-capital-hq",
    title: "Apex Global Venture Capital HQ",
    category: "Offices",
    location: "Cyber City, Gurgaon",
    size: "8,500 sq.ft",
    duration: "60 Days Turnkey",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    hasVideo: false,
    brief: "Design an ultra-prestigious financial sanctuary with absolute sound privacy for international merger negotiations.",
    challenges: "Strict municipal HVAC regulations inside the commercial glass tower.",
    solution: "Installed STC-52 double acoustic glass boardroom walls with smart electrochromic frosting at the touch of a button.",
    materials: ["Electrochromic Smart Glass", "Acoustic Walnut Ceiling Clouds", "Italian Leather Task Seating", "Brush Nickel Hardware"],
    renders: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    slug: "haute-obsidian-island-kitchen-suite",
    title: "Haute Obsidian Island Culinary Studio",
    category: "Kitchens",
    location: "Worli Sea Face, Mumbai",
    size: "850 sq.ft",
    duration: "30 Days Turnkey",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
    hasVideo: true,
    brief: "Transform a traditional kitchen into a minimalist showpiece suitable for live cooking demonstrations and wine hosting.",
    challenges: "Concealing heavy Indian cooking spice vapors without visual clutter.",
    solution: "Integrated a motorized downdraft exhaust hood directly into the 12-foot quartz island.",
    materials: ["Seamless Neolith Quartz", "German Blum Servo-Drive Hardware", "Smoked Glass Pantry Doors", "Matte Black Faucets"],
    renders: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    slug: "aurora-presidential-master-suite",
    title: "Aurora Presidential Master Sanctuary",
    category: "Bedrooms",
    location: "Jubilee Hills, Hyderabad",
    size: "1,400 sq.ft",
    duration: "45 Days Turnkey",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200&auto=format&fit=crop",
    hasVideo: false,
    brief: "Build a 5-star master bedroom suite with a walk-in bronze glass dressing arena and circadian mood automation.",
    challenges: "Maximizing storage capacity while preserving airy spaciousness.",
    solution: "Designed floating bedside consoles with hidden wireless chargers and custom saddle leather wall panels.",
    materials: ["Italian Saddle Leather", "Bronze Tinted Glass", "Custom Velvet Headboard", "Warm Brass Trim"],
    renders: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    slug: "velvet-horizon-living-lounge",
    title: "Velvet Horizon Living & Cocktail Lounge",
    category: "Living Rooms",
    location: "Alipore, Kolkata",
    size: "2,200 sq.ft",
    duration: "50 Days Turnkey",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    hasVideo: true,
    brief: "Design a dramatic living lounge centered around an architectural brass fireplace and bespoke art gallery wall.",
    challenges: "Balancing high ceilings with cozy acoustics.",
    solution: "Installed deep plush velvet sectionals and layered silk rugs over Italian Botticino marble.",
    materials: ["Botticino Marble", "Custom Brass Fireplace", "Hand-Tufted Silk Rugs", "Dimmable Spotlights"],
    renders: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
    ]
  }
];

const categories = ["All", "Apartments", "Villas", "Offices", "Commercial", "Kitchens", "Bedrooms", "Living Rooms"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [layoutMode, setLayoutMode] = useState<"grid" | "masonry">("grid");

  const filteredProjects = portfolioProjects.filter((prj) => {
    const matchesCat = selectedCategory === "All" || prj.category === selectedCategory;
    const matchesSearch = prj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prj.brief.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="relative overflow-hidden py-12">
      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10 pb-12 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-gold)] block mb-3">
          Curated Portfolio
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-wide">
          Architectural <span className="gold-gradient-text">Masterworks</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-lg max-w-3xl mx-auto mt-4 font-light">
          Explore our completed turnkey residences, royal villas, and corporate sanctuaries across India.
        </p>

        {/* Search & Layout Control Bar */}
        <div className="mt-10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by city, project, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-black/60 border border-[var(--color-gold)]/30 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-gold)]"
            />
          </div>

          {/* Layout Toggle */}
          <div className="flex items-center gap-2 bg-black/60 p-1.5 rounded-2xl border border-[var(--color-gold)]/20">
            <button
              onClick={() => setLayoutMode("grid")}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                layoutMode === "grid" ? "bg-[var(--color-gold)] text-black font-bold" : "text-gray-400 hover:text-white"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" /> Grid View
            </button>
            <button
              onClick={() => setLayoutMode("masonry")}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                layoutMode === "masonry" ? "bg-[var(--color-gold)] text-black font-bold" : "text-gray-400 hover:text-white"
              }`}
            >
              <Columns className="w-3.5 h-3.5" /> Masonry Layout
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-[var(--color-gold)] text-black shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                  : "bg-black/40 text-gray-300 border border-white/10 hover:border-[var(--color-gold)]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid / Masonry Showcase */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 rounded-3xl liquid-glass border border-[var(--color-gold)]/20">
            <h4 className="font-serif text-xl text-gray-400">No masterworks matched your filter criteria.</h4>
            <button onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }} className="mt-4 px-6 py-2 rounded-xl bg-[var(--color-gold)] text-black text-xs font-bold">
              Reset Filters
            </button>
          </div>
        ) : (
          <div className={`grid gap-8 ${
            layoutMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
          }`}>
            {filteredProjects.map((prj) => (
              <Link
                key={prj.slug}
                href={`/portfolio/${prj.slug}`}
                className={`group rounded-3xl liquid-glass overflow-hidden border border-[var(--color-gold)]/25 hover:border-[var(--color-gold)]/70 transition-all duration-500 flex flex-col justify-between ${
                  layoutMode === "masonry" && prj.slug.includes("penthouse") ? "md:col-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${layoutMode === "masonry" && prj.slug.includes("penthouse") ? "h-80 sm:h-[420px]" : "h-64 sm:h-72"}`}>
                  <img
                    src={prj.image}
                    alt={prj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent" />
                  
                  {/* Category & Video Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[var(--color-gold)]/40 text-[10px] font-mono uppercase text-[var(--color-champagne)]">
                      {prj.category}
                    </span>
                    {prj.hasVideo && (
                      <span className="px-3 py-1 rounded-full bg-[var(--color-gold)] text-black text-[10px] font-bold flex items-center gap-1 shadow-md">
                        <Play className="w-3 h-3 fill-black" /> 4K Walkthrough
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-2">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[var(--color-gold)]" /> {prj.location}</span>
                      <span>{prj.size}</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[var(--color-gold)] transition-colors">
                      {prj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 mt-2 line-clamp-2 leading-relaxed font-light">
                      {prj.brief}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--color-gold)]/15 flex items-center justify-between text-xs font-semibold text-[var(--color-gold)]">
                    <span>Inspect Case Study & Blueprint</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
