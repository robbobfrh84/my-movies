import React, { useState } from 'react'
import './SearchForm.css'

function SearchForm({ updateSearchTerm }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSearchTerm(inputValue);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue('');
    updateSearchTerm("none");
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        id="search_input"
        className="search-input"
        type="text"
        name="search"
        placeholder="Enter search term"
        value={inputValue}
        onChange={handleChange}
      />
      <button className="search-button" type="submit">Search</button>
      <button className="clear-button" type="button" onClick={clearInput}>Clear</button>
    </form>
  );
}

export default SearchForm;

// import React from 'react'
// import './SearchForm.css'

// function SearchForm({ setSearchTerm }) {

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     console.log('event.target:',event.target)
//     // setSearchTerm(event.target.value)
//   };

//   return (
//     <div className="search-container">
//       <input id="search_input" className="search-input" type="text" name="search" placeholder="Enter search term" />
//       <button className="search-button" onClick={handleSubmit}>Search</button>
//       <button className="clear-button" >Clear</button>
//     </div>
//   );
// }

// export default SearchForm