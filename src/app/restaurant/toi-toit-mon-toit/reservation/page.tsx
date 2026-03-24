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

const timeSlots = ["17h00", "17h30", "18h00", "18h30", "19h00", "19h30", "20h00", "20h30", "21h00", "21h30", "22h00"];
const occasions = ["Aucune", "Afterwork", "Anniversaire", "Date", "Coucher de soleil"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

const monthNames = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
const dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

export default function ReservationPage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [guests, setGuests] = useState<number | null>(null);
  const [occasion, setOccasion] = useState("Aucune");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const now = new Date();
  const [calMonth, setCalMonth] = useState(now.getMonth());
  const [calYear, setCalYear] = useState(now.getFullYear());

  const daysInMonth = getDaysInMonth(calYear, calMonth);
  const firstDay = getFirstDayOfMonth(calYear, calMonth);
  const today = now.getDate();
  const isCurrentMonth = calMonth === now.getMonth() && calYear === now.getFullYear();

  const handleConfirm = () => {
    setConfirmed(true);
    setStep(5);
  };

  const prevMonth = () => {
    if (calMonth === 0) { setCalMonth(11); setCalYear(calYear - 1); }
    else setCalMonth(calMonth - 1);
  };

  const nextMonth = () => {
    if (calMonth === 11) { setCalMonth(0); setCalYear(calYear + 1); }
    else setCalMonth(calMonth + 1);
  };

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
                  item.href.endsWith("/reservation")
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
                style={item.href.endsWith("/reservation") ? { backgroundColor: accent } : {}}
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
        <h1 className="font-display text-4xl md:text-6xl text-gray-900 mb-4">Reserver</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Assurez votre place au sommet de Montpellier
        </p>
      </section>

      {/* Progress */}
      <section className="px-6 pb-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            {["Date", "Creneau", "Convives", "Contact", "Confirme"].map((label, i) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step > i + 1
                      ? "bg-green-500 text-white"
                      : step === i + 1
                      ? "text-white shadow-lg"
                      : "bg-gray-200 text-gray-400"
                  }`}
                  style={step === i + 1 ? { backgroundColor: accent } : {}}
                >
                  {step > i + 1 ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span className="text-[10px] text-gray-400 hidden sm:block">{label}</span>
              </div>
            ))}
          </div>
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${((step - 1) / 4) * 100}%`, backgroundColor: accent }}
            />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto">
          {/* Step 1: Date */}
          {step === 1 && (
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <h2 className="font-display text-2xl text-gray-900 mb-6 text-center">Choisissez une date</h2>
              <div className="flex items-center justify-between mb-4">
                <button onClick={prevMonth} className="p-2 rounded-full hover:bg-gray-100 transition">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <span className="font-semibold text-gray-900">{monthNames[calMonth]} {calYear}</span>
                <button onClick={nextMonth} className="p-2 rounded-full hover:bg-gray-100 transition">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {dayNames.map((d) => (
                  <div key={d} className="text-center text-xs font-semibold text-gray-400 py-2">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDay }, (_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }, (_, i) => {
                  const day = i + 1;
                  const isPast = isCurrentMonth && day < today;
                  const isSelected = selectedDate === day;
                  // Closed Mon/Tue (0=Mon, 1=Tue in our grid)
                  const dateObj = new Date(calYear, calMonth, day);
                  const dayOfWeek = dateObj.getDay();
                  const isClosed = dayOfWeek === 1 || dayOfWeek === 2;
                  const isDisabled = isPast || isClosed;
                  return (
                    <button
                      key={day}
                      disabled={isDisabled}
                      onClick={() => setSelectedDate(day)}
                      className={`aspect-square rounded-xl text-sm font-medium transition-all ${
                        isDisabled
                          ? "text-gray-300 cursor-not-allowed"
                          : isSelected
                          ? "text-white shadow-md scale-105"
                          : "text-gray-700 hover:bg-[#F4A261]/10"
                      }`}
                      style={isSelected ? { backgroundColor: accent } : {}}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-gray-400 text-center mt-4">Ferme lundi et mardi</p>
              {selectedDate && (
                <button
                  onClick={() => setStep(2)}
                  className="mt-6 w-full py-3.5 rounded-xl text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-lg"
                  style={{ backgroundColor: accent }}
                >
                  Continuer
                </button>
              )}
            </div>
          )}

          {/* Step 2: Time */}
          {step === 2 && (
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <h2 className="font-display text-2xl text-gray-900 mb-6 text-center">Choisissez un creneau</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`py-3 rounded-xl text-sm font-semibold transition-all ${
                      selectedTime === slot
                        ? "text-white shadow-md scale-105"
                        : "bg-gray-50 text-gray-700 hover:bg-[#F4A261]/10 border border-gray-200"
                    }`}
                    style={selectedTime === slot ? { backgroundColor: accent } : {}}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(1)} className="flex-1 py-3.5 rounded-xl font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50 transition">
                  Retour
                </button>
                {selectedTime && (
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 py-3.5 rounded-xl text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-lg"
                    style={{ backgroundColor: accent }}
                  >
                    Continuer
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Guests */}
          {step === 3 && (
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <h2 className="font-display text-2xl text-gray-900 mb-6 text-center">Nombre de convives</h2>
              <div className="grid grid-cols-4 gap-3">
                {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setGuests(n)}
                    className={`py-4 rounded-xl text-lg font-bold transition-all ${
                      guests === n
                        ? "text-white shadow-md scale-105"
                        : "bg-gray-50 text-gray-700 hover:bg-[#F4A261]/10 border border-gray-200"
                    }`}
                    style={guests === n ? { backgroundColor: accent } : {}}
                  >
                    {n}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-400 text-center mt-3">Pour plus de 8 personnes, contactez-nous directement</p>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(2)} className="flex-1 py-3.5 rounded-xl font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50 transition">
                  Retour
                </button>
                {guests && (
                  <button
                    onClick={() => setStep(4)}
                    className="flex-1 py-3.5 rounded-xl text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-lg"
                    style={{ backgroundColor: accent }}
                  >
                    Continuer
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Step 4: Contact */}
          {step === 4 && (
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <h2 className="font-display text-2xl text-gray-900 mb-6 text-center">Vos coordonnees</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nom complet</label>
                  <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/30 focus:border-[#F4A261] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jean@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/30 focus:border-[#F4A261] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Telephone</label>
                  <input
                    type="tel"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/30 focus:border-[#F4A261] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Occasion</label>
                  <div className="flex flex-wrap gap-2">
                    {occasions.map((occ) => (
                      <button
                        key={occ}
                        onClick={() => setOccasion(occ)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          occasion === occ
                            ? "text-white"
                            : "bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100"
                        }`}
                        style={occasion === occ ? { backgroundColor: accent } : {}}
                      >
                        {occ}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(3)} className="flex-1 py-3.5 rounded-xl font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50 transition">
                  Retour
                </button>
                <button
                  onClick={handleConfirm}
                  className="flex-1 py-3.5 rounded-xl text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-lg"
                  style={{ backgroundColor: "#16a34a", boxShadow: "0 0 30px rgba(22, 163, 74, 0.3)" }}
                >
                  Confirmer
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && confirmed && (
            <div className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="font-display text-3xl text-gray-900 mb-3">Reservation confirmee !</h2>
              <p className="text-gray-500 mb-8">Un email de confirmation vous a ete envoye</p>

              <div className="bg-[#FFF9F2] rounded-2xl p-6 mb-6 text-left max-w-sm mx-auto">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Date</span>
                    <span className="font-semibold text-gray-900 text-sm">{selectedDate} {monthNames[calMonth]} {calYear}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Heure</span>
                    <span className="font-semibold text-gray-900 text-sm">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-sm">Convives</span>
                    <span className="font-semibold text-gray-900 text-sm">{guests} personne{guests && guests > 1 ? "s" : ""}</span>
                  </div>
                  {occasion !== "Aucune" && (
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Occasion</span>
                      <span className="font-semibold text-gray-900 text-sm">{occasion}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 max-w-sm mx-auto">
                <p className="text-amber-700 text-sm">
                  <span className="font-semibold">Astuce :</span> arrivez avant 20h pour profiter du coucher de soleil
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 w-fit mx-auto">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-gray-500 font-medium">Powered by Zenchef</span>
              </div>
            </div>
          )}

          {/* Powered by Zenchef - on non-confirmed steps */}
          {!confirmed && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-gray-500 font-medium">Powered by Zenchef</span>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer restaurant="Toi Toit Mon Toit" />
    </div>
  );
}
