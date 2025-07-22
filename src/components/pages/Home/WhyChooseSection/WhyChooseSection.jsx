import React from 'react';
import styles from './WhyChooseSection.module.css';
import { Link } from 'react-router-dom';

function WhyChooseSection() {
  return (
    <section className={styles.whyChooseSection}>
      <h2 className={styles.title}>Why Choose Axztech IT Solutions</h2>
      <p className={styles.subtitle}>
        With years of experience and a commitment to excellence, we deliver IT solutions<br />
        that drive business success.
      </p>
      <div className={styles.featuresGrid}>
        <div className={styles.feature}><span className={styles.check}><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" stroke="#3730A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Expert team of IT professionals</div>
        <div className={styles.feature}><span className={styles.check}><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" stroke="#3730A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Customized solutions for your business needs</div>
        <div className={styles.feature}><span className={styles.check}><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" stroke="#3730A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>24/7 technical support</div>
        <div className={styles.feature}><span className={styles.check}><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" stroke="#3730A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Affordable pricing plans</div>
        <div className={styles.feature}><span className={styles.check}><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" stroke="#3730A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Cutting-edge technology</div>
        <div className={styles.feature}><span className={styles.check}><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" stroke="#3730A3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Proven track record of success</div>
      </div>
      <div className={styles.ctaSection}>
        <h3 className={styles.ctaTitle}>Ready to transform your IT business?</h3>
        <p className={styles.ctaSubtitle}>Contact us today to learn how our solutions can help your business grow.</p>
        <Link to="/contact" className={styles.ctaButton}>Get in Touch</Link>
      </div>
    </section>
  );
}

export default WhyChooseSection; 