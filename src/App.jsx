import { useState, useEffect } from 'react';
import BeerList from './components/BeerList';
import SearchBar from './components/SearchBar';

import './App.module.scss';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [inputValues, setInputValues] = useState({
    searchTerm: '',
    highABV: false,
    classicsOnly: false,
    acidicOnly: false,
  });

  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      setInputValues({
        ...inputValues,
        [e.target.name]: !inputValues[e.target.name],
      });
    } else {
      setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    }
  };

  const getQueryString = (inputValues) => {
    const { searchTerm, highABV } = inputValues;
    return `https://api.punkapi.com/v2/beers?abv_gt=${highABV ? '6' : '0'}${
      searchTerm ? `&beer_name=${searchTerm}` : ''
    }`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getBeers();
  };

  const getBeers = async () => {
    const response = await fetch(getQueryString(inputValues));
    const data = await response.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <>
      <header>
        <h1>Beers</h1>
      </header>
      {beers && <BeerList beers={beers} />}
      <SearchBar
        inputValues={inputValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default App;
