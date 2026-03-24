"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const menuCategories = [
  {
    name: "Cocktails Signatures",
    items: [
      { name: "Sunset Montpellier", desc: "Rhum vieux, passion, mangue, citron vert, sirop de gingembre, fleur d'hibiscus", price: "14" },
      { name: "Toi Toit Spritz", desc: "Aperol, prosecco, eau de fleur d'oranger, zeste d'orange sanguine", price: "13" },
      { name: "Smoky Rooftop", desc: "Mezcal, ananas roti, jalapeño, agave, citron, sel fume", price: "16" },
      { name: "Jardin Mediterraneen", desc: "Gin infuse romarin, concombre, basilic, tonic artisanal, poivre rose", price: "14" },
    ],
  },
  {
    name: "Tapas",
    items: [
      { name: "Croquetas Jamon", desc: "Croquettes croustillantes au jambon iberico, sauce aioli maison", price: "9" },
      { name: "Gambas al Ajillo", desc: "Gambas sautees a l'ail, piment d'Espelette, persil, pain grille", price: "14" },
      { name: "Patatas Bravas", desc: "Pommes de terre croustillantes, sauce brava fumee, creme fraiche", price: "8" },
      { name: "Burrata & Figues", desc: "Burrata cremosa, figues roties au miel, noix, roquette sauvage", price: "13" },
      { name: "Hummus Trio", desc: "Classique, betterave & feta, truffe noire — pains pita maison", price: "11" },
    ],
  },
  {
    name: "Planches",
    items: [
      { name: "Planche Iberique", desc: "Jamon iberico de bellota, chorizo, manchego affine, olives, pan con tomate", price: "26" },
      { name: "Planche Mer", desc: "Saumon fume, crevettes marinées, tarama maison, blinis, aneth", price: "28" },
      { name: "Planche Vegetale", desc: "Houmous, guacamole, legumes croquants, fromages affines, fruits secs", price: "18" },
    ],
  },
];

const reviews = [
  {
    name: "Julien R.",
    date: "Il y a 1 semaine",
    rating: 5,
    text: "La plus belle vue de Montpellier, c'est un fait. Les cocktails sont inventifs et vraiment bien executes. Le Sunset Montpellier est devenu mon incontournable. Ambiance magique au coucher de soleil.",
  },
  {
    name: "Camille & Lea B.",
    date: "Il y a 2 semaines",
    rating: 5,
    text: "On y va chaque vendredi soir entre copines. Le DJ set est toujours au top, les tapas sont genereux et delicieux. Le meilleur spot pour commencer la soiree a Montpellier !",
  },
  {
    name: "Antoine P.",
    date: "Il y a 1 mois",
    rating: 4,
    text: "Excellent rooftop, les planches sont copieuses et les cocktails parmi les meilleurs de la ville. Un peu d'attente le samedi soir mais ca vaut vraiment le coup. Vue a 360 degrees incroyable.",
  },
];

const gallery = [
  { label: "Vue Panoramique", gradient: "from-orange-500 to-pink-500" },
  { label: "Cocktails Signature", gradient: "from-amber-500 to-orange-400" },
  { label: "Sunset", gradient: "from-pink-500 to-orange-400" },
  { label: "DJ Set", gradient: "from-violet-600 to-pink-500" },
  { label: "Tapas Board", gradient: "from-amber-600 to-yellow-400" },
  { label: "Ambiance Nuit", gradient: "from-indigo-800 to-violet-600" },
];

const otherRestaurants = [
  { name: "Casa di Giorgio", type: "Italien", href: "/restaurant/casa-di-giorgio", color: "from-red-600 to-orange-500" },
  { name: "Napoleon Dynamite", type: "Bistrot", href: null, color: "from-blue-600 to-indigo-400" },
  { name: "Cafe Paume", type: "Cafe & Brunch", href: null, color: "from-amber-600 to-yellow-400" },
  { name: "La Plage Bonaventure", type: "Beach Bar", href: null, color: "from-cyan-500 to-teal-400" },
];

export default function ToiToitMonToitPage() {
  const [activeTab, setActiveTab] = useState(0);
  const accent = "#F4A261";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#1a0f05] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#1a0f05]/70 to-[#1a0f05]" />
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-[#F4A261]/40 blur-[100px]" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-pink-500/20 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-orange-400/15 blur-[80px]" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F4A261] animate-pulse" />
            <span className="text-white/60 text-sm tracking-wide">Groupe Tandem</span>
          </div>
          <h1 className="font-display text-5xl md:text-8xl text-white mb-6 leading-tight">
            Toi Toit<br />
            <span style={{ color: accent }}>Mon Toit</span>
          </h1>
          <p className="text-white/70 text-xl md:text-2xl mb-3 font-light">
            Le rooftop de Montpellier
          </p>
          <p className="text-white/40 text-base md:text-lg mb-10">
            Cocktails, tapas & vue panoramique
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
              Rooftop, Centre-ville Montpellier
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Mer-Dim 17h-01h
            </div>
          </div>
        </div>
      </section>

      {/* Notre Carte */}
      <section className="py-24 bg-[#FFF9F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-4">Notre Carte</h2>
            <p className="text-gray-500 text-lg">Des saveurs pensees pour accompagner le coucher de soleil</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
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
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#F4A261]/20 transition-all group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl text-gray-900 group-hover:text-[#F4A261] transition-colors">
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
            <p className="text-gray-500 text-lg">Assurez votre place au sommet</p>
          </div>

          <div className="bg-[#FFF9F2] rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/30 focus:border-[#F4A261] transition"
                />
              </div>

              {/* Heure */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Heure</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/30 focus:border-[#F4A261] transition">
                  <option>17h00</option>
                  <option>17h30</option>
                  <option>18h00</option>
                  <option>18h30</option>
                  <option>19h00</option>
                  <option>19h30</option>
                  <option>20h00</option>
                  <option>20h30</option>
                  <option>21h00</option>
                  <option>21h30</option>
                  <option>22h00</option>
                </select>
              </div>

              {/* Nombre de convives */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre de convives</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/30 focus:border-[#F4A261] transition">
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/30 focus:border-[#F4A261] transition"
                />
              </div>

              {/* Telephone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Telephone</label>
                <input
                  type="tel"
                  placeholder="06 12 34 56 78"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/30 focus:border-[#F4A261] transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/30 focus:border-[#F4A261] transition"
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
      <section className="py-24 bg-[#FFF9F2]">
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
                    <linearGradient id="half-star-toit">
                      <stop offset="60%" stopColor="currentColor" />
                      <stop offset="60%" stopColor="#d1d5db" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#half-star-toit)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-gray-900">4.6</span>
              <span className="text-gray-400">/5</span>
              <span className="text-gray-400 text-sm ml-2">523 avis</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F4A261] to-pink-500 flex items-center justify-center text-white font-bold text-sm">
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
      <section className="py-24 bg-[#FFF9F2]">
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
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${accent}25` }}>
                  <svg className="w-5 h-5" style={{ color: accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                  <p className="text-gray-500">Rooftop, Centre-ville, 34000 Montpellier</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${accent}25` }}>
                  <svg className="w-5 h-5" style={{ color: accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telephone</h3>
                  <p className="text-gray-500">04 67 XX XX XX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${accent}25` }}>
                  <svg className="w-5 h-5" style={{ color: accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                  <p className="text-gray-500">Mercredi - Dimanche</p>
                  <p className="text-gray-500">17h00 - 01h00</p>
                  <p className="text-gray-400 text-sm mt-1">Ferme lundi et mardi</p>
                </div>
              </div>
            </div>

            {/* Google Maps placeholder */}
            <div className="bg-gray-100 rounded-2xl min-h-[300px] flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                <p className="text-gray-400 font-medium">Google Maps</p>
                <p className="text-gray-300 text-sm">Rooftop, Centre-ville Montpellier</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer restaurant="Toi Toit Mon Toit" />
    </div>
  );
}
