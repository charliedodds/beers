import { useState } from 'react';
import BeerList from './components/BeerList';
import SearchBar from './components/SearchBar';
import Instructions from './components/Instructions';

import './App.module.scss';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [inputValues, setInputValues] = useState({
    searchTerm: '',
    highABV: false,
    classicsOnly: false,
    acidicOnly: false,
  });

  const getHighABVParam = (highABV) => {
    return `abv_gt=${highABV ? '6' : '0'}&`;
  };

  const getBeerNameParam = (searchTerm) => {
    return searchTerm ? `beer_name=${searchTerm}&` : '';
  };

  const getBrewedBeforeParam = (classicsOnly) => {
    return classicsOnly ? `brewed_before=01-2010` : '';
  };

  const getParams = (highABV, searchTerm, classicsOnly) => {
    return `${getHighABVParam(highABV)}${getBeerNameParam(
      searchTerm
    )}${getBrewedBeforeParam(classicsOnly)}`;
  };

  const getQueryString = (inputValues) => {
    const { highABV, searchTerm, classicsOnly } = inputValues;
    return `https://api.punkapi.com/v2/beers?${getParams(
      highABV,
      searchTerm,
      classicsOnly
    )}`;
  };

  const filterBeers = (inputValues, beers) => {
    const { acidicOnly } = inputValues;
    if (acidicOnly) {
      return beers.filter((beer) => beer.ph && beer.ph < 4);
    } else return beers;
  };

  const getBeers = async () => {
    const response = await fetch(getQueryString(inputValues));
    const data = await response.json();
    setBeers(filterBeers(inputValues, data));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    getBeers();
  };

  return (
    <>
      <header>
        <h1>Beers</h1>
      </header>
      {(beers.length > 0 && <BeerList beers={beers} />) || <Instructions />}
      <SearchBar
        inputValues={inputValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default App;
