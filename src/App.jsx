import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import AboutSection from "./components/About/AboutSection";
import ContactSection from "./components/Contacts/ContactsSection";
import SkillsSection from "./components/Skills/SkillsSection";
import Footer from "./components/Footer/Footer";
import ProjectsSection from "./components/Projects/ProjectsSection";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <SkillsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
