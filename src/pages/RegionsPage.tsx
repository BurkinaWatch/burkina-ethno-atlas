import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Users } from "lucide-react";
import { regions } from "@/data/burkina";

export default function RegionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#009A44] to-[#007a36] text-white px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Les 13 Régions du Burkina Faso</h1>
          <p className="text-green-100 text-sm">
            Sélectionnez une région pour découvrir tous les groupes ethniques qui y sont présents
          </p>
        </div>
      </div>

      {/* Regions list */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {regions.map((region) => (
            <Link
              key={region.id}
              to={`/regions/${region.id}`}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-[#009A44]/30 transition-all group"
            >
              {/* Color bar */}
              <div
                className="h-2 w-full"
                style={{ backgroundColor: region.couleur }}
              />
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-bold text-lg shadow"
                      style={{ backgroundColor: region.couleur }}
                    >
                      {region.nom.charAt(0)}
                    </div>
                    <div>
                      <h2 className="font-bold text-gray-800 group-hover:text-[#009A44] transition-colors">
                        {region.nom}
                      </h2>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                        <MapPin size={11} />
                        <span>Chef-lieu : {region.chef_lieu}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    size={20}
                    className="text-gray-300 group-hover:text-[#009A44] flex-shrink-0 mt-1 transition-colors"
                  />
                </div>

                <p className="text-xs text-gray-500 mt-3 leading-relaxed line-clamp-2">
                  {region.description}
                </p>

                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-50">
                  <div className="flex items-center gap-1 text-xs">
                    <Users size={12} className="text-[#009A44]" />
                    <span className="font-medium text-[#009A44]">
                      {region.groupesEthniques.length} groupe
                      {region.groupesEthniques.length > 1 ? "s" : ""} ethnique
                      {region.groupesEthniques.length > 1 ? "s" : ""}
                    </span>
                  </div>
                  {region.population && (
                    <div className="text-xs text-gray-400">
                      Pop. ~{region.population}
                    </div>
                  )}
                </div>

                {/* Ethnic groups preview */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {region.groupesEthniques.slice(0, 4).map((g) => (
                    <span
                      key={g.id}
                      className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600"
                    >
                      {g.nom}
                    </span>
                  ))}
                  {region.groupesEthniques.length > 4 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-[#009A44] font-medium">
                      +{region.groupesEthniques.length - 4} autres
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
