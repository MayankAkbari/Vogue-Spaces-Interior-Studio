"use client";

import React, { use } from "react";
import Link from "next/link";
import { blogPosts } from "../page";
import { ArrowLeft, Calendar, Clock, User, Share2, Sparkles } from "lucide-react";

export default function BlogPostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="font-serif text-3xl font-bold text-white mb-4">Article Not Found</h2>
        <Link href="/blog" className="px-6 py-3 rounded-full bg-[var(--color-gold)] text-black font-bold text-sm">
          Return To Journal
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="relative overflow-hidden py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-champagne)] hover:text-[var(--color-gold)] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Journal Overview
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Article Title & Metadata */}
        <div className="space-y-4 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-gold)]/20 border border-[var(--color-gold)]/40 text-[10px] font-mono uppercase text-[var(--color-gold)] font-bold">
            {post.category}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-xs text-gray-400 font-mono pt-2">
            <span>By {post.author}</span>
            <span>&bull;</span>
            <span>{post.date}</span>
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="rounded-3xl overflow-hidden border border-[var(--color-gold)]/30 shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full h-[400px] sm:h-[500px] object-cover" />
        </div>

        {/* Editorial Body Content */}
        <div className="rounded-3xl liquid-glass p-8 sm:p-12 border border-[var(--color-gold)]/20 space-y-8">
          <p className="font-serif text-lg sm:text-xl italic text-gray-200 leading-relaxed border-l-2 border-[var(--color-gold)] pl-4">
            {post.excerpt}
          </p>

          <div className="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
            {post.content.map((cnt, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--color-gold)]">
                  {cnt.heading}
                </h3>
                <p>{cnt.body}</p>
              </div>
            ))}
          </div>

          {/* Author Box */}
          <div className="pt-8 border-t border-[var(--color-gold)]/20 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/20 border border-[var(--color-gold)] flex items-center justify-center font-serif font-bold text-lg text-[var(--color-gold)]">
              {post.author[0]}
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-base">{post.author}</h4>
              <span className="text-xs text-[var(--color-champagne)] font-mono">{post.authorRole}</span>
            </div>
          </div>
        </div>
      </article>

      {/* Related Journal Insights */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--color-gold)]/20 mt-16 pt-12">
        <h3 className="font-serif text-2xl font-bold text-white mb-6">Further Journal Readings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedPosts.map((rel) => (
            <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group rounded-2xl liquid-glass p-5 border border-[var(--color-gold)]/20 hover:border-[var(--color-gold)]/50 transition-all">
              <span className="text-[10px] font-mono text-[var(--color-gold)] block mb-1">{rel.category}</span>
              <h4 className="font-serif font-bold text-base text-white group-hover:text-[var(--color-gold)] transition-colors">{rel.title}</h4>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
