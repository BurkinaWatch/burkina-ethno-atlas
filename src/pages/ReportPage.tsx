import { useState } from "react";
import { Link } from "react-router-dom";
import { AlertCircle, CheckCircle, ArrowLeft } from "lucide-react";
import { regions } from "@/data/burkina";

export default function ReportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    type: "",
    region: "",
    groupe: "",
    message: "",
    source: "",
    nom: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simule envoi
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <CheckCircle size={48} className="text-[#009A44] mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Merci pour votre signalement !</h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Votre contribution a bien été reçue. Elle sera examinée par notre équipe
            et intégrée après vérification des sources.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="bg-[#009A44] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
            >
              Retour à l'accueil
            </Link>
            <button
              onClick={() => { setSubmitted(false); setForm({ type: "", region: "", groupe: "", message: "", source: "", nom: "" }); }}
              className="border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors"
            >
              Nouveau signalement
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#EF2B2D] to-[#c0201f] text-white px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-1 text-white/70 text-sm mb-4 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Retour
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle size={24} />
            <h1 className="text-2xl font-bold">Signaler une information</h1>
          </div>
          <p className="text-red-100 text-sm">
            Aidez-nous à compléter et corriger le recensement des ethnies du Burkina Faso.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Type */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Type de signalement *
            </label>
            <select
              required
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#009A44]"
            >
              <option value="">Choisissez un type</option>
              <option value="erreur">Correction d'une information erronée</option>
              <option value="ajout-famille">Ajout d'une famille/lignage manquant</option>
              <option value="ajout-groupe">Ajout d'un groupe ethnique non répertorié</option>
              <option value="complement">Complément d'informations</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          {/* Région & groupe */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Région concernée</label>
              <select
                value={form.region}
                onChange={(e) => setForm({ ...form, region: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#009A44]"
              >
                <option value="">Toutes / Général</option>
                {regions.map((r) => (
                  <option key={r.id} value={r.id}>{r.nom}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Groupe ethnique</label>
              <input
                type="text"
                placeholder="Ex: Mossi, Dagara..."
                value={form.groupe}
                onChange={(e) => setForm({ ...form, groupe: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#009A44]"
              />
            </div>
          </div>

          {/* Message */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description de votre signalement *
            </label>
            <textarea
              required
              rows={5}
              placeholder="Décrivez l'information à corriger, à ajouter ou à compléter..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#009A44] resize-none"
            />
          </div>

          {/* Source */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Source ou référence (si disponible)
            </label>
            <input
              type="text"
              placeholder="Ex: livre, article académique, témoignage personnel..."
              value={form.source}
              onChange={(e) => setForm({ ...form, source: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#009A44]"
            />
          </div>

          {/* Nom */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Votre nom (optionnel)
            </label>
            <input
              type="text"
              placeholder="Pour vous créditer si votre contribution est intégrée"
              value={form.nom}
              onChange={(e) => setForm({ ...form, nom: e.target.value })}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#009A44]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#009A44] text-white font-bold py-3 rounded-xl hover:bg-green-700 transition-colors text-sm"
          >
            Envoyer le signalement
          </button>
        </form>
      </div>
    </div>
  );
}
