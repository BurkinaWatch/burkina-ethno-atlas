import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Map, Info, Home } from "lucide-react";

const navLinks = [
  { to: "/", label: "Accueil", icon: Home },
  { to: "/regions", label: "Régions", icon: Map },
  { to: "/recherche", label: "Recherche", icon: Search },
  { to: "/a-propos", label: "À propos", icon: Info },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[#009A44] shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="text-2xl">🇧🇫</span>
            <div className="leading-tight">
              <div className="text-white font-bold text-sm leading-none">Ethnies du</div>
              <div className="text-[#FCD116] font-bold text-sm leading-none">Burkina Faso</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === to
                    ? "bg-[#FCD116] text-[#009A44] font-bold"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-3 border-t border-white/20 mt-1 pt-2 flex flex-col gap-1">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === to
                    ? "bg-[#FCD116] text-[#009A44] font-bold"
                    : "text-white hover:bg-white/20"
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
