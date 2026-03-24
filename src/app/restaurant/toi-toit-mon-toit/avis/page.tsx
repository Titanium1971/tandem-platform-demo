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

const starDistribution = [
  { stars: 5, pct: 68 },
  { stars: 4, pct: 22 },
  { stars: 3, pct: 6 },
  { stars: 2, pct: 3 },
  { stars: 1, pct: 1 },
];

const reviews = [
  {
    name: "Julien R.",
    date: "Il y a 3 jours",
    rating: 5,
    text: "La plus belle vue de Montpellier, c'est un fait. Les cocktails sont inventifs et vraiment bien executes. Le Sunset Montpellier est devenu mon incontournable. On est arrives a 19h, pile pour le coucher de soleil — magique.",
    response: null,
  },
  {
    name: "Camille & Lea B.",
    date: "Il y a 1 semaine",
    rating: 5,
    text: "On y va chaque vendredi soir entre copines. Le DJ set est toujours au top, les tapas sont genereux et delicieux. Le meilleur spot pour commencer la soiree a Montpellier ! La planche mixte pour 2 est un must.",
    response: null,
  },
  {
    name: "Antoine P.",
    date: "Il y a 2 semaines",
    rating: 4,
    text: "Excellent rooftop, les planches sont copieuses et les cocktails parmi les meilleurs de la ville. Un peu d'attente le samedi soir mais ca vaut vraiment le coup. Vue a 360 degres incroyable. Le Rooftop Mule est une tuerie.",
    response: "Merci Antoine ! Le samedi soir est effectivement notre soiree la plus prisee. N'hesitez pas a reserver pour eviter l'attente. A bientot sur les toits !",
  },
  {
    name: "Sophie M.",
    date: "Il y a 3 semaines",
    rating: 5,
    text: "On a privatise une partie du rooftop pour l'anniversaire de mon mari. L'equipe a ete aux petits soins, le DJ a gere l'ambiance a la perfection. 40 personnes, cocktails a volonte, planches generouses. Tout le monde en parle encore !",
    response: "Quelle joie de lire ca Sophie ! C'etait un plaisir d'organiser cet anniversaire avec vous. L'equipe se joint a moi pour vous remercier. A tres vite !",
  },
  {
    name: "Maxime D.",
    date: "Il y a 1 mois",
    rating: 3,
    text: "Le lieu est magnifique, la vue est imbattable. Les cocktails sont bons mais un peu chers pour les classiques. Les tapas en revanche sont excellentes. Service parfois lent quand il y a du monde. Dommage car le cadre est exceptionnel.",
    response: "Merci pour votre retour Maxime. Nous travaillons sur le renforcement de notre equipe pour les soirees a forte affluence. Les cocktails classiques restent a prix du marche pour un rooftop avec cette vue. Revenez nous voir !",
  },
  {
    name: "Laura & Tom K.",
    date: "Il y a 1 mois",
    rating: 5,
    text: "Notre spot prefere pour un date ! L'ambiance est romantique au coucher du soleil, les cocktails sont delicieux. On a teste le Wine & View le mois dernier — la degustation etait top, le sommelier passionnant. On recommande a 100%.",
    response: null,
  },
  {
    name: "Nicolas F.",
    date: "Il y a 6 semaines",
    rating: 4,
    text: "Super soiree afterwork avec les collegues. Le cocktail offert a l'inscription c'est malin, ca donne envie de rester. On a fini par y passer la soiree entiere. Les croquettes jambon iberico sont addictives. Top top top.",
    response: null,
  },
  {
    name: "Emilie V.",
    date: "Il y a 2 mois",
    rating: 5,
    text: "Le brunch du dimanche est une pepite ! Buffet copieux, DJ chill, vue de dingue. Les pancakes sont a tomber et le jus d'orange est presse minute. On est restes de 11h a 15h sans voir le temps passer. 32 euros tres bien places.",
    response: "Merci Emilie ! Le brunch est notre petite fierte du dimanche. Ravi que vous ayez profite de ce moment. On vous attend pour le prochain !",
  },
];

function StarRating({ rating, size = "w-4 h-4" }: { rating: number; size?: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`${size} ${i < rating ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function AvisPage() {
  const [filter, setFilter] = useState<number | null>(null);

  const filteredReviews = filter ? reviews.filter((r) => r.rating === filter) : reviews;

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
                  item.href.endsWith("/avis")
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
                style={item.href.endsWith("/avis") ? { backgroundColor: accent } : {}}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-40 pb-12 text-center px-6">
        <Link href="/restaurant/toi-toit-mon-toit" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 transition mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Retour a l&apos;accueil
        </Link>
        <h1 className="font-display text-4xl md:text-6xl text-gray-900 mb-4">Avis Clients</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Ce que disent nos visiteurs de leur experience sur les toits
        </p>
      </section>

      {/* Summary Card */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Score */}
              <div className="text-center md:text-left shrink-0">
                <div className="text-6xl font-bold text-gray-900 mb-2">4.6</div>
                <StarRating rating={5} size="w-5 h-5" />
                <p className="text-gray-400 text-sm mt-2">523 avis Google</p>
              </div>

              {/* Distribution */}
              <div className="flex-1 w-full">
                {starDistribution.map((item) => (
                  <button
                    key={item.stars}
                    onClick={() => setFilter(filter === item.stars ? null : item.stars)}
                    className={`flex items-center gap-3 w-full py-1.5 group transition ${
                      filter === item.stars ? "opacity-100" : filter ? "opacity-40" : "opacity-100"
                    }`}
                  >
                    <span className="text-sm text-gray-500 w-3 text-right">{item.stars}</span>
                    <svg className="w-4 h-4 text-amber-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${item.pct}%`, backgroundColor: accent }}
                      />
                    </div>
                    <span className="text-sm text-gray-400 w-10 text-right">{item.pct}%</span>
                  </button>
                ))}
              </div>
            </div>
            {filter && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => setFilter(null)}
                  className="text-sm text-[#F4A261] font-semibold hover:underline"
                >
                  Voir tous les avis
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredReviews.map((review, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#F4A261] to-[#e76f51] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {review.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                    <div>
                      <span className="font-semibold text-gray-900">{review.name}</span>
                      <span className="text-gray-400 text-sm ml-3">{review.date}</span>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">{review.text}</p>

                  {review.response && (
                    <div className="mt-4 bg-[#FFF9F2] rounded-xl p-4 border-l-3 border-[#F4A261]" style={{ borderLeftWidth: "3px", borderLeftColor: accent }}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-[#F4A261] flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">Reponse du proprietaire</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{review.response}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QR Code Section */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm text-center">
            <h2 className="font-display text-2xl md:text-3xl text-gray-900 mb-3">Laissez-nous un avis</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Scannez ce QR code avec votre telephone pour laisser un avis Google directement
            </p>

            {/* QR Code placeholder */}
            <div className="inline-block bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-sm mb-6">
              <div className="w-40 h-40 bg-gray-900 rounded-xl relative overflow-hidden">
                {/* Simulated QR code pattern */}
                <div className="absolute inset-2 grid grid-cols-8 grid-rows-8 gap-0.5">
                  {Array.from({ length: 64 }, (_, i) => {
                    const isCorner = (i < 3 || (i >= 5 && i < 8) || (i >= 8 && i < 11) || (i >= 16 && i < 19) || (i >= 21 && i < 24) || i === 13 || i === 14 || i === 40 || i === 41 || i === 48 || i === 49 || i === 50 || i === 56 || i === 57 || i === 58);
                    const isWhite = [3, 4, 11, 12, 19, 20, 25, 26, 27, 30, 33, 34, 37, 38, 42, 43, 44, 45, 51, 52, 53, 59, 60, 61, 62, 63].includes(i);
                    return (
                      <div
                        key={i}
                        className={`rounded-[1px] ${isCorner ? "bg-white" : isWhite ? "bg-white" : "bg-gray-600"}`}
                      />
                    );
                  })}
                </div>
                {/* Center logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold text-gray-900" style={{ backgroundColor: accent }}>
                    T
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                Scannez avec votre appareil photo
              </div>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-sm font-semibold hover:underline" style={{ color: accent }}>
                Ou cliquez ici pour laisser un avis
              </a>
            </div>

            <div className="mt-8 p-4 bg-[#FFF9F2] rounded-xl max-w-sm mx-auto">
              <p className="text-gray-500 text-sm">
                <span className="font-semibold text-gray-700">Module Avis</span> — Collecte automatique des avis, QR code personnalise, reponses centralisees depuis le back-office Tandem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer restaurant="Toi Toit Mon Toit" />
    </div>
  );
}
