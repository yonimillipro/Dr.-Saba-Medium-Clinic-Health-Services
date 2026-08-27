import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";

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
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
