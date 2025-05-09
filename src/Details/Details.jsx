import React from 'react';
import './Details.css';

function Details({ movie, closeModal }) {

  console.log('movie:',movie)

  // const genres = {
  //   28: "Action",
  //   12: "Adventure",
  //   16: "Animation",
  //   35: "Comedy",
  //   80: "Crime",
  //   99: "Documentary",
  //   18: "Drama",
  //   10751: "Family",
  //   14: "Fantasy",
  //   36: "History",
  //   27: "Horror",
  //   10402: "Music",
  //   9648: "Mystery",
  //   10749: "Romance",
  //   878: "Science Fiction",
  //   10770: "TV Movie",
  //   53: "Thriller",
  //   10752: "War",
  //   37: "Western"
  // };
  
  let genreList = ""
  if (movie.genre_ids) {
    genreList = movie.genre_ids.map(id => genres[id]).join(', ')
  }

  const handleOverlayClick = (e) => {
    e.stopPropagation()
    if (e.target.className === 'modal-overlay') {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>×</button>

        <h2 className="movie-title">{movie.title}</h2>

        <img 
          className="movie-poster" 
          src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} 
          alt={movie.title + " backdrop image."}
        />

        <h3> <span>Release Date:</span>  {movie.release_date}</h3>
        <div className="divider-line details"></div>

        <h3>Runtime: {movie.runtime} min.</h3>
        <div className="divider-line details"></div>

        <h3>Overview:</h3>
        <p className="movie-overview">{movie.overview}</p>

        <div className="divider-line details"></div>

        <h3>Genre(s):</h3>
        <h4>{genreList}</h4>

      </div>
    </div>
  );
}

export default Details;