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

const presets = [
  { amount: 50, title: "Un diner pour deux", desc: "Offrez un repas genereux pour deux personnes avec entree, plat et dessert." },
  { amount: 75, title: "Un diner avec vin", desc: "Le diner complet accompagne d'une bouteille de vin italien selectionnee par notre sommelier." },
  { amount: 100, title: "L'experience complete", desc: "Un diner gastronomique avec accord mets & vins, du prosecco au limoncello." },
];

export default function CarteCadeauPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(75);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [form, setForm] = useState({
    from: "",
    to: "",
    email: "",
    message: "",
    sendDate: "today",
    customDate: "",
  });
  const [purchased, setPurchased] = useState(false);

  const finalAmount = isCustom ? parseInt(customAmount) || 0 : selectedAmount || 0;
  const isValid = finalAmount >= 20 && finalAmount <= 500 && form.from && form.to && form.email;

  if (purchased) {
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
                style={item.href.endsWith("/carte-cadeau") ? { backgroundColor: `${accent}15`, color: accent } : {}}
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
            <h2 className="font-display text-3xl text-gray-900 mb-3">Carte cadeau envoyee !</h2>
            <p className="text-gray-500 mb-2">
              Un email a ete envoye a <span className="font-semibold text-gray-900">{form.email}</span>
            </p>
            <p className="text-gray-400 text-sm mb-8">
              {form.to} recevra une carte cadeau de {finalAmount} &euro; de la part de {form.from}.
            </p>
            <button
              onClick={() => { setPurchased(false); setForm({ from: "", to: "", email: "", message: "", sendDate: "today", customDate: "" }); }}
              className="px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: `${accent}15`, color: accent }}
            >
              Offrir une autre carte
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
              style={item.href.endsWith("/carte-cadeau") ? { backgroundColor: `${accent}15`, color: accent } : {}}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="pt-36 pb-12 bg-[#FDFAF6]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: accent }}>
            Casa di Giorgio
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-gray-900 mb-4">
            Offrez une experience
          </h1>
          <p className="text-gray-500 text-lg">
            La carte cadeau ideale pour les amoureux de la cuisine italienne
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white flex-1">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left: Form */}
            <div className="flex-1">
              {/* Amount Selection */}
              <h2 className="font-display text-2xl text-gray-900 mb-6">Choisissez un montant</h2>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {presets.map((preset) => (
                  <button
                    key={preset.amount}
                    onClick={() => { setSelectedAmount(preset.amount); setIsCustom(false); }}
                    className={`p-5 rounded-2xl border-2 text-left transition-all ${
                      !isCustom && selectedAmount === preset.amount
                        ? "border-[#E63946] shadow-lg"
                        : "border-gray-100 hover:border-gray-300"
                    }`}
                    style={!isCustom && selectedAmount === preset.amount ? { backgroundColor: `${accent}05` } : {}}
                  >
                    <p className="text-3xl font-bold mb-2" style={{ color: !isCustom && selectedAmount === preset.amount ? accent : "#111" }}>
                      {preset.amount} &euro;
                    </p>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{preset.title}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{preset.desc}</p>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-10">
                <button
                  onClick={() => setIsCustom(true)}
                  className={`text-sm font-medium mb-2 ${isCustom ? "" : "text-gray-500 hover:text-gray-700"}`}
                  style={isCustom ? { color: accent } : {}}
                >
                  Ou choisir un montant personnalise
                </button>
                {isCustom && (
                  <div className="flex items-center gap-3 mt-2">
                    <input
                      type="number"
                      min="20"
                      max="500"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="Montant"
                      className="w-32 px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition"
                    />
                    <span className="text-gray-500 text-lg font-bold">&euro;</span>
                    <span className="text-gray-400 text-xs">Min. 20 &euro; — Max. 500 &euro;</span>
                  </div>
                )}
              </div>

              {/* Personalization Form */}
              <h2 className="font-display text-2xl text-gray-900 mb-6">Personnalisez votre carte</h2>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">De la part de *</label>
                  <input
                    type="text"
                    value={form.from}
                    onChange={(e) => setForm({ ...form, from: e.target.value })}
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pour *</label>
                  <input
                    type="text"
                    value={form.to}
                    onChange={(e) => setForm({ ...form, to: e.target.value })}
                    placeholder="Nom du destinataire"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email du destinataire *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="destinataire@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date d&apos;envoi</label>
                  <select
                    value={form.sendDate}
                    onChange={(e) => setForm({ ...form, sendDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition"
                  >
                    <option value="today">Aujourd&apos;hui</option>
                    <option value="custom">Choisir une date</option>
                  </select>
                </div>
              </div>

              {form.sendDate === "custom" && (
                <div className="mb-6">
                  <input
                    type="date"
                    value={form.customDate}
                    onChange={(e) => setForm({ ...form, customDate: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition"
                  />
                </div>
              )}

              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message personnel <span className="text-gray-400 font-normal">({form.message.length}/200)</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => e.target.value.length <= 200 && setForm({ ...form, message: e.target.value })}
                  placeholder="Un petit mot pour accompagner votre cadeau..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition resize-none"
                />
              </div>

              {/* Pay Button */}
              <button
                onClick={() => isValid && setPurchased(true)}
                disabled={!isValid}
                className={`w-full py-4 rounded-xl text-white font-semibold text-lg transition-all ${
                  isValid ? "hover:scale-[1.02] hover:shadow-lg" : "opacity-40 cursor-not-allowed"
                }`}
                style={{ backgroundColor: "#16a34a", boxShadow: isValid ? "0 0 30px rgba(22, 163, 74, 0.3)" : "none" }}
              >
                Payer {finalAmount > 0 ? `${finalAmount} ` : ""}€
              </button>

              <div className="mt-4 flex items-center justify-center gap-4">
                <p className="text-gray-400 text-xs">Valable 1 an. Utilisable sur place. Validation par QR code.</p>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 w-fit mx-auto">
                <svg className="w-4 h-4 text-[#635BFF]" viewBox="0 0 24 24" fill="currentColor"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" /></svg>
                <span className="text-xs text-gray-500 font-medium">Powered by Stripe</span>
              </div>
            </div>

            {/* Right: Preview Card */}
            <div className="lg:w-96 shrink-0">
              <div className="lg:sticky lg:top-36">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Apercu de la carte</h3>
                <div className="bg-gradient-to-br from-[#1a0a0a] to-[#2a1515] rounded-3xl p-8 relative overflow-hidden aspect-[4/3] flex flex-col justify-between">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10" style={{ background: `radial-gradient(circle, ${accent}, transparent)` }} />
                  <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #d4a574, transparent)" }} />

                  <div>
                    <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-1">Carte Cadeau</p>
                    <h4 className="font-display text-2xl text-white">Casa di Giorgio</h4>
                  </div>

                  <div>
                    {form.message && (
                      <p className="text-white/60 text-sm italic mb-4 line-clamp-3">&ldquo;{form.message}&rdquo;</p>
                    )}
                    <div className="flex justify-between items-end">
                      <div>
                        {form.to && <p className="text-white/50 text-xs">Pour {form.to}</p>}
                        {form.from && <p className="text-white/50 text-xs">De la part de {form.from}</p>}
                      </div>
                      <p className="text-4xl font-bold text-white">
                        {finalAmount > 0 ? finalAmount : "—"} <span className="text-lg">&euro;</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-[#FDFAF6] rounded-2xl p-5 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 text-sm mb-3">Comment ca marche ?</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold text-white" style={{ backgroundColor: accent }}>1</div>
                      <p className="text-gray-500 text-xs">Choisissez le montant et personnalisez votre carte</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold text-white" style={{ backgroundColor: accent }}>2</div>
                      <p className="text-gray-500 text-xs">Le destinataire recoit la carte par email avec un QR code unique</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold text-white" style={{ backgroundColor: accent }}>3</div>
                      <p className="text-gray-500 text-xs">Il presente le QR code au restaurant pour profiter de son cadeau</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer restaurant="Casa di Giorgio" />
    </div>
  );
}
