'use client'; // This makes the component a Client Component

import React, { useState } from 'react';
import styles from './InternshipsPage.module.css';
import PaymentButton from '../../components/PaymentButton';

const internships = [
  {
    id: 1,
    title: 'Frontend Developer Internship',
    description: 'Learn React and build amazing frontend applications.',
    imageUrl: '/images/frontend.jpeg',
  },
  {
    id: 2,
    title: 'Backend Developer Internship',
    description: 'Work with Node.js, Express, and databases.',
    imageUrl: '/images/backend.png',
  },
  // More internships...
];

const InternshipsPage = () => {
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handlePaymentSuccess = () => {
    setPaymentComplete(true); // Show register buttons after payment success
  };

  return (
    <div className={styles.container}>
      <h1>Available Internships</h1>
      <div className={styles.internshipList}>
        {internships.map((internship) => (
          <div key={internship.id} className={styles.internshipCard}>
            <img src={internship.imageUrl} alt={internship.title} className={styles.image} />
            <h2 className={styles.title}>{internship.title}</h2>
            <p className={styles.description}>{internship.description}</p>
            {paymentComplete && (
              <button className={styles.registerButton}>Register</button>
            )}
          </div>
        ))}
      </div>
      {!paymentComplete && (
        <div className={styles.paymentSection}>
          <h2>Complete your payment to register for internships</h2>
          <PaymentButton onPaymentSuccess={handlePaymentSuccess} />
        </div>
      )}
    </div>
  );
};

export default InternshipsPage;
