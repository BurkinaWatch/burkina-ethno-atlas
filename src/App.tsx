import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import RegionsPage from "@/pages/RegionsPage";
import RegionDetailPage from "@/pages/RegionDetailPage";
import EthnicGroupPage from "@/pages/EthnicGroupPage";
import SearchPage from "@/pages/SearchPage";
import AboutPage from "@/pages/AboutPage";
import ReportPage from "@/pages/ReportPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/regions" element={<RegionsPage />} />
            <Route path="/regions/:regionId" element={<RegionDetailPage />} />
            <Route path="/regions/:regionId/:groupeId" element={<EthnicGroupPage />} />
            <Route path="/recherche" element={<SearchPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/signaler" element={<ReportPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
