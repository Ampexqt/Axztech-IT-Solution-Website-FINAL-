import React from 'react';
import styles from './contact.module.css';
import ContactCard from './ContactCard/ContactCard';
import Introduction from './Introduction/Introduction';

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.subtitle}>
        Have questions or ready to get started? Reach out to our team and we'll be happy to help.
      </p>
      <div className={styles.cardWrapper}>
        <ContactCard />
        <Introduction />
      </div>
    </div>
  );
}

export default Contact;