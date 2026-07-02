"use client";

import React, { useState } from "react";
import { Calculator, Sparkles, Check, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

export default function CostEstimatorModal() {
  const [propertyType, setPropertyType] = useState("3bhk");
  const [tier, setTier] = useState("platinum");
  const [automation, setAutomation] = useState(true);
  const [kitchen, setKitchen] = useState(true);
  const [lighting, setLighting] = useState(true);

  // Pricing formula simulation (in INR Lakhs)
  const basePrices: Record<string, number> = {
    "2bhk": 18,
    "3bhk": 28,
    "4bhk": 45,
    "villa": 75,
    "office": 35,
  };

  const tierMultipliers: Record<string, number> = {
    "gold": 1.0,
    "platinum": 1.45,
    "bespoke": 2.1,
  };

  const base = basePrices[propertyType] || 28;
  const multiplier = tierMultipliers[tier] || 1.45;
  let estimatedTotal = Math.round(base * multiplier);
  if (automation) estimatedTotal += 4;
  if (kitchen) estimatedTotal += 6;
  if (lighting) estimatedTotal += 5;

  return (
    <div className="w-full rounded-3xl liquid-glass p-6 sm:p-10 border border-[var(--color-gold)]/35 shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-[var(--color-gold)]/20">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-gold)] flex items-center gap-1.5 mb-1">
            <Calculator className="w-4 h-4" /> Instant Luxury Investment Estimator
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Estimate Your Bespoke Interior Investment
          </h3>
        </div>
        <div className="hidden md:block text-right">
          <span className="text-xs text-gray-400 block">Estimated Turnkey Range</span>
          <span className="font-serif text-3xl font-extrabold gold-gradient-text">
            ₹{estimatedTotal - 3}L – ₹{estimatedTotal + 4} Lakhs
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Step 1: Property Type Selection */}
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-[var(--color-champagne)]">
            1. Select Space Dimension & Type
          </label>
          <div className="grid grid-cols-1 gap-2.5">
            {[
              { id: "2bhk", label: "2BHK Luxury Apartment (~1,100 sq.ft)" },
              { id: "3bhk", label: "3BHK Premium Residence (~1,800 sq.ft)" },
              { id: "4bhk", label: "4BHK / Penthouse Duplex (~3,200 sq.ft)" },
              { id: "villa", label: "Bespoke Royal Villa / Bungalow (~5,000+ sq.ft)" },
              { id: "office", label: "Executive Corporate Office Suite" },
            ].map((pt) => (
              <button
                key={pt.id}
                type="button"
                onClick={() => setPropertyType(pt.id)}
                className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between border ${
                  propertyType === pt.id
                    ? "bg-[var(--color-gold)]/20 border-[var(--color-gold)] text-white shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                    : "bg-black/50 border-white/10 text-gray-400 hover:border-white/30"
                }`}
              >
                <span>{pt.label}</span>
                {propertyType === pt.id && <Check className="w-4 h-4 text-[var(--color-gold)] shrink-0" />}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Tier Selection */}
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-[var(--color-champagne)]">
            2. Choose Luxury Craftsmanship Tier
          </label>
          <div className="grid grid-cols-1 gap-3">
            {[
              { id: "gold", name: "Gold Elegance", desc: "Premium designer laminates, custom lighting, ergonomic modular kitchen." },
              { id: "platinum", name: "Platinum Royal", desc: "Italian marble veneers, brass inlay work, luxury German hardware, acoustic wood." },
              { id: "bespoke", name: "Bespoke Haute Couture", desc: "Hand-carved solid teak, imported onyx stone, private cinema soundproofing, custom automation." },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTier(t.id)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  tier === t.id
                    ? "bg-[var(--color-gold)]/25 border-[var(--color-gold)] shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                    : "bg-black/50 border-white/10 hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-sm sm:text-base text-white">{t.name}</span>
                  {tier === t.id && <Check className="w-4 h-4 text-[var(--color-gold)]" />}
                </div>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">{t.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Add-Ons & Summary Box */}
        <div className="space-y-5 rounded-2xl bg-black/60 p-6 border border-[var(--color-gold)]/25 flex flex-col justify-between">
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-[var(--color-champagne)]">
              3. Bespoke Luxury Add-Ons
            </label>
            <div className="space-y-2.5">
              <label className="flex items-center gap-3 text-xs sm:text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={automation}
                  onChange={(e) => setAutomation(e.target.checked)}
                  className="w-4 h-4 rounded accent-[var(--color-gold)]"
                />
                <span>Smart Home Voice & Mood Lighting Automation (+₹4L)</span>
              </label>
              <label className="flex items-center gap-3 text-xs sm:text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={kitchen}
                  onChange={(e) => setKitchen(e.target.checked)}
                  className="w-4 h-4 rounded accent-[var(--color-gold)]"
                />
                <span>Haute German Modular Island Kitchen (+₹6L)</span>
              </label>
              <label className="flex items-center gap-3 text-xs sm:text-sm text-gray-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={lighting}
                  onChange={(e) => setLighting(e.target.checked)}
                  className="w-4 h-4 rounded accent-[var(--color-gold)]"
                />
                <span>Architectural Chandelier & Art Curation (+₹5L)</span>
              </label>
            </div>

            <div className="pt-4 border-t border-[var(--color-gold)]/20 md:hidden">
              <span className="text-xs text-gray-400 block">Estimated Turnkey Investment</span>
              <span className="font-serif text-2xl font-extrabold gold-gradient-text">
                ₹{estimatedTotal - 3}L – ₹{estimatedTotal + 4} Lakhs
              </span>
            </div>
          </div>

          <div className="pt-4 space-y-3 border-t border-white/10">
            <button
              onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-champagne)] to-[var(--color-gold)] text-black font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 fill-black" /> Lock This Estimate & Book Consult
            </button>
            <p className="text-[11px] text-gray-500 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-gold)]" /> Includes 3D VR renders & structural guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
