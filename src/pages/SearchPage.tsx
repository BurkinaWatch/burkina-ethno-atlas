import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Globe, Filter, X } from "lucide-react";
import { searchGroupes, regions, toutesLangues, toutessFamillesLinguistiques } from "@/data/burkina";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [filterRegion, setFilterRegion] = useState("");
  const [filterLangue, setFilterLangue] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => {
    let all = searchGroupes(query);
    if (filterRegion) {
      all = all.filter((g) => g.regionId === filterRegion);
    }
    if (filterLangue) {
      all = all.filter((g) => g.langue === filterLangue);
    }
    return all;
  }, [query, filterRegion, filterLangue]);

  const hasFilters = filterRegion || filterLangue;
  const regionMap = Object.fromEntries(regions.map((r) => [r.id, r]));

  const clearFilters = () => {
    setFilterRegion("");
    setFilterLangue("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#009A44] to-[#007a36] text-white px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-1">Recherche</h1>
          <p className="text-green-100 text-sm mb-5">
            Trouvez un groupe ethnique, une langue, un nom de famille ou une localisation
          </p>

          {/* Search bar */}
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Ex: Mossi, Dagara, Hien, Mooré, Fada..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white text-gray-800 pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FCD116] shadow"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Filters toggle */}
          <div className="flex items-center gap-2 mt-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg transition-colors ${
                showFilters || hasFilters
                  ? "bg-[#FCD116] text-gray-800 font-bold"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <Filter size={14} />
              Filtres {hasFilters ? "(actifs)" : ""}
            </button>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="text-xs text-white/70 hover:text-white underline"
              >
                Effacer filtres
              </button>
            )}
          </div>

          {/* Filters panel */}
          {showFilters && (
            <div className="mt-3 bg-white/10 backdrop-blur rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-white/70 mb-1 block">Filtrer par région</label>
                <select
                  value={filterRegion}
                  onChange={(e) => setFilterRegion(e.target.value)}
                  className="w-full bg-white text-gray-800 rounded-lg px-3 py-2 text-sm focus:outline-none"
                >
                  <option value="">Toutes les régions</option>
                  {regions.map((r) => (
                    <option key={r.id} value={r.id}>{r.nom}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-white/70 mb-1 block">Filtrer par langue</label>
                <select
                  value={filterLangue}
                  onChange={(e) => setFilterLangue(e.target.value)}
                  className="w-full bg-white text-gray-800 rounded-lg px-3 py-2 text-sm focus:outline-none"
                >
                  <option value="">Toutes les langues</option>
                  {toutesLangues.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-600">
            {query || hasFilters
              ? `${results.length} résultat${results.length !== 1 ? "s" : ""}`
              : `${results.length} groupes ethniques répertoriés`}
          </h2>
        </div>

        {results.length === 0 && (query || hasFilters) ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="font-semibold text-gray-700">Aucun résultat</h3>
            <p className="text-sm text-gray-400 mt-1">
              Essayez un autre terme ou{" "}
              <button onClick={() => { setQuery(""); clearFilters(); }} className="text-[#009A44] underline">
                effacez les filtres
              </button>
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {results.map((groupe) => {
              const region = regionMap[groupe.regionId];
              return (
                <Link
                  key={`${groupe.regionId}-${groupe.id}`}
                  to={`/regions/${groupe.regionId}/${groupe.id}`}
                  className="block bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md hover:border-[#009A44]/30 transition-all group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-gray-800 group-hover:text-[#009A44] transition-colors">
                          {groupe.nom}
                        </h3>
                        {groupe.variantes && (
                          <span className="text-xs text-gray-400 italic">
                            ({groupe.variantes.slice(0, 1).join(", ")})
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 mt-1 flex-wrap">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Globe size={11} />
                          <span>{groupe.langue}</span>
                        </div>
                        {region && (
                          <div className="flex items-center gap-1 text-xs">
                            <span
                              className="px-2 py-0.5 rounded-full text-white text-xs font-medium"
                              style={{ backgroundColor: region.couleur }}
                            >
                              {region.nom}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                        <MapPin size={10} />
                        <span className="truncate">{groupe.localisation}</span>
                      </div>

                      <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                        {groupe.specificitesCulturelles}
                      </p>

                      {/* Famille search highlight */}
                      {query && groupe.familles.some(f => f.nom.toLowerCase().includes(query.toLowerCase())) && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          <span className="text-xs text-purple-600">Familles correspondantes :</span>
                          {groupe.familles
                            .filter(f => f.nom.toLowerCase().includes(query.toLowerCase()))
                            .map((f, i) => (
                              <span key={i} className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full border border-purple-100 font-medium">
                                {f.nom}
                              </span>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Suggestions */}
        {!query && !hasFilters && (
          <div className="mt-6 bg-green-50 rounded-xl border border-green-100 p-4">
            <h4 className="font-semibold text-[#009A44] text-sm mb-2">Suggestions de recherche</h4>
            <div className="flex flex-wrap gap-2">
              {["Mossi", "Peul", "Dagara", "Lobi", "Gourmantché", "Bobo", "Dioula", "Samo", "Bissa", "Touareg"].map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="text-xs bg-white border border-green-200 text-[#009A44] px-3 py-1 rounded-full hover:bg-[#009A44] hover:text-white transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
