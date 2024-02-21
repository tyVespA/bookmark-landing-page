import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import DownloadsSection from "../components/DownloadsSection";

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      {/* <FeaturesSection /> */}
      <DownloadsSection />
    </>
  );
}

export default App;
