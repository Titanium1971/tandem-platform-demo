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

const timeSlots = [
  { time: "12h00", available: true },
  { time: "12h30", available: true },
  { time: "13h00", available: false },
  { time: "19h00", available: true },
  { time: "19h30", available: true },
  { time: "20h00", available: false },
  { time: "20h30", available: true },
  { time: "21h00", available: true },
];

const occasions = ["Aucune", "Anniversaire", "Affaires", "Romantique"];

function getWeekDays() {
  const days = [];
  const today = new Date(2026, 2, 24); // 24 Mars 2026
  const dayNames = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  const monthNames = ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin", "Juil", "Aou", "Sep", "Oct", "Nov", "Dec"];

  // Start from Monday of current week
  const startOfWeek = new Date(today);
  const dayOfWeek = today.getDay();
  const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  startOfWeek.setDate(today.getDate() + diff);

  for (let i = 0; i < 7; i++) {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    days.push({
      dayName: dayNames[d.getDay()],
      date: d.getDate(),
      month: monthNames[d.getMonth()],
      full: `${d.getDate()} ${monthNames[d.getMonth()]} 2026`,
      isToday: d.getDate() === today.getDate() && d.getMonth() === today.getMonth(),
      isClosed: d.getDay() === 1, // Lundi ferme
      isPast: d < today && !( d.getDate() === today.getDate() && d.getMonth() === today.getMonth()),
    });
  }
  return days;
}

const weekDays = getWeekDays();

export default function ReservationPage() {
  const [step, setStep] = useState(1);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [guests, setGuests] = useState(2);
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    occasion: "Aucune",
    notes: "",
  });

  const canNext = () => {
    if (step === 1) return selectedDay !== null;
    if (step === 2) return selectedTime !== null;
    if (step === 3) return guests > 0;
    if (step === 4) return form.nom && form.prenom && form.telephone && form.email;
    return false;
  };

  const stepLabels = ["Date", "Heure", "Convives", "Coordonnees"];

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
                item.href.endsWith("/reservation")
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
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: accent }}>
            Casa di Giorgio
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-gray-900 mb-4">Reserver une table</h1>
          <p className="text-gray-500 text-lg">
            Choisissez votre date, horaire et nombre de convives
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white flex-1">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Form Area */}
            <div className="flex-1">
              {/* Progress Bar */}
              {step <= 4 && (
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-3">
                    {stepLabels.map((label, i) => (
                      <div key={label} className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                            step > i + 1
                              ? "bg-green-500 text-white"
                              : step === i + 1
                              ? "text-white"
                              : "bg-gray-100 text-gray-400"
                          }`}
                          style={step === i + 1 ? { backgroundColor: accent } : {}}
                        >
                          {step > i + 1 ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          ) : (
                            i + 1
                          )}
                        </div>
                        <span className={`text-sm hidden sm:inline ${step === i + 1 ? "font-semibold text-gray-900" : "text-gray-400"}`}>
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${(step / 4) * 100}%`, backgroundColor: accent }}
                    />
                  </div>
                </div>
              )}

              {/* Step 1: Date */}
              {step === 1 && (
                <div>
                  <h2 className="font-display text-2xl text-gray-900 mb-6">Choisissez une date</h2>
                  <div className="grid grid-cols-7 gap-3">
                    {weekDays.map((day, i) => {
                      const disabled = day.isClosed || day.isPast;
                      const selected = selectedDay === i;
                      return (
                        <button
                          key={i}
                          onClick={() => !disabled && setSelectedDay(i)}
                          disabled={disabled}
                          className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all ${
                            disabled
                              ? "bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed"
                              : selected
                              ? "border-[#E63946] shadow-lg"
                              : "border-gray-100 hover:border-gray-300 hover:shadow-sm cursor-pointer"
                          }`}
                          style={selected ? { backgroundColor: `${accent}08` } : {}}
                        >
                          <span className={`text-xs font-medium mb-1 ${selected ? "" : ""}`} style={selected ? { color: accent } : {}}>
                            {day.dayName}
                          </span>
                          <span className={`text-2xl font-bold ${disabled ? "text-gray-300" : selected ? "" : "text-gray-900"}`} style={selected ? { color: accent } : {}}>
                            {day.date}
                          </span>
                          <span className="text-[10px] text-gray-400 mt-1">{day.month}</span>
                          {day.isToday && (
                            <span className="text-[9px] font-bold mt-1 px-2 py-0.5 rounded-full" style={{ backgroundColor: `${accent}15`, color: accent }}>
                              Auj.
                            </span>
                          )}
                          {day.isClosed && (
                            <span className="text-[9px] text-gray-400 mt-1">Ferme</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Time */}
              {step === 2 && (
                <div>
                  <h2 className="font-display text-2xl text-gray-900 mb-2">Choisissez un horaire</h2>
                  <p className="text-gray-500 text-sm mb-6">
                    {selectedDay !== null && weekDays[selectedDay] ? weekDays[selectedDay].full : ""}
                  </p>
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Dejeuner</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {timeSlots.filter(s => parseInt(s.time) < 15).map((slot) => (
                        <button
                          key={slot.time}
                          onClick={() => slot.available && setSelectedTime(slot.time)}
                          disabled={!slot.available}
                          className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                            !slot.available
                              ? "bg-gray-50 text-gray-300 cursor-not-allowed line-through"
                              : selectedTime === slot.time
                              ? "text-white shadow-lg"
                              : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                          }`}
                          style={selectedTime === slot.time ? { backgroundColor: accent } : {}}
                        >
                          {slot.time}
                          {!slot.available && <span className="block text-[10px] font-normal no-underline">Complet</span>}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Diner</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                      {timeSlots.filter(s => parseInt(s.time) >= 15).map((slot) => (
                        <button
                          key={slot.time}
                          onClick={() => slot.available && setSelectedTime(slot.time)}
                          disabled={!slot.available}
                          className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                            !slot.available
                              ? "bg-gray-50 text-gray-300 cursor-not-allowed line-through"
                              : selectedTime === slot.time
                              ? "text-white shadow-lg"
                              : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                          }`}
                          style={selectedTime === slot.time ? { backgroundColor: accent } : {}}
                        >
                          {slot.time}
                          {!slot.available && <span className="block text-[10px] font-normal no-underline">Complet</span>}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Guests */}
              {step === 3 && (
                <div>
                  <h2 className="font-display text-2xl text-gray-900 mb-2">Nombre de convives</h2>
                  <p className="text-gray-500 text-sm mb-8">
                    {selectedDay !== null && weekDays[selectedDay] ? weekDays[selectedDay].full : ""} a {selectedTime}
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 max-w-lg mx-auto">
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                      <button
                        key={n}
                        onClick={() => setGuests(n)}
                        className={`w-14 h-14 rounded-full text-lg font-bold transition-all ${
                          guests === n
                            ? "text-white shadow-lg scale-110"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                        }`}
                        style={guests === n ? { backgroundColor: accent } : {}}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                  <p className="text-center text-gray-400 text-sm mt-6">
                    {guests === 1 ? "1 personne" : `${guests} personnes`}
                  </p>
                </div>
              )}

              {/* Step 4: Contact */}
              {step === 4 && (
                <div>
                  <h2 className="font-display text-2xl text-gray-900 mb-6">Vos coordonnees</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Nom *</label>
                      <input
                        type="text"
                        value={form.nom}
                        onChange={(e) => setForm({ ...form, nom: e.target.value })}
                        placeholder="Votre nom"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Prenom *</label>
                      <input
                        type="text"
                        value={form.prenom}
                        onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                        placeholder="Votre prenom"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Telephone *</label>
                      <input
                        type="tel"
                        value={form.telephone}
                        onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                        placeholder="06 12 34 56 78"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="votre@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Occasion speciale ?</label>
                      <select
                        value={form.occasion}
                        onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition"
                      >
                        {occasions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Notes</label>
                      <textarea
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        placeholder="Allergies, demandes speciales..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30 focus:border-[#E63946] transition resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Confirmation */}
              {step === 5 && (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-display text-3xl text-gray-900 mb-4">Reservation confirmee !</h2>
                  <p className="text-gray-500 mb-8">Confirmation envoyee par email a {form.email}</p>

                  <div className="bg-[#FDFAF6] rounded-2xl p-8 max-w-md mx-auto border border-gray-100 text-left">
                    <h3 className="font-display text-xl text-gray-900 mb-4" style={{ color: accent }}>Recapitulatif</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Restaurant</span>
                        <span className="font-semibold text-gray-900">Casa di Giorgio</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Date</span>
                        <span className="font-semibold text-gray-900">{selectedDay !== null && weekDays[selectedDay] ? weekDays[selectedDay].full : ""}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Heure</span>
                        <span className="font-semibold text-gray-900">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Convives</span>
                        <span className="font-semibold text-gray-900">{guests} {guests === 1 ? "personne" : "personnes"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Nom</span>
                        <span className="font-semibold text-gray-900">{form.prenom} {form.nom}</span>
                      </div>
                      {form.occasion !== "Aucune" && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Occasion</span>
                          <span className="font-semibold text-gray-900">{form.occasion}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 w-fit mx-auto">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-500 font-medium">Powered by Zenchef</span>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {step <= 4 && (
                <div className="flex justify-between mt-10">
                  {step > 1 ? (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="px-6 py-3 rounded-xl text-gray-600 font-semibold hover:bg-gray-50 transition"
                    >
                      &larr; Retour
                    </button>
                  ) : (
                    <div />
                  )}
                  <button
                    onClick={() => canNext() && setStep(step + 1)}
                    disabled={!canNext()}
                    className={`px-8 py-3 rounded-xl font-semibold text-white transition-all ${
                      canNext() ? "hover:scale-105 hover:shadow-lg" : "opacity-40 cursor-not-allowed"
                    }`}
                    style={{ backgroundColor: accent }}
                  >
                    {step === 4 ? "Confirmer la reservation" : "Continuer"}
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar Info */}
            <aside className="lg:w-72 shrink-0">
              <div className="lg:sticky lg:top-36 bg-[#FDFAF6] rounded-2xl p-6 border border-gray-100">
                <h3 className="font-display text-xl text-gray-900 mb-4">Casa di Giorgio</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <div>
                      <p className="font-semibold text-gray-900">Adresse</p>
                      <p className="text-gray-500">Place Jean Jaures<br />34000 Montpellier</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <div>
                      <p className="font-semibold text-gray-900">Telephone</p>
                      <p className="text-gray-500">04 67 XX XX XX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <p className="font-semibold text-gray-900">Horaires</p>
                      <p className="text-gray-500">Mar - Dim</p>
                      <p className="text-gray-500">12h - 14h30 / 19h - 23h</p>
                      <p className="text-gray-400 text-xs mt-1">Ferme le lundi</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-500 font-medium">Powered by Zenchef</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer restaurant="Casa di Giorgio" />
    </div>
  );
}
