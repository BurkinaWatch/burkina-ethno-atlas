import { useNavigate } from "react-router-dom";
import { regions } from "@/data/burkina";

// Positions approximatives des régions sur une carte simplifiée du Burkina Faso
// Coordonnées en % (left, top) d'un viewBox 400x360
const regionPositions: Record<string, { x: number; y: number }> = {
  "sahel": { x: 280, y: 45 },
  "nord": { x: 180, y: 70 },
  "boucle-du-mouhoun": { x: 95, y: 120 },
  "centre-nord": { x: 235, y: 120 },
  "est": { x: 320, y: 170 },
  "hauts-bassins": { x: 75, y: 200 },
  "centre-ouest": { x: 155, y: 185 },
  "plateau-central": { x: 255, y: 175 },
  "centre": { x: 215, y: 205 },
  "cascades": { x: 90, y: 265 },
  "centre-sud": { x: 215, y: 255 },
  "centre-est": { x: 275, y: 235 },
  "sud-ouest": { x: 130, y: 300 },
};

const shortNames: Record<string, string> = {
  "sahel": "Sahel",
  "nord": "Nord",
  "boucle-du-mouhoun": "Boucle du\nMouhoun",
  "centre-nord": "Centre-\nNord",
  "est": "Est",
  "hauts-bassins": "Hauts-\nBassins",
  "centre-ouest": "Centre-\nOuest",
  "plateau-central": "Plateau\nCentral",
  "centre": "Centre",
  "cascades": "Cascades",
  "centre-sud": "Centre-\nSud",
  "centre-est": "Centre-\nEst",
  "sud-ouest": "Sud-\nOuest",
};

export default function BurkinaMap() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-[#009A44] to-[#007a36] px-4 py-3">
        <h2 className="text-white font-bold text-center text-sm">
          Carte des 13 Régions du Burkina Faso
        </h2>
        <p className="text-green-100 text-xs text-center">Cliquez sur une région pour explorer ses ethnies</p>
      </div>
      <div className="relative" style={{ paddingBottom: "90%" }}>
        <svg
          viewBox="0 0 400 360"
          className="absolute inset-0 w-full h-full"
          style={{ background: "#f0f7ee" }}
        >
          {/* Contour simplifié du Burkina Faso */}
          <path
            d="M 60 60 L 90 40 L 140 30 L 200 25 L 260 35 L 330 55 L 360 90 L 355 130 L 340 170 L 345 210 L 330 250 L 290 285 L 250 310 L 200 325 L 160 320 L 120 310 L 90 290 L 65 265 L 50 235 L 45 200 L 50 160 L 55 120 L 60 60 Z"
            fill="#d4edda"
            stroke="#009A44"
            strokeWidth="2"
          />

          {/* Points des régions */}
          {regions.map((region) => {
            const pos = regionPositions[region.id];
            if (!pos) return null;
            const lines = (shortNames[region.id] || region.nom).split("\n");
            return (
              <g
                key={region.id}
                className="cursor-pointer"
                onClick={() => navigate(`/regions/${region.id}`)}
                style={{ transition: "all 0.2s" }}
              >
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={18}
                  fill={region.couleur}
                  stroke="white"
                  strokeWidth="2"
                  opacity={0.9}
                  className="hover:opacity-100 hover:r-22"
                />
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={18}
                  fill="transparent"
                  stroke="white"
                  strokeWidth="2"
                  className="hover:stroke-[#FCD116]"
                />
                {lines.map((line, i) => (
                  <text
                    key={i}
                    x={pos.x}
                    y={pos.y + (lines.length === 1 ? 4 : i === 0 ? -1 : 9)}
                    textAnchor="middle"
                    fill="white"
                    fontSize="6"
                    fontWeight="bold"
                    style={{ pointerEvents: "none", fontFamily: "sans-serif" }}
                  >
                    {line}
                  </text>
                ))}
              </g>
            );
          })}

          {/* Légende */}
          <text x="10" y="350" fontSize="7" fill="#666" fontFamily="sans-serif">
            ● Cliquer sur un cercle pour explorer la région
          </text>
        </svg>
      </div>
    </div>
  );
}
