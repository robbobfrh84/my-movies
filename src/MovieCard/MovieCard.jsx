import { React, useState } from 'react'
import './MovieCard.css'
import Details from './../Details/Details.jsx'
import starIcon from '../assets/star2.png'

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/movie';

function MovieCard({ movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieDetails, setMoviesDetails] = useState({});

  const fetchMovieDetails = async () => {
    const url = `${BASE_URL}/${movie.id}?api_key=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch movie data');
    }
    const data = await response.json();
    setMoviesDetails(data);
    setIsModalOpen(true);
  };

  let size = 'lg';
  if (movie.title.length > 14) { size = 'md' };
  if (movie.title.length > 20) { size = 'sm' };

  return (
    <div onClick={fetchMovieDetails}>
      <img 
        className="poster" 
        src={ "https://image.tmdb.org/t/p/w500" + movie.poster_path } 
        alt={ movie.title + " poster." } 
      />
      <div className="info-block">
        <h2 className={'title ' + size}>{movie.title}</h2>
        <div className="divider-line"></div>
        <p className="rating">
          <img src={starIcon} alt="Star icon" className="star-icon" />
          Rating: {Number(movie.vote_average).toFixed(1)}
        </p>
      </div>

      {isModalOpen && (
        <Details
          movie={movieDetails}
          closeModal={() => setIsModalOpen(false)}
        />
      )}

    </div>
  )
}

export default MovieCard