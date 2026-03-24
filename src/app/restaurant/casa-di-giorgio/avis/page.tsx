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

const ratingBars = [
  { stars: 5, percent: 62 },
  { stars: 4, percent: 23 },
  { stars: 3, percent: 8 },
  { stars: 2, percent: 4 },
  { stars: 1, percent: 3 },
];

const reviews = [
  {
    name: "Marie-Claire D.",
    date: "Il y a 2 semaines",
    rating: 5,
    text: "Les meilleures pates fraiches de Montpellier, sans hesitation. Le tagliatelle al tartufo est un pur moment de bonheur. Service impeccable et cadre magnifique sur la place Jean Jaures. On reviendra tres vite !",
    response: null,
  },
  {
    name: "Thomas L.",
    date: "Il y a 1 mois",
    rating: 4,
    text: "Tres bonne adresse italienne. La pizza au feu de bois est excellente, pate fine et croustillante comme en Italie. Seul bemol : l'attente un peu longue le samedi soir. A refaire !",
    response: null,
  },
  {
    name: "Sophie & Karim M.",
    date: "Il y a 3 semaines",
    rating: 5,
    text: "On a fete notre anniversaire ici et tout etait parfait. L'equipe est aux petits soins, le tiramisu est le meilleur qu'on ait goute en France. La terrasse en ete est un reve.",
    response: "Merci Sophie & Karim ! C'etait un plaisir de vous accueillir pour cette occasion speciale. A tres bientot ! — Giorgio",
  },
  {
    name: "Laurent B.",
    date: "Il y a 1 mois",
    rating: 5,
    text: "Le cours de pasta du samedi est une experience incroyable. Giorgio est un professeur passionne et genereux. On a appris a faire les ravioli comme en Emilie-Romagne. Les enfants ont adore aussi.",
    response: null,
  },
  {
    name: "Nathalie R.",
    date: "Il y a 2 mois",
    rating: 2,
    text: "Decu par notre derniere visite. Service tres lent (plus d'une heure pour le plat), et la pizza etait tiede. Dommage car on avait aime nos precedentes experiences ici. Le cadre reste agreable mais il faut ameliorer la rapidite en salle.",
    response: "Chere Nathalie, nous sommes sincèrement desoles pour cette experience. Ce soir-la, nous avons eu un souci en cuisine qui a provoque des retards inhabituels. Ce n'est pas notre standard et nous avons pris des mesures. N'hesitez pas a nous contacter directement pour que nous puissions nous rattraper. — Giorgio",
  },
  {
    name: "Jean-Philippe G.",
    date: "Il y a 3 mois",
    rating: 5,
    text: "Un vrai voyage en Italie ! L'osso buco est fondant a souhait, le risotto au safran qui l'accompagne est parfaitement crémeux. La carte des vins est bien choisie, avec de tres belles references italiennes a prix raisonnables.",
    response: null,
  },
  {
    name: "Amelie F.",
    date: "Il y a 2 mois",
    rating: 4,
    text: "Brunch du dimanche tres reussi ! Le buffet est copieux et varie, la focaccia est chaude et les charcuteries excellentes. Un peu bruyant quand c'est plein mais l'ambiance est chaleureuse. Le cappuccino est le meilleur de la ville.",
    response: null,
  },
  {
    name: "Marc V.",
    date: "Il y a 4 mois",
    rating: 1,
    text: "Addition salee pour ce que c'est. 80 euros pour deux avec juste des pates et un dessert, je trouve ca abusé. Le serveur n'etait pas tres souriant non plus.",
    response: "Bonjour Marc, merci pour votre retour. Nos tarifs refletent la qualite de nos produits frais et de nos pates faites maison chaque jour. Nous sommes desoles si le service n'etait pas a la hauteur ce jour-la. Nous serions ravis de vous accueillir a nouveau dans de meilleures conditions. — Giorgio",
  },
];

type FilterType = "all" | "positive" | "negative" | "recent";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg className={`w-4 h-4 ${filled ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function AvisPage() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredReviews = reviews.filter((r) => {
    if (filter === "positive") return r.rating >= 4;
    if (filter === "negative") return r.rating <= 3;
    if (filter === "recent") return r.date.includes("semaine") || r.date === "Il y a 1 mois";
    return true;
  });

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: "Tous" },
    { key: "positive", label: "Positifs (4-5)" },
    { key: "negative", label: "Negatifs (1-3)" },
    { key: "recent", label: "Recents" },
  ];

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
              style={item.href.endsWith("/avis") ? { backgroundColor: `${accent}15`, color: accent } : {}}
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
          <h1 className="font-display text-5xl md:text-6xl text-gray-900 mb-8">Avis clients</h1>

          {/* Big Rating */}
          <div className="inline-flex flex-col items-center bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl font-bold text-gray-900">4.4</span>
              <span className="text-2xl text-gray-400">/5</span>
            </div>
            <div className="flex gap-1 mb-3">
              {[1, 2, 3, 4].map((s) => (
                <svg key={s} className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="half-star-avis">
                    <stop offset="40%" stopColor="currentColor" />
                    <stop offset="40%" stopColor="#d1d5db" />
                  </linearGradient>
                </defs>
                <path fill="url(#half-star-avis)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm mb-6">847 avis Google</p>

            {/* Rating Bars */}
            <div className="w-64 space-y-2">
              {ratingBars.map((bar) => (
                <div key={bar.stars} className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 w-3 text-right">{bar.stars}</span>
                  <svg className="w-3.5 h-3.5 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-amber-400"
                      style={{ width: `${bar.percent}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 w-8">{bar.percent}%</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="mt-6 inline-block px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:scale-105"
              style={{ backgroundColor: accent }}
            >
              Laisser un avis sur Google
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 bg-white flex-1">
        <div className="max-w-4xl mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  filter === f.key
                    ? "text-white shadow-lg"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
                style={filter === f.key ? { backgroundColor: accent } : {}}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Review Cards */}
          <div className="space-y-6">
            {filteredReviews.map((review, idx) => (
              <div key={idx} className="bg-[#FDFAF6] rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: `linear-gradient(135deg, ${accent}, #d4a574)` }}
                  >
                    {review.name[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900 text-sm">{review.name}</span>
                      <span className="text-gray-400 text-xs">{review.date}</span>
                    </div>
                    <div className="flex gap-0.5 mt-0.5">
                      {Array.from({ length: 5 }, (_, i) => (
                        <StarIcon key={i} filled={i < review.rating} />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>

                {review.response && (
                  <div className="mt-4 ml-6 pl-4 border-l-2 border-[#E63946]/30">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold" style={{ color: accent }}>Reponse du proprietaire</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{review.response}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredReviews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">Aucun avis dans cette categorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-16 bg-[#FDFAF6] border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-gray-900 mb-4">
            Vous avez aime votre experience ?
          </h2>
          <p className="text-gray-500 mb-8">
            Scannez le QR code pour laisser un avis sur Google
          </p>

          {/* QR Code Placeholder */}
          <div className="inline-block bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-6">
            <div className="w-40 h-40 bg-gray-900 rounded-xl flex items-center justify-center relative">
              {/* Simple QR-like pattern */}
              <div className="grid grid-cols-7 gap-[3px] p-3">
                {Array.from({ length: 49 }, (_, i) => {
                  const row = Math.floor(i / 7);
                  const col = i % 7;
                  // Create QR-code-like corners
                  const isCorner =
                    (row < 3 && col < 3) ||
                    (row < 3 && col > 3) ||
                    (row > 3 && col < 3);
                  const isRandom = [5, 8, 12, 17, 20, 24, 29, 33, 36, 40, 44, 48].includes(i);
                  const filled = isCorner || isRandom;
                  return (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-[2px] ${filled ? "bg-white" : "bg-gray-700"}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-sm">
            Ce QR code est egalement disponible sur votre addition et en salle.
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 w-fit mx-auto">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-xs text-gray-500 font-medium">Powered by Google</span>
          </div>
        </div>
      </section>

      <Footer restaurant="Casa di Giorgio" />
    </div>
  );
}
