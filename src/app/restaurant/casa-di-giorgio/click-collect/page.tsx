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

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

const pickupSlots = ["12h15", "12h30", "12h45", "13h00", "19h15", "19h30", "19h45"];

const menuCategories = [
  {
    name: "Antipasti",
    items: [
      { name: "Burrata Pugliese", desc: "Burrata cremeuse, tomates anciennes, pesto basilic", price: 14 },
      { name: "Bruschette Miste", desc: "Trio de bruschette : tomate-basilic, champignons, nduja", price: 12 },
      { name: "Caponata Siciliana", desc: "Aubergines confites, olives, capres, sauce aigre-douce", price: 11 },
      { name: "Carpaccio di Manzo", desc: "Fines tranches de boeuf, roquette, parmesan", price: 16 },
      { name: "Frittura di Calamari", desc: "Calamars frits croustillants, mayo citron vert", price: 13 },
    ],
  },
  {
    name: "Pasta",
    items: [
      { name: "Tagliatelle al Tartufo", desc: "Pates fraiches, creme de truffe noire, parmesan 24 mois", price: 22 },
      { name: "Rigatoni all'Amatriciana", desc: "Guanciale, tomate San Marzano, pecorino romano", price: 17 },
      { name: "Cacio e Pepe", desc: "Spaghettoni, pecorino romano DOP, poivre de Sarawak", price: 16 },
      { name: "Ravioli Ricotta e Spinaci", desc: "Raviolis maison, ricotta de brebis, beurre de sauge", price: 18 },
      { name: "Pappardelle al Ragu", desc: "Pates larges, ragu de boeuf braise 6h, parmesan", price: 19 },
    ],
  },
  {
    name: "Pizza",
    items: [
      { name: "Margherita DOP", desc: "Tomate San Marzano, mozzarella di bufala, basilic frais", price: 14 },
      { name: "Diavola", desc: "Salame piccante, mozzarella fior di latte, tomate", price: 16 },
      { name: "Quattro Formaggi", desc: "Mozzarella, gorgonzola, fontina, parmesan, miel truffe", price: 18 },
      { name: "Prosciutto e Rucola", desc: "Jambon de Parme 18 mois, roquette, parmesan", price: 17 },
      { name: "Calzone Napoli", desc: "Ricotta, mozzarella, jambon cuit, champignons", price: 16 },
    ],
  },
  {
    name: "Dolci",
    items: [
      { name: "Tiramisu della Casa", desc: "Recette familiale, mascarpone, cafe, cacao amer", price: 10 },
      { name: "Panna Cotta", desc: "Vanille de Madagascar, coulis fruits rouges", price: 9 },
      { name: "Cannoli Siciliani", desc: "Ricotta fraiche, pistaches de Bronte, chocolat", price: 8 },
    ],
  },
  {
    name: "Boissons",
    items: [
      { name: "Acqua Minerale (75cl)", desc: "San Pellegrino ou Acqua Panna", price: 4 },
      { name: "Coca-Cola / Fanta", desc: "Canette 33cl", price: 3 },
      { name: "Limonata della Casa", desc: "Citron de Sorrente, sucre de canne, menthe", price: 5 },
      { name: "Birra Moretti (33cl)", desc: "Biere blonde italienne", price: 5 },
      { name: "Verre de Chianti", desc: "Chianti Classico DOCG — 15cl", price: 8 },
    ],
  },
];

export default function ClickCollectPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [pickupTime, setPickupTime] = useState(pickupSlots[0]);
  const [ordered, setOrdered] = useState(false);

  const addToCart = (name: string, price: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === name);
      if (existing) {
        return prev.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { name, price, quantity: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === name);
      if (existing && existing.quantity > 1) {
        return prev.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prev.filter((item) => item.name !== name);
    });
  };

  const getQuantity = (name: string) => {
    return cart.find((item) => item.name === name)?.quantity || 0;
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (ordered) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
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
                  item.href.endsWith("/click-collect")
                    ? { backgroundColor: `${accent}15`, color: accent }
                    : {}
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center py-20 max-w-md">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-display text-3xl text-gray-900 mb-3">Commande confirmee !</h2>
            <p className="text-gray-500 mb-2">
              Retrait a <span className="font-bold text-gray-900">{pickupTime}</span> chez Casa di Giorgio
            </p>
            <p className="text-gray-400 text-sm mb-8">Vous recevrez un SMS de confirmation.</p>

            <div className="bg-[#FDFAF6] rounded-2xl p-6 border border-gray-100 text-left mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Recapitulatif</h3>
              <div className="space-y-2">
                {cart.map((item) => (
                  <div key={item.name} className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.quantity}x {item.name}</span>
                    <span className="font-semibold text-gray-900">{(item.price * item.quantity).toFixed(2)} &euro;</span>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-bold" style={{ color: accent }}>{totalPrice.toFixed(2)} &euro;</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => { setCart([]); setOrdered(false); }}
              className="px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: `${accent}15`, color: accent }}
            >
              Nouvelle commande
            </button>
          </div>
        </div>
        <Footer restaurant="Casa di Giorgio" />
      </div>
    );
  }

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
                item.href.endsWith("/click-collect")
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
      <section className="pt-36 pb-8 bg-[#FDFAF6]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: accent }}>
            Casa di Giorgio
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-gray-900 mb-4">Click & Collect</h1>
          <p className="text-gray-500 text-lg">
            Commandez en ligne, retirez au restaurant
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="py-8 bg-white flex-1 pb-32">
        <div className="max-w-5xl mx-auto px-6">
          {/* Category Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {menuCategories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTab === i
                    ? "text-white shadow-lg"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
                style={activeTab === i ? { backgroundColor: accent } : {}}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Items */}
          <div className="space-y-3">
            {menuCategories[activeTab].items.map((item) => {
              const qty = getQuantity(item.name);
              return (
                <div
                  key={item.name}
                  className="bg-[#FDFAF6] rounded-2xl p-5 border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all"
                >
                  {/* Placeholder image */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-200 to-orange-200 shrink-0 flex items-center justify-center">
                    <span className="text-2xl">
                      {menuCategories[activeTab].name === "Boissons" ? "🥤" : menuCategories[activeTab].name === "Dolci" ? "🍰" : menuCategories[activeTab].name === "Pizza" ? "🍕" : menuCategories[activeTab].name === "Pasta" ? "🍝" : "🫒"}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
                    <p className="text-gray-400 text-xs truncate">{item.desc}</p>
                  </div>

                  <div className="text-right shrink-0 flex items-center gap-3">
                    <span className="font-bold text-sm" style={{ color: accent }}>{item.price.toFixed(2)} &euro;</span>

                    {qty === 0 ? (
                      <button
                        onClick={() => addToCart(item.name, item.price)}
                        className="px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all hover:scale-105"
                        style={{ backgroundColor: accent }}
                      >
                        Ajouter
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeFromCart(item.name)}
                          className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 font-bold text-lg flex items-center justify-center hover:bg-gray-200 transition"
                        >
                          -
                        </button>
                        <span className="text-sm font-bold text-gray-900 w-5 text-center">{qty}</span>
                        <button
                          onClick={() => addToCart(item.name, item.price)}
                          className="w-8 h-8 rounded-full text-white font-bold text-lg flex items-center justify-center hover:scale-110 transition"
                          style={{ backgroundColor: accent }}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floating Cart Bar */}
      {totalItems > 0 && !showCart && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <button
            onClick={() => setShowCart(true)}
            className="flex items-center gap-4 px-6 py-4 rounded-2xl text-white font-semibold shadow-2xl transition-all hover:scale-105"
            style={{ backgroundColor: accent, boxShadow: `0 10px 40px ${accent}60` }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
              <span>Votre commande</span>
            </div>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {totalItems} article{totalItems > 1 ? "s" : ""}
            </span>
            <span className="font-bold">{totalPrice.toFixed(2)} &euro;</span>
          </button>
        </div>
      )}

      {/* Cart Slide-out Panel */}
      {showCart && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setShowCart(false)} />
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
            {/* Cart Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="font-display text-xl text-gray-900">Votre commande</h2>
              <button
                onClick={() => setShowCart(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                      <p className="text-gray-400 text-xs">{item.price.toFixed(2)} &euro; / unite</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeFromCart(item.name)}
                        className="w-7 h-7 rounded-full bg-gray-100 text-gray-600 font-bold text-sm flex items-center justify-center hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item.name, item.price)}
                        className="w-7 h-7 rounded-full text-white font-bold text-sm flex items-center justify-center"
                        style={{ backgroundColor: accent }}
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold text-sm ml-4 w-16 text-right">{(item.price * item.quantity).toFixed(2)} &euro;</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Footer */}
            <div className="p-6 border-t border-gray-100 bg-[#FDFAF6]">
              <div className="flex justify-between mb-4">
                <span className="text-gray-500">Sous-total</span>
                <span className="font-bold text-gray-900">{totalPrice.toFixed(2)} &euro;</span>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Creneau de retrait</label>
                <select
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition"
                >
                  {pickupSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => { setOrdered(true); setShowCart(false); }}
                className="w-full py-4 rounded-xl text-white font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-lg"
                style={{ backgroundColor: "#16a34a", boxShadow: "0 0 30px rgba(22, 163, 74, 0.3)" }}
              >
                Commander ({totalPrice.toFixed(2)} &euro;)
              </button>
            </div>
          </div>
        </>
      )}

      <Footer restaurant="Casa di Giorgio" />
    </div>
  );
}
