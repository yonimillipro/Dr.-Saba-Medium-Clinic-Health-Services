// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/ThemeContext"; // Adjust path if necessary
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <ScrollToTop />
        {/* Ensure the main div also changes background in dark mode */}
        <div className="min-h-screen bg-gray-50 dark:bg-slate-800">
          {" "}
          {/* Updated dark bg for better contrast/example */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
