import React from "react";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Navbar from "./Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/Service" element={<Service />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </>
  );
};

export default App;
