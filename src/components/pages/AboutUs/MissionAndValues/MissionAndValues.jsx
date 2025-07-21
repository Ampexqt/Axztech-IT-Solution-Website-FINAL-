import React from 'react';
import styles from './MissionAndValues.module.css';
import { FaUserTie, FaArrowTrendUp, FaMedal } from 'react-icons/fa6';

function MissionAndValues() {
  return (
    <section className={styles.missionSection}>
      <h2 className={styles.title}>Our Mission & Values</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.iconWrapper} style={{ background: 'rgba(76, 110, 245, 0.1)' }}>
            <FaUserTie className={styles.icon} style={{ color: '#4C6EF5' }} />
          </div>
          <h3 className={styles.cardTitle}>Client-Focused</h3>
          <p className={styles.cardText}>
            We put our clients first, focusing on understanding their unique needs and delivering solutions that exceed expectations.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconWrapper} style={{ background: 'rgba(255, 99, 71, 0.1)' }}>
            <FaArrowTrendUp className={styles.icon} style={{ color: '#FF6347' }} />
          </div>
          <h3 className={styles.cardTitle}>Innovation</h3>
          <p className={styles.cardText}>
            We continuously explore new technologies and methodologies to provide cutting-edge solutions that help our clients stay ahead.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconWrapper} style={{ background: 'rgba(76, 110, 245, 0.1)' }}>
            <FaMedal className={styles.icon} style={{ color: '#4C6EF5' }} />
          </div>
          <h3 className={styles.cardTitle}>Excellence</h3>
          <p className={styles.cardText}>
            We are committed to delivering the highest quality services and solutions, maintaining rigorous standards in everything we do.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MissionAndValues;
