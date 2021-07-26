import React from 'react';
import styles from './HomeView.module.css';

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Phonebook v1.0{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;
