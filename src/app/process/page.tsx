"use client";

import React, { useState } from "react";
import { 
  Sparkles, Compass, CheckCircle2, ShieldCheck, Layers, 
  Clock, ArrowRight, Award, FileCheck, Wrench, Gift 
} from "lucide-react";

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      step: "01",
      title: "VIP Consultation & Discovery",
      duration: "Days 1 – 5",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      overview: "We sit down with your family or executive board for an in-depth spatial assessment. We analyze architectural layouts, lifestyle habits, natural light angles, and investment budgets.",
      milestones: [
        "In-depth lifestyle and aesthetic discovery questionnaire",
        "Site measurement & structural beam laser inspection",
        "Initial mood board direction & material affinity test",
        "Clear estimation range & design agreement sign-off"
      ]
    },
    {
      step: "02",
      title: "Concept Development & Mood Boards",
      duration: "Days 6 – 14",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      overview: "Translating discovery into a tangible visual identity. Our Principal Designer curates exact Italian marble samples, fabric swatches, wood finishes, and color palettes.",
      milestones: [
        "Curated material tray presentation (Marble, Veneer, Brass)",
        "Color psychology zoning across living and sleeping quarters",
        "Preliminary lighting atmosphere selection (Warm 2700K vs Daylight)",
        "Signature focal feature design concept (Custom bar / Fireplace)"
      ]
    },
    {
      step: "03",
      title: "Spatial Planning & Engineering BOQ",
      duration: "Days 15 – 25",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop",
      overview: "Engineering the invisible framework. Our MEP division prepares exact structural drawings for electrical conduits, HVAC ducting, plumbing lines, and furniture circulation pathways.",
      milestones: [
        "2D CAD furniture layout with ergonomic movement clearances",
        "MEP electrical, HVAC AC ducting, and home automation schematics",
        "Fixed, itemized Bill of Quantities (BOQ) down to individual hinges",
        "Vastu Shastra harmony compliance audit"
      ]
    },
    {
      step: "04",
      title: "Photorealistic 3D VR Visualization",
      duration: "Days 26 – 38",
      icon: FileCheck,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      overview: "Experience your future home before construction begins. We generate cinematic 4K renders showing accurate morning sunshine, night ambient glows, and true textures.",
      milestones: [
        "High-definition 4K 3D renders for every major room",
        "Interactive virtual walkthrough review session",
        "Material reflection & lighting shadow verification",
        "Final design freeze sign-off with client approval stamp"
      ]
    },
    {
      step: "05",
      title: "Turnkey Site Execution & Carpentry",
      duration: "Days 39 – 75",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
      overview: "Our master craftsmen take over site execution. Civil modifications, electrical rewiring, false ceilings, and factory woodwork are executed simultaneously under QA monitoring.",
      milestones: [
        "Civil masonry, flooring leveling, and acoustic soundproofing",
        "Concealed electrical wiring & German plumbing fittings installation",
        "Precision factory carpentry assembly (Kitchens & Wardrobes)",
        "Weekly drone video & photographic site reports delivered on WhatsApp"
      ]
    },
    {
      step: "06",
      title: "30-Point Quality Check Audit",
      duration: "Days 76 – 82",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
      overview: "Before you step inside, our Quality Control Engineers subject the property to a rigorous 30-point audit verifying hinge alignment, paint smoothness, and plumbing water pressure.",
      milestones: [
        "Laser level check on cabinetry, flooring, and false ceilings",
        "Thermal load and water pressure leak verification test",
        "Paint finish smoothness and veneer lamination inspection",
        "Professional industrial HEPA sanitization and deep clean"
      ]
    },
    {
      step: "07",
      title: "White-Glove Handover & Celebration",
      duration: "Day 85+",
      icon: Gift,
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      overview: "The grand reveal. We stage your home with designer draperies, curated artwork, indoor botanicals, and handpicked fragrances for your official housewarming celebration.",
      milestones: [
        "Curated artwork hanging & luxury drapery steaming",
        "Formal presentation of physical 10-Year Studio Warranty Certificate",
        "Smart home automation voice control onboarding for your family",
        "Celebratory champagne toast & professional architectural photoshoot"
      ]
    }
  ];

  const currentStep = processSteps[activeStep];

  return (
    <div className="relative overflow-hidden py-12">
      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10 pb-12 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-gold)] block mb-3">
          Methodology
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-wide">
          Our 7-Stage <span className="gold-gradient-text">Architectural Process</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-lg max-w-3xl mx-auto mt-4 font-light">
          A disciplined, zero-surprise workflow engineered to protect your time and capital while delivering world-class residential and commercial landmarks.
        </p>

        {/* Step Selector Bar */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
          {processSteps.map((st, idx) => (
            <button
              key={st.step}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-2xl text-center transition-all border ${
                activeStep === idx
                  ? "bg-[var(--color-gold)] text-black border-[var(--color-gold)] shadow-[0_0_20px_rgba(212,175,55,0.6)] scale-105 font-bold"
                  : "bg-black/50 text-gray-400 border-white/10 hover:border-[var(--color-gold)]/40 hover:text-white"
              }`}
            >
              <span className="block font-mono text-xs">{st.step}</span>
              <span className="text-[11px] truncate block mt-0.5">{st.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Active Stage Detailed Showcase */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl liquid-glass p-6 sm:p-12 border border-[var(--color-gold)]/40 shadow-[0_30px_90px_rgba(0,0,0,0.95)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Display */}
            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-[var(--color-gold)]/30 shadow-2xl group">
              <img src={currentStep.image} alt={currentStep.title} className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[var(--color-gold)]/50 text-xs font-mono text-[var(--color-gold)] font-bold">
                Stage {currentStep.step} &bull; {currentStep.duration}
              </div>
            </div>

            {/* Stage Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-gold)]">
                Stage {currentStep.step} Breakdown
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                {currentStep.title}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {currentStep.overview}
              </p>

              <div className="space-y-3 pt-4 border-t border-[var(--color-gold)]/20">
                <h4 className="font-serif font-bold text-base text-[var(--color-gold)]">Critical Stage Milestones:</h4>
                <div className="grid grid-cols-1 gap-3">
                  {currentStep.milestones.map((ms, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-200">{ms}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Navigation buttons */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-5 py-2.5 rounded-xl border border-white/20 text-xs font-medium text-gray-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                >
                  &larr; Previous Stage
                </button>
                <button
                  disabled={activeStep === processSteps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(processSteps.length - 1, prev + 1))}
                  className="px-5 py-2.5 rounded-xl bg-[var(--color-gold)] text-black text-xs font-bold hover:bg-[var(--color-champagne)] disabled:opacity-30 disabled:pointer-events-none"
                >
                  Next Stage &rarr;
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
