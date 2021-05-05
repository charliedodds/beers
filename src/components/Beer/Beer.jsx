import React from 'react';
import styles from './Beer.module.scss';

const Beer = ({ beer }) => {
  return (
    <article>
      <h2>{beer.name}</h2>
      <p className={styles.tagline}>{beer.tagline}</p>
      <section className={styles.infoContainer}>
        <img src={beer.image_url} alt={`${beer.name} beer`} />
        <section className={styles.info}>
          <h3>ABV</h3>
          <p>{beer.abv}</p>
          {beer.ph && (
            <>
              <h3>pH</h3>
              <p>{beer.ph}</p>
            </>
          )}
          <h3>First brewed</h3>
          <p>{beer.first_brewed}</p>
        </section>
      </section>
      <p>{beer.description}</p>
    </article>
  );
};

export default Beer;
