import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/Scrolltotop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ExpertiseHub from "./pages/ExpertiseHub";
import ExpertiseSector from "./pages/ExpertiseSector";
import Projects from "./pages/Projects";
import ClientsPartners from "./pages/ClientsPartners";
import WhereWeWork from "./pages/WhereWeWork";
import Insights from "./pages/Insights";
import InsightDetail from "./pages/InsightDetail";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import './App.css'

// The router itself is supplied by the entry point: <BrowserRouter> in
// main.tsx, <StaticRouter> in entry-server.tsx (build-time prerender).
function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/expertise" element={<ExpertiseHub />} />
        <Route path="/expertise/:slug" element={<ExpertiseSector />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/clients" element={<ClientsPartners />} />
        <Route path="/where-we-work" element={<WhereWeWork />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightDetail />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;