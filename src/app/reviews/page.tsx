"use client";

import React, { useState } from "react";
import { Star, ShieldCheck, CheckCircle2, ThumbsUp, MessageSquarePlus, Image as ImageIcon, Sparkles } from "lucide-react";

export interface ClientReview {
  id: string;
  name: string;
  role: string;
  project: string;
  rating: number;
  date: string;
  comment: string;
  image?: string;
  verified: boolean;
  status: "Approved" | "Pending";
}

export const initialReviews: ClientReview[] = [
  {
    id: "REV-101",
    name: "Rohan & Ananya Singhania",
    role: "Industrialist Family",
    project: "Sea-Facing Penthouse, Bandra West",
    rating: 5,
    date: "14 days ago",
    comment: "Vogue Spaces transformed our 6,800 sq.ft duplex penthouse into an architectural triumph. The custom fluted teak accents and Italian Calacatta marble stairs are breathtaking. We receive endless compliments during every evening soirée.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    verified: true,
    status: "Approved"
  },
  {
    id: "REV-102",
    name: "Vikramaditya Kapoor",
    role: "Managing Director",
    project: "Apex VC Headquarters, Cyber City",
    rating: 5,
    date: "1 month ago",
    comment: "Unmatched professionalism. They delivered our corporate headquarters 10 days ahead of schedule with STC-52 soundproof glass executive boardrooms. The turnkey execution was completely seamless.",
    verified: true,
    status: "Approved"
  },
  {
    id: "REV-103",
    name: "Dr. Meera Nambiar",
    role: "Neurologist & Homeowner",
    project: "Royal Palms Villa, Whitefield",
    rating: 5,
    date: "2 months ago",
    comment: "The obsidian show kitchen and internal Zen courtyard water louver system show a depth of engineering innovation rarely found in Indian interior firms. Truly 5-star quality.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    verified: true,
    status: "Approved"
  },
  {
    id: "REV-104",
    name: "Siddharth & Priyadarshini Mehta",
    role: "Tech Entrepreneur",
    project: "Aurora Master Sanctuary, Jubilee Hills",
    rating: 5,
    date: "3 months ago",
    comment: "Our master bedroom feels like a presidential suite at the Four Seasons. The circadian automation and saddle leather headboard are perfection.",
    verified: true,
    status: "Approved"
  }
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<ClientReview[]>(initialReviews);
  const [filterRating, setFilterRating] = useState<number | "All">("All");
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // New Review Form State
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("Homeowner");
  const [newProject, setNewProject] = useState("");
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    const newRev: ClientReview = {
      id: `REV-${Date.now()}`,
      name: newName,
      role: newRole,
      project: newProject || "Bespoke Residence",
      rating: newRating,
      date: "Just now",
      comment: newComment,
      verified: true,
      status: "Pending" // Will show up marked as Pending Moderation
    };

    setReviews([newRev, ...reviews]);
    setShowSubmitModal(false);
    setNewName("");
    setNewProject("");
    setNewComment("");
  };

  const filteredReviews = reviews.filter((r) => filterRating === "All" || r.rating === filterRating);

  return (
    <div className="relative overflow-hidden py-12">
      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10 pb-12 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-gold)] block mb-3">
          Verified Testimonials
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-wide">
          Patron <span className="gold-gradient-text">Experiences</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-lg max-w-3xl mx-auto mt-4 font-light">
          We measure our success strictly by the lasting delight of our discerning homeowners and corporate principals.
        </p>

        {/* Aggregate Stats Bar */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl liquid-glass p-8 border border-[var(--color-gold)]/40 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="text-center md:border-r border-[var(--color-gold)]/20">
            <span className="font-serif text-4xl sm:text-5xl font-extrabold gold-gradient-text">4.9</span>
            <div className="flex items-center justify-center gap-1 my-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
              ))}
            </div>
            <span className="text-xs text-gray-400 block font-mono">Overall Rating (248+ Reviews)</span>
          </div>

          <div className="text-center md:border-r border-[var(--color-gold)]/20">
            <span className="font-serif text-3xl font-extrabold text-white">100%</span>
            <span className="text-xs text-[var(--color-champagne)] block mt-1 font-semibold">Verified Turnkey Handover</span>
            <span className="text-[11px] text-gray-400 block mt-0.5">Zero quality compromises</span>
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowSubmitModal(true)}
              className="w-full py-3.5 rounded-xl bg-[var(--color-gold)] text-black font-bold text-xs uppercase tracking-wider hover:bg-[var(--color-champagne)] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquarePlus className="w-4 h-4" /> Write A Review
            </button>
          </div>
        </div>

        {/* Rating Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {["All", 5, 4].map((rt) => (
            <button
              key={rt}
              onClick={() => setFilterRating(rt as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filterRating === rt
                  ? "bg-[var(--color-gold)] text-black shadow-md font-bold"
                  : "bg-black/40 text-gray-300 border border-white/10 hover:border-[var(--color-gold)]/40"
              }`}
            >
              {rt === "All" ? "All Ratings" : `${rt} Stars Only`}
            </button>
          ))}
        </div>
      </section>

      {/* Reviews Showcase Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredReviews.map((rev) => (
            <div key={rev.id} className="rounded-3xl liquid-glass p-8 border border-[var(--color-gold)]/25 flex flex-col justify-between relative space-y-6">
              {/* Top info */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    {rev.status === "Pending" ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-[10px] text-amber-300 font-mono">
                        Pending Admin Moderation
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Verified Patron
                      </span>
                    )}
                  </div>
                </div>

                <p className="font-serif text-base sm:text-lg italic text-gray-200 leading-relaxed mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>

                {rev.image && (
                  <div className="mb-6 rounded-2xl overflow-hidden border border-[var(--color-gold)]/30 h-48 sm:h-60 relative">
                    <img src={rev.image} alt="Review Project Photo" className="w-full h-full object-cover" />
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-[var(--color-champagne)]">
                      Turnkey Outcome Photo
                    </div>
                  </div>
                )}
              </div>

              {/* Patron Bio Footer */}
              <div className="pt-4 border-t border-[var(--color-gold)]/15 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-white text-base">{rev.name}</h4>
                  <span className="text-xs text-[var(--color-champagne)] block">{rev.project}</span>
                </div>
                <span className="text-xs text-gray-500 font-mono">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Write Review Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl liquid-glass p-8 border border-[var(--color-gold)]/50 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-[var(--color-gold)]/20 pb-4">
              <h3 className="font-serif text-2xl font-bold text-white">Share Your Experience</h3>
              <button onClick={() => setShowSubmitModal(false)} className="text-gray-400 hover:text-white text-sm">Close</button>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Singhania"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-[var(--color-gold)]/30 text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Role</label>
                  <input
                    type="text"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-[var(--color-gold)]/30 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Star Rating</label>
                  <select
                    value={newRating}
                    onChange={(e) => setNewRating(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/80 border border-[var(--color-gold)]/30 text-xs text-white"
                  >
                    <option value={5}>5 Stars (Exceptional)</option>
                    <option value={4}>4 Stars (Very Good)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Project Executed</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 4BHK Penthouse, Worli"
                  value={newProject}
                  onChange={(e) => setNewProject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-[var(--color-gold)]/30 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Review Commentary</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe craftsmanship quality, timeline, and design aesthetics..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-[var(--color-gold)]/30 text-xs text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-champagne)] text-black font-bold text-xs uppercase tracking-wider shadow-lg"
              >
                Submit Review For Verification
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
