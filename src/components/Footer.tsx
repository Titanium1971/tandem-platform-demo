import Link from "next/link";

export default function Footer({ restaurant }: { restaurant?: string }) {
  return (
    <footer className="bg-dark text-white/50 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="text-white font-bold text-sm mb-1">
              Tandem<span className="text-neon">Platform</span>
              {restaurant && <span className="text-white/40"> / {restaurant}</span>}
            </div>
            <div className="text-xs">Maquette realisee par CC Developpement — ccdeveloppement.eu</div>
          </div>
          <div className="flex items-center gap-6 text-xs">
            <Link href="/" className="hover:text-white transition">Groupe Tandem</Link>
            <Link href="/admin" className="hover:text-white transition">Administration</Link>
            <span className="text-neon">Projet de demonstration</span>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs text-white/30">
          Ceci est une maquette fonctionnelle. Les donnees presentees sont fictives.
          Plateforme multi-tenant propulsee par Next.js + Supabase.
        </div>
      </div>
    </footer>
  );
}
