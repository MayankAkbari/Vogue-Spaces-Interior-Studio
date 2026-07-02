"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Home, Building2, 
  ChefHat, BedDouble, Sofa, Wrench, Layers, Briefcase, HelpCircle, ChevronDown 
} from "lucide-react";
import CostEstimatorModal from "@/components/ui/CostEstimatorModal";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("residential");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const servicesData = [
    {
      id: "residential",
      title: "Luxury Residential Interior Design",
      subtitle: "Bespoke 3BHK, 4BHK, & Sea-Facing Penthouses",
      icon: Home,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
      desc: "Tailoring expansive high-rise residences into warm, cinematic havens. We combine European spatial fluidity with functional Indian household ergonomics, prioritizing natural light and acoustic serenity.",
      process: ["Spatial Circulation Analysis", "Structural Vastu Alignment", "Italian Veneer & Marble Curation", "Smart Lighting & Automation Deployment"],
      deliverables: ["Photorealistic 4K VR Walkthrough", "Complete Electrical & MEP Drawings", "Custom Carpentry & Fluted Wall Paneling", "White-Glove Final Art Styling"],
      pricingRange: "₹28L – ₹65L+",
      faqs: [
        { q: "What is the typical completion timeline for a 4BHK luxury residence?", a: "Turnkey residential execution typically takes between 60 to 90 working days from the approval of 3D renders." },
        { q: "Do you assist with selecting art pieces and decor accessories?", a: "Yes, our white-glove handover includes personal shopping with our Creative Director for artifacts, sculptures, and rugs." }
      ]
    },
    {
      id: "villas",
      title: "Bespoke Royal Villa Design",
      subtitle: "Independent Bungalows, Mansions & Farmhouses",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
      desc: "Architectural grandeur for multi-level estates. From double-height entrance foyers with custom Venetian chandeliers to indoor-outdoor pool deck integrations and private home cinema suites.",
      process: ["Landscape & Architecture Harmonization", "Double-Height Acoustic Modeling", "Custom Elevator & Staircase Engineering", "Solar & HVAC Efficiency Planning"],
      deliverables: ["Full Architectural Exterior Facade 3D", "Custom Brass Staircase Railings", "Private Spa & Sauna Bathroom Execution", "Smart Gate & Perimeter Security Integration"],
      pricingRange: "₹75L – ₹2.5Cr+",
      faqs: [
        { q: "Can you handle structural modifications or swimming pool extensions?", a: "Yes, our civil engineering team executes structural column reinforcements, infinity pool decks, and terrace lounges." }
      ]
    },
    {
      id: "commercial",
      title: "Commercial & Retail Space Design",
      subtitle: "High-End Flagship Boutiques & Experience Centers",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",
      desc: "Designing commercial spaces that turn footfall into high-value brand equity. Optimized customer journey circulation, theatrical product lighting displays, and commercial grade durability.",
      process: ["Brand Identity & Customer Psychology Mapping", "High-Traffic Flooring Engineering", "Theatrical Spotlighting Calibration", "Fire Safety & Municipal Compliance"],
      deliverables: ["3D Virtual Store Experience Render", "Custom Retail Display Gondolas & Cash Wraps", "Integrated HVAC & Commercial Sound System", "Express 45-Day Turnkey Delivery"],
      pricingRange: "₹45L – ₹1.5Cr+",
      faqs: [
        { q: "Do you work after mall/retail hours to avoid disruption?", a: "Yes, our commercial turnkey crews are certified for night shifts inside shopping malls and commercial complexes." }
      ]
    },
    {
      id: "office",
      title: "Executive Corporate Office Design",
      subtitle: "Presidential Headquarters & VC Suites",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop",
      desc: "Commanding corporate authority with soundproof glass executive suites, acoustic boardroom tables, ergonomic Herman Miller-inspired seating arrays, and private wellness pods.",
      process: ["Employee Workflow & Ergonomic Auditing", "Acoustic STC-50 Soundproofing Engineering", "Video Conferencing Lighting Design", "Executive Pantry & Cafeteria Zoning"],
      deliverables: ["Complete Server Room & Data Cabling BOQ", "Motorized Smart Glass Boardroom Walls", "Custom Executive Desk & Trophy Showcase", "Biophilic Indoor Green Walls"],
      pricingRange: "₹35L – ₹1.2Cr+",
      faqs: [
        { q: "How do you ensure speech privacy in conference rooms?", a: "We install double-glazed acoustic partitions with sound-masking ceiling clouds to guarantee absolute executive privacy." }
      ]
    },
    {
      id: "kitchen",
      title: "Haute Modular Kitchen Design",
      subtitle: "German Engineered Culinary Ergonomics",
      icon: ChefHat,
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1400&auto=format&fit=crop",
      desc: "Where Michelin gastronomy meets minimalist Italian aesthetics. Featuring scratch-resistant monolithic quartz islands, motorized Blum servo-drive drawers, and concealed downdraft chimneys.",
      process: ["Work Triangle & Culinary Flow Optimization", "Appliance Wattage & Plumbing Zoning", "German Blum Hardware Integration", "Heat & Stain Resistant Material Selection"],
      deliverables: ["Custom Monolithic Island with Breakfast Bar", "Concealed Tall Pantry & Wine Cooler Unit", "Touch-to-Open Motorized Upper Cabinets", "Under-Cabinet Ambient Task LED Lighting"],
      pricingRange: "₹8L – ₹24L+",
      faqs: [
        { q: "Which hardware brands do you integrate?", a: "We exclusively install genuine German Blum, Hettich, and Hafele hardware with a lifetime smooth-motion replacement guarantee." }
      ]
    },
    {
      id: "bedroom",
      title: "Bespoke Master Bedroom Sanctuary",
      subtitle: "Royal Suites & Walk-In Glass Wardrobes",
      icon: BedDouble,
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1400&auto=format&fit=crop",
      desc: "Transforming your sleeping quarters into a 5-star presidential retreat. Featuring upholstered Italian leather headboards, acoustic fabric wall paneling, and bronze tinted walk-in closets.",
      process: ["Circadian Lighting & Blackout Curtaining", "Custom Saddle Leather Stitching", "His & Hers Closet Storage Ergonomics", "Quiet Air Conditioning Concealment"],
      deliverables: ["Custom Floating Bed with Integrated Sconces", "Tinted Glass Wardrobe with Sensor LED Strip", "Acoustic Fluted Velvet Bed Backdrop", "Private Vanity & Makeup Island Console"],
      pricingRange: "₹7L – ₹18L per room",
      faqs: [
        { q: "Can you build walk-in wardrobes in compact bedrooms?", a: "Yes, we use sliding bronze glass systems with integrated corner carousels to double functional wardrobe storage." }
      ]
    },
    {
      id: "living",
      title: "Cinematic Living Room & Lounge",
      subtitle: "Grand Entertainment & Hosting Sanctuaries",
      icon: Sofa,
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop",
      desc: "The heartbeat of luxury hospitality. Expansive sectional seating, custom Calacatta marble center tables, integrated Dolby Atmos architectural soundproofing, and statement brass fireplaces.",
      process: ["Acoustic & Audiophile Sound Mapping", "Social Seating & Conversation Zoning", "Statement Wall Art & Lighting Focus", "Hidden Wiring & Media Console Design"],
      deliverables: ["Custom Italian Marble & Brass TV Backdrop", "Tailor-Made Plush Velvet Sectional Sofa", "Dimmable Architectural Chandelier Array", "Concealed Bar & Cocktail Cabinet Unit"],
      pricingRange: "₹12L – ₹35L+",
      faqs: [
        { q: "How do you hide messy cables and set-top boxes?", a: "We build ventilated, IR-transparent floating consoles with concealed conduits channeled directly behind Italian marble slabs." }
      ]
    },
    {
      id: "renovation",
      title: "Heritage & Modern Renovation",
      subtitle: "Complete Structural & MEP Metamorphosis",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1400&auto=format&fit=crop",
      desc: "Revitalizing outdated apartments or heritage properties into state-of-the-art smart homes. We handle civil demolition, plumbing replacements, structural reinforcement, and damp-proofing.",
      process: ["Non-Destructive Structural Auditing", "Complete Old Plumbing & Wiring Strip-Out", "Epoxy Damp-Proofing & Waterproofing Layer", "Modern False Ceiling & Laser Leveling"],
      deliverables: ["Civil Demolition & Debris Disposal Management", "Complete Copper Wiring & Modular Switch Upgrade", "Italian Marble & Italian Tile Re-Flooring", "New Flush Door Systems with Digital Locks"],
      pricingRange: "₹30L – ₹80L+",
      faqs: [
        { q: "How do you protect neighbors from dust and noise during renovation?", a: "We erect dust-proof containment tunnels and enforce strict municipal noise windows (10 AM to 5 PM) with daily site vacuuming." }
      ]
    },
    {
      id: "turnkey",
      title: "End-To-End Turnkey Solutions",
      subtitle: "From Raw Concrete Shell To White-Glove Handover",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop",
      desc: "Our hallmark service. You hand us keys to a bare civil structure; we hand you back a fully stylized, sparkling clean, air-conditioned luxury home with fluffed pillows and stocked wine racks.",
      process: ["Single Master BOQ Contract Generation", "Weekly Video Drone & Site Progress Updates", "Factory Precision Modular Execution", "30-Point Quality Control Final Inspection"],
      deliverables: ["100% Civil, Electrical, Plumbing & HVAC Execution", "All Custom Woodwork, Kitchens & Wardrobes", "Full Designer Lighting & Smart Automation Setup", "Complete Curtains, Rugs & Artwork Placement"],
      pricingRange: "₹45L – ₹3Cr+",
      faqs: [
        { q: "Why is turnkey better than hiring separate contractors?", a: "Turnkey eliminates contractor finger-pointing, guarantees fixed pricing, accelerates delivery by 40%, and provides one 10-year warranty." }
      ]
    }
  ];

  const currentService = servicesData.find((s) => s.id === activeTab) || servicesData[0];

  return (
    <div className="relative overflow-hidden py-12">
      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10 pb-12 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-gold)] block mb-3">
          Our Capabilities
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-wide">
          Haute Couture <span className="gold-gradient-text">Interior Offerings</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-lg max-w-3xl mx-auto mt-4 font-light">
          Explore our 9 specialized architectural disciplines—each executed with rigorous Italian craftsmanship and backed by our 10-Year Studio Warranty.
        </p>

        {/* Category Selector Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
          {servicesData.map((srv) => {
            const Icon = srv.icon;
            return (
              <button
                key={srv.id}
                onClick={() => {
                  setActiveTab(srv.id);
                  setOpenFaq(0);
                }}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
                  activeTab === srv.id
                    ? "bg-[var(--color-gold)] text-black border-[var(--color-gold)] shadow-[0_0_25px_rgba(212,175,55,0.6)] scale-105"
                    : "bg-black/50 text-gray-300 border-white/10 hover:border-[var(--color-gold)]/40 hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{srv.title.split(" ")[0]} {srv.title.split(" ")[1] || ""}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Active Service Deep Dive Section */}
      <section id={currentService.id} className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl liquid-glass p-6 sm:p-12 border border-[var(--color-gold)]/40 shadow-[0_30px_90px_rgba(0,0,0,0.9)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Display */}
            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-[var(--color-gold)]/30 shadow-2xl group">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/80 backdrop-blur-md border border-[var(--color-gold)]/40 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-champagne)] block">Investment Benchmark</span>
                  <span className="font-serif text-xl sm:text-2xl font-bold gold-gradient-text">{currentService.pricingRange}</span>
                </div>
                <button
                  onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
                  className="px-5 py-2.5 rounded-xl bg-[var(--color-gold)] text-black font-bold text-xs uppercase tracking-wider hover:bg-[var(--color-champagne)] transition-colors"
                >
                  Get Estimate
                </button>
              </div>
            </div>

            {/* Content & Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-gold)]/15 border border-[var(--color-gold)]/30 text-[var(--color-gold)] text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" /> Specialized Division
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                {currentService.title}
              </h2>
              <span className="text-sm font-medium text-[var(--color-champagne)] block -mt-3">
                {currentService.subtitle}
              </span>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {currentService.desc}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="font-serif font-bold text-base text-[var(--color-gold)]">Key Deliverables & Specifications:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200 bg-white/5 p-3 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="font-serif font-bold text-base text-[var(--color-gold)]">Execution Stage Workflow:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentService.process.map((prc, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-5 h-5 rounded-full bg-[var(--color-gold)]/20 text-[var(--color-gold)] font-mono font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="truncate">{prc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => window.dispatchEvent(new Event("open-consultation-modal"))}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-champagne)] text-black font-bold text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  Book Private Consultation &rarr;
                </button>
              </div>
            </div>

          </div>

          {/* Service Specific FAQ Accordion */}
          <div className="mt-16 pt-10 border-t border-[var(--color-gold)]/20">
            <h4 className="font-serif text-xl font-bold text-white mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[var(--color-gold)]" /> Common Questions About {currentService.title}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentService.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-black/60 p-5 border border-white/10">
                  <h5 className="font-serif font-bold text-sm text-[var(--color-champagne)] mb-2">{faq.q}</h5>
                  <p className="text-xs text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instant Cost Estimator Widget */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <CostEstimatorModal />
      </section>
    </div>
  );
}
