"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const accent = "#F4A261";

const subNav = [
  { label: "Carte", href: "/restaurant/toi-toit-mon-toit/carte" },
  { label: "Reservation", href: "/restaurant/toi-toit-mon-toit/reservation" },
  { label: "Evenements", href: "/restaurant/toi-toit-mon-toit/evenements" },
  { label: "Click & Collect", href: "/restaurant/toi-toit-mon-toit/click-collect" },
  { label: "Carte Cadeau", href: "/restaurant/toi-toit-mon-toit/carte-cadeau" },
  { label: "Avis", href: "/restaurant/toi-toit-mon-toit/avis" },
];

const events = [
  {
    title: "Sunset DJ Set",
    date: "Samedi 29 mars",
    time: "18h - 00h",
    desc: "Notre DJ resident aux platines pour accompagner le coucher de soleil. Cocktails signatures, ambiance chill qui monte en puissance. Le rendez-vous incontournable du samedi soir sur les toits.",
    price: "Entree libre",
    priceSub: "Consommation obligatoire",
    spots: null,
    gradient: "from-orange-500 to-pink-500",
    tag: "Chaque samedi",
  },
  {
    title: "Wine & View",
    date: "Jeudi 3 avril",
    time: "19h00",
    desc: "Degustation de 5 vins du Languedoc selectionnes par notre sommelier, accompagnes de tapas maison. Une experience sensorielle avec la plus belle vue de Montpellier en toile de fond.",
    price: "45 EUR / pers",
    priceSub: null,
    spots: 20,
    gradient: "from-purple-600 to-pink-500",
    tag: "Degustation",
  },
  {
    title: "Full Moon Party",
    date: "Samedi 12 avril",
    time: "20h00",
    desc: "Soiree speciale pleine lune sur le rooftop. Cocktails ephemeres crees pour l'occasion, DJ set electro-chill, lumieres tamisees. La lune comme vous ne l'avez jamais vue.",
    price: "Entree libre",
    priceSub: null,
    spots: null,
    gradient: "from-indigo-800 to-violet-600",
    tag: "Special",
  },
  {
    title: "Brunch en Hauteur",
    date: "Dimanche 6 avril",
    time: "11h - 15h",
    desc: "Brunch gourmand sur les toits de Montpellier. Buffet sucre-sale, oeufs Benedict, pancakes, fruits frais, jus presses, cafe a volonte. DJ chill en fond sonore.",
    price: "32 EUR / pers",
    priceSub: null,
    spots: 30,
    gradient: "from-amber-500 to-orange-400",
    tag: "Brunch",
  },
  {
    title: "Afterwork Tech",
    date: "Mardi 8 avril",
    time: "18h30",
    desc: "Networking decontracte pour la communaute tech de Montpellier. Rencontrez d'autres passionnes autour d'un cocktail offert. Startups, freelances, devs — tout le monde est bienvenu.",
    price: "Gratuit sur inscription",
    priceSub: "1 cocktail offert",
    spots: null,
    gradient: "from-cyan-500 to-blue-500",
    tag: "Networking",
  },
];

export default function EvenementsPage() {
  const [showPrivForm, setShowPrivForm] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF9F2]">
      <Navbar />

      {/* Sub-navigation */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-3">
            {subNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  item.href.endsWith("/evenements")
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
                style={item.href.endsWith("/evenements") ? { backgroundColor: accent } : {}}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-40 pb-16 text-center px-6">
        <Link href="/restaurant/toi-toit-mon-toit" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 transition mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Retour a l&apos;accueil
        </Link>
        <h1 className="font-display text-4xl md:text-6xl text-gray-900 mb-4">Evenements</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Des soirees uniques sur les toits de Montpellier
        </p>
      </section>

      {/* Events List */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event) => (
            <div key={event.title} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
              <div className="md:flex">
                {/* Image placeholder */}
                <div className={`md:w-72 h-48 md:h-auto bg-gradient-to-br ${event.gradient} relative shrink-0`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-3xl font-display mb-1">{event.date.split(" ")[1]}</div>
                      <div className="text-sm font-medium opacity-80">{event.date.split(" ")[0]} {event.date.split(" ")[2]}</div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                      {event.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-display text-2xl text-gray-900 group-hover:text-[#F4A261] transition-colors">{event.title}</h3>
                      <div className="flex items-center gap-3 mt-1.5 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {event.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{event.desc}</p>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <span className="font-bold text-gray-900">{event.price}</span>
                      {event.priceSub && (
                        <span className="text-gray-400 text-sm ml-2">— {event.priceSub}</span>
                      )}
                      {event.spots && (
                        <span className="ml-3 px-2.5 py-1 rounded-full bg-[#F4A261]/10 text-[#D4823E] text-xs font-semibold">
                          {event.spots} places
                        </span>
                      )}
                    </div>
                    <button
                      className="px-6 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg"
                      style={{ backgroundColor: accent }}
                    >
                      Reserver
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Privatisation */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#1a0f05] to-[#2d1a0a] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 right-20 w-60 h-60 rounded-full bg-[#F4A261]/50 blur-[80px]" />
              <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-pink-500/30 blur-[60px]" />
            </div>
            <div className="relative p-8 md:p-12">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm mb-4">
                  Privatisation
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                  Privatisez le rooftop pour votre event
                </h2>
                <p className="text-white/50 text-lg max-w-xl mx-auto">
                  Un cadre unique pour vos evenements prives, avec vue panoramique sur Montpellier
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                  <div className="text-2xl font-bold text-white mb-1">120</div>
                  <div className="text-white/40 text-sm">personnes debout</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                  <div className="text-2xl font-bold text-white mb-1">60</div>
                  <div className="text-white/40 text-sm">personnes assises</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                  <div className="text-2xl font-bold text-white mb-1">360°</div>
                  <div className="text-white/40 text-sm">vue panoramique</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {["Afterworks", "Lancements produit", "Anniversaires", "Mariages", "Seminaires", "Concerts prives"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {!showPrivForm ? (
                <div className="text-center">
                  <button
                    onClick={() => setShowPrivForm(true)}
                    className="px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl"
                    style={{ backgroundColor: accent, boxShadow: `0 0 40px ${accent}40` }}
                  >
                    Demander un devis
                  </button>
                </div>
              ) : (
                <div className="max-w-lg mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Nom / Societe"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#F4A261]/50 transition"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#F4A261]/50 transition"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Telephone"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#F4A261]/50 transition"
                    />
                    <input
                      type="text"
                      placeholder="Date souhaitee"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#F4A261]/50 transition"
                    />
                  </div>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white/60 focus:outline-none focus:border-[#F4A261]/50 transition">
                    <option value="">Type d&apos;evenement</option>
                    <option>Afterwork</option>
                    <option>Lancement produit</option>
                    <option>Anniversaire</option>
                    <option>Mariage</option>
                    <option>Seminaire</option>
                    <option>Autre</option>
                  </select>
                  <textarea
                    rows={3}
                    placeholder="Decrivez votre projet..."
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#F4A261]/50 transition resize-none"
                  />
                  <button
                    className="w-full py-3.5 rounded-xl text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-lg"
                    style={{ backgroundColor: accent }}
                  >
                    Envoyer la demande
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer restaurant="Toi Toit Mon Toit" />
    </div>
  );
}
