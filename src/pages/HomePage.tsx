import { Link } from "react-router-dom";
import { Map, Search, Info, Users, BookOpen, Globe } from "lucide-react";
import BurkinaMap from "@/components/BurkinaMap";
import { regions, tousGroupes } from "@/data/burkina";

const stats = [
  { label: "Régions", value: "13", icon: Map, color: "bg-[#009A44]" },
  { label: "Groupes ethniques", value: String(tousGroupes.length) + "+", icon: Users, color: "bg-[#EF2B2D]" },
  { label: "Langues répertoriées", value: "30+", icon: Globe, color: "bg-[#FCD116] text-gray-800" },
  { label: "Familles & lignages", value: "200+", icon: BookOpen, color: "bg-[#1B6CA8]" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#009A44] via-[#007a36] to-[#005a28] text-white">
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
          <div className="text-center mb-8">
            <div className="text-5xl md:text-7xl mb-4">🇧🇫</div>
            <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
              Recensement des Ethnies du{" "}
              <span className="text-[#FCD116]">Burkina Faso</span>
            </h1>
            <p className="text-green-100 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Un patrimoine culturel d'une richesse exceptionnelle. Plus de 60 groupes ethniques
              répartis dans 13 régions administratives, chacun portant une langue, des traditions
              et une histoire uniques.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {stats.map(({ label, value, icon: Icon, color }) => (
              <div key={label} className="bg-white/10 backdrop-blur rounded-xl p-3 text-center border border-white/20">
                <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center mx-auto mb-2`}>
                  <Icon size={16} className={color.includes("FCD116") ? "text-gray-800" : "text-white"} />
                </div>
                <div className="text-2xl font-bold text-[#FCD116]">{value}</div>
                <div className="text-xs text-green-100">{label}</div>
              </div>
            ))}
          </div>

          {/* Quick actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/regions"
              className="flex items-center justify-center gap-2 bg-[#FCD116] text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-colors text-sm"
            >
              <Map size={18} />
              Explorer les Régions
            </Link>
            <Link
              to="/recherche"
              className="flex items-center justify-center gap-2 bg-white/20 text-white border border-white/30 font-semibold px-6 py-3 rounded-xl hover:bg-white/30 transition-colors text-sm"
            >
              <Search size={18} />
              Rechercher un groupe
            </Link>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Carte Interactive des Régions
        </h2>
        <div className="max-w-lg mx-auto">
          <BurkinaMap />
        </div>
      </section>

      {/* Regions grid */}
      <section className="max-w-5xl mx-auto px-4 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">Les 13 Régions</h2>
          <Link to="/regions" className="text-[#009A44] text-sm font-semibold hover:underline">
            Voir tout →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {regions.map((region) => (
            <Link
              key={region.id}
              to={`/regions/${region.id}`}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md hover:border-[#009A44]/30 transition-all group"
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: region.couleur }}
                >
                  {region.nom.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-gray-800 text-sm group-hover:text-[#009A44] transition-colors truncate">
                    {region.nom}
                  </h3>
                  <p className="text-xs text-gray-500">Chef-lieu : {region.chef_lieu}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-xs bg-green-50 text-[#009A44] font-medium px-2 py-0.5 rounded-full border border-green-100">
                      {region.groupesEthniques.length} groupe{region.groupesEthniques.length > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About section */}
      <section className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Info className="mx-auto mb-3 text-[#009A44]" size={28} />
          <h2 className="text-lg font-bold text-gray-800 mb-3">Notre Mission</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Cette application a pour but de documenter, préserver et valoriser le patrimoine
            ethnique et culturel du Burkina Faso. Les données présentées sont basées sur des
            sources académiques, ethnographiques et institutionnelles reconnues.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
            <Link
              to="/a-propos"
              className="text-[#009A44] border border-[#009A44] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-50 transition-colors"
            >
              En savoir plus
            </Link>
            <Link
              to="/signaler"
              className="text-[#EF2B2D] border border-[#EF2B2D] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-50 transition-colors"
            >
              Signaler une information
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
