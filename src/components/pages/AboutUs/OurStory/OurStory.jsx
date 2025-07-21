import React from 'react';
import styles from './ourStory.module.css';
import aboutUsImg from '../../../../assets/images/AboutUs.png';

function OurStory() {
  return (
    <section className={styles.ourStorySection}>
      <div className={styles.ourStoryContainer}>
        <div className={styles.textCol}>
          <h2 className={styles.heading}>Our Story</h2>
          <p className={styles.paragraph}>
            Founded in 2024, Axztech IT Solutions began with a simple mission: to provide businesses with reliable, innovative IT solutions that drive growth and efficiency.
          </p>
          <p className={styles.paragraph}>
            What started as a small team of passionate tech enthusiasts has grown into a comprehensive IT service provider trusted by businesses across multiple industries.
          </p>
          <p className={styles.paragraph}>
            Today, we continue to evolve and expand our offerings, always staying at the forefront of technology to deliver the best possible solutions to our clients.
          </p>
        </div>
        <div className={styles.imageCol}>
          <img src={aboutUsImg} alt="Team working together" className={styles.image} />
        </div>
      </div>
    </section>
  );
}

export default OurStory;
