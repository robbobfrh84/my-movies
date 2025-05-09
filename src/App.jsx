import { useState, useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm';
import SortBy from './SortBy/SortBy';

import MovieList from './MovieList/MovieList';
import './App.css';
// * import data from './data/data' // * Hard coded data to test with. 

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const App = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const limit = 10;

  const fetchData = async () => {
    try {
      const url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=${page}&language=en-US&limit=${limit}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch movie list.');
      }
      const data = await response.json();
      const allMovies = [...movies, ...data.results];   
      if (allMovies.length == movies.length) {
        alert("You have recieved all movies for this search result.")
      };
      setMovies(allMovies);    
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(page); 
  }, [page]);

  const LoadMore = () => {
    setPage(page + 1);
  }

  return (
    <div className="App">

      <header>
        <h1>• Flixster •</h1>
        <section className="TopNavBar">
          <SearchForm />
          <SortBy />
        </section>
      </header>

      <main>
        { movies.length > 0 && 
          <MovieList movies={movies} />
        }
        <button onClick={LoadMore} className="load-more-btn">Load More</button>
      </main>

      <footer>
        @ 2025 CodePath - Flixster
      </footer>

    </div>
  );
}

export default App
