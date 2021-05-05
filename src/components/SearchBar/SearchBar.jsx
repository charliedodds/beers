import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = ({ inputValues, handleChange, handleSubmit }) => {
  const { searchTerm, highABV, classicsOnly, acidicOnly } = inputValues;
  return (
    <section className={styles.SearchBar}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Filter by name</label>
        <input
          id="search"
          type="text"
          name="searchTerm"
          value={searchTerm}
          onChange={handleChange}
        />
        <section className={styles.checkboxesContainer}>
          <section className={styles.singleCheckboxContainer}>
            <label htmlFor="abv">ABV &gt; 6%</label>
            <input
              id="abv"
              type="checkbox"
              name="highABV"
              checked={highABV}
              onChange={handleChange}
            />
          </section>
          <section className={styles.singleCheckboxContainer}>
            <label htmlFor="classicsOnly">Classics</label>
            <input
              id="classicsOnly"
              type="checkbox"
              name="classicsOnly"
              checked={classicsOnly}
              onChange={handleChange}
            />
          </section>
          <section className={styles.singleCheckboxContainer}>
            <label htmlFor="acidicOnly">ph &lt; 4</label>
            <input
              id="acidicOnly"
              type="checkbox"
              name="acidicOnly"
              checked={acidicOnly}
              onChange={handleChange}
            />
          </section>
        </section>
        <button>Get beers</button>
      </form>
    </section>
  );
};

export default SearchBar;
