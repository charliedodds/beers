import React from 'react';
import Beer from '../Beer';

import styles from './BeerList.module.scss';

const BeerFridge = ({ beers }) => {
  return (
    <main className={styles.BeerList}>
      {beers.map((beer) => (
        <Beer key={beer.id} beer={beer} />
      ))}
    </main>
  );
};

export default BeerFridge;
