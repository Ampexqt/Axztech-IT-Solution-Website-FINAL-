import React from 'react';
import styles from './WhyChooseUs.module.css';
import teamImg from '../../../../assets/images/whyChooseUs.png'; // Updated image name
import { FaCheck } from 'react-icons/fa';

function WhyChooseUs() {
  return (
    <section className={styles.whySection}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>Why Choose Us</h2>
          <ul className={styles.list}>
            <li><FaCheck className={styles.icon} />Dedicated team of certified IT professionals</li>
            <li><FaCheck className={styles.icon} />Customized solutions tailored to your specific needs</li>
            <li><FaCheck className={styles.icon} />Ongoing support and maintenance services</li>
            <li><FaCheck className={styles.icon} />Commitment to using the latest technologies</li>
            <li><FaCheck className={styles.icon} />Proven track record of successful implementations</li>
          </ul>
        </div>
        <div className={styles.right}>
          <img src={teamImg} alt="Team working together" className={styles.image} />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
