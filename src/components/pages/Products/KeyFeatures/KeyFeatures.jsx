import React from 'react';
console.log('KeyFeatures component is rendering!');
import styles from './KeyFeatures.module.css';
import { FaShieldAlt, FaCloud, FaServer } from 'react-icons/fa';
import { MdBackup, MdOutlineSecurity } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';

const features = [
  {
    icon: <FaShieldAlt className={styles.icon} />,
    title: 'Advanced Firewall Protection',
    desc: 'Multi-layered firewall system that protects against unauthorized access and cyber threats.',
  },
  {
    icon: <MdBackup className={styles.icon} />,
    title: 'Automated Backups',
    desc: 'Regular automated backups to ensure your data is always safe and can be quickly restored if needed.',
  },
  {
    icon: <FaServer className={styles.icon} />,
    title: 'Load Balancing',
    desc: 'Intelligent distribution of traffic to optimize server performance and prevent overloads.',
  },
  {
    icon: <FaCloud className={styles.icon} />,
    title: 'Cloud Integration',
    desc: 'Seamless integration with major cloud providers for hybrid cloud deployments.',
  },
  {
    icon: <MdOutlineSecurity className={styles.icon} />,
    title: 'DDoS Protection',
    desc: 'Advanced protection against distributed denial-of-service attacks to keep your services online.',
  },
  {
    icon: <BiTimeFive className={styles.icon} />,
    title: '24/7 Monitoring',
    desc: 'Continuous monitoring of your server infrastructure to identify and address issues before they impact your business.',
  },
];

function KeyFeatures() {
  return (
    <section className={styles.keyFeaturesSection}>
      <h2 className={styles.heading}>Key Features of SSP</h2>
      <p className={styles.subheading}>
        Our Secure Server Platform comes packed with features designed to provide security, reliability, and performance.
      </p>
      <div className={styles.grid}>
        {features.map((feature, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.iconWrapper}>{feature.icon}</div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardDesc}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KeyFeatures;
