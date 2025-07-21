import React from 'react';
import styles from './ServiceSection.module.css';
import { FaServer, FaMobileAlt, FaCode } from 'react-icons/fa';

function ServiceSection() {
  return (
    <section className={styles.serviceSection}>
      <h2 className={styles.title}>Our Services</h2>
      <p className={styles.subtitle}>
        We provide comprehensive IT solutions to help your business thrive in the digital age.
      </p>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.icon + ' ' + styles.iconBlue}>
            <FaServer size={32} color="#3730A3" />
          </div>
          <h3>Solutions System Portal</h3>
          <p>Our flagship SSP product provides a comprehensive system portal that integrates and streamlines your business operations.</p>
          <a className={styles.learnMore} href="#">Learn more <span>&rarr;</span></a>
        </div>
        <div className={styles.card}>
          <div className={styles.icon + ' ' + styles.iconRed}>
            <FaMobileAlt size={32} color="#FB7185" />
          </div>
          <h3>Custom Mobile</h3>
          <p>Tailored mobile app solutions designed to meet your specific business or community needs perfect for service efficiency, real-time tracking, and user engagement.</p>
          <a className={styles.learnMore} href="#">Learn more <span>&rarr;</span></a>
        </div>
        <div className={styles.card}>
          <div className={styles.icon + ' ' + styles.iconPurple}>
            <FaCode size={32} color="#3730A3" />
          </div>
          <h3>Custom Software</h3>
          <p>Tailored software solutions designed to meet your specific business requirements and challenges.</p>
          <a className={styles.learnMore} href="#">Learn more <span>&rarr;</span></a>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection; 