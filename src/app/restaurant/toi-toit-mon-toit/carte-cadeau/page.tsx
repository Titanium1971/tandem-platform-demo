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

const presets = [
  { amount: 40, label: "Cocktails pour deux", desc: "2 cocktails signatures + tapas a partager", icon: "cocktail" },
  { amount: 70, label: "Soiree tapas & cocktails", desc: "4 cocktails + planche mixte + tapas — pour 2 personnes", icon: "planche" },
  { amount: 120, label: "Experience VIP sunset", desc: "Bouteille de champagne + planche XL + cocktails — pour 2-4 personnes", icon: "vip" },
];

export default function CarteCadeauPage() {
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [step, setStep] = useState<"select" | "form" | "preview">("select");
  const [senderName, setSenderName] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState("");

  const finalAmount = isCustom ? parseInt(customAmount) || 0 : (selectedPreset !== null ? presets[selectedPreset].amount : 0);
  const finalLabel = isCustom ? "Montant personnalise" : (selectedPreset !== null ? presets[selectedPreset].label : "");
  const canProceed = finalAmount >= 20 && finalAmount <= 300;

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
                  item.href.endsWith("/carte-cadeau")
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
                style={item.href.endsWith("/carte-cadeau") ? { backgroundColor: accent } : {}}
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
        <h1 className="font-display text-4xl md:text-6xl text-gray-900 mb-4">Cartes Cadeaux</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Offrez une soiree sur les toits de Montpellier
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          {step === "select" && (
            <>
              {/* Presets */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {presets.map((preset, i) => (
                  <button
                    key={preset.amount}
                    onClick={() => { setSelectedPreset(i); setIsCustom(false); }}
                    className={`text-left rounded-3xl p-6 border-2 transition-all hover:shadow-lg group ${
                      selectedPreset === i && !isCustom
                        ? "border-[#F4A261] shadow-lg bg-white"
                        : "border-gray-200 bg-white hover:border-[#F4A261]/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition ${
                          selectedPreset === i && !isCustom ? "shadow-md" : ""
                        }`}
                        style={{ backgroundColor: selectedPreset === i && !isCustom ? accent : `${accent}20` }}
                      >
                        <svg className={`w-6 h-6 ${selectedPreset === i && !isCustom ? "text-white" : ""}`} style={selectedPreset === i && !isCustom ? {} : { color: accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />}
                          {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                          {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />}
                        </svg>
                      </div>
                      {selectedPreset === i && !isCustom && (
                        <div className="w-6 h-6 rounded-full bg-[#F4A261] flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                      )}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{preset.amount} &euro;</div>
                    <div className="font-semibold text-gray-900 mb-1">{preset.label}</div>
                    <p className="text-gray-400 text-sm">{preset.desc}</p>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div
                className={`bg-white rounded-3xl p-6 border-2 transition-all mb-8 ${
                  isCustom ? "border-[#F4A261] shadow-lg" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => { setIsCustom(true); setSelectedPreset(null); }}
                  className="w-full text-left"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Montant personnalise</h3>
                    {isCustom && (
                      <div className="w-6 h-6 rounded-full bg-[#F4A261] flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                    )}
                  </div>
                </button>
                {isCustom && (
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1 max-w-xs">
                      <input
                        type="number"
                        min={20}
                        max={300}
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="50"
                        className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 text-2xl font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/30 focus:border-[#F4A261] transition"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-lg">&euro;</span>
                    </div>
                    <span className="text-gray-400 text-sm">De 20 a 300 &euro;</span>
                  </div>
                )}
              </div>

              {canProceed && (
                <div className="text-center">
                  <button
                    onClick={() => setStep("form")}
                    className="px-10 py-4 rounded-xl text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: accent }}
                  >
                    Continuer — {finalAmount} &euro;
                  </button>
                </div>
              )}
            </>
          )}

          {step === "form" && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-2xl text-gray-900">Personnalisez votre carte</h2>
                  <span className="text-xl font-bold" style={{ color: accent }}>{finalAmount} &euro;</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Votre nom</label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Jean"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/30 focus:border-[#F4A261] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nom du destinataire</label>
                    <input
                      type="text"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      placeholder="Marie"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/30 focus:border-[#F4A261] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email du destinataire</label>
                    <input
                      type="email"
                      placeholder="marie@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/30 focus:border-[#F4A261] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message personnel <span className="text-gray-400 font-normal">(optionnel)</span></label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Joyeux anniversaire ! Profite bien de cette soiree sur les toits..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/30 focus:border-[#F4A261] transition resize-none"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep("select")}
                    className="flex-1 py-3.5 rounded-xl font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
                  >
                    Retour
                  </button>
                  <button
                    onClick={() => setStep("preview")}
                    className="flex-1 py-3.5 rounded-xl text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-lg"
                    style={{ backgroundColor: accent }}
                  >
                    Apercu de la carte
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === "preview" && (
            <div className="max-w-2xl mx-auto">
              {/* Card Preview */}
              <div className="relative rounded-3xl overflow-hidden mb-8 shadow-2xl" style={{ aspectRatio: "16/9" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#F4A261] via-[#e76f51] to-[#264653]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Decorative circles */}
                <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-white/10 blur-xl" />
                <div className="absolute bottom-16 right-16 w-16 h-16 rounded-full bg-white/5 blur-lg" />
                <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
                  <div>
                    <div className="text-white/60 text-sm font-medium tracking-wide mb-1">CARTE CADEAU</div>
                    <div className="font-display text-2xl md:text-3xl text-white">Toi Toit Mon Toit</div>
                  </div>
                  <div>
                    {message && (
                      <p className="text-white/70 text-sm italic mb-4 max-w-sm">&ldquo;{message}&rdquo;</p>
                    )}
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-white/50 text-xs mb-1">
                          {senderName ? `De ${senderName}` : "De"} {recipientName ? `pour ${recipientName}` : ""}
                        </div>
                        <div className="text-white/40 text-xs">{finalLabel}</div>
                      </div>
                      <div className="text-5xl font-bold text-white">{finalAmount}&euro;</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm text-center">
                <h2 className="font-display text-2xl text-gray-900 mb-2">Parfait !</h2>
                <p className="text-gray-500 mb-6">
                  La carte cadeau sera envoyee par email au destinataire avec votre message personnel.
                </p>
                <div className="bg-[#FFF9F2] rounded-2xl p-4 mb-6 max-w-sm mx-auto">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Montant</span>
                    <span className="font-bold text-gray-900">{finalAmount} &euro;</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Formule</span>
                    <span className="font-semibold text-gray-900">{finalLabel}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Destinataire</span>
                    <span className="font-semibold text-gray-900">{recipientName || "—"}</span>
                  </div>
                </div>
                <div className="flex gap-3 max-w-sm mx-auto">
                  <button
                    onClick={() => setStep("form")}
                    className="flex-1 py-3.5 rounded-xl font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
                  >
                    Modifier
                  </button>
                  <button
                    className="flex-1 py-3.5 rounded-xl text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-lg"
                    style={{ backgroundColor: "#16a34a", boxShadow: "0 0 30px rgba(22, 163, 74, 0.3)" }}
                  >
                    Payer {finalAmount} &euro;
                  </button>
                </div>
                <p className="text-gray-400 text-xs mt-4">Paiement securise par Stripe</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer restaurant="Toi Toit Mon Toit" />
    </div>
  );
}
