import React from 'react';
import './Details.css';
import backdrop from '../assets/no_backdrop_image.png'


function Details({ movie, closeModal }) {
  
  const genreList = movie.genres.map(g => g.name).join(', ')
  const movieImage = movie.backdrop_path ? "https://image.tmdb.org/t/p/w500"+movie.backdrop_path : backdrop

  const handleOverlayClick = (e) => {
    e.stopPropagation()
    if (e.target.className === 'modal-overlay') {
      closeModal();
    }
  };

  return (
    <section className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>×</button>

        <div className="scroll-area">
          <h2 className="movie-title">{movie.title}</h2>

          <img 
            className="movie-poster" 
            src={movieImage} 
            alt={movie.title + " backdrop image."}
          />

          <h3>Release Date:  {movie.release_date}</h3>
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
    </section>
  );
}

export default Details;