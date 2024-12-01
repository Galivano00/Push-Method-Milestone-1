import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="app-container">
      <AppRoutes />
    </div>
    <Footer />
  </BrowserRouter>
);

export default App;
