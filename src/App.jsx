import { useEffect, useRef, useState } from "react";
import { MotionConfig } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import useCinematicScroll from "./hooks/useCinematicScroll";

function CinematicRoutes() {
  const scope = useRef(null);
  const { pathname } = useLocation();
  useCinematicScroll(scope, pathname);

  return (
    <main ref={scope} className="cinematic-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

function App() {
  const [useLightweightMotion, setUseLightweightMotion] = useState(() =>
    window.matchMedia("(max-width: 767px)").matches,
  );

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const updateMotionPreference = (event) =>
      setUseLightweightMotion(event.matches);

    mobileQuery.addEventListener("change", updateMotionPreference);
    return () => mobileQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  return (
    <MotionConfig reducedMotion={useLightweightMotion ? "always" : "user"}>
      <BrowserRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <ScrollToTop />
        <div className="theme-page min-h-screen">
          <Navbar />
          <CinematicRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
