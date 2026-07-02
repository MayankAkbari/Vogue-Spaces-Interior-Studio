"use client";

import React, { useState, useEffect } from "react";
import { 
  Users, Star, CheckCircle2, XCircle, TrendingUp, Briefcase, 
  Trash2, PlusCircle, RefreshCw, ShieldAlert, Phone, Mail, MapPin 
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  projectType: string;
  budget?: string;
  city: string;
  date: string;
  status: "New" | "Contacted" | "Converted";
}

interface AdminReview {
  id: string;
  name: string;
  project: string;
  rating: number;
  comment: string;
  status: "Approved" | "Pending" | "Rejected";
}

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"leads" | "reviews" | "analytics">("leads");

  // Leads State
  const [leads, setLeads] = useState<Lead[]>([
    {
      id: "LEAD-901",
      name: "Harshvardhan Singhania",
      phone: "+91 98200 88112",
      email: "h.singhania@group.com",
      projectType: "Sea-Facing 5BHK Penthouse",
      budget: "₹2.5 Crore+ Ultra-Luxury",
      city: "Bandra West, Mumbai",
      date: "2 hours ago",
      status: "New"
    },
    {
      id: "LEAD-902",
      name: "Dr. Alok Chatterjee",
      phone: "+91 98300 44221",
      email: "dralok@neurocare.in",
      projectType: "Independent Royal Villa",
      budget: "₹1 Crore – ₹2.5 Crore",
      city: "Whitefield, Bengaluru",
      date: "Yesterday",
      status: "Contacted"
    },
    {
      id: "LEAD-903",
      name: "Sonia & Kabir Malhotra",
      phone: "+91 98110 55331",
      email: "soniam@fintech.co",
      projectType: "Luxury 4BHK Apartment",
      budget: "₹50 Lakhs – ₹1 Crore",
      city: "DLF Cyber City, Gurgaon",
      date: "3 days ago",
      status: "Converted"
    }
  ]);

  // Reviews Moderation State
  const [reviews, setReviews] = useState<AdminReview[]>([
    {
      id: "REV-501",
      name: "Arjun & Radhika Mehta",
      project: "4BHK Turnkey Residence, Worli",
      rating: 5,
      comment: "Vogue Spaces delivered 100% turnkey quality. The Blum hardware and Calacatta marble island are exceptional.",
      status: "Approved"
    },
    {
      id: "REV-502",
      name: "Nikhil Verma",
      project: "Corporate Suite, Hyderabad",
      rating: 5,
      comment: "Acoustic boardroom STC-52 soundproofing works wonders for our board meetings. Highly recommended.",
      status: "Pending"
    }
  ]);

  useEffect(() => {
    // Load dynamically submitted leads from localStorage if available
    const storedLeads = localStorage.getItem("vogue_admin_leads");
    if (storedLeads) {
      try {
        const parsed = JSON.parse(storedLeads);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setLeads((prev) => [...parsed, ...prev]);
        }
      } catch (e) {
        console.error("Error reading stored leads", e);
      }
    }
  }, []);

  const updateLeadStatus = (id: string, newStatus: "New" | "Contacted" | "Converted") => {
    setLeads(leads.map((l) => l.id === id ? { ...l, status: newStatus } : l));
  };

  const deleteLead = (id: string) => {
    setLeads(leads.filter((l) => l.id !== id));
  };

  const updateReviewStatus = (id: string, newStatus: "Approved" | "Rejected") => {
    setReviews(reviews.map((r) => r.id === id ? { ...r, status: newStatus } : r));
  };

  return (
    <div className="relative overflow-hidden py-12 min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Admin Banner */}
        <div className="rounded-3xl liquid-glass p-8 border border-[var(--color-gold)]/50 shadow-2xl mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="px-3 py-1 rounded-full bg-[var(--color-gold)]/20 border border-[var(--color-gold)]/40 text-[10px] font-mono text-[var(--color-gold)] font-bold uppercase">
              Vogue Spaces Internal Management OS
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Principal Architect & Admin Portal
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              Real-time monitoring of VIP consultation pipelines, patron review moderation, and revenue analytics.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => { setActiveTab("leads"); }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "leads" ? "bg-[var(--color-gold)] text-black shadow-lg scale-105" : "bg-black/60 text-gray-300 border border-white/10 hover:border-[var(--color-gold)]/40"
              }`}
            >
              Consultation Leads ({leads.length})
            </button>
            <button
              onClick={() => { setActiveTab("reviews"); }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "reviews" ? "bg-[var(--color-gold)] text-black shadow-lg scale-105" : "bg-black/60 text-gray-300 border border-white/10 hover:border-[var(--color-gold)]/40"
              }`}
            >
              Review Moderation ({reviews.filter(r=>r.status==="Pending").length} Pending)
            </button>
            <button
              onClick={() => { setActiveTab("analytics"); }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "analytics" ? "bg-[var(--color-gold)] text-black shadow-lg scale-105" : "bg-black/60 text-gray-300 border border-white/10 hover:border-[var(--color-gold)]/40"
              }`}
            >
              Metrics
            </button>
          </div>
        </div>

        {/* Analytics Summary KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="rounded-2xl liquid-glass p-6 border border-[var(--color-gold)]/30 space-y-2">
            <span className="text-xs text-gray-400 font-mono flex items-center justify-between">
              Active Turnkey Pipeline <Briefcase className="w-4 h-4 text-[var(--color-gold)]" />
            </span>
            <span className="font-serif text-3xl font-extrabold gold-gradient-text">₹24.8 Crore</span>
            <span className="text-[11px] text-emerald-400 block font-mono">+18% vs last quarter</span>
          </div>

          <div className="rounded-2xl liquid-glass p-6 border border-[var(--color-gold)]/30 space-y-2">
            <span className="text-xs text-gray-400 font-mono flex items-center justify-between">
              Consultation Leads <Users className="w-4 h-4 text-[var(--color-gold)]" />
            </span>
            <span className="font-serif text-3xl font-extrabold text-white">{leads.length} Active</span>
            <span className="text-[11px] text-[var(--color-champagne)] block font-mono">Immediate follow-up required</span>
          </div>

          <div className="rounded-2xl liquid-glass p-6 border border-[var(--color-gold)]/30 space-y-2">
            <span className="text-xs text-gray-400 font-mono flex items-center justify-between">
              Turnkey Conversion Rate <TrendingUp className="w-4 h-4 text-[var(--color-gold)]" />
            </span>
            <span className="font-serif text-3xl font-extrabold text-white">42.5%</span>
            <span className="text-[11px] text-emerald-400 block font-mono">Top tier industry benchmark</span>
          </div>

          <div className="rounded-2xl liquid-glass p-6 border border-[var(--color-gold)]/30 space-y-2">
            <span className="text-xs text-gray-400 font-mono flex items-center justify-between">
              Average Patron CSAT <Star className="w-4 h-4 text-[var(--color-gold)]" />
            </span>
            <span className="font-serif text-3xl font-extrabold gold-gradient-text">4.9 / 5.0</span>
            <span className="text-[11px] text-gray-400 block font-mono">Zero architectural defaults</span>
          </div>
        </div>

        {/* Tab 1: Leads Management */}
        {activeTab === "leads" && (
          <div className="rounded-3xl liquid-glass p-6 sm:p-8 border border-[var(--color-gold)]/30 space-y-6">
            <div className="flex items-center justify-between border-b border-[var(--color-gold)]/20 pb-4">
              <h3 className="font-serif text-2xl font-bold text-white">Incoming VIP Consultation Pipeline</h3>
              <span className="text-xs text-gray-400 font-mono">Real-time sync enabled</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-[11px] font-mono text-[var(--color-gold)] uppercase tracking-wider">
                    <th className="py-3 px-4">Patron Name</th>
                    <th className="py-3 px-4">Property & Budget</th>
                    <th className="py-3 px-4">City / Timestamp</th>
                    <th className="py-3 px-4">Status Stage</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs text-gray-300">
                  {leads.map((ld) => (
                    <tr key={ld.id} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-medium text-white">
                        <div className="font-bold text-sm">{ld.name}</div>
                        <div className="flex items-center gap-2 text-[11px] text-[var(--color-champagne)] mt-1 font-mono">
                          <Phone className="w-3 h-3" /> {ld.phone}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-white font-medium">{ld.projectType}</div>
                        <div className="text-[11px] text-gray-400 font-mono mt-0.5">{ld.budget || "Standard BOQ"}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1 text-white"><MapPin className="w-3.5 h-3.5 text-[var(--color-gold)]" /> {ld.city}</div>
                        <div className="text-[11px] text-gray-500 font-mono mt-0.5">{ld.date}</div>
                      </td>
                      <td className="py-4 px-4">
                        <select
                          value={ld.status}
                          onChange={(e) => updateLeadStatus(ld.id, e.target.value as any)}
                          className={`px-3 py-1 rounded-full text-[11px] font-bold font-mono border ${
                            ld.status === "New" ? "bg-amber-500/20 text-amber-300 border-amber-500/50" :
                            ld.status === "Contacted" ? "bg-blue-500/20 text-blue-300 border-blue-500/50" :
                            "bg-emerald-500/20 text-emerald-300 border-emerald-500/50"
                          }`}
                        >
                          <option value="New" className="bg-black text-white">Stage: New Inquiry</option>
                          <option value="Contacted" className="bg-black text-white">Stage: Architect Contacted</option>
                          <option value="Converted" className="bg-black text-white">Stage: Signed BOQ Contract</option>
                        </select>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <button
                          onClick={() => deleteLead(ld.id)}
                          className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                          title="Archive Lead"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Reviews Moderation */}
        {activeTab === "reviews" && (
          <div className="rounded-3xl liquid-glass p-6 sm:p-8 border border-[var(--color-gold)]/30 space-y-6">
            <div className="flex items-center justify-between border-b border-[var(--color-gold)]/20 pb-4">
              <h3 className="font-serif text-2xl font-bold text-white">Patron Testimonial Moderation Queue</h3>
              <span className="text-xs text-gray-400 font-mono">Verify authentic turnkey handovers before public listing</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((rev) => (
                <div key={rev.id} className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-white text-base">{rev.name}</h4>
                      <span className="text-xs text-[var(--color-champagne)] font-mono">{rev.project}</span>
                    </div>
                    <span className={`px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                      rev.status === "Approved" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" :
                      rev.status === "Pending" ? "bg-amber-500/20 text-amber-300 border border-amber-500/40" :
                      "bg-red-500/20 text-red-400 border border-red-500/40"
                    }`}>
                      {rev.status}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 italic">&ldquo;{rev.comment}&rdquo;</p>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-end gap-2">
                    {rev.status !== "Approved" && (
                      <button
                        onClick={() => updateReviewStatus(rev.id, "Approved")}
                        className="px-4 py-1.5 rounded-lg bg-emerald-600/80 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" /> Approve & Publish
                      </button>
                    )}
                    {rev.status !== "Rejected" && (
                      <button
                        onClick={() => updateReviewStatus(rev.id, "Rejected")}
                        className="px-4 py-1.5 rounded-lg bg-red-600/80 hover:bg-red-600 text-white font-bold text-xs flex items-center gap-1"
                      >
                        <XCircle className="w-3.5 h-3.5" /> Reject
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Detailed Analytics Metrics */}
        {activeTab === "analytics" && (
          <div className="rounded-3xl liquid-glass p-8 border border-[var(--color-gold)]/30 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white">Executive Studio Performance Metrics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 space-y-2">
                <span className="text-xs font-mono text-[var(--color-gold)] block uppercase">Average BOQ Ticket Size</span>
                <span className="font-serif text-3xl font-bold text-white">₹62.4 Lakhs</span>
                <p className="text-xs text-gray-400">Led by high-specification Italian kitchen installations and smart VR automation.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 space-y-2">
                <span className="text-xs font-mono text-[var(--color-gold)] block uppercase">Turnkey On-Time Delivery</span>
                <span className="font-serif text-3xl font-bold text-emerald-400">98.2%</span>
                <p className="text-xs text-gray-400">Backed by our strict factory-to-site supply chain monitoring in Mumbai and Bengaluru.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 space-y-2">
                <span className="text-xs font-mono text-[var(--color-gold)] block uppercase">Client Referral Share</span>
                <span className="font-serif text-3xl font-bold text-white">68%</span>
                <p className="text-xs text-gray-400">Over two-thirds of new luxury leads originate from word-of-mouth patron recommendations.</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
