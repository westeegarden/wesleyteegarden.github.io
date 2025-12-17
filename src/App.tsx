import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Doppelganger from "./pages/Doppelganger";
import NiteOut from "./pages/NiteOut";
import CompChords from "./pages/CompChords";
import MixingMaster from "./pages/MixingMaster";

export default function App() {
  return (
    <HashRouter>
      <Navbar />

    <main>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doppelganger" element={<Doppelganger />} />
        <Route path="/niteout" element={<NiteOut />} />
        <Route path="/compchords" element={<CompChords />} />
        <Route path="/mixingmaster" element={<MixingMaster />} />
      </Routes>
    </main>

      <Footer />
    </HashRouter>
  );
}