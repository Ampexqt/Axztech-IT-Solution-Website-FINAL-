import React from 'react';
import styles from './Hero.module.css';
import logo from '../../../../assets/images/axztech-logo.png';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.heroContent}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          Innovative IT<br />
          Solutions for Your<br />
          Business
        </h1>
        <p className={styles.subtitle}>
          Empowering businesses with cutting-edge technology<br />
          and expert IT services.
        </p>
        <div className={styles.buttons}>
          <Link to="/products" className={styles.primaryBtn}>
            Explore Our Products
          </Link>
          <Link to="/contact" className={styles.secondaryBtn}>
            Contact Us <FaArrowRight className={styles.arrowIcon} />
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <img src={logo} alt="Axztech IT Solutions Logo" className={styles.logo} />
      </div>
    </div>
  </section>
);

export default Hero; 