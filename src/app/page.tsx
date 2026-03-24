import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const establishments = [
  { name: "Casa di Giorgio", type: "Restaurant Italien", city: "Montpellier", slug: "casa-di-giorgio", status: "demo", accent: "#E63946" },
  { name: "Toi Toit Mon Toit", type: "Rooftop Bar", city: "Montpellier", slug: "toi-toit-mon-toit", status: "demo", accent: "#F4A261" },
  { name: "Chateau Paloma", type: "Gastronomie & Evenements", city: "Lattes", slug: null, status: "a-venir", accent: "#2A9D8F" },
  { name: "Cena", type: "Restaurant Gastronomique", city: "Montpellier", slug: null, status: "a-venir", accent: "#264653" },
  { name: "Le Cafe Joseph", type: "Bar & Tapas", city: "Montpellier", slug: null, status: "a-venir", accent: "#E9C46A" },
  { name: "Le Josephine", type: "Bar Intimiste", city: "Montpellier", slug: null, status: "a-venir", accent: "#8338EC" },
  { name: "La Mamma St Roch", type: "Restaurant Italien", city: "Montpellier", slug: null, status: "a-venir", accent: "#E63946" },
  { name: "La Notta", type: "Italien Festif", city: "Montpellier", slug: null, status: "a-venir", accent: "#FB5607" },
  { name: "Napoleon Dynamite", type: "Coffee & Brunch", city: "Montpellier", slug: null, status: "a-venir", accent: "#606C38" },
  { name: "Cafe de la Mairie", type: "Brasserie", city: "Montpellier", slug: null, status: "a-venir", accent: "#BC6C25" },
  { name: "Cafe Paume", type: "Cuisine Francaise", city: "Montpellier", slug: null, status: "a-venir", accent: "#DDA15E" },
  { name: "La Plage Bonaventure", type: "Plage Privee", city: "Palavas", slug: null, status: "a-venir", accent: "#0077B6" },
  { name: "Le Cabanon", type: "Restaurant", city: "Anduze", slug: null, status: "a-venir", accent: "#588157" },
  { name: "Ebene Coffee", type: "Coffee Shop", city: "Montpellier", slug: null, status: "a-venir", accent: "#6F4E37" },
  { name: "Astere Coffee", type: "Coffee Shop", city: "Montpellier", slug: null, status: "a-venir", accent: "#9B2226" },
];

const modules = [
  { name: "Carte & Menus", desc: "Gestion dynamique des cartes, photos, prix, allergenes", cat: "core", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  { name: "Reservation", desc: "Zenchef integre, creneaux, confirmation auto", cat: "core", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { name: "Galerie Photos", desc: "Upload, compression, attributs alt auto", cat: "core", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { name: "Avis Google Live", desc: "Reviews en temps reel, note moyenne", cat: "core", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
  { name: "SEO Local Auto", desc: "JSON-LD Restaurant, meta, mots-cles", cat: "core", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
  { name: "Infos & Horaires", desc: "Adresse, carte, horaires, sync Google", cat: "core", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { name: "Maillage Inter-sites", desc: "Cross-promo entre les 15 restaurants", cat: "core", icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" },
  { name: "Click & Collect", desc: "Commande en ligne, panier, Stripe", cat: "business", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" },
  { name: "Evenements", desc: "Soirees, brunchs, inscriptions", cat: "business", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
  { name: "Cartes Cadeaux", desc: "Achat en ligne, envoi email, QR code", cat: "business", icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" },
  { name: "Privatisation", desc: "Demandes, devis, galerie events", cat: "business", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { name: "Recrutement", desc: "Offres, candidatures, dashboard RH", cat: "business", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { name: "Newsletter", desc: "Collecte emails, segmentation, envois", cat: "business", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { name: "IA Contenus", desc: "Descriptions plats, articles, traductions", cat: "intelligence", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { name: "Dashboard Direction", desc: "KPI x15, alertes, reporting PDF", cat: "intelligence", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { name: "QR Code Dynamique", desc: "Menu digital, collecte avis, newsletter", cat: "intelligence", icon: "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" },
  { name: "Ecran en Salle", desc: "Rotation visuels, plat du jour, events", cat: "intelligence", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { name: "Multi-langue", desc: "Traduction auto FR/EN/ES/DE", cat: "intelligence", icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" },
];

const catColors: Record<string, string> = {
  core: "bg-[#39FF14]/10 text-[#39FF14] border-[#39FF14]/30",
  business: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  intelligence: "bg-purple-500/10 text-purple-400 border-purple-500/30",
};
const catLabels: Record<string, string> = { core: "Core", business: "Business", intelligence: "Intelligence" };

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative bg-dark text-white pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#39FF14]/5 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider uppercase border rounded-full text-[#39FF14] border-[#39FF14]/30 bg-[#39FF14]/5">
              Maquette fonctionnelle — CC Developpement
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
              15 restaurants.<br />
              <span className="text-[#39FF14]">1 plateforme.</span><br />
              18 modules metier.
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-2xl leading-relaxed">
              Plateforme multi-tenant pour le Groupe Tandem. Chaque etablissement dispose de son propre
              site web, alimente par un back-office unifie. Architecture Next.js + Supabase.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/restaurant/casa-di-giorgio" className="px-6 py-3 bg-[#39FF14] text-[#09090B] font-bold rounded-lg hover:bg-[#39FF14]/90 transition">
                Voir la demo restaurant
              </Link>
              <Link href="/admin" className="px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:border-white/40 transition">
                Voir le back-office
              </Link>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "15", label: "Etablissements" },
                { value: "18", label: "Modules metier" },
                { value: "3", label: "Niveaux d'acces" },
                { value: "1", label: "Codebase unique" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-[#39FF14]">{s.value}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase border rounded-full text-[#09090B] border-[#09090B]/20 bg-[#09090B]/5">Architecture</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Multi-tenant par conception</h2>
            <p className="text-gray-500 max-w-2xl mb-12">1 plateforme, 1 base de donnees, 16 domaines. Chaque restaurant est un tenant avec son identite propre.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "15 sites publics", desc: "Chaque restaurant a son domaine, son design, son contenu. Le visiteur ne voit que le restaurant.", icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" },
                { title: "1 back-office unifie", desc: "3 niveaux : Super Admin voit tout, Directeur gere son restaurant, Staff consulte.", icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" },
                { title: "Nouveau resto = 1 jour", desc: "Creer un tenant, configurer le domaine, adapter le design. En ligne en 24h.", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
              ].map((c) => (
                <div key={c.title} className="bg-[#09090B] text-white rounded-2xl p-8">
                  <div className="w-12 h-12 bg-[#39FF14]/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#39FF14]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={c.icon} /></svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{c.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ESTABLISHMENTS */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase border rounded-full text-[#09090B] border-[#09090B]/20 bg-[#09090B]/5">Ecosysteme</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">15 etablissements, 15 identites</h2>
            <p className="text-gray-500 max-w-2xl mb-12">Chaque restaurant garde son ame. La plateforme fournit la technologie.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {establishments.map((e) => (
                <div key={e.name} className="group">
                  {e.slug ? (
                    <Link href={`/restaurant/${e.slug}`} className="block h-full">
                      <div className="bg-white rounded-xl p-4 border border-gray-200 hover:border-gray-400 transition h-full">
                        <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: e.accent }}>{e.name.charAt(0)}</div>
                        <div className="font-bold text-sm mb-1">{e.name}</div>
                        <div className="text-xs text-gray-400">{e.type}</div>
                        <div className="text-xs text-gray-400 mb-2">{e.city}</div>
                        <div className="inline-block px-2 py-0.5 bg-[#39FF14]/10 text-[#39FF14] text-[10px] font-bold rounded-full uppercase">Demo</div>
                      </div>
                    </Link>
                  ) : (
                    <div className="bg-white rounded-xl p-4 border border-gray-100 h-full opacity-50">
                      <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: e.accent }}>{e.name.charAt(0)}</div>
                      <div className="font-bold text-sm mb-1">{e.name}</div>
                      <div className="text-xs text-gray-400">{e.type}</div>
                      <div className="text-xs text-gray-400 mb-2">{e.city}</div>
                      <div className="inline-block px-2 py-0.5 bg-gray-100 text-gray-400 text-[10px] font-bold rounded-full uppercase">A venir</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MODULES */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase border rounded-full text-[#09090B] border-[#09090B]/20 bg-[#09090B]/5">Modules</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">18 modules metier</h2>
            <p className="text-gray-500 max-w-2xl mb-4">Chaque module repond a un besoin concret. Activables a la carte.</p>
            <div className="flex gap-3 mb-8">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/30">7 Core</span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/30">6 Business</span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/30">5 Intelligence</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {modules.map((m) => (
                <div key={m.name} className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-gray-300 transition">
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-9 h-9 bg-[#09090B] rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-[#39FF14]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={m.icon} /></svg>
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${catColors[m.cat]}`}>{catLabels[m.cat]}</span>
                  </div>
                  <h3 className="font-bold text-sm mb-0.5">{m.name}</h3>
                  <p className="text-xs text-gray-500">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#09090B] text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explorez la demo</h2>
            <p className="text-white/60 mb-10">Deux restaurants complets + le back-office d&apos;administration.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/restaurant/casa-di-giorgio" className="px-8 py-4 bg-[#39FF14] text-[#09090B] font-bold rounded-xl hover:bg-[#39FF14]/90 transition text-lg">Casa di Giorgio</Link>
              <Link href="/restaurant/toi-toit-mon-toit" className="px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:border-[#39FF14] transition text-lg">Toi Toit Mon Toit</Link>
              <Link href="/admin" className="px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:border-[#39FF14] transition text-lg">Back-Office</Link>
            </div>
            <div className="mt-12 text-sm text-white/40">
              Maquette par <span className="text-[#39FF14] font-semibold">CC Developpement</span> — Cyril Canon — ccdeveloppement.eu
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
