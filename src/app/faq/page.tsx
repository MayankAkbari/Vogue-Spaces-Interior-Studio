"use client";

import React, { useState } from "react";
import { Search, ChevronDown, HelpCircle, MessageCircle, Sparkles } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  category: "General" | "Pricing" | "Process" | "Materials" | "Turnkey";
}

const faqList: FaqItem[] = [
  {
    category: "General",
    q: "What makes Vogue Spaces different from regular interior design firms or local contractors?",
    a: "We operate as a 100% turnkey interior architecture house. Unlike traditional firms that only provide 2D drawings and leave you to coordinate messy contractors, we handle civil engineering, custom furniture factories, acoustic soundproofing, smart lighting automation, and white-glove styling under a single fixed-price contract with a 10-Year Studio Warranty."
  },
  {
    category: "General",
    q: "Which cities in India and abroad do you take up turnkey projects in?",
    a: "Our core design studios and dedicated project execution teams are based in Mumbai, Bengaluru, Delhi NCR, Hyderabad, Pune, and Kolkata. For ultra-luxury villas and farmhouses outside these hubs, we deploy specialized flying squads."
  },
  {
    category: "Pricing",
    q: "How is the pricing determined, and do you guarantee no hidden costs?",
    a: "Pricing is calculated systematically through an itemized Bill of Quantities (BOQ) derived from exact square footage, material selections (e.g. Italian Calacatta vs composite stone), and hardware tiers. Once the BOQ is signed, our contract guarantees absolute price locking with zero hidden cost escalations."
  },
  {
    category: "Pricing",
    q: "What is the minimum budget benchmark to engage Vogue Spaces?",
    a: "To maintain our rigorous Italian craftsmanship standards and bespoke material curation, our turnkey execution engagements start at a benchmark of ₹25 Lakhs for residential apartments and ₹45 Lakhs for independent villas or commercial spaces."
  },
  {
    category: "Process",
    q: "How long does a complete turnkey residential execution take?",
    a: "Typical timelines range from 45 to 60 working days for modular kitchen/bedroom transformations, 60 to 90 days for 3BHK/4BHK residences, and 120 to 180 days for multi-level independent luxury villas."
  },
  {
    category: "Process",
    q: "How do I monitor site progress if I live overseas or have a busy executive schedule?",
    a: "Every patron is assigned a dedicated Project Manager who uploads weekly 4K drone video tours, photographic progress reports, and milestone Gantt charts directly to your private WhatsApp group and client portal."
  },
  {
    category: "Materials",
    q: "What brands and materials do you integrate into your modular cabinetry?",
    a: "We exclusively utilize marine-grade BWR plywood, scratch-resistant Italian acrylic or polyurethane (PU) lacquers, genuine German Blum servo-drive hardware, and monolithic Neolith or Caesarstone quartz tops."
  },
  {
    category: "Materials",
    q: "Are your materials resistant to Indian tropical climate dampness and termites?",
    a: "Yes. Every structural carcass undergoes industrial anti-termite chemical dipping, and kitchen/washroom zones receive a 3-layer epoxy waterproofing membrane backed by our 10-year structural warranty."
  },
  {
    category: "Turnkey",
    q: "Can I live in the apartment while turnkey renovation is underway?",
    a: "For partial room transformations, yes—we install dust-proof containment curtains and HEPA air scrubbers. For full apartment strip-outs and civil re-flooring, we advise temporary relocation for 45-60 days to allow unhindered rapid execution."
  }
];

const categories = ["All", "General", "Pricing", "Process", "Materials", "Turnkey"];

export default function FaqPage() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqList.filter((f) => {
    const matchesCat = selectedCat === "All" || f.category === selectedCat;
    const matchesSearch = f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          f.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="relative overflow-hidden py-12">
      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10 pb-12 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-gold)] block mb-3">
          Knowledge Base
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-wide">
          Frequently Asked <span className="gold-gradient-text">Questions</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-lg max-w-3xl mx-auto mt-4 font-light">
          Clear, uncompromising answers regarding our turnkey architecture, pricing models, and execution warranties.
        </p>

        {/* Search Bar */}
        <div className="mt-10 max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-gold)]" />
          <input
            type="text"
            placeholder="Search questions about pricing, timelines, Vastu, warranties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-black/70 border border-[var(--color-gold)]/40 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-gold)] shadow-xl"
          />
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setSelectedCat(cat); setOpenIndex(null); }}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCat === cat ? "bg-[var(--color-gold)] text-black font-bold shadow-md scale-105" : "bg-black/40 text-gray-300 border border-white/10 hover:border-[var(--color-gold)]/40"
              }`}
            >
              {cat} Questions
            </button>
          ))}
        </div>
      </section>

      {/* Accordion List */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 rounded-3xl liquid-glass border border-[var(--color-gold)]/20">
            <h4 className="font-serif text-lg text-gray-400">No matching inquiries found in our archive.</h4>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl liquid-glass border transition-all overflow-hidden ${
                    isOpen ? "border-[var(--color-gold)] bg-black/80 shadow-[0_10px_30px_rgba(212,175,55,0.15)]" : "border-white/10 hover:border-[var(--color-gold)]/30"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-serif font-bold text-base sm:text-lg text-white flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[var(--color-gold)] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-[var(--color-gold)]/15 font-light">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Bottom Assistance Callout */}
      <section className="mt-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="rounded-3xl liquid-glass p-8 border border-[var(--color-gold)]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-serif text-xl font-bold text-white">Have A Specific Property Inquiry?</h4>
            <p className="text-xs text-gray-400 mt-1">Speak directly with our Turnkey Architects on WhatsApp or book a consultation session.</p>
          </div>
          <button
            onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-champagne)] text-black font-bold text-xs uppercase tracking-wider shrink-0"
          >
            Ask An Architect &rarr;
          </button>
        </div>
      </section>
    </div>
  );
}
