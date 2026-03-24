"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const accent = "#E63946";

const subNav = [
  { label: "Carte", href: "/restaurant/casa-di-giorgio/carte" },
  { label: "Reservation", href: "/restaurant/casa-di-giorgio/reservation" },
  { label: "Evenements", href: "/restaurant/casa-di-giorgio/evenements" },
  { label: "Click & Collect", href: "/restaurant/casa-di-giorgio/click-collect" },
  { label: "Carte Cadeau", href: "/restaurant/casa-di-giorgio/carte-cadeau" },
  { label: "Avis", href: "/restaurant/casa-di-giorgio/avis" },
];

const events = [
  {
    title: "Soiree Truffe",
    date: "Jeudi 27 mars",
    time: "20h00",
    description: "Menu degustation autour de la truffe noire du Ventoux. 5 plats accords mets & vins, de l'entree au dessert. Une experience gastronomique unique.",
    price: 65,
    totalSpots: 30,
    remaining: 8,
    gradient: "from-amber-900 to-yellow-700",
  },
  {
    title: "Aperitivo Spritz",
    date: "Vendredi 28 mars",
    time: "18h30",
    description: "Cocktails italiens classiques — Spritz, Negroni, Bellini — accompagnes d'un buffet d'antipasti maison sur notre terrasse.",
    price: 25,
    totalSpots: 40,
    remaining: 15,
    gradient: "from-orange-600 to-red-400",
  },
  {
    title: "Brunch Domenica",
    date: "Dimanche 30 mars",
    time: "11h00",
    description: "Brunch italien a volonte : focaccia, frittata, charcuteries italiennes, tiramisu, jus frais, cappuccino. L'Italie du dimanche matin.",
    price: 35,
    totalSpots: 50,
    remaining: 20,
    gradient: "from-yellow-600 to-amber-400",
  },
  {
    title: "Cours de Pasta",
    date: "Samedi 5 avril",
    time: "15h00",
    description: "Apprenez a faire vos pates fraiches avec notre chef Giorgio. Tagliatelle, ravioli et gnocchi — repartez avec vos creations et la recette secrete.",
    price: 45,
    totalSpots: 12,
    remaining: 6,
    gradient: "from-red-800 to-orange-600",
  },
];

export default function EvenementsPage() {
  const [reservedEvents, setReservedEvents] = useState<string[]>([]);

  const handleReserve = (title: string) => {
    setReservedEvents([...reservedEvents, title]);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Sub-navigation */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-1 overflow-x-auto scrollbar-hide h-12">
          <Link href="/restaurant/casa-di-giorgio" className="text-gray-400 hover:text-gray-600 text-sm whitespace-nowrap px-3 py-1 transition">
            &larr; Casa di Giorgio
          </Link>
          <span className="text-gray-200 mx-1">|</span>
          {subNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm whitespace-nowrap px-3 py-1 rounded-full transition font-medium"
              style={
                item.href.endsWith("/evenements")
                  ? { backgroundColor: `${accent}15`, color: accent }
                  : {}
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Header */}
      <section className="pt-36 pb-12 bg-[#FDFAF6]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: accent }}>
            Casa di Giorgio
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-gray-900 mb-4">Evenements</h1>
          <p className="text-gray-500 text-lg">
            Soirees speciales, cours de cuisine et moments uniques
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-12 bg-white flex-1">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            {events.map((event) => {
              const isReserved = reservedEvents.includes(event.title);
              const spotsPercent = ((event.totalSpots - event.remaining) / event.totalSpots) * 100;
              return (
                <div
                  key={event.title}
                  className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Visual */}
                    <div className={`relative w-full md:w-72 h-48 md:h-auto bg-gradient-to-br ${event.gradient} shrink-0`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 text-center shadow-sm">
                          <p className="text-xs font-bold uppercase" style={{ color: accent }}>
                            {event.date.split(" ")[0]}
                          </p>
                          <p className="text-2xl font-bold text-gray-900">{event.date.split(" ")[1]}</p>
                          <p className="text-xs text-gray-500">{event.date.split(" ")[2]}</p>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-white/80 text-sm font-medium">{event.time}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col">
                      <div className="flex-1">
                        <h3 className="font-display text-2xl text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">{event.description}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                        <div className="flex-1 w-full sm:w-auto">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="text-2xl font-bold" style={{ color: accent }}>{event.price} &euro;<span className="text-sm font-normal text-gray-400">/pers</span></span>
                          </div>
                          <div className="w-full max-w-xs">
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                              <span>{event.remaining} places restantes</span>
                              <span>{event.totalSpots} places</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full transition-all"
                                style={{
                                  width: `${spotsPercent}%`,
                                  backgroundColor: event.remaining <= 8 ? accent : "#22c55e",
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        {isReserved ? (
                          <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-50 border border-green-200">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-green-700 font-semibold text-sm">Reserve !</span>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleReserve(event.title)}
                            className="px-6 py-3 rounded-xl text-white font-semibold transition-all hover:scale-105 hover:shadow-lg shrink-0"
                            style={{ backgroundColor: accent }}
                          >
                            Reserver
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privatisation */}
      <section className="py-20 bg-[#FDFAF6] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#1a0a0a] to-[#2a1515] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-[#E63946]/30 blur-[80px]" />
              <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-amber-600/20 blur-[100px]" />
            </div>
            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Privatisation</h2>
              <p className="text-white/70 text-lg mb-2">
                Vous souhaitez privatiser le restaurant pour un evenement prive ?
              </p>
              <p className="text-white/50 mb-8">
                Capacite : 80 couverts &middot; Terrasse disponible &middot; Menu sur mesure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@casadigiorgio.fr"
                  className="inline-block px-8 py-4 rounded-xl text-white font-semibold transition-all hover:scale-105"
                  style={{ backgroundColor: accent, boxShadow: `0 0 30px ${accent}40` }}
                >
                  Demander un devis
                </a>
                <a
                  href="tel:0467XXXXXX"
                  className="inline-block px-8 py-4 rounded-xl text-white font-semibold border border-white/20 hover:bg-white/10 transition-all"
                >
                  04 67 XX XX XX
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer restaurant="Casa di Giorgio" />
    </div>
  );
}
