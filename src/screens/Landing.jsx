import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"
import TechnologyShowcase from "../components/Sections/technologies";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <TechnologyShowcase /> 
      <Contact />
      <Footer />

    </>
  );
}


