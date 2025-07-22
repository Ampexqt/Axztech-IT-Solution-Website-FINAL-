import React from 'react';
import styles from './OurProducts.module.css';
import SolutionsServerPortal from '../SolutionsServerPortal/SolutionsServerPortal';
import KeyFeatures from '../KeyFeatures/KeyFeatures.jsx';
import Plan from '../Plans/Plan';

const OurProducts = () => {
  return (
    <div className={styles.productsContainer}>
      <h1 className={styles.productsTitle}>Our Products</h1>
      <p className={styles.productsDescription}>
        Discover our comprehensive range of IT solutions designed to meet your business needs.
      </p>
      <SolutionsServerPortal />
      <KeyFeatures />
      <Plan />
    </div>
  );
};

export default OurProducts;
