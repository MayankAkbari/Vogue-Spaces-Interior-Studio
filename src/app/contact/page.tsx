"use client";

import React, { useState } from "react";
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, Calendar, 
  MessageCircle, Sparkles, Building2, ShieldCheck 
} from "lucide-react";

export default function ContactPage() {
  const [selectedStudio, setSelectedStudio] = useState("mumbai");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [propertyLocation, setPropertyLocation] = useState("");
  const [spaceType, setSpaceType] = useState("Luxury 4BHK Apartment");
  const [budgetRange, setBudgetRange] = useState("₹50L – ₹1 Crore");
  const [preferredDate, setPreferredDate] = useState("");
  const [notes, setNotes] = useState("");

  const studios = {
    mumbai: {
      city: "Mumbai (Flagship Studio)",
      address: "14th Floor, One BKC Tower B, Bandra Kurla Complex, Mumbai 400051",
      phone: "+91 98200 11223",
      email: "mumbai@voguespaces.com",
      hours: "Mon – Sat: 10:00 AM – 7:00 PM",
      mapEmbed: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200&auto=format&fit=crop"
    },
    bengaluru: {
      city: "Bengaluru Design Lounge",
      address: "Prestige Trade Tower, Palace Road, High Grounds, Bengaluru 560001",
      phone: "+91 98450 44556",
      email: "bengaluru@voguespaces.com",
      hours: "Mon – Sat: 10:00 AM – 7:00 PM",
      mapEmbed: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&w=1200&auto=format&fit=crop"
    },
    delhi: {
      city: "Delhi NCR Architecture Hub",
      address: "DLF Cyber City, Building 10B, Phase 2, Gurgaon, NCR 122002",
      phone: "+91 98110 88990",
      email: "delhi@voguespaces.com",
      hours: "Mon – Sat: 10:30 AM – 7:30 PM",
      mapEmbed: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop"
    },
    hyderabad: {
      city: "Hyderabad Studio",
      address: "Road No. 36, Jubilee Hills, Near Check Post, Hyderabad 500033",
      phone: "+91 98490 33221",
      email: "hyderabad@voguespaces.com",
      hours: "Mon – Sat: 10:00 AM – 7:00 PM",
      mapEmbed: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
    }
  };

  const currentStudio = studios[selectedStudio as keyof typeof studios];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API lead storage
    const newLead = {
      id: `LEAD-${Date.now()}`,
      name,
      phone,
      email,
      projectType: spaceType,
      budget: budgetRange,
      city: propertyLocation || currentStudio.city,
      date: preferredDate || "As soon as possible",
      status: "New"
    };

    const existingLeads = JSON.parse(localStorage.getItem("vogue_admin_leads") || "[]");
    localStorage.setItem("vogue_admin_leads", JSON.stringify([newLead, ...existingLeads]));

    setFormSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden py-12">
      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10 pb-12 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-gold)] block mb-3">
          Initiate Dialogue
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-wide">
          Private Design <span className="gold-gradient-text">Consultation</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-lg max-w-3xl mx-auto mt-4 font-light">
          Whether you hold blueprints for a 10,000 sq.ft villa or a sea-facing penthouse, schedule a confidential meeting with our Principal Architects.
        </p>
      </section>

      {/* Main Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Studio Locations & Map Simulator */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl liquid-glass p-8 border border-[var(--color-gold)]/30 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white flex items-center gap-2">
                <Building2 className="w-6 h-6 text-[var(--color-gold)]" /> Pan-India Design Studios
              </h3>

              {/* Location Selector Buttons */}
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(studios).map((stKey) => (
                  <button
                    key={stKey}
                    onClick={() => setSelectedStudio(stKey)}
                    className={`p-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all border ${
                      selectedStudio === stKey
                        ? "bg-[var(--color-gold)] text-black border-[var(--color-gold)] font-bold shadow-md"
                        : "bg-black/50 text-gray-400 border-white/10 hover:border-[var(--color-gold)]/40"
                    }`}
                  >
                    {stKey} Studio
                  </button>
                ))}
              </div>

              {/* Active Studio Details */}
              <div className="space-y-4 pt-2 text-xs sm:text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-serif text-base">{currentStudio.city}</strong>
                    <span>{currentStudio.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  <span>{currentStudio.phone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  <span>{currentStudio.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  <span>{currentStudio.hours}</span>
                </div>
              </div>

              {/* Map Simulator */}
              <div className="rounded-2xl overflow-hidden border border-[var(--color-gold)]/30 relative h-48 sm:h-56 group">
                <img src={currentStudio.mapEmbed} alt="Studio Location Map" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col items-center justify-center p-4 text-center">
                  <MapPin className="w-8 h-8 text-[var(--color-gold)] animate-bounce" />
                  <span className="font-serif text-sm font-bold text-white mt-1">{currentStudio.city}</span>
                  <span className="text-[10px] font-mono text-[var(--color-champagne)]">Valet Parking & Private Elevator Available</span>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <a
                href="https://wa.me/919820011223?text=Hello%20Vogue%20Spaces,%20I%20would%20like%20to%20book%20a%20turnkey%20interior%20consultation."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Instant WhatsApp Architect Chat
              </a>
            </div>
          </div>

          {/* Right: VIP Booking Scheduler & Budget Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl liquid-glass p-8 sm:p-12 border border-[var(--color-gold)]/50 shadow-2xl">
              {formSubmitted ? (
                <div className="py-16 text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-white">Consultation Session Confirmed</h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[var(--color-gold)]">{name}</strong>. Our Principal Architect for your region has received your property profile. We will contact you at <strong className="text-white">{phone}</strong> within 4 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-[var(--color-gold)] text-black font-bold text-xs uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[var(--color-gold)]/20 pb-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-gold)]">Private Booking Dossier</span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">Schedule Architecture Review</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Arjun Singhania"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[var(--color-gold)]/30 text-xs text-white focus:border-[var(--color-gold)] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98200 XXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[var(--color-gold)]/30 text-xs text-white focus:border-[var(--color-gold)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">Official Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="arjun@enterprise.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[var(--color-gold)]/30 text-xs text-white focus:border-[var(--color-gold)] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">Property Location / Society</label>
                      <input
                        type="text"
                        placeholder="e.g. DLF Magnolias / Worli Sea Face"
                        value={propertyLocation}
                        onChange={(e) => setPropertyLocation(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[var(--color-gold)]/30 text-xs text-white focus:border-[var(--color-gold)] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">Property Typology</label>
                      <select
                        value={spaceType}
                        onChange={(e) => setSpaceType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/80 border border-[var(--color-gold)]/30 text-xs text-white focus:border-[var(--color-gold)] focus:outline-none"
                      >
                        <option value="Luxury 3BHK Apartment">Luxury 3BHK Apartment</option>
                        <option value="Sea-Facing 4BHK / 5BHK">Sea-Facing 4BHK / 5BHK</option>
                        <option value="Duplex / Penthouse">Duplex / Penthouse Suite</option>
                        <option value="Independent Royal Villa">Independent Royal Villa</option>
                        <option value="Corporate Executive Office">Corporate Executive HQ</option>
                        <option value="Flagship Retail Boutique">Flagship Retail Boutique</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">Turnkey Investment Range</label>
                      <select
                        value={budgetRange}
                        onChange={(e) => setBudgetRange(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/80 border border-[var(--color-gold)]/30 text-xs text-white focus:border-[var(--color-gold)] focus:outline-none"
                      >
                        <option value="₹28 Lakhs – ₹50 Lakhs">₹28 Lakhs – ₹50 Lakhs</option>
                        <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore</option>
                        <option value="₹1 Crore – ₹2.5 Crore">₹1 Crore – ₹2.5 Crore</option>
                        <option value="₹2.5 Crore+ Ultra-Luxury">₹2.5 Crore+ Ultra-Luxury</option>
                      </select>
                    </div>
                  </div>

                  {/* Date Picker Simulator */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">Preferred Consultation Date & Time</label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-gold)]" />
                      <input
                        type="text"
                        placeholder="e.g. Saturday, 15th July at 3:00 PM (In Studio / Virtual)"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/60 border border-[var(--color-gold)]/30 text-xs text-white focus:border-[var(--color-gold)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">Architectural Notes / Specific Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Mention any specific preferences regarding Italian marble, Vastu orientation, home cinema acoustic rooms..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[var(--color-gold)]/30 text-xs text-white focus:border-[var(--color-gold)] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-champagne)] to-[var(--color-gold)] text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Lock Consultation Slot & Price BOQ
                  </button>

                  <p className="text-[11px] text-gray-400 text-center font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 inline mr-1 text-[var(--color-gold)]" />
                    White-Glove Confidentiality Assured. We never share patron details.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
