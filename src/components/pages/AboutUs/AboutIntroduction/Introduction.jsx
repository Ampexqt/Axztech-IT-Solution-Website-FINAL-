import React from 'react';
import styles from './introduction.module.css';

const Introduction = () => {
  return (
    <div className={styles.introContainer}>
      <h1 className={styles.title}>About Axztech IT Solutions</h1>
      <p className={styles.subtitle}>
        We are a leading provider of innovative IT solutions dedicated to helping businesses<br />
        succeed in the digital age.
      </p>
    </div>
  );
};

export default Introduction;
