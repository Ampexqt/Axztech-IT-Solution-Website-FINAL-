import React from 'react';
import styles from './ContactCard.module.css';

function ContactCard() {
  return (
    <div className={styles.infoCard}>
      <h2 className={styles.infoTitle}>Get in Touch</h2>
      <p className={styles.infoDesc}>
        Fill out the form or contact us directly using the information below.
      </p>
      <div className={styles.infoItem}>
        <span className={styles.icon}>
          {/* Phone SVG */}
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" fill="#fff"/></svg>
        </span>
        <div>
          <div className={styles.infoLabel}>Phone</div>
          <div className={styles.infoValue}>0935 391 9496</div>
        </div>
      </div>
      <div className={styles.infoItem}>
        <span className={styles.icon}>
          {/* Email SVG */}
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13l8-6.99V6H4zm16 2.08l-7.2 6.3a2 2 0 01-2.6 0L4 8.08V18h16V8.08z" fill="#fff"/></svg>
        </span>
        <div>
          <div className={styles.infoLabel}>Email</div>
          <div className={styles.infoValue}>rioaldi.dompol@gmail.com</div>
        </div>
      </div>
      <div className={styles.infoItem}>
        <span className={styles.icon}>
          {/* Address SVG */}
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" fill="#fff"/></svg>
        </span>
        <div>
          <div className={styles.infoLabel}>Address</div>
          <div className={styles.infoValue}>Zone 5, Dicklum,<br/>Manolo Fortich, Philippines</div>
        </div>
      </div>
      <div className={styles.infoItem}>
        <span className={styles.icon}>
          {/* Clock SVG */}
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h4a1 1 0 100-2h-3V7a1 1 0 10-2 0v5a1 1 0 001 1z" fill="#fff"/></svg>
        </span>
        <div>
          <div className={styles.infoLabel}>Business Hours</div>
          <div className={styles.infoValue}>
            Monday - Friday: 9am - 6pm<br/>
            Saturday - Sunday: Closed
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard; 