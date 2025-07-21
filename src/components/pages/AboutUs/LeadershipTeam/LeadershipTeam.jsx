import React from 'react';
import styles from './LeadershipTeam.module.css';
import SirRio from '../../../../assets/images/SirRio.png';

function LeadershipTeam() {
  return (
    <div className={styles.leadershipTeamSection}>
      <h2 className={styles.title}>Our Leadership Team</h2>
      <p className={styles.subtitle}>
        Meet the expert who lead our company and drive our mission forward.
      </p>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.avatarWrapper}>
            <img src={SirRio} alt="Rio Al-Di Dompol" className={styles.avatar} />
          </div>
          <div className={styles.info}>
            <a href="#" className={styles.name}>Rio Al-Di Dompol</a>
            <div className={styles.role}>FULLSTACK WEB & MOBILE DEVELOPER</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadershipTeam;
