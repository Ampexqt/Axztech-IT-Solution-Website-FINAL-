import React from 'react';
import styles from './CustomSolution.module.css';

function CustomSolution() {
  return (
    <section className={styles.customSolutionSection}>
      <h2 className={styles.heading}>Need a Custom Solution?</h2>
      <p className={styles.description}>
        We understand that every business has unique requirements. Contact us to discuss a customized SSP solution tailored to your specific needs.
      </p>
      <button className={styles.ctaButton}>Contact Our Sales Team</button>
    </section>
  );
}

export default CustomSolution;
