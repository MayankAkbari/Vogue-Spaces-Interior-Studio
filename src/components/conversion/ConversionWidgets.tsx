"use client";

import React, { useState, useEffect } from "react";
import { 
  MessageCircle, PhoneCall, X, Sparkles, Calendar, CheckCircle2, 
  ArrowRight, ShieldCheck, Award, Star 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ConversionWidgets() {
  const [exitModalOpen, setExitModalOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [hasShownExit, setHasShownExit] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [propertyType, setPropertyType] = useState("3BHK Luxury Apartment");

  // Exit Intent Listener
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownExit) {
        setExitModalOpen(true);
        setHasShownExit(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShownExit]);

  // Listen to custom event for opening consultation modal from any CTA button
  useEffect(() => {
    const handleOpenModal = () => setConsultationModalOpen(true);
    window.addEventListener("open-consultation-modal", handleOpenModal);
    return () => window.removeEventListener("open-consultation-modal", handleOpenModal);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setExitModalOpen(false);
      setConsultationModalOpen(false);
    }, 3500);
  };

  return (
    <>
      {/* Sticky Floating Action Buttons (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5 items-end">
        {/* Book VIP Consultation Trigger */}
        <button
          onClick={() => setConsultationModalOpen(true)}
          className="hidden sm:flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-champagne)] to-[var(--color-gold)] text-black font-bold text-xs uppercase tracking-wider shadow-[0_4px_25px_rgba(212,175,55,0.5)] hover:scale-105 transition-transform"
        >
          <Sparkles className="w-4 h-4 fill-black" />
          <span>Book Consultation</span>
        </button>

        <div className="flex items-center gap-3">
          {/* Direct Phone Call Button */}
          <a
            href="tel:+919876543210"
            className="w-12 h-12 rounded-full bg-[var(--color-obsidian)] border border-[var(--color-gold)]/60 text-[var(--color-gold)] flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.8)] hover:bg-[var(--color-gold)] hover:text-black transition-all hover:scale-110 group"
            title="Call Luxury Concierge"
          >
            <PhoneCall className="w-5 h-5 animate-pulse" />
          </a>

          {/* Sticky WhatsApp Chat Button */}
          <a
            href="https://wa.me/919876543210?text=Hello%20Vogue%20Spaces,%20I%20am%20interested%20in%20a%20luxury%20interior%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-emerald-600 border-2 border-white/20 text-white flex items-center justify-center shadow-[0_4px_25px_rgba(16,185,129,0.5)] hover:bg-emerald-500 transition-all hover:scale-110 relative"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-black animate-ping" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-black" />
          </a>
        </div>
      </div>

      {/* Exit Intent & Consultation Modal */}
      <AnimatePresence>
        {(exitModalOpen || consultationModalOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl rounded-3xl liquid-glass p-8 border border-[var(--color-gold)]/40 shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden"
            >
              {/* Background ambient lighting */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--color-gold)]/20 rounded-full blur-[80px] pointer-events-none" />

              <button
                onClick={() => {
                  setExitModalOpen(false);
                  setConsultationModalOpen(false);
                }}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/20 border border-[var(--color-gold)] flex items-center justify-center mx-auto text-[var(--color-gold)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold gold-gradient-text">
                    Consultation Requested!
                  </h3>
                  <p className="text-sm text-gray-300 max-w-sm mx-auto">
                    Our Principal Luxury Designer will review your space profile and contact you within 2 business hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[var(--color-gold)] bg-[var(--color-gold)]/10 px-3 py-1 rounded-full border border-[var(--color-gold)]/30 inline-block mb-3">
                      {exitModalOpen ? "Wait! Before You Depart..." : "VIP Design Consultation"}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                      Transform Your Space With <span className="gold-gradient-text">Vogue Spaces</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-2">
                      Book a complimentary 1-on-1 space planning and 3D concept review with our award-winning designers.
                    </p>
                  </div>

                  {/* Trust Badges */}
                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-[var(--color-gold)]/15 text-center">
                    <div className="p-2">
                      <span className="block font-mono font-bold text-[var(--color-gold)] text-sm sm:text-base">500+</span>
                      <span className="text-[10px] text-gray-400">Luxury Spaces</span>
                    </div>
                    <div className="p-2 border-x border-[var(--color-gold)]/15">
                      <span className="block font-mono font-bold text-[var(--color-gold)] text-sm sm:text-base">100%</span>
                      <span className="text-[10px] text-gray-400">Turnkey Assurance</span>
                    </div>
                    <div className="p-2">
                      <span className="block font-mono font-bold text-[var(--color-gold)] text-sm sm:text-base flex items-center justify-center gap-1">
                        4.9 <Star className="w-3.5 h-3.5 fill-[var(--color-gold)]" />
                      </span>
                      <span className="text-[10px] text-gray-400">Google Reviews</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikramaditya Singhania"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[var(--color-gold)]/30 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-gold)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Phone Number (WhatsApp Preferred)</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-[var(--color-gold)]/30 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-gold)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Space Category</label>
                      <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/80 border border-[var(--color-gold)]/30 text-sm text-white focus:outline-none focus:border-[var(--color-gold)]"
                      >
                        <option value="3BHK / 4BHK Luxury Apartment">3BHK / 4BHK Luxury Apartment</option>
                        <option value="Bespoke Royal Villa / Bungalow">Bespoke Royal Villa / Bungalow</option>
                        <option value="Executive Office / Corporate HQ">Executive Office / Corporate HQ</option>
                        <option value="Haute Modular Kitchen Renovation">Haute Modular Kitchen Renovation</option>
                        <option value="Full Turnkey Home Styling">Full Turnkey Home Styling</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-champagne)] to-[var(--color-gold)] text-black font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-[1.01] transition-transform flex items-center justify-center gap-2 mt-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Confirm VIP Consultation Session</span>
                    </button>
                  </form>

                  <p className="text-[11px] text-center text-gray-500 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-gold)]" /> Your data is encrypted and strictly kept confidential.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
