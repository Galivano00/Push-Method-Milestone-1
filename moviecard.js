import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.poster} alt={movie.title} className="movie-poster" />
    <div className="movie-details">
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
    </div>
  </div>
);

export default MovieCard;
