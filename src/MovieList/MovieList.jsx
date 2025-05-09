import React from 'react';
import MovieCard from './../MovieCard/MovieCard';
import './MovieList.css';

function MovieList({ movies }) {

  const seen = new Set();
  
  movies = movies.filter((movie) => {
    if (seen.has(movie.id)) {
      return false;
    }
    seen.add(movie.id);
    return true;
  });
  
  if (!movies) {
    return <div>No movies found.</div>;
  };

  return (
    <div className="movie-container"> 
      { movies.map( movie => (
        <div className="movie-card" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default MovieList