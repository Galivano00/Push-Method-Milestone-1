const API_URL = "https://api.example.com/movies";

export const fetchMovies = async () => {
  const response = await fetch(API_URL);
  return response.json();
};
