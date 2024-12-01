import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import AddMovie from "../pages/AddMovie";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:id" element={<MovieDetail />} />
    <Route path="/add-movie" element={<AddMovie />} />
  </Routes>
);

export default AppRoutes;
