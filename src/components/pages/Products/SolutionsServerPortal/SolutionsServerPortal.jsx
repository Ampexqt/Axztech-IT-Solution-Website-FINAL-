import React from 'react';
import styles from './SolutionsServerPortal.module.css';
import axztechLogo from '../../../../assets/images/axztech-logo.png';

const SolutionsServerPortal = () => {
  return (
    <div className={styles.sspWrapper}>
      <div className={styles.sspContentSection}>
        <div className={styles.sspTextBlock}>
          <h2 className={styles.sspProductTitle}>
            Solutions Server <span className={styles.sspPortal}>Portal</span> <span className={styles.sspSSP}>(SSP)</span>
          </h2>
          <p className={styles.sspDescription}>
            Our flagship Solutions System Portal (SSP) provides businesses with a comprehensive, integrated platform designed to streamline your operations and enhance business efficiency through cutting-edge IT solutions.
          </p>
          <div className={styles.sspFeatures}>
            <div className={styles.sspFeatureItem}>
              <span className={styles.sspFeatureIcon}>
                {/* Shield SVG */}
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="#EEF0FF"/><path d="M16 10.5l5 2.5v3.5c0 3.038-2.462 5.5-5.5 5.5S10.5 19.538 10.5 16.5V13l5-2.5z" stroke="#3B47FD" strokeWidth="1.5"/></svg>
              </span>
              <div>
                <div className={styles.sspFeatureTitle}>Advanced Security</div>
                <div className={styles.sspFeatureDesc}>Enterprise-grade security features including firewall protection, intrusion detection, and data encryption.</div>
              </div>
            </div>
            <div className={styles.sspFeatureItem}>
              <span className={styles.sspFeatureIcon}>
                {/* Performance SVG */}
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="#EEF0FF"/><path d="M12 20h8M12 16h8M12 12h8" stroke="#3B47FD" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
              <div>
                <div className={styles.sspFeatureTitle}>High Performance</div>
                <div className={styles.sspFeatureDesc}>Optimized server configurations that ensure fast, reliable performance for your applications.</div>
              </div>
            </div>
            <div className={styles.sspFeatureItem}>
              <span className={styles.sspFeatureIcon}>
                {/* Scalability SVG */}
                <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="#EEF0FF"/><path d="M16 10v12M10 16h12" stroke="#3B47FD" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
              <div>
                <div className={styles.sspFeatureTitle}>Scalability</div>
                <div className={styles.sspFeatureDesc}>Easily scale your server resources up or down based on your business needs and growth.</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sspImageBlock}>
          <img src={axztechLogo} alt="Axztech Logo" className={styles.sspLogoImg} />
        </div>
      </div>
    </div>
  );
};

export default SolutionsServerPortal;
