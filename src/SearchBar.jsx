import React, { useState } from 'react';
import './App.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      alert('Please enter a search query.');
    } else {
      alert(`You searched for: ${query}`);
      // Optional: onSearch(query); if needed for parent
    }
  };

  return (
    <form className="form-container search-form" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search something..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
