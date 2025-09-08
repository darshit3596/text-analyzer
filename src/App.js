import React from "react";
import Navbar from "./Component/Navbar";
import Textanalyzer from "./Component/Textanalyzer";
import { About } from "./Component/About";  
import { Routes, Route } from "react-router-dom";
import { Contactus } from "./Component/Contactus";

export default function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Textanalyzer />} />
        <Route path="/About" element={<About />} /> 
        <Route path="/Contact" element={<Contactus />} />
      </Routes>
    </>
  );
}
