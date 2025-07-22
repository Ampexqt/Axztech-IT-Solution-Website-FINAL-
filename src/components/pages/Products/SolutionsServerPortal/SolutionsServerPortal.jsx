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
                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="#EEF0FF"/><path d="M20 13.125l6.25 3.125v4.375c0 3.797-3.078 6.875-6.875 6.875S12.5 24.422 12.5 20.625V15.625L20 13.125z" stroke="#3B47FD" strokeWidth="1.5"/></svg>
              </span>
              <div>
                <div className={styles.sspFeatureTitle}>Advanced Security</div>
                <div className={styles.sspFeatureDesc}>Enterprise-grade security features including firewall protection, intrusion detection, and data encryption.</div>
              </div>
            </div>
            <div className={styles.sspFeatureItem}>
              <span className={styles.sspFeatureIcon}>
                {/* Performance SVG */}
                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="#EEF0FF"/><path d="M15 25h10M15 20h10M15 15h10" stroke="#3B47FD" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
              <div>
                <div className={styles.sspFeatureTitle}>High Performance</div>
                <div className={styles.sspFeatureDesc}>Optimized server configurations that ensure fast, reliable performance for your applications.</div>
              </div>
            </div>
            <div className={styles.sspFeatureItem}>
              <span className={styles.sspFeatureIcon}>
                {/* Scalability SVG */}
                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="10" fill="#EEF0FF"/><path d="M20 12.5v15M12.5 20h15" stroke="#3B47FD" strokeWidth="1.5" strokeLinecap="round"/></svg>
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
