// App.jsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Hero from "./components/Hero";
import ImpactSection from "./components/ImpactSection";
import HelpSection from "./components/HelpSection";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import StudyMaterialsSection from "./components/StudyMaterials";
import About from "./components/About";
import ScholarshipSection from "./components/ScholarshipSection";

export const serverURL="http://localhost:5000/"



export default function App() {
  const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state?.scrollTo;
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay ensures DOM is loaded
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
     
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <ScholarshipSection/>
              <ImpactSection />
              
              <StudyMaterialsSection/>
              <HelpSection />

            </>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </div>
  );
}
