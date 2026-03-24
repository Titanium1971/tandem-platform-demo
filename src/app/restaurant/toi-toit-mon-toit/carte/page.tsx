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

const categories = [
  {
    name: "Cocktails Signatures",
    items: [
      { name: "Sunset Montpellier", desc: "Aperol, prosecco, orange sanguine, sirop maison", price: "14", tags: ["Signature"] },
      { name: "Rooftop Mule", desc: "Vodka premium, gingembre frais, citron vert, concombre", price: "13", tags: ["Signature"] },
      { name: "Nuit d'Ete", desc: "Gin London Dry, sirop de lavande, tonic artisanal, myrtilles fraiches", price: "15", tags: ["Signature"] },
      { name: "Paloma Rosa", desc: "Tequila reposado, jus de pamplemousse rose, romarin grille", price: "14", tags: ["Signature"] },
      { name: "Old Fashioned du Toit", desc: "Bourbon Woodford Reserve, zeste d'orange, cerise amarena, angostura", price: "16", tags: ["Signature"] },
      { name: "Virgin Paradise", desc: "Puree de mangue, fruit de la passion, menthe fraiche, eau petillante", price: "9", tags: ["Sans alcool"] },
    ],
  },
  {
    name: "Cocktails Classiques",
    items: [
      { name: "Mojito", desc: "Rhum blanc, menthe fraiche, citron vert, sucre de canne, eau petillante", price: "11", tags: [] },
      { name: "Margarita", desc: "Tequila, triple sec, citron vert, sel de guerande", price: "12", tags: [] },
      { name: "Pina Colada", desc: "Rhum, lait de coco, ananas frais, noix de coco rapee", price: "12", tags: [] },
      { name: "Aperol Spritz", desc: "Aperol, prosecco, eau gazeuse, olive", price: "10", tags: [] },
      { name: "Gin Tonic Premium", desc: "Gin Hendrick's, tonic Fever-Tree, concombre, baies de genievre", price: "13", tags: [] },
      { name: "Negroni", desc: "Gin, Campari, vermouth rouge, zeste d'orange", price: "12", tags: [] },
    ],
  },
  {
    name: "Vins & Champagne",
    items: [
      { name: "Coupe de Champagne", desc: "Champagne brut, maison selectionnee", price: "14", tags: [] },
      { name: "Rose de Provence (verre)", desc: "Cotes de Provence, Chateau Minuty — frais et elegant", price: "8", tags: [] },
      { name: "Rose de Provence (bouteille)", desc: "Cotes de Provence, Chateau Minuty — 75cl", price: "32", tags: ["A partager"] },
      { name: "Blanc Languedoc (verre)", desc: "Picpoul de Pinet — vif et mineral", price: "7", tags: [] },
      { name: "Rouge Pic Saint-Loup (verre)", desc: "AOP Pic Saint-Loup — charnu et epice", price: "8", tags: [] },
      { name: "Champagne Bouteille", desc: "Moet & Chandon Imperial — 75cl", price: "75", tags: ["A partager"] },
    ],
  },
  {
    name: "Tapas",
    items: [
      { name: "Patatas Bravas", desc: "Pommes de terre croustillantes, sauce brava fumee, creme acidulee", price: "8", tags: [] },
      { name: "Bruschetta Tomate-Burrata", desc: "Pain grille, tomates cerises confites, burrata cremosa, basilic, huile d'olive", price: "12", tags: [] },
      { name: "Croquettes Jambon Iberique", desc: "Croquettes croustillantes au jambon iberico de bellota, sauce aioli maison", price: "11", tags: [] },
      { name: "Calamars Frits Sauce Aioli", desc: "Calamars tendres en panure legere, aioli au citron, persil frit", price: "14", tags: [] },
      { name: "Guacamole Maison & Chips", desc: "Avocat, tomate, oignon rouge, coriandre, piment, chips de mais artisanales", price: "10", tags: ["A partager"] },
    ],
  },
  {
    name: "Planches",
    items: [
      { name: "Planche Charcuterie Italienne", desc: "Prosciutto di Parma, coppa, bresaola, grissini, olives taggiasche, cornichons", price: "22", tags: ["A partager"] },
      { name: "Planche Fromages Affines", desc: "Selection de 5 fromages affines, confiture de figues, noix, pain aux cereales", price: "20", tags: ["A partager"] },
      { name: "Planche Mixte pour 2", desc: "Charcuterie italienne, fromages affines, olives, houmous, crudites, pains — ideale a partager", price: "28", tags: ["A partager"] },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Tiramisu du Rooftop", desc: "Mascarpone, cafe espresso, cacao amer, biscuits cuiller", price: "9", tags: [] },
      { name: "Panna Cotta Passion-Mangue", desc: "Panna cotta vanille, coulis passion-mangue, eclats de meringue", price: "8", tags: [] },
      { name: "Fondant au Chocolat", desc: "Chocolat noir 70%, coeur coulant, glace vanille de Madagascar", price: "10", tags: [] },
      { name: "Assiette de Fruits Frais", desc: "Fruits de saison decoupes, menthe fraiche, filet de miel", price: "8", tags: [] },
    ],
  },
];

function TagBadge({ tag }: { tag: string }) {
  const colors: Record<string, string> = {
    Signature: "bg-[#F4A261]/15 text-[#D4823E]",
    "Sans alcool": "bg-emerald-50 text-emerald-600",
    "A partager": "bg-purple-50 text-purple-600",
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide ${colors[tag] || "bg-gray-100 text-gray-500"}`}>
      {tag}
    </span>
  );
}

export default function CartePage() {
  const [activeTab, setActiveTab] = useState(0);

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
                  item.href.endsWith("/carte")
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
                style={item.href.endsWith("/carte") ? { backgroundColor: accent } : {}}
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
        <h1 className="font-display text-4xl md:text-6xl text-gray-900 mb-4">Notre Carte</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Des saveurs pensees pour accompagner le coucher de soleil sur les toits de Montpellier
        </p>
      </section>

      {/* Category Tabs */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
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

          {/* Items Grid */}
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {categories[activeTab].items.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#F4A261]/20 transition-all group"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-display text-xl text-gray-900 group-hover:text-[#F4A261] transition-colors">
                        {item.name}
                      </h3>
                      {item.tags.map((tag) => (
                        <TagBadge key={tag} tag={tag} />
                      ))}
                    </div>
                  </div>
                  <span className="text-lg font-bold whitespace-nowrap ml-4" style={{ color: accent }}>
                    {item.price} &euro;
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Info note */}
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <p className="text-gray-400 text-sm">
                Tous nos cocktails sont prepares a la minute avec des ingredients frais.
                N&apos;hesitez pas a demander des adaptations a notre barman.
              </p>
              <p className="text-gray-300 text-xs mt-2">
                L&apos;abus d&apos;alcool est dangereux pour la sante. A consommer avec moderation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer restaurant="Toi Toit Mon Toit" />
    </div>
  );
}
