import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = ({ inputValues, handleChange, handleSubmit }) => {
  const { searchTerm, highABV, classicsOnly, acidicOnly } = inputValues;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Filter by name</label>
      <input
        id="search"
        type="text"
        name="searchTerm"
        value={searchTerm}
        onChange={handleChange}
      />
      <label htmlFor="abv">High ABV (>6%)</label>
      <input
        id="abv"
        type="checkbox"
        name="highABV"
        checked={highABV}
        onChange={handleChange}
      />
      <label htmlFor="classicsOnly">Classics only</label>
      <input
        id="classicsOnly"
        type="checkbox"
        name="classicsOnly"
        checked={classicsOnly}
        onChange={handleChange}
      />
      <label htmlFor="acidicOnly">Acidic (ph &lt; 4)</label>
      <input
        id="acidicOnly"
        type="checkbox"
        name="acidicOnly"
        checked={acidicOnly}
        onChange={handleChange}
      />
      <button>Get beers</button>
    </form>
  );
};

export default SearchBar;
