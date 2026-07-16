import { useParams, Link } from "react-router-dom";
import { ChevronRight, MapPin, Globe, Users, ArrowLeft } from "lucide-react";
import { getRegionById } from "@/data/burkina";

export default function RegionDetailPage() {
  const { regionId } = useParams<{ regionId: string }>();
  const region = getRegionById(regionId!);

  if (!region) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-4xl mb-3">🔍</div>
          <h2 className="text-lg font-bold text-gray-700">Région introuvable</h2>
          <Link to="/regions" className="text-[#009A44] text-sm mt-2 inline-block hover:underline">
            ← Retour aux régions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div
        className="text-white px-4 py-6"
        style={{
          background: `linear-gradient(135deg, ${region.couleur}, ${region.couleur}cc)`,
        }}
      >
        <div className="max-w-3xl mx-auto">
          <Link
            to="/regions"
            className="flex items-center gap-1 text-white/80 text-sm mb-4 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Retour aux régions
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold mb-1">{region.nom}</h1>
          <div className="flex items-center gap-1 text-white/80 text-sm mb-3">
            <MapPin size={14} />
            Chef-lieu : {region.chef_lieu}
          </div>
          <p className="text-sm text-white/90 leading-relaxed max-w-2xl">{region.description}</p>

          <div className="flex flex-wrap gap-3 mt-4">
            {region.population && (
              <div className="bg-white/20 rounded-lg px-3 py-1.5 text-sm">
                <span className="text-white/70 text-xs">Population estimée</span>
                <div className="font-bold">~{region.population}</div>
              </div>
            )}
            {region.superficie && (
              <div className="bg-white/20 rounded-lg px-3 py-1.5 text-sm">
                <span className="text-white/70 text-xs">Superficie</span>
                <div className="font-bold">{region.superficie}</div>
              </div>
            )}
            <div className="bg-white/20 rounded-lg px-3 py-1.5 text-sm">
              <span className="text-white/70 text-xs">Groupes ethniques</span>
              <div className="font-bold">{region.groupesEthniques.length} répertoriés</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ethnic groups */}
      <div className="max-w-3xl mx-auto px-4 py-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Users size={20} className="text-[#009A44]" />
          Groupes ethniques de la région {region.nom}
        </h2>

        <div className="space-y-3">
          {region.groupesEthniques.map((groupe) => (
            <Link
              key={groupe.id}
              to={`/regions/${region.id}/${groupe.id}`}
              className="block bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md hover:border-[#009A44]/30 transition-all group"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-gray-800 group-hover:text-[#009A44] transition-colors">
                      {groupe.nom}
                    </h3>
                    {groupe.variantes && groupe.variantes.length > 0 && (
                      <span className="text-xs text-gray-400 italic">
                        ({groupe.variantes.slice(0, 2).join(", ")}
                        {groupe.variantes.length > 2 ? "..." : ""})
                      </span>
                    )}
                    {groupe.population && (
                      <span className="text-xs bg-green-50 text-[#009A44] px-2 py-0.5 rounded-full border border-green-100">
                        ~{groupe.population}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Globe size={11} />
                      <span>{groupe.langue}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin size={11} />
                      <span className="truncate max-w-[200px]">{groupe.localisation}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mt-2 leading-relaxed line-clamp-2">
                    {groupe.specificitesCulturelles}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                      {groupe.familles.length} familles/lignages
                    </span>
                    <span className="text-xs text-[#1B6CA8] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                      {groupe.familleLinguistique}
                    </span>
                  </div>
                </div>
                <ChevronRight
                  size={20}
                  className="text-gray-300 group-hover:text-[#009A44] flex-shrink-0 mt-1 transition-colors"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
