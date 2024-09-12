// app/page.tsx
import React from 'react';
import Link from 'next/link';
import styles from './HomePage.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Your Path to Success Begins Here</h1>
        <p>Explore internships and boost your career with top opportunities.</p>
      </header>

      <div className={styles.ctaSection}>
        <Link href="/internships">
          <button className={styles.ctaButton}>Explore Internships</button>
        </Link>
        <Link href="/payment-gateway">
          <button className={styles.ctaButtonSecondary}>Proceed to Payment</button>
        </Link>
      </div>

      <section className={styles.features}>
        <div className={styles.featureItem}>
          <h2>Internship Opportunities</h2>
          <p>Browse and apply for internships with leading companies in various fields.</p>
        </div>
        <div className={styles.featureItem}>
          <h2>Secure Payments</h2>
          <p>Make easy and secure payments to lock your spot in our internship programs.</p>
        </div>
        <div className={styles.featureItem}>
          <h2>FAQ & Support</h2>
          <p>Need help? Visit our FAQ section for quick assistance and support.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
