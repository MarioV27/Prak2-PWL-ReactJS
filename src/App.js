import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer"
import AnimatedRoutes from "./components/Penyatu";


export default function App() {
  return (
    <Router>
      <div>

        <NavBar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}