import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Globe,
  Users,
  BookOpen,
  Heart,
  Star,
  AlertCircle,
} from "lucide-react";
import { getGroupeById, getRegionById } from "@/data/burkina";

const Section = ({
  icon: Icon,
  title,
  children,
  color = "#009A44",
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  color?: string;
}) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
    <div className="flex items-center gap-2 mb-3">
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: color + "20" }}
      >
        <Icon size={15} style={{ color }} />
      </div>
      <h3 className="font-bold text-gray-800 text-sm">{title}</h3>
    </div>
    {children}
  </div>
);

export default function EthnicGroupPage() {
  const { regionId, groupeId } = useParams<{ regionId: string; groupeId: string }>();
  const region = getRegionById(regionId!);
  const groupe = getGroupeById(regionId!, groupeId!);

  if (!groupe || !region) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-4xl mb-3">🔍</div>
          <h2 className="text-lg font-bold text-gray-700">Groupe introuvable</h2>
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
          background: `linear-gradient(135deg, ${region.couleur}, ${region.couleur}99)`,
        }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1 text-white/70 text-xs mb-4 flex-wrap">
            <Link to="/regions" className="hover:text-white">Régions</Link>
            <span>/</span>
            <Link to={`/regions/${region.id}`} className="hover:text-white">{region.nom}</Link>
            <span>/</span>
            <span className="text-white">{groupe.nom}</span>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
              🏘️
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-1">{groupe.nom}</h1>
              {groupe.variantes && groupe.variantes.length > 0 && (
                <p className="text-white/70 text-sm italic mb-2">
                  Aussi appelés : {groupe.variantes.join(", ")}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {groupe.population && (
                  <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                    ~{groupe.population} personnes
                  </span>
                )}
                <span className="bg-[#FCD116] text-gray-800 text-xs px-2 py-1 rounded-full font-medium">
                  {region.nom}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        {/* Info rapide */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl border border-gray-100 p-3 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1">
              <Globe size={14} className="text-[#1B6CA8]" />
              <span className="text-xs text-gray-500 font-medium">Langue</span>
            </div>
            <p className="font-bold text-sm text-gray-800">{groupe.langue}</p>
            <p className="text-xs text-gray-400">{groupe.familleLinguistique}</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-3 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1">
              <MapPin size={14} className="text-[#EF2B2D]" />
              <span className="text-xs text-gray-500 font-medium">Localisation</span>
            </div>
            <p className="text-xs text-gray-700 leading-relaxed">{groupe.localisation}</p>
          </div>
        </div>

        {/* Spécificités culturelles */}
        <Section icon={Star} title="Spécificités culturelles & histoire" color="#FCD116">
          <p className="text-sm text-gray-600 leading-relaxed">{groupe.specificitesCulturelles}</p>
        </Section>

        {/* Traditions */}
        <Section icon={Heart} title="Traditions, cérémonies & mode de vie" color="#EF2B2D">
          <p className="text-sm text-gray-600 leading-relaxed">{groupe.traditions}</p>
        </Section>

        {/* Organisation sociale */}
        <Section icon={Users} title="Organisation sociale" color="#009A44">
          <p className="text-sm text-gray-600 leading-relaxed">{groupe.organisationSociale}</p>
        </Section>

        {/* Croyances */}
        <Section icon={BookOpen} title="Croyances & spiritualité" color="#1B6CA8">
          <p className="text-sm text-gray-600 leading-relaxed">{groupe.croyances}</p>
        </Section>

        {/* Familles et lignages */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center">
              <Users size={15} className="text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-800 text-sm">
              Familles & Lignages ({groupe.familles.length})
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {groupe.familles.map((famille, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 p-2 rounded-lg bg-gray-50 border border-gray-100"
              >
                <span className="text-xs font-bold text-white bg-purple-500 rounded w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <p className="font-semibold text-sm text-gray-800">{famille.nom}</p>
                  {famille.description && (
                    <p className="text-xs text-gray-500 mt-0.5">{famille.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sources */}
        {groupe.sources && groupe.sources.length > 0 && (
          <div className="bg-blue-50 rounded-xl border border-blue-100 p-4">
            <h4 className="font-semibold text-blue-800 text-sm mb-2">Sources</h4>
            <ul className="space-y-1">
              {groupe.sources.map((source, idx) => (
                <li key={idx} className="text-xs text-blue-600">• {source}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Signal error */}
        <div className="bg-orange-50 rounded-xl border border-orange-100 p-4 flex items-start gap-3">
          <AlertCircle size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-orange-800 text-sm">Information incomplète ou incorrecte ?</h4>
            <p className="text-xs text-orange-600 mt-1">
              Si vous disposez d'informations supplémentaires ou si vous constatez une erreur,
              aidez-nous à améliorer cette fiche.
            </p>
            <Link
              to="/signaler"
              className="text-xs text-orange-700 font-bold underline mt-2 inline-block"
            >
              Signaler une information →
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <Link
            to={`/regions/${region.id}`}
            className="flex items-center gap-2 text-sm text-[#009A44] border border-[#009A44] px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
          >
            <ArrowLeft size={16} />
            Retour à {region.nom}
          </Link>
        </div>
      </div>
    </div>
  );
}
