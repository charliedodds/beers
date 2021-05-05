import React from 'react';
import styles from './Instructions.module.scss';

const Instructions = () => {
  return (
    <main className={styles.Instructions}>
      <h2>How it works:</h2>
      <p>Hit the get beers button below to see a list of 25 beers.</p>
      <p>
        You can filter by name, alcohol by volume (ABV), classics only, and
        acidity (pH level) too.
      </p>
      <p>
        Please note that checking the pH level box will filter from the 25 the
        beers matching the other criteria, whereas the others will find up to 25
        beers that match those criteria.
      </p>
    </main>
  );
};

export default Instructions;
