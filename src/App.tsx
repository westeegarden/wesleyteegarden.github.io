import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import './App.css';


export default function App() {
return (
  <div className="min-h-screen bg-gray-50 text-gray-900">
    <Navbar />
    <Hero />
    <ProjectsSection />
    <Footer />
  </div>
);
}
