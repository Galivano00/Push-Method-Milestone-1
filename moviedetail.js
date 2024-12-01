import React from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams();

  return (
    <div className="movie-detail">
      <h2>Detail for Movie ID: {id}</h2>
      <p>More details coming soon...</p>
    </div>
  );
};

export default MovieDetail;
