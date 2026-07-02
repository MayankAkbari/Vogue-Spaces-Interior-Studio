"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, X, ChevronDown, Sparkles, PhoneCall, ArrowRight, 
  Home, Building2, Compass, LayoutGrid, Award, MessageSquareQuote, 
  BookOpen, HelpCircle, Mail, Layers
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const servicesList = [
  { title: "Luxury Residential Interior", href: "/services#residential", desc: "Bespoke living spaces crafted for comfort and elegance." },
  { title: "Premium Villa Design", href: "/services#villas", desc: "Architectural grandeur and expansive luxury interiors." },
  { title: "Commercial & Office Space", href: "/services#commercial", desc: "Elevating corporate prestige and employee inspiration." },
  { title: "Modular Kitchen Design", href: "/services#kitchen", desc: "State-of-the-art culinary ergonomics and aesthetics." },
  { title: "Turnkey Interior Solutions", href: "/services#turnkey", desc: "Seamless end-to-end execution from raw shell to luxury delivery." },
  { title: "Custom Furniture & Lighting", href: "/services#bespoke", desc: "Handcrafted masterworks designed exclusively for your home." },
];

const portfolioCategories = [
  { title: "Penthouse & Apartments", href: "/portfolio?category=apartments", count: "18 Projects" },
  { title: "Luxury Royal Villas", href: "/portfolio?category=villas", count: "12 Projects" },
  { title: "Executive Headquarters", href: "/portfolio?category=offices", count: "9 Projects" },
  { title: "Haute Modular Kitchens", href: "/portfolio?category=kitchens", count: "24 Projects" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "liquid-glass-nav py-3" : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Top Left */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 overflow-hidden rounded-full border border-[var(--color-gold)]/40 p-1 bg-black/60 shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/logo/vogue-logo.png" 
              alt="Vogue Spaces Interior Studio" 
              fill 
              className="object-contain p-1"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wider gold-gradient-text">
              VOGUE SPACES
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[var(--color-champagne)]/80 font-medium">
              Interior Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
          <NavLink href="/" label="Home" active={pathname === "/"} />
          <NavLink href="/about" label="About" active={pathname === "/about"} />

          {/* Services Mega Menu Trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveMega("services")}
            onMouseLeave={() => setActiveMega(null)}
          >
            <Link 
              href="/services" 
              className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-full hover:text-[var(--color-gold)] ${
                pathname.startsWith("/services") ? "text-[var(--color-gold)] bg-[var(--color-gold)]/10" : "text-[var(--color-ivory)]/90"
              }`}
            >
              Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMega === "services" ? "rotate-180 text-[var(--color-gold)]" : ""}`} />
            </Link>

            <AnimatePresence>
              {activeMega === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[620px] rounded-2xl liquid-glass p-6 grid grid-cols-2 gap-4 border border-[var(--color-gold)]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                >
                  {servicesList.map((srv, idx) => (
                    <Link
                      key={idx}
                      href={srv.href}
                      className="group p-3 rounded-xl hover:bg-[var(--color-gold)]/10 transition-all border border-transparent hover:border-[var(--color-gold)]/20"
                    >
                      <h4 className="text-sm font-semibold text-[var(--color-ivory)] group-hover:text-[var(--color-gold)] transition-colors flex items-center justify-between">
                        {srv.title}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-gold)]" />
                      </h4>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">{srv.desc}</p>
                    </Link>
                  ))}
                  <div className="col-span-2 mt-2 pt-3 border-t border-[var(--color-gold)]/15 flex items-center justify-between">
                    <span className="text-xs text-[var(--color-champagne)] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)]" /> Looking for bespoke turnkey execution?
                    </span>
                    <Link href="/contact" className="text-xs font-semibold text-[var(--color-gold)] hover:underline flex items-center gap-1">
                      Schedule Consultation &rarr;
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Portfolio Mega Menu Trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveMega("portfolio")}
            onMouseLeave={() => setActiveMega(null)}
          >
            <Link 
              href="/portfolio" 
              className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-full hover:text-[var(--color-gold)] ${
                pathname.startsWith("/portfolio") ? "text-[var(--color-gold)] bg-[var(--color-gold)]/10" : "text-[var(--color-ivory)]/90"
              }`}
            >
              Portfolio <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMega === "portfolio" ? "rotate-180 text-[var(--color-gold)]" : ""}`} />
            </Link>

            <AnimatePresence>
              {activeMega === "portfolio" && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[480px] rounded-2xl liquid-glass p-5 grid grid-cols-2 gap-3 border border-[var(--color-gold)]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                >
                  {portfolioCategories.map((cat, idx) => (
                    <Link
                      key={idx}
                      href={cat.href}
                      className="p-3 rounded-xl hover:bg-[var(--color-gold)]/10 transition-all border border-transparent hover:border-[var(--color-gold)]/20 group"
                    >
                      <h4 className="text-sm font-semibold text-[var(--color-ivory)] group-hover:text-[var(--color-gold)]">
                        {cat.title}
                      </h4>
                      <span className="text-[11px] text-[var(--color-gold)]/80 font-mono">{cat.count}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink href="/process" label="Process" active={pathname === "/process"} />
          <NavLink href="/reviews" label="Reviews" active={pathname === "/reviews"} />
          <NavLink href="/gallery" label="Gallery" active={pathname === "/gallery"} />
          <NavLink href="/blog" label="Blog" active={pathname === "/blog"} />
          <NavLink href="/faq" label="FAQs" active={pathname === "/faq"} />
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link 
            href="/admin" 
            className="text-xs font-mono px-3 py-1.5 rounded-full border border-gray-700 hover:border-[var(--color-gold)] text-gray-300 hover:text-[var(--color-gold)] transition-colors"
          >
            Admin Portal
          </Link>
          <Link 
            href="/contact" 
            className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-champagne)] to-[var(--color-gold)] text-[var(--color-obsidian)] font-semibold text-sm shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 fill-[var(--color-obsidian)]" />
            <span>Book Consultation</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 rounded-xl border border-[var(--color-gold)]/30 bg-black/50 text-[var(--color-gold)] hover:bg-[var(--color-gold)]/20 transition-all"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-t border-[var(--color-gold)]/20 liquid-glass mt-3 px-6 py-6 max-h-[85vh] overflow-y-auto"
          >
            <div className="grid grid-cols-2 gap-3 mb-6">
              <MobileNavLink href="/" icon={Home} label="Home" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="/about" icon={Building2} label="About Us" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="/services" icon={Layers} label="Services" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="/portfolio" icon={LayoutGrid} label="Portfolio" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="/process" icon={Compass} label="Our Process" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="/reviews" icon={MessageSquareQuote} label="Reviews" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="/gallery" icon={Award} label="Gallery" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="/blog" icon={BookOpen} label="Design Blog" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="/faq" icon={HelpCircle} label="FAQs" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="/contact" icon={Mail} label="Contact" onClick={() => setMobileMenuOpen(false)} />
            </div>

            <div className="border-t border-[var(--color-gold)]/20 pt-5 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-champagne)] text-[var(--color-obsidian)] font-bold text-center text-sm shadow-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Book VIP Consultation
              </Link>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl border border-[var(--color-gold)]/30 text-center text-xs font-mono text-[var(--color-champagne)] hover:bg-[var(--color-gold)]/10"
              >
                Access Admin Dashboard
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium transition-all rounded-full hover:text-[var(--color-gold)] ${
        active 
          ? "text-[var(--color-gold)] bg-[var(--color-gold)]/15 border border-[var(--color-gold)]/30 shadow-[0_0_10px_rgba(212,175,55,0.2)]" 
          : "text-[var(--color-ivory)]/90 hover:bg-white/5"
      }`}
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ href, icon: Icon, label, onClick }: { href: string; icon: any; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[var(--color-gold)]/40 hover:bg-[var(--color-gold)]/10 text-sm text-[var(--color-ivory)] transition-all"
    >
      <Icon className="w-4 h-4 text-[var(--color-gold)]" />
      <span>{label}</span>
    </Link>
  );
}
