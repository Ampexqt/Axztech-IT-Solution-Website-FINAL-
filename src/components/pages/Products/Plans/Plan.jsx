import React, { useState } from 'react';
import styles from './Plan.module.css';

const plans = [
  {
    title: 'Starter (Micro Business)',
    price: '₱1,499',
    period: '/month',
    description: 'Small local businesses or individuals just starting to build their digital presence.',
    features: [
      'Limited Access',
      'Email support',
      'Small local shops trying to go online affordably',
    ],
    button: 'Get Started',
    highlight: false,
    note: null,
  },
  {
    title: 'Growth (Small Business)',
    price: '₱4,999',
    period: '/month',
    description: 'Small businesses looking to expand their online presence and operations.',
    features: [
      'Expanded Features',
      'Access to advanced SSP modules',
      'Ongoing technical support and updates',
      'Growing online sellers and service providers',
    ],
    button: 'Get Started',
    highlight: true,
    note: null,
  },
  {
    title: 'Pro (SME & Enterprise)',
    price: '₱15,000–₱25,000',
    period: '/month',
    description: 'Fully customizable systems with comprehensive tools and support.',
    features: [
      'Full access to all SSP modules and features',
      'Dedicated technical support and system updates',
      'Financial tracking and business analytics dashboard',
      'Enterprises needing custom modules, integrations, and scalability',
    ],
    button: 'Get Started',
    highlight: false,
    note: null,
  },
  {
    title: 'Website Setup & Customization Fee',
    price: '₱50,000',
    period: '/One-time fee',
    description: 'A one-time professional service fee to build, design, and customize your business website and SSP platform.',
    features: [],
    button: 'Get Started',
    highlight: true,
    note: null,
  },
  {
    title: 'Add-on Services',
    price: 'Based on requirements',
    period: '',
    description: 'Custom modules, integrations, marketing support',
    features: [],
    button: 'Get Started',
    highlight: true,
    note: null,
  },
  {
    title: 'HanapShops Store Listing Fees',
    price: '₱799/year for Non-SSP Members',
    period: '',
    description: 'Placement fee +Business profile setup',
    features: [],
    button: 'Get Started',
    highlight: false,
    note: null,
  },
];

function usePlansPerView() {
  const [plansPerView, setPlansPerView] = React.useState(window.innerWidth <= 600 ? 1 : 3);
  React.useEffect(() => {
    const handleResize = () => {
      setPlansPerView(window.innerWidth <= 600 ? 1 : 3);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return plansPerView;
}

function Plan() {
  const plansPerView = usePlansPerView();
  const [startIdx, setStartIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(''); // 'left' or 'right'

  const handlePrev = () => {
    if (animating) return;
    setDirection('left');
    setAnimating(true);
    setTimeout(() => {
      setStartIdx((prev) => (prev - 1 + plans.length) % plans.length);
      setAnimating(false);
    }, 180); // match CSS duration
  };

  const handleNext = () => {
    if (animating) return;
    setDirection('right');
    setAnimating(true);
    setTimeout(() => {
      setStartIdx((prev) => (prev + 1) % plans.length);
      setAnimating(false);
    }, 180); // match CSS duration
  };

  const visiblePlans = [];
  for (let i = 0; i < plansPerView; i++) {
    visiblePlans.push(plans[(startIdx + i) % plans.length]);
  }

  // For mobile, arrows go below subheading, above cards
  return (
    <div className={styles.pricingWrapper}>
      <h2 className={styles.heading}>SSP Pricing Plans</h2>
      <p className={styles.subheading}>Choose the plan that best fits your business needs and budget.</p>
      {plansPerView === 1 && (
        <div className={styles.mobileArrows}>
          <button className={styles.arrowButton} onClick={handlePrev} aria-label="Previous plans">
            <span className={styles.arrowIcon}>&lt;</span>
          </button>
          <button className={styles.arrowButton} onClick={handleNext} aria-label="Next plans">
            <span className={styles.arrowIcon}>&gt;</span>
          </button>
        </div>
      )}
      <div className={styles.carousel}>
        {plansPerView !== 1 && (
          <button className={styles.arrowButton} onClick={handlePrev} aria-label="Previous plans">
            <span className={styles.arrowIcon}>&lt;</span>
          </button>
        )}
        <div
          className={[
            styles.plansContainer,
            animating ? (direction === 'right' ? styles.slideRight : styles.slideLeft) : '',
          ].join(' ')}
        >
          {visiblePlans.map((plan, idx) => (
            <div
              key={plan.title}
              className={[
                styles.planCard,
                idx === Math.floor(plansPerView / 2) ? styles.active : '',
              ].join(' ')}
            >
              <div className={styles.planContent}>
                <h3 className={styles.planTitle}>{plan.title}</h3>
                <div className={styles.planPriceRow}>
                  <span className={styles.planPrice}>{plan.price}</span>
                  {plan.period && <span className={styles.planPeriod}>{plan.period}</span>}
                </div>
                <p className={styles.planDescription}>{plan.description}</p>
                {plan.features.length > 0 && (
                  <ul className={styles.featuresList}>
                    {plan.features.map((feature, i) => (
                      <li key={i} className={styles.featureItem}>
                        <span className={styles.checkmark}>✔</span> {feature}
                      </li>
                    ))}
                  </ul>
                )}
                {plan.note && <div className={styles.planNote}>{plan.note}</div>}
                <button className={styles.ctaButton}>{plan.button}</button>
              </div>
            </div>
          ))}
        </div>
        {plansPerView !== 1 && (
          <button className={styles.arrowButton} onClick={handleNext} aria-label="Next plans">
            <span className={styles.arrowIcon}>&gt;</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Plan;
