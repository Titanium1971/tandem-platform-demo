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

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  tags?: string[];
  allergens?: string;
};

type Category = {
  name: string;
  emoji: string;
  items: MenuItem[];
};

const categories: Category[] = [
  {
    name: "Antipasti",
    emoji: "🫒",
    items: [
      { name: "Burrata Pugliese", desc: "Burrata cremeuse, tomates anciennes, pesto basilic, huile d'olive extra vierge", price: "14", tags: ["Fait maison", "Vegetarien", "Sans gluten"], allergens: "Lait" },
      { name: "Carpaccio di Manzo", desc: "Fines tranches de boeuf, roquette, copeaux de parmesan, citron", price: "16", tags: ["Sans gluten"], allergens: "Lait" },
      { name: "Caponata Siciliana", desc: "Aubergines confites, olives, capres, sauce aigre-douce maison", price: "11", tags: ["Fait maison", "Vegetarien", "Sans gluten"], allergens: "" },
      { name: "Vitello Tonnato", desc: "Veau froid, sauce au thon, capres croustillantes", price: "15", tags: ["Sans gluten"], allergens: "Oeufs, Poisson" },
      { name: "Bruschette Miste", desc: "Trio de bruschette : tomate-basilic, champignons, nduja calabraise", price: "12", tags: ["Fait maison"], allergens: "Gluten" },
      { name: "Frittura di Calamari", desc: "Calamars frits croustillants, mayonnaise au citron vert", price: "13", tags: [], allergens: "Gluten, Oeufs, Mollusques" },
    ],
  },
  {
    name: "Pasta",
    emoji: "🍝",
    items: [
      { name: "Tagliatelle al Tartufo", desc: "Pates fraiches maison, creme de truffe noire, parmesan 24 mois", price: "22", tags: ["Fait maison"], allergens: "Gluten, Lait, Oeufs" },
      { name: "Rigatoni all'Amatriciana", desc: "Guanciale croustillant, tomate San Marzano, pecorino romano", price: "17", tags: ["Fait maison"], allergens: "Gluten, Lait" },
      { name: "Linguine alle Vongole", desc: "Palourdes fraiches, ail, persil, vin blanc, pointe de piment", price: "19", tags: ["Fait maison"], allergens: "Gluten, Mollusques" },
      { name: "Ravioli Ricotta e Spinaci", desc: "Raviolis maison, ricotta de brebis, epinards, beurre de sauge", price: "18", tags: ["Fait maison", "Vegetarien"], allergens: "Gluten, Lait, Oeufs" },
      { name: "Cacio e Pepe", desc: "Spaghettoni, pecorino romano DOP, poivre noir de Sarawak", price: "16", tags: ["Fait maison", "Vegetarien"], allergens: "Gluten, Lait" },
      { name: "Pappardelle al Ragu", desc: "Pates larges, ragu de boeuf braise 6 heures, parmesan", price: "19", tags: ["Fait maison"], allergens: "Gluten, Lait, Oeufs" },
    ],
  },
  {
    name: "Pizza",
    emoji: "🍕",
    items: [
      { name: "Margherita DOP", desc: "Tomate San Marzano, mozzarella di bufala, basilic frais", price: "14", tags: ["Vegetarien"], allergens: "Gluten, Lait" },
      { name: "Diavola", desc: "Salame piccante, mozzarella fior di latte, tomate, origan", price: "16", tags: [], allergens: "Gluten, Lait" },
      { name: "Quattro Formaggi", desc: "Mozzarella, gorgonzola, fontina, parmesan, miel de truffe", price: "18", tags: ["Vegetarien"], allergens: "Gluten, Lait" },
      { name: "Prosciutto e Rucola", desc: "Jambon de Parme 18 mois, roquette, copeaux de parmesan", price: "17", tags: [], allergens: "Gluten, Lait" },
      { name: "Calzone Napoli", desc: "Ricotta, mozzarella, jambon cuit, champignons, sauce tomate", price: "16", tags: [], allergens: "Gluten, Lait" },
    ],
  },
  {
    name: "Secondi",
    emoji: "🥩",
    items: [
      { name: "Osso Buco alla Milanese", desc: "Jarret de veau braise, gremolata, risotto au safran", price: "26", tags: ["Fait maison", "Sans gluten"], allergens: "Lait" },
      { name: "Branzino al Forno", desc: "Bar entier roti, legumes mediterraneens, huile citronnee", price: "24", tags: ["Sans gluten"], allergens: "Poisson" },
      { name: "Scaloppine ai Funghi Porcini", desc: "Escalopes de veau, sauce aux cepes, polenta cremeuse", price: "22", tags: ["Fait maison"], allergens: "Gluten, Lait" },
      { name: "Tagliata di Manzo", desc: "Entrecote grillee tranchee, roquette, parmesan, vinaigre balsamique", price: "28", tags: ["Sans gluten"], allergens: "Lait" },
      { name: "Pollo alla Parmigiana", desc: "Poulet pane, sauce tomate, mozzarella gratinee, basilic", price: "19", tags: [], allergens: "Gluten, Lait, Oeufs" },
    ],
  },
  {
    name: "Dolci",
    emoji: "🍰",
    items: [
      { name: "Tiramisu della Casa", desc: "Notre recette familiale, mascarpone, cafe expresso, cacao amer", price: "10", tags: ["Fait maison"], allergens: "Gluten, Lait, Oeufs" },
      { name: "Panna Cotta", desc: "Vanille de Madagascar, coulis de fruits rouges de saison", price: "9", tags: ["Fait maison", "Sans gluten"], allergens: "Lait" },
      { name: "Cannoli Siciliani", desc: "Ricotta fraiche, pistaches de Bronte, eclats de chocolat noir", price: "8", tags: ["Fait maison"], allergens: "Gluten, Lait, Fruits a coque" },
      { name: "Affogato al Caffe", desc: "Glace fior di latte, double expresso, amaretto en option", price: "8", tags: ["Sans gluten"], allergens: "Lait" },
      { name: "Semifreddo al Limone", desc: "Parfait glace au citron de Sorrente, meringue italienne", price: "9", tags: ["Fait maison", "Sans gluten"], allergens: "Lait, Oeufs" },
    ],
  },
  {
    name: "Vini",
    emoji: "🍷",
    items: [
      { name: "Chianti Classico DOCG", desc: "Toscane — Sangiovese 100%, notes de cerise et d'epices", price: "8", tags: [], allergens: "Sulfites" },
      { name: "Barolo DOCG", desc: "Piemont — Nebbiolo, tannins elegants, fruits noirs et truffe", price: "14", tags: [], allergens: "Sulfites" },
      { name: "Vermentino di Sardegna", desc: "Sardaigne — Blanc frais et mineral, agrumes, fleurs blanches", price: "7", tags: [], allergens: "Sulfites" },
      { name: "Prosecco Superiore DOCG", desc: "Veneto — Bulles fines, pomme verte, fleur d'acacia", price: "8", tags: [], allergens: "Sulfites" },
      { name: "Amarone della Valpolicella", desc: "Veneto — Vin puissant et veloute, fruits confits, chocolat", price: "16", tags: [], allergens: "Sulfites" },
      { name: "Limoncello della Casa", desc: "Digestif maison au citron de Sorrente, servi glace", price: "6", tags: ["Fait maison"], allergens: "" },
    ],
  },
];

const tagColors: Record<string, string> = {
  "Fait maison": "bg-amber-100 text-amber-800",
  "Vegetarien": "bg-green-100 text-green-800",
  "Sans gluten": "bg-blue-100 text-blue-800",
};

export default function CartePage() {
  const [activeCategory, setActiveCategory] = useState(0);

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
                item.href.endsWith("/carte")
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
          <h1 className="font-display text-5xl md:text-6xl text-gray-900 mb-4">Notre Carte</h1>
          <p className="text-gray-500 text-lg mb-4">
            Des produits frais, des recettes transmises de generation en generation
          </p>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-500">
            Mise a jour : Mars 2026
          </span>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Categories */}
            <aside className="lg:w-56 shrink-0">
              <div className="lg:sticky lg:top-36 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
                {categories.map((cat, i) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(i)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                      activeCategory === i
                        ? "text-white shadow-lg"
                        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                    }`}
                    style={activeCategory === i ? { backgroundColor: accent } : {}}
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.name}</span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Items */}
            <div className="flex-1">
              <h2 className="font-display text-3xl text-gray-900 mb-8 flex items-center gap-3">
                <span>{categories[activeCategory].emoji}</span>
                {categories[activeCategory].name}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {categories[activeCategory].items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-[#FDFAF6] rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#E63946]/20 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-display text-xl text-gray-900 group-hover:text-[#E63946] transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-lg font-bold whitespace-nowrap ml-4" style={{ color: accent }}>
                        {item.price} &euro;
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.desc}</p>
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${tagColors[tag] || "bg-gray-100 text-gray-600"}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {item.allergens && (
                      <p className="text-gray-400 text-[11px]">
                        Allergenes : {item.allergens}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FDFAF6] border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-gray-900 mb-4">Envie de gouter ?</h2>
          <p className="text-gray-500 mb-8">Reservez votre table en quelques clics</p>
          <Link
            href="/restaurant/casa-di-giorgio/reservation"
            className="inline-block px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: accent, boxShadow: `0 0 30px ${accent}40` }}
          >
            Reserver une table
          </Link>
        </div>
      </section>

      <Footer restaurant="Casa di Giorgio" />
    </div>
  );
}
