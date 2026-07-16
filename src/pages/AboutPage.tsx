import { Link } from "react-router-dom";
import { BookOpen, Globe, Users, Shield, ArrowRight } from "lucide-react";

const sources = [
  { name: "INSD - Institut National de la Statistique et de la Démographie", url: "#" },
  { name: "Ethnologue.com - Languages of Burkina Faso", url: "#" },
  { name: "SIL International", url: "#" },
  { name: "UNESCO - Patrimoine culturel immatériel", url: "#" },
  { name: "J.-B. Kiéthéga, L'or de la Volta Noire (1983)", url: "#" },
  { name: "Suzanne Lallemand, Société et maternité dans le village Mossi (1977)", url: "#" },
  { name: "Meyer Fortes, The Web of Kinship among the Tallensi (1949)", url: "#" },
  { name: "Mahir Şaul & Patrick Royer, West African Challenge to Empire (2001)", url: "#" },
  { name: "Carrefour Africain - Fiches ethniques du Burkina Faso", url: "#" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#009A44] to-[#007a36] text-white px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">À propos du projet</h1>
          <p className="text-green-100 text-sm">
            Recensement détaillé des ethnies du Burkina Faso
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-5">
        {/* Mission */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
              <Globe size={18} className="text-[#009A44]" />
            </div>
            <h2 className="font-bold text-gray-800">Notre Mission</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Le Burkina Faso est un pays d'une extraordinaire richesse ethnique et culturelle.
            Avec plus de 60 groupes ethniques parlant des langues différentes, chaque communauté
            porte en elle des siècles d'histoire, de savoir-faire, de traditions et de vision
            du monde.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mt-3">
            Cette application a pour objectif de documenter, structurer et rendre accessible
            cette richesse à tous : chercheurs, étudiants, diaspora burkinabè, et toute personne
            désireuse de mieux comprendre ce pays.
          </p>
        </div>

        {/* Comment nous travaillons */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
              <BookOpen size={18} className="text-[#1B6CA8]" />
            </div>
            <h2 className="font-bold text-gray-800">Méthodologie</h2>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <span className="text-[#009A44] font-bold mt-0.5">✓</span>
              <span>Croisement de sources académiques, ethnographiques et institutionnelles</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#009A44] font-bold mt-0.5">✓</span>
              <span>Classification par les 13 régions administratives officielles</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#009A44] font-bold mt-0.5">✓</span>
              <span>Données sur les langues basées sur Ethnologue et SIL International</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#009A44] font-bold mt-0.5">✓</span>
              <span>Mise à jour progressive grâce aux signalements communautaires</span>
            </div>
          </div>
        </div>

        {/* Structure */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-yellow-50 rounded-lg flex items-center justify-center">
              <Users size={18} className="text-[#D4A017]" />
            </div>
            <h2 className="font-bold text-gray-800">Structure des données</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Régions", value: "13", color: "#009A44" },
              { label: "Groupes ethniques", value: "60+", color: "#EF2B2D" },
              { label: "Langues documentées", value: "30+", color: "#1B6CA8" },
              { label: "Familles & lignages", value: "200+", color: "#7B2D8B" },
            ].map(({ label, value, color }) => (
              <div key={label} className="text-center p-3 rounded-lg bg-gray-50">
                <div className="text-2xl font-bold" style={{ color }}>{value}</div>
                <div className="text-xs text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sources */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
              <Shield size={18} className="text-purple-600" />
            </div>
            <h2 className="font-bold text-gray-800">Sources & références</h2>
          </div>
          <div className="space-y-2">
            {sources.map((source, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                <span className="text-[#009A44] font-bold mt-0.5 flex-shrink-0">•</span>
                <span>{source.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contribuer */}
        <div className="bg-gradient-to-r from-[#009A44] to-[#007a36] rounded-xl p-5 text-white">
          <h2 className="font-bold mb-2">Contribuez au recensement</h2>
          <p className="text-sm text-green-100 leading-relaxed mb-4">
            Vous avez des informations sur un groupe ethnique non répertorié, ou vous souhaitez
            corriger des données existantes ? Votre contribution est précieuse.
          </p>
          <Link
            to="/signaler"
            className="flex items-center gap-2 bg-[#FCD116] text-gray-900 font-bold px-4 py-2 rounded-lg text-sm w-fit hover:bg-yellow-400 transition-colors"
          >
            Signaler / Contribuer
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Note légale */}
        <div className="bg-gray-100 rounded-xl p-4">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>Note :</strong> Les données présentées sont à titre informatif et éducatif.
            Les populations et pourcentages sont des estimations basées sur les recensements
            disponibles. Les délimitations ethniques sont fluides et évoluent dans le temps.
            Les familles et lignages listés ne sont pas exhaustifs.
          </p>
        </div>
      </div>
    </div>
  );
}
