import React from 'react';
import styles from './Introduction.module.css';

function Introduction() {
  return (
    <div className={styles.formCard}>
      <h2 className={styles.formTitle}>Send Us a Message</h2>
      <p className={styles.formDesc}>
        Have a question or want to learn more about our services? Fill out the form below and we'll get back to you as soon as possible.
      </p>
      <form className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" placeholder="" />
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" placeholder="" />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Phone Number</label>
            <input type="text" placeholder="" />
          </div>
          <div className={styles.formGroup}>
            <label>Company</label>
            <input type="text" placeholder="" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>Subject</label>
          <select>
            <option>General Inquiry</option>
            <option>Support</option>
            <option>Sales</option>
            <option>Other</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Message</label>
          <textarea rows="3" />
        </div>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </div>
  );
}

export default Introduction; 