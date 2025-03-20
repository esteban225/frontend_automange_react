import { useEffect, useRef } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Fondo from "./assets/Fondo2.mp4";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Support from "./components/Support/Support";
import Contacts from "./components/Contacts/Contacts";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Reducir velocidad al 50%
    }
  }, []);

  const bgVideo = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.2,
    zIndex: -1,
  };

  return (
    <Router>
      <div className="relative min-h-screen">
        {/* 🎥 Video de fondo con velocidad reducida */}
        <video ref={videoRef} autoPlay loop muted playsInline style={bgVideo}>
          <source src={Fondo} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Hero />
              </div>
            }
          />
          <Route
            path="/contacts"
            element={
              <div>
                <Navbar />
                <Contacts />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <Navbar />
                <About />
              </div>
            }
          />
          <Route
            path="/support"
            element={
              <div>
                <Navbar />
                <Support />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
