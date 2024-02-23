import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import DownloadsSection from "../components/DownloadsSection";
import FAQSection from "../components/FAQSection";
import FooterBanner from "../components/FooterBanner";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      {/* <FeaturesSection /> */}
      {/* <DownloadsSection /> */}
      <FAQSection />
      <FooterBanner />
      <Footer />
    </>
  );
}

export default App;
