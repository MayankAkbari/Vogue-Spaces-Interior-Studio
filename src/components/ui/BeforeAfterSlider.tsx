"use client";

import React, { useState, useRef } from "react";
import { Sparkles, MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  description?: string;
}

export default function BeforeAfterSlider({
  beforeImage = "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
  afterImage = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
  beforeLabel = "Raw Civil Shell (Before)",
  afterLabel = "Vogue Bespoke Luxury (After)",
  title = "Penthouse Transformation — Bandra West",
  description = "See how our architectural space planning transformed a bare concrete frame into a cinematic living lounge with custom brass accents and Italian marble flooring."
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 100);
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full rounded-3xl liquid-glass p-6 sm:p-8 border border-[var(--color-gold)]/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-gold)] flex items-center gap-1.5 mb-1">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Metamorphosis
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
            {title}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-gray-400 max-w-md">
          {description}
        </p>
      </div>

      {/* Interactive Slider Box */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[380px] sm:h-[500px] md:h-[580px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-[var(--color-gold)]/20 shadow-2xl group"
      >
        {/* After Image (Full background) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${afterImage}')` }}
        >
          <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-[var(--color-gold)]/50 text-xs font-semibold text-[var(--color-champagne)] shadow-lg">
            {afterLabel}
          </div>
        </div>

        {/* Before Image (Clipped overlay) */}
        <div
          className="absolute inset-y-0 left-0 bg-cover bg-center overflow-hidden transition-all duration-75"
          style={{
            width: `${sliderPosition}%`,
            backgroundImage: `url('${beforeImage}')`,
          }}
        >
          <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/30 text-xs font-semibold text-gray-300 shadow-lg">
            {beforeLabel}
          </div>
        </div>

        {/* Divider Handle */}
        <div
          className="absolute inset-y-0 w-1 bg-[var(--color-gold)] shadow-[0_0_20px_rgba(212,175,55,1)] pointer-events-none transition-all duration-75"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[var(--color-obsidian)] border-2 border-[var(--color-gold)] flex items-center justify-center text-[var(--color-gold)] shadow-[0_0_25px_rgba(212,175,55,0.8)] group-hover:scale-110 transition-transform">
            <MoveHorizontal className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-gray-500 font-mono">
        <span>&larr; Drag handle to reveal luxury transformation</span>
        <span>Drag Position: {sliderPosition}%</span>
      </div>
    </div>
  );
}
