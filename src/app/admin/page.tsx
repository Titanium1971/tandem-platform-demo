"use client";

import { useState } from "react";
import Link from "next/link";

const restaurants = [
  { name: "Casa di Giorgio", color: "#E63946", dot: "bg-[#E63946]" },
  { name: "Toi Toit Mon Toit", color: "#F4A261", dot: "bg-[#F4A261]" },
  { name: "Chateau Paloma", color: "#2A9D8F", dot: "bg-[#2A9D8F]" },
  { name: "Cena", color: "#264653", dot: "bg-[#264653]" },
  { name: "Le Cafe Joseph", color: "#E9C46A", dot: "bg-[#E9C46A]" },
  { name: "La Mamma St Roch", color: "#E63946", dot: "bg-[#E63946]" },
];

const navItems = [
  { label: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", active: true },
  { label: "Reservations", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", active: false },
  { label: "Carte & Menus", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", active: false },
  { label: "Galerie", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z", active: false },
  { label: "Evenements", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", active: false },
  { label: "Avis & Reputation", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z", active: false },
  { label: "Recrutement", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", active: false },
  { label: "Parametres", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", active: false },
];

const reservationsData = [
  { name: "Casa di Giorgio", resa: 8, couverts: 24, pct: 75, color: "bg-orange-400" },
  { name: "Chateau Paloma", resa: 12, couverts: 48, pct: 92, color: "bg-[#39FF14]" },
  { name: "Cena", resa: 6, couverts: 18, pct: 85, color: "bg-[#39FF14]" },
  { name: "Le Cafe Joseph", resa: 5, couverts: 15, pct: 45, color: "bg-red-400" },
  { name: "La Mamma St Roch", resa: 9, couverts: 32, pct: 68, color: "bg-orange-400" },
  { name: "Toi Toit Mon Toit", resa: 7, couverts: 21, pct: 55, color: "bg-orange-400" },
];

const modulesMatrix = [
  { name: "Casa di Giorgio", carte: true, resa: true, galerie: true, avis: true, events: false, cc: false },
  { name: "Chateau Paloma", carte: true, resa: true, galerie: true, avis: true, events: true, cc: true },
  { name: "Cena", carte: true, resa: true, galerie: false, avis: true, events: false, cc: false },
  { name: "Toi Toit Mon Toit", carte: true, resa: true, galerie: true, avis: true, events: true, cc: false },
  { name: "Le Cafe Joseph", carte: true, resa: false, galerie: false, avis: true, events: false, cc: false },
];

const moduleColumns = ["Carte", "Resa", "Galerie", "Avis", "Events", "C&C"];
const moduleKeys = ["carte", "resa", "galerie", "avis", "events", "cc"] as const;

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const today = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-[240px] bg-[#09090B] text-white z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="px-5 py-5 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#39FF14] rounded-md flex items-center justify-center">
              <span className="text-[#09090B] font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-lg">
              Tandem<span className="text-[#39FF14]">Platform</span>
            </span>
          </Link>
        </div>

        {/* User */}
        <div className="px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#39FF14]/60 to-[#39FF14]/20 flex items-center justify-center text-sm font-bold text-[#09090B]">
              DK
            </div>
            <div>
              <div className="text-sm font-semibold">David Karouby</div>
              <div className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#39FF14]/15 text-[#39FF14] rounded-full inline-block mt-0.5">
                Super Admin
              </div>
            </div>
          </div>
        </div>

        {/* Restaurant selector */}
        <div className="px-5 py-4 border-b border-white/10">
          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#39FF14]" />
              <span className="text-xs font-semibold">Vue Groupe (15 etab.)</span>
              <svg className="w-3 h-3 text-white/40 ml-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="space-y-1.5">
              {restaurants.map((r) => (
                <div key={r.name} className="flex items-center gap-2 text-white/50 hover:text-white/80 cursor-pointer transition text-[11px]">
                  <div className={`w-1.5 h-1.5 rounded-full ${r.dot}`} />
                  {r.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                item.active
                  ? "bg-[#39FF14]/10 text-[#39FF14] font-semibold"
                  : "text-white/50 hover:text-white/80 hover:bg-white/5"
              }`}
            >
              <svg className="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="px-5 py-4 border-t border-white/10">
          <div className="text-[10px] text-white/25 uppercase tracking-widest">CC Developpement</div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:ml-[240px] min-h-screen flex flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 className="text-lg font-bold text-[#09090B]">Bonjour David</h1>
              <p className="text-xs text-gray-400 capitalize">{today}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-500 hover:text-gray-700 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <div className="w-8 h-8 rounded-full bg-[#09090B] flex items-center justify-center text-[#39FF14] text-xs font-bold">
              DK
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 pb-24 space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Reservations today */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Reservations aujourd&apos;hui</span>
                <div className="w-8 h-8 bg-[#39FF14]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#39FF14]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#09090B]">47</div>
              <div className="flex items-center gap-1 mt-1">
                <svg className="w-4 h-4 text-[#39FF14]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-xs font-semibold text-[#39FF14]">+12%</span>
                <span className="text-xs text-gray-400 ml-1">vs. semaine derniere</span>
              </div>
            </div>

            {/* Couverts hier */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Couverts hier</span>
                <div className="w-8 h-8 bg-[#39FF14]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#39FF14]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#09090B]">312</div>
              <div className="flex items-center gap-1 mt-1">
                <svg className="w-4 h-4 text-[#39FF14]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-xs font-semibold text-[#39FF14]">+8%</span>
                <span className="text-xs text-gray-400 ml-1">vs. semaine derniere</span>
              </div>
            </div>

            {/* Note Google */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Note Google moyenne</span>
                <div className="w-8 h-8 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-[#09090B]">4.5<span className="text-lg text-gray-400 font-normal">/5</span></div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs text-gray-400">Stable — 15 etablissements</span>
              </div>
            </div>

            {/* Avis negatifs */}
            <div className="bg-white rounded-xl border border-red-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-red-400 uppercase tracking-wider">Avis negatifs cette semaine</span>
                <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-red-500">2</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-xs text-red-400 font-semibold">1 non repondu</span>
                <span className="text-xs text-gray-400 ml-1">— action requise</span>
              </div>
            </div>
          </div>

          {/* Reservations par etablissement */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-[#09090B]">Reservations par etablissement</h2>
                <p className="text-xs text-gray-400 mt-0.5">Aujourd&apos;hui — temps reel</p>
              </div>
              <span className="text-xs font-semibold text-[#39FF14] bg-[#39FF14]/10 px-3 py-1 rounded-full">Live</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-xs text-gray-400 uppercase tracking-wider border-b border-gray-100">
                    <th className="text-left px-5 py-3 font-medium">Restaurant</th>
                    <th className="text-center px-4 py-3 font-medium">Reservations</th>
                    <th className="text-center px-4 py-3 font-medium">Couverts</th>
                    <th className="text-left px-4 py-3 font-medium min-w-[180px]">Remplissage</th>
                  </tr>
                </thead>
                <tbody>
                  {reservationsData.map((r, i) => (
                    <tr key={r.name} className={`border-b border-gray-50 hover:bg-gray-50/50 transition ${i === reservationsData.length - 1 ? "border-b-0" : ""}`}>
                      <td className="px-5 py-3.5 text-sm font-medium text-[#09090B]">{r.name}</td>
                      <td className="px-4 py-3.5 text-sm text-center font-semibold">{r.resa}</td>
                      <td className="px-4 py-3.5 text-sm text-center text-gray-500">{r.couverts}</td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${r.color}`} style={{ width: `${r.pct}%` }} />
                          </div>
                          <span className="text-xs font-semibold text-gray-600 w-10 text-right">{r.pct}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Two columns: Avis + Alertes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Derniers avis Google */}
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-[#09090B]">Derniers avis Google</h2>
                  <p className="text-xs text-gray-400 mt-0.5">Tous etablissements confondus</p>
                </div>
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
              <div className="divide-y divide-gray-100">
                {/* Review 1 */}
                <div className="px-5 py-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">Chateau Paloma</span>
                    <span className="text-[10px] text-gray-300 ml-auto">il y a 2h</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">&quot;Excellent repas au Chateau Paloma, cadre magnifique et service impeccable. Nous reviendrons !&quot;</p>
                </div>
                {/* Review 2 - negative */}
                <div className="px-5 py-4 bg-red-50/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className={`w-3.5 h-3.5 ${s <= 2 ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">La Mamma St Roch</span>
                    <span className="text-[10px] text-gray-300 ml-auto">il y a 5h</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">&quot;Service lent a La Mamma, dommage car les plats etaient bons.&quot;</p>
                  <button className="px-3 py-1.5 bg-red-500 text-white text-xs font-semibold rounded-lg hover:bg-red-600 transition">
                    Repondre
                  </button>
                </div>
                {/* Review 3 */}
                <div className="px-5 py-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className={`w-3.5 h-3.5 ${s <= 4 ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium">Toi Toit Mon Toit</span>
                    <span className="text-[10px] text-gray-300 ml-auto">il y a 1 jour</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">&quot;Super rooftop, cocktails top, vue incroyable. On recommande a 100%.&quot;</p>
                </div>
              </div>
            </div>

            {/* Alertes */}
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-bold text-[#09090B]">Alertes</h2>
                <p className="text-xs text-gray-400 mt-0.5">Actions requises et notifications</p>
              </div>
              <div className="divide-y divide-gray-100">
                {/* Red alert */}
                <div className="px-5 py-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-[#09090B]">casadi-giorgio.com</div>
                    <div className="text-xs text-gray-500 mt-0.5">Domaine redirige vers lien mort</div>
                  </div>
                  <button className="px-3 py-1.5 bg-red-500 text-white text-xs font-semibold rounded-lg hover:bg-red-600 transition shrink-0">
                    Corriger
                  </button>
                </div>
                {/* Orange alert */}
                <div className="px-5 py-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-400/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-[#09090B]">La Mamma St Roch</div>
                    <div className="text-xs text-gray-500 mt-0.5">2 avis negatifs non repondus</div>
                  </div>
                  <button className="px-3 py-1.5 bg-orange-400 text-white text-xs font-semibold rounded-lg hover:bg-orange-500 transition shrink-0">
                    Voir
                  </button>
                </div>
                {/* Green alert */}
                <div className="px-5 py-4 flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#39FF14]/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#39FF14]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-[#09090B]">Chateau Paloma</div>
                    <div className="text-xs text-gray-500 mt-0.5">Taux de remplissage record cette semaine (92%)</div>
                  </div>
                  <span className="px-3 py-1.5 bg-[#39FF14]/10 text-[#39FF14] text-xs font-semibold rounded-lg shrink-0">
                    Record
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Modules actifs */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-bold text-[#09090B]">Modules actifs par etablissement</h2>
              <p className="text-xs text-gray-400 mt-0.5">Matrice d&apos;activation des modules cles</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-xs text-gray-400 uppercase tracking-wider border-b border-gray-100">
                    <th className="text-left px-5 py-3 font-medium">Restaurant</th>
                    {moduleColumns.map((col) => (
                      <th key={col} className="text-center px-3 py-3 font-medium">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {modulesMatrix.map((row, i) => (
                    <tr key={row.name} className={`border-b border-gray-50 ${i === modulesMatrix.length - 1 ? "border-b-0" : ""}`}>
                      <td className="px-5 py-3 text-sm font-medium text-[#09090B]">{row.name}</td>
                      {moduleKeys.map((key) => (
                        <td key={key} className="text-center px-3 py-3">
                          {row[key] ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-[#39FF14]/10 rounded-full">
                              <svg className="w-3.5 h-3.5 text-[#39FF14]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 text-gray-300">
                              —
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>

        {/* Floating demo banner */}
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:left-[240px]">
          <div className="bg-[#09090B] border-t border-[#39FF14]/20 px-4 py-2.5 flex items-center justify-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
            <span className="text-xs text-white/60">
              Ceci est une maquette de demonstration — Les donnees sont fictives — <span className="text-[#39FF14] font-semibold">CC Developpement</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
