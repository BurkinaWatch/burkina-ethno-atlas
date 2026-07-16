import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🇧🇫</span>
              <span className="text-white font-bold">Ethnies du Burkina Faso</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Recensement détaillé des groupes ethniques du Burkina Faso pour
              préserver et valoriser la richesse culturelle burkinabè.
            </p>
          </div>
          <div className="flex gap-8">
            <div>
              <h4 className="text-white font-semibold mb-2 text-sm">Navigation</h4>
              <div className="flex flex-col gap-1 text-sm">
                <Link to="/" className="hover:text-[#FCD116] transition-colors">Accueil</Link>
                <Link to="/regions" className="hover:text-[#FCD116] transition-colors">Régions</Link>
                <Link to="/recherche" className="hover:text-[#FCD116] transition-colors">Recherche</Link>
                <Link to="/a-propos" className="hover:text-[#FCD116] transition-colors">À propos</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 text-sm">Contact</h4>
              <div className="flex flex-col gap-1 text-sm">
                <Link to="/signaler" className="hover:text-[#FCD116] transition-colors">Signaler une info</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-700 text-center text-xs text-gray-500">
          <p>
            © 2025 Ethnies du Burkina Faso · Données issues de sources académiques et ethnographiques ·{" "}
            <span className="text-[#FCD116]">La Patrie ou la Mort, Nous Vaincrons</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
