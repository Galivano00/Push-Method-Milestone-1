import React, { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(data => setMovies(data));
  }, []);

  return (
    <div className="home">
      <h2>Welcome to Netflify</h2>
      <div className="movies-container">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
