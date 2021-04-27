import React from 'react';
import styles from './Beer.module.scss';

const Beer = ({ beer }) => {
  return (
    <article>
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <img src={beer.image_url} alt={`${beer.name} beer`} />
      <p>{beer.description}</p>
    </article>
  );
};

export default Beer;
