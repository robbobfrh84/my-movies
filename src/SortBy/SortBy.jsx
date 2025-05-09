import React from 'react'
import './SortBy.css'

function SortBy({doSort, sortedBy, setSortedBy}) {

  function handleSortChange(event) {
    setSortedBy(event.target.value)
    doSort(event.target.value);
  }

  return (
    <div className="sort-by">
      <label htmlFor="sort">Sort by:&nbsp;</label>
      <select
        className="sort-select"
        id="sort"
        name="sort"
        onChange={handleSortChange}
        value={sortedBy}
      >
        <option value="none">--None--</option>
        <option value="title">Title</option>
        <option value="release_date">Release date</option>
        <option value="vote_average">Vote Average</option>
      </select>
    </div>
  );
}

export default SortBy


/* notes on genre codes... 

const genres = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western"
};

*/