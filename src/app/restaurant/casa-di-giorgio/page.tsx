"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const menuCategories = [
  {
    name: "Antipasti",
    items: [
      { name: "Burrata Pugliese", desc: "Burrata cremeuse, tomates anciennes, pesto basilic, huile d'olive extra vierge", price: "14" },
      { name: "Carpaccio di Manzo", desc: "Fines tranches de boeuf, roquette, copeaux de parmesan, citron", price: "16" },
      { name: "Caponata Siciliana", desc: "Aubergines confites, olives, capres, sauce aigre-douce maison", price: "11" },
      { name: "Vitello Tonnato", desc: "Veau froid, sauce au thon, capres croustillantes", price: "15" },
      { name: "Bruschette Miste", desc: "Trio de bruschette : tomate-basilic, champignons, nduja calabraise", price: "12" },
    ],
  },
  {
    name: "Pasta",
    items: [
      { name: "Tagliatelle al Tartufo", desc: "Pates fraiches maison, creme de truffe noire, parmesan 24 mois", price: "22" },
      { name: "Rigatoni all'Amatriciana", desc: "Guanciale croustillant, tomate San Marzano, pecorino romano", price: "17" },
      { name: "Linguine alle Vongole", desc: "Palourdes fraiches, ail, persil, vin blanc, pointe de piment", price: "19" },
      { name: "Ravioli Ricotta e Spinaci", desc: "Raviolis maison, ricotta de brebis, epinards, beurre de sauge", price: "18" },
      { name: "Cacio e Pepe", desc: "Spaghettoni, pecorino romano DOP, poivre noir de Sarawak", price: "16" },
    ],
  },
  {
    name: "Dolci",
    items: [
      { name: "Tiramisu della Casa", desc: "Notre recette familiale, mascarpone, cafe expresso, cacao amer", price: "10" },
      { name: "Panna Cotta", desc: "Vanille de Madagascar, coulis de fruits rouges de saison", price: "9" },
      { name: "Cannoli Siciliani", desc: "Ricotta fraiche, pistaches de Bronte, eclats de chocolat noir", price: "8" },
      { name: "Affogato al Caffe", desc: "Glace fior di latte, double expresso, amaretto en option", price: "8" },
    ],
  },
];

const reviews = [
  {
    name: "Marie-Claire D.",
    date: "Il y a 2 semaines",
    rating: 5,
    text: "Les meilleures pates fraiches de Montpellier, sans hesitation. Le tagliatelle al tartufo est un pur moment de bonheur. Service impeccable et cadre magnifique sur la place Jean Jaures.",
  },
  {
    name: "Thomas L.",
    date: "Il y a 1 mois",
    rating: 4,
    text: "Tres bonne adresse italienne. La pizza au feu de bois est excellente, pate fine et croustillante comme en Italie. Seul bemol : l'attente un peu longue le samedi soir. A refaire !",
  },
  {
    name: "Sophie & Karim M.",
    date: "Il y a 3 semaines",
    rating: 5,
    text: "On a fete notre anniversaire ici et tout etait parfait. L'equipe est aux petits soins, le tiramisu est le meilleur qu'on ait goute en France. La terrasse en ete est un reve.",
  },
];

const gallery = [
  { label: "Terrasse Place Jaures", gradient: "from-amber-800 to-orange-600" },
  { label: "Pasta Truffe", gradient: "from-yellow-700 to-amber-500" },
  { label: "Tiramisu Maison", gradient: "from-amber-900 to-yellow-700" },
  { label: "Ambiance Soiree", gradient: "from-red-900 to-amber-800" },
  { label: "Pizza Four", gradient: "from-orange-700 to-red-500" },
  { label: "Equipe", gradient: "from-red-800 to-orange-600" },
];

const otherRestaurants = [
  { name: "Toi Toit Mon Toit", type: "Rooftop", href: "/restaurant/toi-toit-mon-toit", color: "from-orange-500 to-amber-400" },
  { name: "Le Cafe Joseph", type: "Bar & Tapas", href: null, color: "from-emerald-600 to-teal-400" },
  { name: "La Mamma St Roch", type: "Italien", href: null, color: "from-red-600 to-pink-400" },
  { name: "Cena", type: "Gastronomique", href: null, color: "from-violet-600 to-purple-400" },
];

export default function CasaDiGiorgioPage() {
  const [activeTab, setActiveTab] = useState(0);
  const accent = "#E63946";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#1a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1a0a0a]/80 to-[#1a0a0a]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#E63946]/30 blur-[100px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-amber-600/20 blur-[120px]" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E63946] animate-pulse" />
            <span className="text-white/60 text-sm tracking-wide">Groupe Tandem</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl text-white mb-6 leading-tight">
            Casa di<br />
            <span style={{ color: accent }}>Giorgio</span>
          </h1>
          <p className="text-white/70 text-xl md:text-2xl mb-3 font-light">
            Cuisine italienne authentique au coeur de Montpellier
          </p>
          <p className="text-white/40 text-base md:text-lg mb-10">
            Pates fraiches, pizzas au feu de bois, cocktails
          </p>
          <a
            href="#reserver"
            className="inline-block px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: accent, boxShadow: `0 0 40px ${accent}40` }}
          >
            Reserver une table
          </a>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Place Jean Jaures, Montpellier
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Mar-Dim 12h-14h30 / 19h-23h
            </div>
          </div>
        </div>
      </section>

      {/* Notre Carte */}
      <section className="py-24 bg-[#FDFAF6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">Notre Carte</h2>
            <p className="text-gray-500 text-lg">Des produits frais, des recettes transmises de generation en generation</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-12">
            {menuCategories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                  activeTab === i
                    ? "text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
                style={activeTab === i ? { backgroundColor: accent } : {}}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Items */}
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {menuCategories[activeTab].items.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#E63946]/20 transition-all group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl text-gray-900 group-hover:text-[#E63946] transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold whitespace-nowrap ml-4" style={{ color: accent }}>
                    {item.price} &euro;
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reserver */}
      <section id="reserver" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">Reserver</h2>
            <p className="text-gray-500 text-lg">Reservez votre table en quelques clics</p>
          </div>

          <div className="bg-[#FDFAF6] rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition"
                />
              </div>

              {/* Heure */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Heure</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition">
                  <option>12h00</option>
                  <option>12h30</option>
                  <option>13h00</option>
                  <option>19h00</option>
                  <option>19h30</option>
                  <option>20h00</option>
                  <option>20h30</option>
                  <option>21h00</option>
                </select>
              </div>

              {/* Nombre de convives */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre de convives</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition">
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1}>{i + 1} {i === 0 ? "personne" : "personnes"}</option>
                  ))}
                </select>
              </div>

              {/* Nom */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nom</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition"
                />
              </div>

              {/* Telephone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Telephone</label>
                <input
                  type="tel"
                  placeholder="06 12 34 56 78"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <button
                className="w-full md:w-auto px-10 py-4 rounded-xl text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "#16a34a", boxShadow: "0 0 30px rgba(22, 163, 74, 0.3)" }}
              >
                Confirmer la reservation
              </button>
              <p className="text-gray-400 text-sm">Confirmation automatique par email</p>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-gray-500 font-medium">Powered by Zenchef</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avis Google */}
      <section className="py-24 bg-[#FDFAF6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">Avis Google</h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="flex">
                {[1, 2, 3, 4].map((s) => (
                  <svg key={s} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <defs>
                    <linearGradient id="half-star-casa">
                      <stop offset="40%" stopColor="currentColor" />
                      <stop offset="40%" stopColor="#d1d5db" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#half-star-casa)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-gray-900">4.4</span>
              <span className="text-gray-400">/5</span>
              <span className="text-gray-400 text-sm ml-2">847 avis</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E63946] to-amber-500 flex items-center justify-center text-white font-bold text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{r.name}</div>
                    <div className="text-gray-400 text-xs">{r.date}</div>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }, (_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">Galerie</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((g, i) => (
              <div
                key={g.label}
                className={`relative bg-gradient-to-br ${g.gradient} rounded-2xl overflow-hidden group cursor-pointer ${
                  i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto min-h-[200px] md:min-h-[400px]" : "aspect-square"
                }`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                <div className="absolute inset-0 flex items-end p-4 md:p-6">
                  <span className="text-white font-semibold text-sm md:text-lg drop-shadow-lg">{g.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autres adresses */}
      <section className="py-24 bg-[#FDFAF6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">Decouvrez nos autres adresses</h2>
            <p className="text-gray-500 text-lg">Le Groupe Tandem a Montpellier</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherRestaurants.map((r) => {
              const inner = (
                <div className={`relative bg-gradient-to-br ${r.color} rounded-2xl p-6 h-48 flex flex-col justify-end ${r.href ? "group cursor-pointer hover:scale-[1.02] transition-transform" : "opacity-80"}`}>
                  <div className="absolute inset-0 bg-black/20 rounded-2xl" />
                  <div className="relative">
                    <span className="text-white/70 text-xs font-medium uppercase tracking-wider">{r.type}</span>
                    <h3 className="text-white font-display text-xl mt-1">{r.name}</h3>
                    {r.href && (
                      <span className="text-white/60 text-xs mt-2 inline-block group-hover:text-white transition">
                        Voir le site &rarr;
                      </span>
                    )}
                  </div>
                </div>
              );
              return r.href ? (
                <Link key={r.name} href={r.href}>{inner}</Link>
              ) : (
                <div key={r.name}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">Infos pratiques</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${accent}15` }}>
                  <svg className="w-5 h-5" style={{ color: accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                  <p className="text-gray-500">Place Jean Jaures, 34000 Montpellier</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${accent}15` }}>
                  <svg className="w-5 h-5" style={{ color: accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telephone</h3>
                  <p className="text-gray-500">04 67 XX XX XX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${accent}15` }}>
                  <svg className="w-5 h-5" style={{ color: accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                  <p className="text-gray-500">Mardi - Dimanche</p>
                  <p className="text-gray-500">12h00 - 14h30 / 19h00 - 23h00</p>
                  <p className="text-gray-400 text-sm mt-1">Ferme le lundi</p>
                </div>
              </div>
            </div>

            {/* Google Maps placeholder */}
            <div className="bg-gray-100 rounded-2xl min-h-[300px] flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                <p className="text-gray-400 font-medium">Google Maps</p>
                <p className="text-gray-300 text-sm">Place Jean Jaures, Montpellier</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer restaurant="Casa di Giorgio" />
    </div>
  );
}
