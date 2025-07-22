import React from 'react';
import styles from './footer.module.css';
import logo from '../../assets/images/axztech-logo.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Logo and Description */}
        <div className={styles.footerSection}>
          <div className={styles.logoRow}>
            <img src={logo} alt="Axztech IT Solutions" className={styles.logo} />
            <span className={styles.companyName}>Axztech IT Solutions</span>
          </div>
          <p className={styles.description}>
            Providing innovative IT solutions for businesses of all sizes.
          </p>
        </div>
        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Quick Links</h4>
          <ul className={styles.linksList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Contact Info</h4>
          <ul className={styles.contactList}>
            <li><FiPhone className={styles.icon} /> 0935 391 9496</li>
            <li><FiMail className={styles.icon} /> rioaldi.dompol@gmail.com</li>
            <li><FiMapPin className={styles.icon} /> Zone 5, Dicklum,<br />Manolo Fortich, Philippines</li>
          </ul>
        </div>
        {/* Social Links */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Connect With Us</h4>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <hr className={styles.divider} />
        <p className={styles.copyright}>
          © 2025 Axztech IT Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
