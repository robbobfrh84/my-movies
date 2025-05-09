import { useState, useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm';
import SortBy from './SortBy/SortBy';
import Header from './Header';
import Footer from './Footer';

import MovieList from './MovieList/MovieList';
import './App.css';
// * import data from './data/data' // * Hard coded data to test with. 

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const App = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // rename search to searchTerm
  const [sortedBy, setSortedBy] = useState("none");

  const limit = 10;

  const fetchData = async (sortedBy) => {
    try {
      let url;
      if (searchTerm) {
        url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchTerm)}&page=${page}&language=en-US&limit=${limit}`;
      } else {
        url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=${page}&language=en-US&limit=${limit}`;
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch movie list.');
      }
      const data = await response.json();
      const allMovies = [...movies, ...data.results];   
      if (allMovies.length == movies.length) {
        alert("You have recieved all movies for this search result.")
      };
      doSort(sortedBy, allMovies)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData("none"); 
  }, [searchTerm, page]);

  const updateSearchTerm = (newTerm) => {
    setMovies([]);    // clear old movies
    setPage(1);       // reset to page 1
    setSearchTerm(newTerm);
  };


  const doSort = (sortedBy, allMovies) => {
    const sortMovies = allMovies || [...movies]
    if (sortedBy !== "none") {
      if (sortedBy === "vote_average" || sortedBy === "release_date") {
        sortMovies.sort((a, b) => String(b[sortedBy]).localeCompare(String(a[sortedBy])));
      } else {
        sortMovies.sort((a, b) => String(a[sortedBy]).localeCompare(String(b[sortedBy])));
      }
    }
    setMovies(sortMovies); 
  }

 

  const LoadMore = () => {
    setSortedBy("none");
    setPage(page + 1);
  }

  return (
    <div className="App">

      <div className='top-container'>
        <Header /> 


        <section className="TopNavBar">
          <SearchForm updateSearchTerm={updateSearchTerm} />
          <SortBy doSort={doSort} sortedBy={sortedBy} setSortedBy={setSortedBy}/>
        </section>

      </div> 


      <main>
        { movies.length > 0 && 
          <MovieList movies={movies} />
        }
        <button onClick={LoadMore} className="load-more-btn">Load More</button>
      </main>

      <Footer />

    </div>
  );
}

export default App
