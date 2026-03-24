"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-neon rounded-md flex items-center justify-center">
            <span className="text-dark font-bold text-sm">T</span>
          </div>
          <span className="text-white font-bold text-lg">Tandem<span className="text-neon">Platform</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white/70 hover:text-white text-sm transition">Accueil</Link>
          <Link href="/restaurant/casa-di-giorgio" className="text-white/70 hover:text-white text-sm transition">Demo Restaurant</Link>
          <Link href="/restaurant/toi-toit-mon-toit" className="text-white/70 hover:text-white text-sm transition">Demo Rooftop</Link>
          <Link href="/admin" className="text-white/70 hover:text-white text-sm transition">Back-Office</Link>
          <div className="px-3 py-1 bg-neon/10 border border-neon/30 rounded-full">
            <span className="text-neon text-xs font-semibold tracking-wide">MAQUETTE</span>
          </div>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} /></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-dark border-t border-white/10 px-6 py-4 flex flex-col gap-3">
          <Link href="/" className="text-white/70 text-sm" onClick={() => setOpen(false)}>Accueil</Link>
          <Link href="/restaurant/casa-di-giorgio" className="text-white/70 text-sm" onClick={() => setOpen(false)}>Demo Restaurant</Link>
          <Link href="/restaurant/toi-toit-mon-toit" className="text-white/70 text-sm" onClick={() => setOpen(false)}>Demo Rooftop</Link>
          <Link href="/admin" className="text-white/70 text-sm" onClick={() => setOpen(false)}>Back-Office</Link>
        </div>
      )}
    </nav>
  );
}
