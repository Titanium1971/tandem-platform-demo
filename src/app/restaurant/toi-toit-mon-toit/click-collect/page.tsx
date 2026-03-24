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

interface CartItem {
  name: string;
  price: number;
  qty: number;
}

const categories = [
  {
    name: "Cocktails Bouteille",
    desc: "Cocktails pre-mixed en bouteille de 70cl — prets a servir",
    items: [
      { name: "Sunset Montpellier (bouteille)", desc: "Aperol, prosecco, orange sanguine — 70cl, 4-5 verres", price: 28 },
      { name: "Rooftop Mule (bouteille)", desc: "Vodka, gingembre, citron vert, concombre — 70cl, 4-5 verres", price: 25 },
      { name: "Negroni Batch (bouteille)", desc: "Gin, Campari, vermouth rouge — 70cl, pret a servir sur glace", price: 32 },
      { name: "Margarita Mix (bouteille)", desc: "Tequila, triple sec, citron vert — 70cl, sel de Guerande inclus", price: 30 },
      { name: "Sangria du Toit (bouteille)", desc: "Vin rouge, fruits frais, epices, agrumes — 1L", price: 22 },
      { name: "Spritz Ready (bouteille)", desc: "Aperol, prosecco, eau gazeuse — 70cl, juste a verser", price: 25 },
    ],
  },
  {
    name: "Tapas Box",
    desc: "Nos tapas en box a partager — preparees a la commande",
    items: [
      { name: "Box Tapas Duo", desc: "Patatas bravas, bruschetta burrata, croquettes iberico, guacamole & chips — pour 2 personnes", price: 28 },
      { name: "Box Tapas Quattro", desc: "Double portion de nos 5 tapas signatures — patatas, bruschetta, croquettes, calamars, guacamole — pour 4 personnes", price: 45 },
      { name: "Box Vegetarienne Duo", desc: "Bruschetta burrata, guacamole, houmous trio, patatas bravas — pour 2 personnes", price: 26 },
      { name: "Box Mediterraneenne", desc: "Calamars frits, gambas al ajillo, patatas bravas, bruschetta — pour 3-4 personnes", price: 38 },
    ],
  },
  {
    name: "Planches",
    desc: "Nos planches a emporter — sous vide pour garder la fraicheur",
    items: [
      { name: "Planche Charcuterie Italienne", desc: "Prosciutto, coppa, bresaola, olives, grissini — pour 2-3 personnes", price: 22 },
      { name: "Planche Fromages Affines", desc: "5 fromages affines, confiture de figues, noix, pain aux cereales", price: 24 },
      { name: "Planche Mixte XL", desc: "Charcuterie italienne + fromages affines + olives + houmous — pour 4 personnes", price: 32 },
    ],
  },
  {
    name: "Desserts",
    desc: "Nos desserts a emporter dans leur ecrin",
    items: [
      { name: "Tiramisu du Rooftop", desc: "Mascarpone, cafe espresso, cacao amer — portion individuelle", price: 8 },
      { name: "Panna Cotta Passion-Mangue", desc: "Panna cotta vanille, coulis passion-mangue — en verrines", price: 8 },
      { name: "Fondant au Chocolat", desc: "Chocolat noir 70%, a rechauffer 2 min — portion individuelle", price: 10 },
      { name: "Assortiment Desserts (x4)", desc: "2 tiramisu + 1 panna cotta + 1 fondant — pour partager", price: 30 },
    ],
  },
];

const pickupSlots = ["17h00", "17h30", "18h00", "18h30", "19h00"];

export default function ClickCollectPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [pickupSlot, setPickupSlot] = useState("");
  const [checkoutStep, setCheckoutStep] = useState<"browse" | "checkout" | "confirmed">("browse");

  const addToCart = (name: string, price: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === name);
      if (existing) {
        return prev.map((item) => item.name === name ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { name, price, qty: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === name);
      if (existing && existing.qty > 1) {
        return prev.map((item) => item.name === name ? { ...item, qty: item.qty - 1 } : item);
      }
      return prev.filter((item) => item.name !== name);
    });
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

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
                  item.href.endsWith("/click-collect")
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
                style={item.href.endsWith("/click-collect") ? { backgroundColor: accent } : {}}
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
        <h1 className="font-display text-4xl md:text-6xl text-gray-900 mb-4">Click & Collect</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Commande a emporter — Retrait au comptoir du rooftop
        </p>
        <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Retrait disponible de 17h a 19h
        </div>
      </section>

      {checkoutStep === "browse" && (
        <section className="px-6 pb-32">
          <div className="max-w-6xl mx-auto">
            {/* Category Tabs */}
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
              {categories.map((cat, i) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(i)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === i
                      ? "text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                  style={activeCategory === i ? { backgroundColor: accent } : {}}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <p className="text-center text-gray-400 text-sm mb-8">{categories[activeCategory].desc}</p>

            {/* Items */}
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {categories[activeCategory].items.map((item) => {
                const inCart = cart.find((c) => c.name === item.name);
                return (
                  <div
                    key={item.name}
                    className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#F4A261]/20 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-display text-lg text-gray-900 group-hover:text-[#F4A261] transition-colors flex-1">
                        {item.name}
                      </h3>
                      <span className="text-lg font-bold whitespace-nowrap ml-4" style={{ color: accent }}>
                        {item.price} &euro;
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <div className="flex items-center justify-end gap-2">
                      {inCart ? (
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => removeFromCart(item.name)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
                          >
                            -
                          </button>
                          <span className="font-bold text-gray-900 min-w-[20px] text-center">{inCart.qty}</span>
                          <button
                            onClick={() => addToCart(item.name, item.price)}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white transition hover:scale-110"
                            style={{ backgroundColor: accent }}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item.name, item.price)}
                          className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                          style={{ backgroundColor: accent }}
                        >
                          Ajouter
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {checkoutStep === "checkout" && (
        <section className="px-6 pb-32">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <h2 className="font-display text-2xl text-gray-900 mb-6">Votre commande</h2>
              <div className="space-y-3 mb-6">
                {cart.map((item) => (
                  <div key={item.name} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex-1">
                      <span className="text-gray-900 text-sm font-medium">{item.name}</span>
                      <span className="text-gray-400 text-sm ml-2">x{item.qty}</span>
                    </div>
                    <span className="font-bold text-gray-900">{item.price * item.qty} &euro;</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center py-4 border-t-2 border-gray-900 mb-8">
                <span className="font-bold text-lg text-gray-900">Total</span>
                <span className="font-bold text-xl" style={{ color: accent }}>{cartTotal} &euro;</span>
              </div>

              <h3 className="font-semibold text-gray-900 mb-3">Creneau de retrait</h3>
              <div className="grid grid-cols-5 gap-2 mb-6">
                {pickupSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setPickupSlot(slot)}
                    className={`py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      pickupSlot === slot
                        ? "text-white shadow-md"
                        : "bg-gray-50 text-gray-700 border border-gray-200 hover:bg-[#F4A261]/10"
                    }`}
                    style={pickupSlot === slot ? { backgroundColor: accent } : {}}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <h3 className="font-semibold text-gray-900 mb-3">Vos coordonnees</h3>
              <div className="space-y-3 mb-6">
                <input
                  type="text"
                  placeholder="Nom complet"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/30 focus:border-[#F4A261] transition"
                />
                <input
                  type="tel"
                  placeholder="Telephone"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/30 focus:border-[#F4A261] transition"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setCheckoutStep("browse")}
                  className="flex-1 py-3.5 rounded-xl font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
                >
                  Modifier
                </button>
                <button
                  onClick={() => setCheckoutStep("confirmed")}
                  className="flex-1 py-3.5 rounded-xl text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-lg"
                  style={{ backgroundColor: "#16a34a", boxShadow: "0 0 30px rgba(22, 163, 74, 0.3)" }}
                >
                  Commander ({cartTotal} &euro;)
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {checkoutStep === "confirmed" && (
        <section className="px-6 pb-32">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="font-display text-3xl text-gray-900 mb-3">Commande confirmee !</h2>
              <p className="text-gray-500 mb-2">Retrait au comptoir du rooftop</p>
              <p className="text-lg font-bold mb-6" style={{ color: accent }}>
                {pickupSlot || "17h00"} — Aujourd&apos;hui
              </p>
              <div className="bg-[#FFF9F2] rounded-2xl p-6 mb-6 text-left max-w-sm mx-auto">
                {cart.map((item) => (
                  <div key={item.name} className="flex justify-between py-1.5 text-sm">
                    <span className="text-gray-600">{item.name} x{item.qty}</span>
                    <span className="font-semibold text-gray-900">{item.price * item.qty} &euro;</span>
                  </div>
                ))}
                <div className="flex justify-between pt-3 mt-3 border-t border-gray-200">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-bold" style={{ color: accent }}>{cartTotal} &euro;</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Vous recevrez un SMS de confirmation</p>
            </div>
          </div>
        </section>
      )}

      {/* Floating Cart Button */}
      {checkoutStep === "browse" && cartCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <button
            onClick={() => { setShowCart(!showCart); setCheckoutStep("checkout"); }}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold shadow-2xl transition-all hover:scale-105"
            style={{ backgroundColor: accent, boxShadow: `0 10px 40px ${accent}50` }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
            Voir ma commande ({cartCount})
            <span className="px-3 py-1 bg-white/20 rounded-lg font-bold">{cartTotal} &euro;</span>
          </button>
        </div>
      )}

      <Footer restaurant="Toi Toit Mon Toit" />
    </div>
  );
}
