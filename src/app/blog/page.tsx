"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Calendar, User, ArrowRight, Sparkles, Tag } from "lucide-react";

export interface BlogPost {
  slug: string;
  title: string;
  category: "Luxury Trends" | "Vastu Shastra" | "Materials" | "Smart Automation";
  date: string;
  author: string;
  authorRole: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: {
    heading: string;
    body: string;
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "top-7-italian-marble-trends-2026",
    title: "The Top 7 Italian Marble & Rare Stone Trends For Ultra-Luxury Penthouses in 2026",
    category: "Materials",
    date: "July 1, 2026",
    author: "Elena Rossi",
    authorRole: "Creative Director — Material & Color",
    readTime: "6 Min Read",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Why discerning Indian homeowners are shifting from standard white Carrara to bold, book-matched Patagonia granite and Calacatta Gold monolithic feature walls.",
    content: [
      {
        heading: "1. The Rise of Book-Matched Patagonia Granite",
        body: "Gone are the days of sterile white marble floors throughout living spaces. In 2026, luxury residences in Mumbai and Bengaluru are embracing book-matched slabs of translucent Patagonia quartz and Brazilian quartzite that can be backlit with warm 2700K LEDs."
      },
      {
        heading: "2. Fluted Stone & Leathered Finish Surfaces",
        body: "Instead of high gloss polishes that create unwanted glare and slippage, tactile leathered finishes and CNC-milled fluted stone profiles are dominating double-height entryways and fireplace backdrops."
      },
      {
        heading: "3. Sustainable Quarrying & Sealing Technology",
        body: "Modern Italian fluoropolymer sealants now render porous marbles 100% wine and turmeric resistant without altering their organic mineral luster."
      }
    ]
  },
  {
    slug: "vastu-shastra-modern-spatial-harmony",
    title: "Harmonizing Ancient Vastu Shastra With Contemporary Minimalist Architecture",
    category: "Vastu Shastra",
    date: "June 24, 2026",
    author: "Ar. Raghavendra Singhania",
    authorRole: "Founder & Principal Architect",
    readTime: "8 Min Read",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    excerpt: "How to integrate North-East water elements and South-West master bedroom placements without compromising sleek European spatial circulation.",
    content: [
      {
        heading: "Balancing Energy Without Compromising Aesthetics",
        body: "Many luxury homeowners fear that strict Vastu compliance will force them into clunky doorways or awkward room partitions. At Vogue Spaces, we integrate Vastu geometry at the raw masonry phase."
      },
      {
        heading: "The Brahmasthan (Central Core) Principle",
        body: "We keep the structural center of the home completely open or illuminated by custom double-height skylights, ensuring unhindered airflow and daylight propagation."
      }
    ]
  },
  {
    slug: "invisible-smart-home-automation-luxury",
    title: "Invisible Tech: How To Integrate Smart Automation Without Wall Clutter",
    category: "Smart Automation",
    date: "June 15, 2026",
    author: "Kabir Malhotra",
    authorRole: "Head of Turnkey Engineering",
    readTime: "5 Min Read",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Exploring KNX and Lutron systems hidden behind fluted walnut panels and motorized architectural acoustic ceiling clouds.",
    content: [
      {
        heading: "Eliminating Switchboard Eye-Sores",
        body: "True luxury is effortless and invisible. We replace plastic switch arrays with flush-mounted solid brass keypads and AI voice presence sensors concealed within architectural shadow gaps."
      }
    ]
  }
];

const categories = ["All", "Materials", "Vastu Shastra", "Smart Automation"];

export default function BlogPage() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat = selectedCat === "All" || post.category === selectedCat;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="relative overflow-hidden py-12">
      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10 pb-12 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-gold)] block mb-3">
          Design Intelligence
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-wide">
          Architectural <span className="gold-gradient-text">Journal</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-lg max-w-3xl mx-auto mt-4 font-light">
          Editorial perspectives on haute couture interiors, rare material curation, and smart engineering.
        </p>

        {/* Search & Filter Bar */}
        <div className="mt-10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search editorial insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-black/60 border border-[var(--color-gold)]/30 text-xs text-white"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCat === cat ? "bg-[var(--color-gold)] text-black font-bold" : "bg-black/40 text-gray-300 border border-white/10 hover:border-[var(--color-gold)]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-3xl liquid-glass overflow-hidden border border-[var(--color-gold)]/25 hover:border-[var(--color-gold)]/70 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-[var(--color-gold)] border border-[var(--color-gold)]/30">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[var(--color-gold)] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[var(--color-gold)]/10 flex items-center justify-between text-xs font-semibold text-[var(--color-gold)]">
                <span>Read Full Journal Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
