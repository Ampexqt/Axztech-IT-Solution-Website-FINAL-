import React, { useState } from 'react';
import styles from './header.module.css';
import logo from '../../../assets/images/axztech-logo.png';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <img src={logo} alt="Axztech IT Solutions" className={styles.logo} />
          <span className={styles.logoText}>Axztech IT Solutions</span>
        </div>

        {/* Desktop Navigation */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/" className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`} onClick={handleNavClick}>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/about" className={`${styles.navLink} ${location.pathname === '/about' ? styles.active : ''}`} onClick={handleNavClick}>About Us</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/products" className={`${styles.navLink} ${location.pathname === '/products' ? styles.active : ''}`} onClick={handleNavClick}>Products</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contact" className={`${styles.navLink} ${location.pathname === '/contact' ? styles.active : ''}`} onClick={handleNavClick}>Contact Us</Link>
            </li>
          </ul>
          <button className={styles.ctaButton}>Get Started</button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;