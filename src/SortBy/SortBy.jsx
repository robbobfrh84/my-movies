import React from 'react'
import './SortBy.css'

function SortBy() {

  const [sortMethod, setSortMethod] = React.useState("name");

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: Add search logic here
  }

  function handleSortChange(event) {
    setSortMethod(event.target.value);
    // TODO: Add sort logic based on the selected option here
  }

  return (
    <div className="sort-by">
      <label htmlFor="sort">Sort by:&nbsp;</label>
      <select className="sort-select" id="sort" name="sort" onChange={handleSortChange} value={sortMethod}>
        <option value="name">Name</option>
        <option value="date">Date</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}

export default SortBy